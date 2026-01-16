import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

// Load environment variables from .env.local
const envConfig = dotenv.parse(fs.readFileSync('.env.local'))
const supabaseUrl = envConfig.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = envConfig.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function uploadImage() {
  const bucketName = 'blog-images'
  const filePath = 'public/articulos/el-segundo-despertar/cover.png'
  const fileName = 'el-segundo-despertar/cover.png'
  const fileContent = fs.readFileSync(filePath)

  console.log(`Checking if bucket '${bucketName}' exists...`)
  const { data: buckets, error: listError } = await supabase.storage.listBuckets()
  
  if (listError) {
    console.error('Error listing buckets:', listError)
    return
  }

  const bucketExists = buckets.find(b => b.name === bucketName)
  
  if (!bucketExists) {
    console.log(`Creating bucket '${bucketName}'...`)
    const { data: bucket, error: createError } = await supabase.storage.createBucket(bucketName, {
      public: true
    })
    if (createError) {
      console.error('Error creating bucket:', createError)
      return
    }
  }

  console.log(`Uploading ${fileName} to ${bucketName}...`)
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(bucketName)
    .upload(fileName, fileContent, {
      contentType: 'image/png',
      upsert: true
    })

  if (uploadError) {
    console.error('Error uploading image:', uploadError)
    return
  }

  const { data: { publicUrl } } = supabase.storage
    .from(bucketName)
    .getPublicUrl(fileName)

  console.log(`Image uploaded successfully. Public URL: ${publicUrl}`)

  console.log('Updating article record in database...')
  const { error: updateError } = await supabase
    .from('posts')
    .update({ image_url: publicUrl })
    .eq('slug', 'el-segundo-despertar')

  if (updateError) {
    console.error('Error updating database:', updateError)
  } else {
    console.log('Database updated successfully.')
  }
}

uploadImage()
