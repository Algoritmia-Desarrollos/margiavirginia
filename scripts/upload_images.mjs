import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load env vars
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
    console.error('Missing Supabase URL or Service Role Key');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

async function uploadImage(filePath, bucketPath) {
    try {
        const fileContent = fs.readFileSync(filePath);
        const { data, error } = await supabase.storage
            .from('blog-images')
            .upload(bucketPath, fileContent, {
                contentType: 'image/png', // Adjust based on extension if needed, but png/jpeg usually fine
                upsert: true
            });

        if (error) throw error;

        const { data: { publicUrl } } = supabase.storage
            .from('blog-images')
            .getPublicUrl(bucketPath);

        return publicUrl;
    } catch (error) {
        console.error(`Error uploading ${bucketPath}:`, error.message);
        return null;
    }
}

async function processDirectory(dirName) {
    const dirPath = path.join(projectRoot, 'public', dirName);
    if (!fs.existsSync(dirPath)) return;

    const slugs = fs.readdirSync(dirPath);

    for (const slug of slugs) {
        const slugPath = path.join(dirPath, slug);
        if (!fs.lstatSync(slugPath).isDirectory()) continue;

        const files = fs.readdirSync(slugPath);
        for (const file of files) {
            if (file.match(/\.(png|jpg|jpeg|webp)$/i)) {
                console.log(`Processing ${slug}/${file}...`);
                const localPath = path.join(slugPath, file);
                const bucketPath = `${dirName}/${slug}/${file}`;
                
                const publicUrl = await uploadImage(localPath, bucketPath);
                
                if (publicUrl) {
                    console.log(`Uploaded: ${publicUrl}`);
                    
                    // Update Database
                    // 1. Update main image if it matches
                    await supabase
                        .from('posts')
                        .update({ image_url: publicUrl })
                        .eq('slug', slug)
                        .ilike('image_url', `%${file}%`);

                    // 2. Update content
                    const { data: post } = await supabase
                        .from('posts')
                        .select('content')
                        .eq('slug', slug)
                        .single();

                    if (post && post.content) {
                        // Replace local path with public URL
                        // Local path pattern: /dirName/slug/file
                        const localUrlPattern = `/${dirName}/${slug}/${file}`;
                        if (post.content.includes(localUrlPattern)) {
                            const newContent = post.content.replaceAll(localUrlPattern, publicUrl);
                            await supabase
                                .from('posts')
                                .update({ content: newContent })
                                .eq('slug', slug);
                            console.log(`Updated content for ${slug}`);
                        }
                    }
                }
            }
        }
    }
}

async function main() {
    console.log('Starting image migration...');
    await processDirectory('articulos');
    await processDirectory('recetas');
    console.log('Migration complete!');
}

main();
