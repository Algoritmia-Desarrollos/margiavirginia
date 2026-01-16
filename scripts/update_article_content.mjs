import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
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

const newContent = `
<div class="post-content">
    <p class="intro">Bienvenida a tu Segundo Despertar. Una etapa donde el fuego de la juventud se transforma en la luz de la sabiduría.</p>
    
    <p>La medicina moderna lo llama declive hormonal; nosotros lo llamamos el momento en que tu energía deja de volcarse solo hacia afuera para empezar a nutrir tu sabiduría interna. Es una invitación a escuchar el lenguaje de tu cuerpo y responder con amor y respeto.</p>

    <div class="divider"></div>

    <h2>¿Qué está pasando en tu Alquimia interna?</h2>
    <p>En esta transición, el dosha Vata empieza a predominar. Si no lo equilibramos, aparecen los síntomas clásicos que quizás estés experimentando:</p>
    <ul class="clean-list">
        <li><strong>• Calores (Sofocos):</strong> Es el fuego de Pitta intentando salir.</li>
        <li><strong>• Ansiedad o miedos:</strong> Sentimientos de "desarraigo" que antes no estaban.</li>
        <li><strong>• Insomnio:</strong> La mente se vuelve volátil y el aire impide el descanso profundo.</li>
        <li><strong>• Sequedad:</strong> No solo en la piel, sino también en las articulaciones y las mucosas.</li>
    </ul>

    <h2>¿Qué es lo que necesita nuestro cuerpo?</h2>
    <p>Para equilibrar ese exceso de aire, sequedad y calor necesitamos Calmar, Enraizar y Nutrir.</p>
    
    <h3>Grasas Inteligentes</h3>
    <p>El Ghee y el Aceite de Sésamo son fundamentales. El Ayurveda dice: "Donde hay sequedad, debe haber aceite".</p>

    <h3>Alimentos de Enraizamiento</h3>
    <p>Volvemos a las raíces (batata, zanahoria, remolacha) a los cereales calientes. Alimentos que enfrían hojas verdes, pepino.</p>
    <p><em>Evita alimentos picantes, café, alcohol, alimentos crudos o helados, que aumentan el frío y la sequedad.</em></p>

    <h3>Descanso Sagrado</h3>
    <p>El descanso ya no es un lujo, es una necesidad biológica. Crear un ritual de sueño donde el mundo exterior se apague temprano es vital para que las glándulas suprarrenales no se agoten.</p>

    <div class="divider"></div>

    <h2>Tus Aliadas Ancestrales</h2>
    <ul class="clean-list">
        <li><strong>• Shatavari (La Reina de las Raíces):</strong> La planta por excelencia para la mujer. Ayuda a hidratar los tejidos y calmar el sistema nervioso.</li>
        <li><strong>• La Salvia:</strong> Actúa como un freno natural para el calor excesivo y la transpiración nocturna, aportando además claridad mental. (Infusión: 3-4 hojas por la tarde).</li>
        <li><strong>• Hoja de Ortiga (Remineralización):</strong> Extraordinaria para fortalecer huesos y cabello. Ayuda a reducir la retención de líquidos y purifica la sangre. (Dejar reposar 15-20 min).</li>
    </ul>

    <h2>Nutrición de Sabiduría: Alquimia en tu plato</h2>
    <p>Prioriza alimentos cocidos, untuosos y calientes:</p>

    <h3>1. Proteínas y Estructura</h3>
    <p><strong>Huevos:</strong> La "proteína perfecta" para mantener la masa muscular y la salud cerebral. Consumirlos preferentemente poché o con Ghee.</p>
    <p><strong>Pescado:</strong> Es uno de los mejores aliados de la mujer en esta etapa. “Incluir pescado de 3 a 4 veces por semana es como darle un baño de hidratación a tus células. Elige pescados azules pequeños para nutrir tu cerebro y pescados blancos para mantener tus músculos fuertes sin sobrecargar tu digestión."</p>
    <p><strong>Tofu:</strong> Aliado de los fitoestrógenos para reducir sofocos. <em>Tip Pro: ¡Cocínalo siempre! con jengibre o comino para que no genere pesadez.</em></p>

    <h3>2. Vegetales y Frutas</h3>
    <ul class="clean-list">
        <li><strong>• Palta y Espárragos:</strong> Nutren tus hormonas.</li>
        <li><strong>• Espinaca:</strong> ¡Siempre cocida! para que tus huesos absorban su calcio.</li>
        <li><strong>• Pepino:</strong> El "Hidratante Enfriador", excelente para calmar sofocos, consúmelo a temperatura ambiente.</li>
        <li><strong>• Hojas Verdes Crudas:</strong> Consumirlas crudas solo al mediodía, cuando tu fuego digestivo (Agni) está en su punto máximo.</li>
    </ul>
    
    <div class="tip-box">
        <div class="tip-header">✨ Tip (Sustituto de la ensalada)</div>
        <p>Si las hojas verdes crudas en ensalada te inflaman, la mejor forma de obtener su beneficio enfriador es triturándolas.</p>
        <p><strong>✨🙌🏻✨ Receta rápida:</strong> Un puñado de espinacas, 1/2 pepino, un trozo de manzana verde y un poco de agua de coco. Al estar triturado, la fibra ya está rota y tu cuerpo absorbe los minerales sin esfuerzo.</p>
    </div>

    <ul class="clean-list">
        <li><strong>• Uvas negras y dulces:</strong> Nutren la sangre y refrescan.</li>
        <li><strong>• Peras y manzanas:</strong> (siempre asadas o al vapor), uvas oscuras, higos y granada.</li>
    </ul>

    <h3>3. Semillas (Vitalidad Ósea)</h3>
    <ul class="clean-list">
        <li><strong>• Sésamo:</strong> Tu fuente número uno de calcio.</li>
        <li><strong>• Calabaza, Chía y Lino:</strong> Para el magnesio y el Omega-3. (Recuerda remojarlas antes para activar su energía).</li>
    </ul>

    <div class="divider"></div>

    <h2>Rituales de Paz</h2>
    <h3>Tisana "Calma Profunda"</h3>
    <p>Para esos días de cambios anímicos, mezcla:</p>
    <ul class="clean-list">
        <li>• Manzanilla (suaviza la irritabilidad)</li>
        <li>• Pasiflora (frena el ruido mental)</li>
        <li>• Valeriana (enraíza y da descanso)</li>
    </ul>
    <p><em>Tip: Infusiona siempre tapado y añade una pizca de cardamomo para una digestión perfecta.</em></p>

    <h2>Moverse para Florecer</h2>
    <p>En esta etapa, el ejercicio es medicina preventiva. El entrenamiento de Fuerza (pesas o bandas) no es negociable: la presión del músculo sobre el hueso es lo que protege tu calcio.</p>
    <p>Realiza movimientos lentos y conscientes para no disparar el cortisol.</p>
    <p>Complementa con caminatas ligeras al aire libre para nutrir tu Ojas (vitalidad) y Yoga para tu equilibrio.</p>

    <div class="intro" style="margin-top: 2rem; border-left: 2px solid var(--accent-gold); padding-left: 1.5rem;">
        "Nutre tu cuerpo con respeto, mueve tu energía con amor y permite que tu sabiduría interna sea la brújula de tu salud. Eres Naturaleza Esencial en su máxima expresión."
    </div>
</div>
`;

async function updateArticle() {
  console.log('Updating article content and image path...')
  const { error } = await supabase
    .from('posts')
    .update({ 
        content: newContent,
        image_url: '/articulos/el-segundo-despertar/cover.png'
    })
    .eq('slug', 'el-segundo-despertar')

  if (error) {
    console.error('Error updating article:', error)
  } else {
    console.log('Article updated successfully.')
  }
}

updateArticle()
