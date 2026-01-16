
-- Drop table if exists to ensure clean schema
DROP TABLE IF EXISTS posts;

-- Create posts table
CREATE TABLE posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT,
    description TEXT,
    content TEXT,
    date DATE,
    type TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert data
INSERT INTO posts (title, slug, category, description, content, date, type, image_url) VALUES
(
    'Del Estado de Alerta al Equilibrio',
    'del-estado-de-alerta-al-equilibrio',
    'Ayurveda & Bienestar',
    'El cortisol alto no es tu enemigo, es tu cuerpo intentando protegerte. Descubre cómo devolverle la calma con Ayurveda.',
    '
            <header class="post-header">
                <span class="hero-tag">Ayurveda & Bienestar</span>
                <h1>Del Estado de Alerta al Equilibrio</h1>
                <p class="subtitle" style="text-align: center; font-style: italic; margin-top: 1rem;">
                    "La suavidad es la medicina para el cortisol."
                </p>
            </header>

            <div class="featured-image">
                <img src="/articulos/del-estado-de-alerta-al-equilibrio/cover.png" alt="Equilibrio y Ayurveda">
            </div>

            <div class="post-content">
                
                <p class="intro">
                    Desde la mirada del Ayurveda, un cortisol alto es el reflejo de un exceso de Vata que se ha desbordado, afectando a Pitta. Es un estado de "alerta permanente" donde el sistema nervioso ha olvidado cómo regresar a su centro.
                </p>

                <div class="quote-text">
                    "El cortisol alto no es tu enemigo, es tu cuerpo intentando protegerte de un mundo que no para. En Ayurveda, le devolvemos al cuerpo su seguridad a través del calor, el aceite y el silencio. Cuando el cuerpo se siente nutrido, el estrés se disuelve."
                </div>

                <p style="margin-top: 2rem;">
                    "No intentes ''luchar'' contra el estrés, porque eso genera más cortisol”. Un baño tibio, una comida caliente, una respiración profunda. La suavidad es la medicina para el cortisol."
                </p>
                <p>
                    El cortisol tiene un ritmo natural (alto por la mañana, bajo por la noche). Si trasnochas, fuerzas al cuerpo a producirlo cuando debería estar descansando. Vivimos en un mundo que nos entrena para el estado de alerta constante. Pero tu cuerpo recuerda el camino de regreso.
                </p>
                <p>
                    Hoy te invito a transitar el puente del estado de alerta a tu naturaleza esencial a través de la alquimia de las hierbas, alimentos y el descanso consciente.
                </p>

                <div class="divider" style="margin: 3rem auto;"></div>

                <section class="step-section">
                    <h3 class="subsection-title">1. Para frenar el "ruido mental" (Bajar el Cortisol)</h3>
                    <ul class="ingredient-list">
                        <li class="ingredient-item">
                            <span><strong>Lavanda y Manzanilla:</strong> Esta combinación es un sedante suave para el sistema nervioso. Ideal para tomarla a partir de las 18:00 hs para empezar el descenso.</span>
                        </li>
                        <li class="ingredient-item no-border">
                            <span><strong>Ashwagandha (Infusión o Polvo):</strong> Es el adaptógeno por excelencia. Ayuda al cuerpo a gestionar el estrés y le dice a tus suprarrenales que pueden descansar.</span>
                        </li>
                    </ul>
                </section>

                <section class="step-section">
                    <h3 class="subsection-title">2. Para el "estómago apretado" (Nervios en el estómago)</h3>
                    <ul class="ingredient-list">
                        <li class="ingredient-item">
                            <span><strong>Melisa (Toronjil):</strong> Es maravillosa para calmar las palpitaciones y la tensión abdominal causada por ansiedad. "Relaja el corazón y el estómago".</span>
                        </li>
                        <li class="ingredient-item no-border">
                            <span><strong>Semillas de Hinojo:</strong> Ayudan a que la energía circule (Vata) y no se bloquee en forma de inflamación o tensión.</span>
                        </li>
                    </ul>
                </section>

                <section class="step-section">
                    <h3 class="subsection-title">3. Para recuperar el "enfoque" sin alterar los nervios</h3>
                    <ul class="ingredient-list">
                        <li class="ingredient-item">
                            <span><strong>Tulsi (Albahaca Sagrada):</strong> En India se la llama "la reina de las hierbas". Ayuda a la claridad mental y reduce la fatiga suprarrenal sin el "pico" de energía del café.</span>
                        </li>
                        <li class="ingredient-item no-border">
                            <span><strong>Té de Rosas:</strong> Refresca el corazón y calma las emociones intensas (Pitta). Es pura suavidad para tu naturaleza esencial.</span>
                        </li>
                    </ul>
                </section>

                <section class="step-section">
                    <h3 class="subsection-title">4. La Infusión de "Enraizamiento" (Para días de mucha dispersión)</h3>
                    <p>
                        <strong>Canela, Clavo y un toque de Cardamomo:</strong> Son especias dulces y cálidas. Ayudan a que el cuerpo se sienta "pesado" y presente.
                    </p>
                    <div class="tip-box">
                        <p>
                            "Cuando prepares tu té, no solo calientes agua. Al poner la hierba, pon tu intención. Di para ti misma: ''A través de esta medicina, regreso de la alerta a mi naturaleza esencial''. Bebe con ambas manos rodeando la taza, sintiendo el calor. Ese contacto térmico empieza a bajar el cortisol."
                        </p>
                    </div>
                </section>

                <section class="step-section">
                    <h3 class="subsection-title">Rutinas de Apoyo</h3>
                    <p><strong>5. Higiene Sensorial:</strong> Al bajar los estímulos (ruido, luces, café), permites que tu ritmo circadiano se resetee.</p>
                    <p><strong>6. El Silencio del Sistema Nervioso:</strong> Realiza 5 minutos de Nadi Shodhana (respiración alternada) antes de comer, esto le indica al cerebro que estás a salvo y lista para digerir.</p>
                    <p><strong>7. Infusión Nocturna:</strong> Manzanilla tibia con una pizca de canela.</p>
                </section>

                <div class="divider" style="margin: 3rem auto;"></div>

                <h2 style="text-align: center; font-family: var(--font-serif); margin-bottom: 2rem;">LOS ALIADOS QUE DEVUELVEN EL EQUILIBRIO A TU SISTEMA NERVIOSO</h2>
                <p>
                    Para nutrir las glándulas suprarrenales y ayudarlas a recuperarse del desgaste del cortisol, necesitamos alimentos que el Ayurveda clasifica como Sáttvicos (puros y equilibradores) y con mucha energía de Tierra.
                </p>

                <section class="step-section">
                    <h3 class="subsection-title">Nutrición para Suprarrenales - Naturaleza Esencial</h3>
                    
                    <h4 style="font-family: var(--font-serif); margin-top: 1.5rem;">1. Grasas Saludables (Materia Prima Hormonal)</h4>
                    <ul class="clean-list">
                        <li>• <strong>Ghee:</strong> El "oro líquido" para lubricar el sistema nervioso.</li>
                        <li>• <strong>Palta (Aguacate):</strong> Potasio y grasas para estabilizar la presión.</li>
                        <li>• <strong>Nueces:</strong> Omega-3 para el eje cerebro-estrés.</li>
                        <li>• <strong>Aceite de Coco:</strong> Energía estable para las células.</li>
                        <li>• <strong>Aceite de Oliva Extra Virgen:</strong> Antiinflamatorio potente.</li>
                    </ul>

                    <h4 style="font-family: var(--font-serif); margin-top: 1.5rem;">2. Minerales Clave (Combustible Glandular)</h4>
                    <ul class="clean-list">
                        <li>• <strong>Magnesio:</strong> (Semillas de Girasol, Calabaza, Espinaca cocida, Cacao amargo 80%+).</li>
                        <li>• <strong>Zinc:</strong> (Semillas de Calabaza, Garbanzos, Arvejas).</li>
                        <li>• <strong>Vitamina C:</strong> (Pimientos rojos, Limón, Kiwi, Frutos rojos).</li>
                        <li>• <strong>Sal Marina o del Himalaya:</strong> Minerales traza para el equilibrio hídrico.</li>
                    </ul>

                    <h4 style="font-family: var(--font-serif); margin-top: 1.5rem;">3. Alimentos de Enraizamiento (Tierra)</h4>
                    <ul class="clean-list">
                        <li>• <strong>Batata (Camote) y Calabaza:</strong> Calman el sistema nervioso con su dulzor natural.</li>
                        <li>• <strong>Remolacha:</strong> Limpieza de la sangre y nutrición profunda.</li>
                        <li>• <strong>Quinoa o Arroz Integral:</strong> Energía de liberación lenta.</li>
                    </ul>

                    <div class="tip-box light-bg" style="margin-top: 2rem;">
                        <strong>Tip de Alquimia:</strong> Combina siempre una grasa saludable con una raíz para un efecto máximo de calma.
                    </div>
                </section>

                <section class="step-section" style="margin-top: 3rem;">
                    <h3 class="subsection-title">RECORDATORIO</h3>
                    <ul class="clean-list">
                        <li>- Comer grasas saludables, evitas los picos de azúcar que disparan el cortisol.</li>
                        <li>- Priorizar alimentos cocidos y tibios, el cuerpo no gasta energía extra, permitiendo que esa energía se use para reparar tejidos.</li>
                        <li>- Bajar los estímulos (ruido, luces, café), permites que tu ritmo circadiano se resetee.</li>
                    </ul>
                </section>

                <div class="outro-box" style="background-color: #f9f5f0; padding: 2rem; border-radius: 8px; text-align: center; margin-top: 3rem;">
                    <h3 style="font-family: var(--font-serif); margin-bottom: 1rem;">El Regreso a tu Naturaleza Esencial</h3>
                    <p style="font-style: italic; margin-bottom: 1rem;">
                        "Mi calma no es un destino, es mi estado original."
                    </p>
                    <p>
                        • Cuando el cortisol suba, Respiro, busco el calor de una infusión y vuelvo a mis rituales de tierra.<br>
                        • Cuando me sienta dispersa: Confío en la nutrición de mis semillas y el abrazo del aceite tibio.
                    </p>
                    <p style="font-weight: 600; margin-top: 1rem;">
                        Cierro los ojos, inhalo presencia, exhalo alerta. Estoy a salvo en mi Naturaleza Esencial.
                    </p>
                </div>

                <div class="cta-container">
                    <a href="https://wa.me/5493413246408" target="_blank" class="btn-reserva">RESERVAR CONSULTORÍA</a>
                </div>

            </div>
        ',
    '2025-01-15',
    'article',
    '/articulos/del-estado-de-alerta-al-equilibrio/cover.png'
),
(
    'Rutina de 5 pasos “Comienza tu día a pleno”',
    'rutina-5-pasos',
    'Ayurveda & Bienestar',
    'Para equilibrar tu sistema nervioso, nutrir tu Agni y vivir con Naturaleza Serena.',
    '
            <header class="post-header">
                <span class="hero-tag">Ayurveda & Bienestar</span>
                <h1>Rutina de 5 pasos “Comienza tu día a pleno”</h1>
                <p class="subtitle" style="text-align: center; font-style: italic; margin-top: 1rem;">
                    "Por qué tu digestión es la clave para manifestar tus sueños: La ciencia del Agni."
                </p>
            </header>

            <div class="featured-image">
                <img src="/articulos/rutina-5-pasos/cover.png" alt="Rutina de mañana serena">
            </div>

            <div class="post-content">
                
                <p class="intro">
                    Para equilibrar tu sistema nervioso, nutrir tu Agni y vivir con Naturaleza Serena. Mi rutina de 5 pasos, para resetear tu sistema.
                </p>

                <div class="divider" style="margin: 3rem auto;"></div>

                <section class="step-section">
                    <h3 style="font-family: var(--font-serif); color: var(--primary-color);">1. Higiene Y CENTRAMIENTO</h3>
                    <h4 style="font-style: italic; margin-bottom: 1rem;">El Despertar de la Claridad</h4>
                    <p><strong>"Restaura el equilibrio de tu Vida integrando Rutina y Conciencia."</strong></p>
                    <p>
                        Comienza tu día limpiando no sólo tu cuerpo, sino tus sentidos.
                        Realiza una higiene de tu boca y refresca tu rostro con agua fresca para enviar una señal de presencia a tu sistema nervioso.
                    </p>
                    <p>
                        Inmediatamente después, dedica al menos 5 minutos a la respiración consciente o meditación. Siéntate en silencio, habita tu cuerpo y observa. Este pequeño espacio de quietud es el que te permite comenzar el día a pleno, centrado y siendo la dueña de tu propia energía antes de entregarla al mundo exterior.
                    </p>
                </section>

                <section class="step-section" style="margin-top: 3rem;">
                    <h3 style="font-family: var(--font-serif); color: var(--primary-color);">2. Hidratación Sagrada (Agua tibia)</h3>
                    <p><strong>"La verdadera manifestación requiere energía estable y esa energía nace en tu Fuego Digestivo (Agni)."</strong></p>
                    <p>
                        Bebe un vaso de agua tibia (puedes sumar una rodaja de jengibre si te sientes pesada). Esto "despierta" suavemente tu Agni y ayuda a la eliminación, preparando el terreno para una digestión eficiente durante el día.
                    </p>
                </section>

                <section class="step-section" style="margin-top: 3rem;">
                    <h3 style="font-family: var(--font-serif); color: var(--primary-color);">3. Movimiento con Prana (Pausa Consciente)</h3>
                    <p><strong>"La solución no es más esfuerzo, es una rutina que le dé al cuerpo la energía para sostener tu propósito de vida."</strong></p>
                    <p>
                        No necesitas un entrenamiento agotador. Haz 5 minutos de estiramientos suaves o una caminata consciente. El objetivo es movilizar el Prana (energía vital) por todos tus canales (Srotas) para evitar el estancamiento mental.
                    </p>
                </section>

                <section class="step-section" style="margin-top: 3rem;">
                    <h3 style="font-family: var(--font-serif); color: var(--primary-color);">4. Alimentación de Naturaleza</h3>
                    <p><strong>"El pensamiento positivo no es suficiente. Si tu Agni está débil, la manifestación simplemente no va a funcionar."</strong></p>
                    <h4 style="font-style: italic; margin-bottom: 1rem;">Tu desayuno consciente.</h4>
                    <p>
                        Asegúrate de que tu primera comida sea cálida y fácil de procesar, con las especias adecuadas según tu Dosha, permite que tu energía se use para crear y manifestar.
                    </p>
                </section>

                <section class="step-section" style="margin-top: 3rem;">
                    <h3 style="font-family: var(--font-serif); color: var(--primary-color);">5. Silencio Interno (Meditación y Gratitud)</h3>
                    <p><strong>"Tu sistema nervioso necesita calma para dejar de vivir en alerta."</strong></p>
                    <h4 style="font-style: italic; margin-bottom: 1rem;">Sintonizando la Manifestación.</h4>
                    <p>
                        (Esos minutos finales para enfocar tu intención). Regálate un momento para estar contigo. Puede ser un automasaje con aceite tibio en tus pies o 5 minutos de respiración consciente. Esto calma el sistema nervioso y sintoniza tu vibración con tus deseos más profundos.
                    </p>
                    <p>
                        Un minuto para visualizar tu propósito del día y sellar la rutina con gratitud plena.
                    </p>
                </section>

                <div class="divider" style="margin: 3rem auto;"></div>

                <div class="outro-box" style="background-color: #f9f5f0; padding: 2rem; border-radius: 8px; text-align: center;">
                    <p style="font-style: italic; margin-bottom: 1rem;">
                        "Integrar estos pasos no es sumar tareas a tu lista, es reclamar tu energía. Cuando tu cuerpo está en equilibrio, tu mente se aclara y la manifestación se vuelve tu estado natural."
                    </p>
                    <p>
                        "Transforma tu energía, manifiesta tu propósito. Aquí aprendes la Alquimia de nutrir tu cuerpo para liberar el poder de tu mente. Bienvenida a tu camino hacia una Naturaleza Serena."
                    </p>
                </div>

                <div style="text-align: center; margin-top: 50px;">
                    <a href="https://wa.me/5493413246408" target="_blank" class="btn-reserva">RESERVAR CONSULTORÍA</a>
                </div>

            </div>
        ',
    '2025-01-14',
    'article',
    '/articulos/rutina-5-pasos/cover.png'
),
(
    'El Arte de Nutrir tu Mente',
    'nutrir-tu-mente',
    'Nutrición',
    'Descubre los alimentos que aportan Prana y Ojas para tener claridad mental y paz interior.',
    '
            <header class="post-header">
                <span class="hero-tag">Ayurveda & Bienestar</span>
                <h1>El Arte de Nutrir tu Mente</h1>
            </header>

            <div class="featured-image">
                <img src="/articulos/nutrir-tu-mente/1.jpeg" alt="Ingredientes naturales para la mente">
            </div>

            <div class="post-content">
                <p class="intro">
                    ¿Sabías que tu cerebro consume el 20% de la energía de tu cuerpo? Nutrirlo no es solo una cuestión de calorías, es un ritual de claridad y bienestar.
                </p>

                <p>
                    Desde el Ayurveda, buscamos alimentos que aporten <strong>Prana</strong> (energía vital) y <strong>Ojas</strong> (vitalidad profunda). No se trata solo de comer, sino de elegir aliados conscientes.
                </p>

                <section class="ingredients-section">
                    <h3>Los Imprescindibles</h3>
                    
                    <div class="food-grid">
                        <div class="food-item">
                            <span class="food-name">Ghee (Oro Líquido)</span>
                            <span class="food-desc">El mejor conductor para nutrir el tejido nervioso y potenciar la memoria profunda.</span>
                        </div>
                        
                        <div class="food-item">
                            <span class="food-name">Nueces y Almendras</span>
                            <span class="food-desc">Grasas inteligentes. <em>Tip:</em> remójalas siempre para activar su vida y facilitar la digestión.</span>
                        </div>

                        <div class="food-item">
                            <span class="food-name">Cereales Integrales</span>
                            <span class="food-desc">Aportan energía estable y anclaje (Tierra) para una mente serena y enfocada.</span>
                        </div>

                        <div class="food-item">
                            <span class="food-name">Hortalizas de Estación</span>
                            <span class="food-desc">Nutrientes de la raíz que aportan estructura, fibra y equilibrio a tu sistema.</span>
                        </div>

                        <div class="food-item">
                            <span class="food-name">Frutos del Bosque</span>
                            <span class="food-desc">Bombas de antioxidantes puros que defienden tu cerebro del estrés oxidativo diario.</span>
                        </div>

                        <div class="food-item">
                            <span class="food-name">Semillas (Calabaza/Sésamo)</span>
                            <span class="food-desc">Minerales esenciales como Zinc y Magnesio para el anclaje y la calma mental.</span>
                        </div>
                        
                         <div class="food-item">
                            <span class="food-name">Pescado y Huevos</span>
                            <span class="food-desc">Proteína de alta calidad fundamental para la regeneración y plasticidad neuronal.</span>
                        </div>

                        <div class="food-item">
                            <span class="food-name">Especias Sagradas</span>
                            <span class="food-desc"><strong>Cúrcuma</strong> para desinflamar y <strong>Azafrán</strong> para iluminar tus pensamientos (Sattva).</span>
                        </div>
                    </div>
                </section>

                <div class="tip-box">
                    <div class="tip-header">
                        💡 El consejo de Ma. Virginia
                    </div>
                    <p>
                        Para una digestión óptima y evitar picos de glucosa, intenta siempre consumir tus frutas acompañadas de nueces o semillas. Esta combinación protege tu energía y mantiene tu claridad mental por más tiempo.
                    </p>
                </div>

                <div style="text-align: center; margin-top: 80px;">
                    <p style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 30px; font-style: italic;">
                        "Cada cuerpo es un universo único. Adaptemos estos nutrientes a tu constitución."
                    </p>
                    <a href="https://wa.me/5493413246408" target="_blank" class="btn-reserva">RESERVAR CONSULTORÍA</a>
                </div>

            </div>
        ',
    '2024-12-10',
    'article',
    '/articulos/nutrir-tu-mente/1.jpeg'
),
(
    'Guía de Blends Ayurvédicos',
    'guia-blends-ayurvedicos',
    'Ayurveda',
    'El arte de la alquimia emocional: elige tus hierbas para nutrir el alma y equilibrar tus emociones.',
    '
            <header class="post-header">
                <span class="hero-tag">Ayurveda & Bienestar</span>
                <h1>Guía de Blends Ayurvédicos para nutrir el Alma</h1>
            </header>

            <div class="featured-image">
                <img src="/articulos/guia-blends-ayurvedicos/blends.png" alt="Blends Ayurvédicos y Mate">
            </div>

            <div class="post-content">
                <h2 style="text-align: center; margin-bottom: 2rem; font-family: var(--font-serif);">EL ARTE DE LA ALQUIMIA EMOCIONAL</h2>
                
                <p class="intro">
                    Te invito a elegir las hierbas para tu mate o infusiones no solo por su aroma, sino por la huella emocional que deseas crear.
                    Cuando elegimos una hierba, no solo estamos eligiendo un aroma, estamos seleccionando la “frecuencia” en la que queremos vibrar.
                </p>

                <p>
                    En esta guía aprenderás que el “equilibrio” no es solo un destino sino un diseño diario que se construye taza a taza, sorbo a sorbo.
                    Escucha tu emoción, reconoce tu necesidad y permite que la naturaleza haga el resto.
                </p>

                <section class="ingredients-section">
                    <h3>1. Para la Claridad y el Enfoque</h3>
                    <p><em>Si sientes pesadez mental o falta de dirección:</em></p>
                    <div class="food-grid">
                        <div class="food-item">
                            <span class="food-name">Jengibre o Clavo</span>
                            <span class="food-desc">Aportan el sabor Picante. Encienden el entusiasmo y la voluntad.</span>
                        </div>
                        <div class="food-item">
                            <span class="food-name">Menta o Peperina</span>
                            <span class="food-desc">Despejan los canales de la mente, aportando frescura ante la saturación.</span>
                        </div>
                    </div>
                    <p style="text-align: center; margin-top: 1rem; font-style: italic;">“Mi visión se aclara y mi voluntad se enciende”</p>
                </section>

                <section class="ingredients-section">
                    <h3>2. Para la Calma y el Enraizamiento</h3>
                    <p><em>Si la ansiedad, el miedo o la dispersión dominan tu día:</em></p>
                    <div class="food-grid">
                        <div class="food-item">
                            <span class="food-name">Canela o Anís Estrellado</span>
                            <span class="food-desc">Aportan el sabor dulce y cálido. Generan una sensación de abrazo y seguridad interna.</span>
                        </div>
                        <div class="food-item">
                            <span class="food-name">Lavanda o Melisa</span>
                            <span class="food-desc">Calman el sistema nervioso de forma inmediata, permitiendo pausar el ritmo acelerado.</span>
                        </div>
                    </div>
                    <p style="text-align: center; margin-top: 1rem; font-style: italic;">“Siento la tierra bajo mis pies, estoy a salvo y en Paz”</p>
                </section>

                <section class="ingredients-section">
                    <h3>3. Para el Discernimiento y la Liberación</h3>
                    <p><em>Si hay irritabilidad, juicio o calor excesivo:</em></p>
                    <div class="food-grid">
                        <div class="food-item">
                            <span class="food-name">Pétalos de Rosa</span>
                            <span class="food-desc">El sabor dulce floral que suaviza las emociones intensas y abre el corazón.</span>
                        </div>
                        <div class="food-item">
                            <span class="food-name">Manzanilla o Diente de León</span>
                            <span class="food-desc">El sabor amargo, que ayuda a drenar la ira contenida y aporta una visión clara y objetiva.</span>
                        </div>
                    </div>
                    <p style="text-align: center; margin-top: 1rem; font-style: italic;">"Suelto lo que no puedo controlar y elijo la suavidad”</p>
                </section>

                <section class="ingredients-section">
                    <h3>4. Para el Gozo y la Vitalidad</h3>
                    <p><em>Si sientes apatía, cansancio vital o falta de alegría:</em></p>
                    <div class="food-grid">
                        <div class="food-item">
                            <span class="food-name">Cardamomo o Cáscara de Naranja</span>
                            <span class="food-desc">Mueve energía.</span>
                        </div>
                        <div class="food-item">
                            <span class="food-name">Azafrán o Caléndula</span>
                            <span class="food-desc">Plus de Vitalidad.</span>
                        </div>
                    </div>
                    <p style="text-align: center; margin-top: 1rem; font-style: italic;">“Elijo encender mi luz interna y celebrar mi existencia”.</p>
                </section>

                <section class="ingredients-section">
                    <h3>5. Para la intuición y el silencio interno</h3>
                    <p><em>Momentos de meditación o conexión con tu voz sabia:</em></p>
                    <div class="food-grid">
                        <div class="food-item">
                            <span class="food-name">Albahaca sagrada (tulsi)</span>
                            <span class="food-desc">Conecta el corazón con claridad.</span>
                        </div>
                        <div class="food-item">
                            <span class="food-name">Regaliz</span>
                            <span class="food-desc">Nutre el espíritu y suaviza la expresión.</span>
                        </div>
                    </div>
                    <p style="text-align: center; margin-top: 1rem; font-style: italic;">“En el silencio de mi mente escucho la sabiduría de mi Alma”</p>
                </section>

                <div class="divider" style="margin: 3rem auto;"></div>

                <h2 style="text-align: center; margin-bottom: 2rem; font-family: var(--font-serif);">EL ARTE DE ARMAR TU MATE PERSONAL</h2>
                <p>
                    Un viaje hacia tu interior, donde el agua, las hierbas y TU INTENCIÓN se funden en una medicina única.
                    A menudo, preparamos mate o una infusión de forma automática, buscando solo el sabor.
                    Pero desde el Ayurveda, cada hierba es una portadora de Prana (energía Vital) y cada sabor es una instrucción directa para nuestro sistema nervioso.
                </p>

                <div class="tip-box">
                    <div class="tip-header">🌿 Recetas de Yerba Mate</div>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 1.5rem;">
                            <strong>Mezcla 1:</strong> Manzanilla, Cáscaras de Naranja, Cedrón, Menta, Tilo. <br>
                            <em>Al agua caliente:</em> Jengibre y vainas de cardamomo (para disminuir la inflamación).
                        </li>
                        <li style="margin-bottom: 1.5rem;">
                            <strong>Mezcla 2:</strong> Manzanilla, Cedrón, Cola de caballo, Coco. <br>
                            <em>Al agua caliente:</em> Jengibre. <br>
                            <span style="font-style: italic;">“Limpio mi templo y permito que mi fuego interno transforme todo lo que consumo en energía pura”</span>
                        </li>
                        <li style="margin-bottom: 1.5rem;">
                            <strong>Mezcla 3:</strong> Manzanilla, Pétalos de Rosa, Menta, Semillas de hinojo.
                        </li>
                        <li style="margin-bottom: 1.5rem;">
                            <strong>Mezcla 4:</strong> Manzanilla, Coco rallado, Menta, Diente de león, Ortiga, Semillas de Coriandro. <br>
                            <span style="font-style: italic;">“Abro mi corazón a la suavidad, suelto la rigidez y me permito ser sostenida por la vida”</span>
                        </li>
                        <li style="margin-bottom: 1.5rem;">
                            <strong>Mezcla 5:</strong> Cáscaras de naranja, Té verde, Menta. <br>
                            <em>Al agua caliente:</em> Jengibre. <br>
                            <span style="font-style: italic;">“Suelto la necesidad de control, transformó mi fuego en luz y mi juicio en compasión”</span>
                        </li>
                         <li style="margin-bottom: 1.5rem;">
                            <strong>Mezcla 6:</strong> Diente de león, Bardana, Salvia. <br>
                            <span style="font-style: italic;">“Despierto mi entusiasmo y me muevo con ligereza, la vida fluye a través de mí con alegría.”</span>
                        </li>
                         <li style="margin-bottom: 1.5rem;">
                            <strong>Para la niebla mental:</strong> Romero y Ginkgo Biloba.
                        </li>
                         <li style="margin-bottom: 1.5rem;">
                            <strong>Para contención/abrazo:</strong> Vainilla y canela.
                        </li>
                    </ul>
                </div>

                 <div class="tip-box" style="background: #f9f5f0; border-left: 4px solid #d4a373;">
                    <div class="tip-header">☕ Tisanas por Dosha</div>
                    <p><strong>Vata:</strong> Centella asiática, Cardamomo, Comino, Nuez moscada, Jengibre fresco. <br> <em>Opcional:</em> Pasiflora, Melisa, Valeriana, Tilo.</p>
                    <p><strong>Pitta:</strong> Menta o Manzanilla, Cardamomo, Comino, Hinojo.</p>
                    <p><strong>Kapha:</strong> Clavo de olor, Pimienta negra, Jengibre rallado. (2 cda. Miel x día).</p>
                </div>

                <div class="divider" style="margin: 3rem auto;"></div>

                <h2 style="text-align: center; margin-bottom: 2rem; font-family: var(--font-serif);">Guía de sabores y Emociones</h2>
                <p style="text-align: center;">Son los 6 sabores con los que equilibramos nuestro Dosha o Constitución.</p>

                <div class="food-grid">
                    <div class="food-item">
                        <span class="food-name">Manzanilla</span>
                        <span class="food-desc"><strong>Calma y seguridad.</strong> “Recupero mi calma y la certeza de que todo está bien”</span>
                    </div>
                    <div class="food-item">
                        <span class="food-name">Hibisco</span>
                        <span class="food-desc"><strong>Entusiasmo y pasión.</strong> “Enciendo mi pasión y celebro el brillo de mi ser”</span>
                    </div>
                    <div class="food-item">
                        <span class="food-name">Cola de Caballo</span>
                        <span class="food-desc"><strong>Confianza y apertura.</strong> “Fluyo con la confianza eliminando lo que ya no necesito”</span>
                    </div>
                    <div class="food-item">
                        <span class="food-name">Jengibre</span>
                        <span class="food-desc"><strong>Claridad e Impulso.</strong> “Activo mi voluntad y avanzo con claridad hacia mis metas”</span>
                    </div>
                    <div class="food-item">
                        <span class="food-name">Diente de León</span>
                        <span class="food-desc"><strong>Desapego y discernimiento.</strong> “Suelto las cargas del pasado elijo la libertad del presente”</span>
                    </div>
                    <div class="food-item">
                        <span class="food-name">Pétalos de Rosa</span>
                        <span class="food-desc"><strong>Contención e introspección.</strong> “Me abrazo con ternura y encuentro refugio en mi propio corazón”</span>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 80px;">
                    <p style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 30px; font-style: italic;">
                        “El equilibrio es un diseño diario. No busques la perfección, busca la conexión.”
                    </p>
                    <a href="https://wa.me/5493413246408" target="_blank" class="btn-reserva" style="margin-top: 20px;">RESERVAR CONSULTORÍA</a>
                </div>

            </div>
        ',
    '2024-11-25',
    'article',
    '/articulos/guia-blends-ayurvedicos/blends.png'
),
(
    'TOFU: El secreto de la ''Proteína de Naturaleza Serena''',
    'tofu',
    'Ayurveda & Nutrición',
    'Descubre cómo preparar el tofu según el Ayurveda para potenciar su energía y digestibilidad.',
    '
            <header class="post-header">
                <span class="hero-tag">Ayurveda & Nutrición</span>
                <h1>TOFU: El secreto de la "Proteína de Naturaleza Serena"</h1>
                <p class="hero-subtitle">Cómo transformar este alimento en medicina para tu cuerpo.</p>
            </header>

            <div class="featured-image">
                <img src="/recetas/tofu/tofu-dorado.png" alt="Tofu Dorado y Crujiente"> 
            </div>

            <div class="post-content">
                
                <p class="intro">
                    En Ayurveda, el tofu es frío y denso por naturaleza. Si lo consumimos crudo, nuestro fuego digestivo (Agni) tiene que trabajar el doble, lo que muchas veces termina en inflamación o pesadez.
                </p>

                <p>
                    Al cocerlo se elimina el antinutriente: La soja tiene inhibidores de enzimas. Una cocción ligera asegura que el cuerpo pueda absorber realmente los aminoácidos sin inflamar el abdomen. Es una fuente completa de aminoácidos, entregando a tus células todo lo que necesitan para recuperarse y fortalecerse.
                </p>

                <div class="divider"></div>

                <section class="ingredients-section">
                    <h3>Al pasarlo por la plancha</h3>
                    <div class="food-grid">
                        <div class="food-item">
                            <span class="food-name">Encendemos su Prana</span>
                            <span class="food-desc">El calor transforma su energía fría en una más compatible con nuestra temperatura interna.</span>
                        </div>
                        <div class="food-item">
                            <span class="food-name">Despertamos su sabor</span>
                            <span class="food-desc">Al dorarlo, su textura se vuelve más ligera y fácil de asimilar.</span>
                        </div>
                    </div>
                </section>

                <div class="tip-box">
                    <div class="tip-header">Mi TIP</div>
                    <p>Dorar con un poquito de Ghee o Aceite de Coco, Cúrcuma y Jengibre. La cúrcuma ayuda a metabolizar las proteínas de la soja, evitando toxinas (Ama).</p>
                </div>

                <section class="ingredients-section">
                    <h3>¿Para quién es ideal el Tofu?</h3>
                    <div class="tip-box light-bg">
                        <ul class="clean-list" style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: 1.5rem;">
                                <strong>Vata:</strong> ¡Ideal! Pero siempre caliente, con Ghee y especias cálidas (comino, jengibre, sal del Himalaya) para evitar gases o enfriamiento.
                            </li>
                            <li style="margin-bottom: 1.5rem;">
                                <strong>Pitta:</strong> Es su proteína estrella. Refrescante y calma la intensidad. Usar especias suaves como cilantro, hinojo y cúrcuma.
                            </li>
                            <li>
                                <strong>Kapha:</strong> Consumir con moderación, siempre muy dorado (crujiente) y con especias picantes como pimienta negra o jengibre para evitar mucosidad.
                            </li>
                        </ul>
                    </div>
                </section>

                <p class="quote-text" style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--accent-gold); font-style: italic; text-align: center; margin: 3rem 0;">
                    “Cocinar con calma es el primer paso para una digestión exitosa. El Ayurveda nos enseña que el equilibrio no está en lo que comemos, sino en cómo lo preparamos.”
                </p>

                <div class="cta-container" style="text-align: center; margin-top: 3rem;">
                    <a href="https://wa.me/5493413246408" target="_blank" class="btn-reserva">RESERVAR CONSULTORÍA</a>
                </div>

            </div>
        ',
    '2024-11-15',
    'article,recipe',
    '/articulos/tofu/tofu-dorado.png'
),
(
    'Castañas de Cajú & Semillas de Calabaza',
    'queso-caju-calabaza',
    'Ayurveda & Nutrición',
    'Equilibrio perfecto que no inflama y satisface el alma. Aliado del sistema nervioso y rico en minerales.',
    '
            <header class="post-header">
                <span class="hero-tag">Ayurveda & Nutrición</span>
                <h1>Castañas de Cajú & Semillas de Calabaza</h1>
                <p class="hero-subtitle">Al combinar la cremosidad de la castaña de cajú con la ligereza de la semilla de calabaza, logramos un equilibrio perfecto que no inflama y satisface el alma.</p>
            </header>

            <div class="featured-image">
                <img src="/recetas/queso-caju-calabaza/queso-caju.png" alt="Castañas de Cajú y Semillas de Calabaza"> 
            </div>

            <div class="post-content">
                
                <section class="benefits-section">
                    <h3>✨ Beneficios</h3>
                    <ul class="clean-list">
                        <li>
                            <strong>Aliado del Sistema Nervioso:</strong> El cajú es alto en Magnesio y Triptófano, el aminoácido precursor de la serotonina (la hormona de la felicidad). Es ideal para calmar la ansiedad y el estrés.
                        </li>
                        <li>
                            <strong>Poder Mineral:</strong> Las semillas de calabaza aportan una dosis masiva de Zinc, esencial para fortalecer tu sistema inmune y mantener la salud de tu piel y cabello.
                        </li>
                        <li>
                            <strong>Grasas Inteligentes:</strong> Contiene ácidos grasos saludables que protegen tu corazón y, lo más importante, le dan a tu cerebro el combustible que necesita para mantener la concentración.
                        </li>
                    </ul>
                </section>

                <div class="divider"></div>

                <section class="energy-benefits-section">
                    <h3>✨ Beneficios para tu Energía (Sabiduría Ayurvédica)</h3>
                    <p>Su textura cremosa y su naturaleza untuosa son el bálsamo perfecto para calmar una mente dispersa o un cuerpo que siente frío y sequedad.</p>
                </section>

                <p class="quote-text" style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--accent-gold); font-style: italic; text-align: center; margin: 2rem 0;">
                    "Al activar las castañas y semillas, eliminamos los fitatos (antinutrientes) que bloquean la absorción de minerales. Así, tu Agni no tiene que luchar para digerir; simplemente recibe la medicina de forma directa y liviana.”
                </p>

                <div class="divider"></div>

                <section class="ingredients-section">
                    <h3>Ingredientes</h3>
                    <ul class="clean-list">
                        <li>• 1 taza de castañas de cajú (activadas).</li>
                        <li>• ½ taza de semillas de calabaza (activadas).</li>
                        <li>• Agua filtrada (cantidad necesaria para la textura deseada).</li>
                        <li>• 1 pizca de sal del Himalaya.</li>
                        <li>• ½ cdita de cardamomo en polvo (el secreto para digerir las grasas sanas).</li>
                        <li>• Opcional: Un chorrito de limón o vinagre de manzana.</li>
                    </ul>
                </section>

                <section class="steps-section">
                    <h3>Paso a Paso</h3>
                    <ol class="clean-list" style="list-style: decimal; padding-left: 1.5rem;">
                        <li style="margin-bottom: 1rem;"><strong>La Activación:</strong> Deja en remojo las castañas y las semillas durante al menos 6 horas. Este paso es vital para que así eliminemos los antinutrientes.</li>
                        <li style="margin-bottom: 1rem;">Descarta el agua de remojo y enjuaga muy bien.</li>
                        <li style="margin-bottom: 1rem;">Coloca todos los ingredientes en una licuadora o procesador potente. Agrega el agua poco a poco hasta lograr esa textura suave que buscamos.</li>
                        <li style="margin-bottom: 1rem;">Suma el cardamomo y la sal. Vuelve a procesar un minuto más para que los sabores se integren.</li>
                        <li style="margin-bottom: 1rem;">Guárdalo en un frasco de vidrio en la heladera. Al enfriarse, tomará una consistencia más firme y deliciosa.</li>
                    </ol>
                </section>

                <div class="divider"></div>

                <section class="tips-section">
                    <h3>TIPS</h3>
                    <div class="tip-box light-bg">
                        <ul class="clean-list" style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: 1rem;">
                                <strong>● Si eres Vata:</strong> disfrútalo con un toque de aceite de oliva por encima.
                            </li>
                            <li style="margin-bottom: 1rem;">
                                <strong>● Si eres Pitta:</strong> el toque de semillas de calabaza te ayudará a mantenerte fresca.
                            </li>
                            <li>
                                <strong>● Si eres Kapha:</strong> agrégale una pizca de pimienta negra para estimular tu metabolismo.
                            </li>
                        </ul>
                    </div>
                    <p style="margin-top: 1.5rem;">
                        Untarlo sobre una rodaja de pan de masa madre tostado o usarlo como dip para vegetales al vapor es una forma deliciosa de nutrir tu Agni sin pesadez.
                    </p>
                </section>

                <p class="quote-text" style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--accent-gold); font-style: italic; text-align: center; margin: 3rem 0;">
                    “Alimenta tu Salud y potencia tu Bienestar”
                </p>

                <div class="cta-container" style="text-align: center; margin-top: 3rem;">
                    <a href="https://wa.me/5493413246408" target="_blank" class="btn-reserva">RESERVAR CONSULTORÍA</a>
                </div>

            </div>
        ',
    '2024-10-30',
    'article,recipe',
    '/articulos/queso-caju-calabaza/queso-caju.png'
),
(
    'Albóndigas de Arvejas',
    'albondigas-arvejas',
    'Almuerzo / Cena',
    'Proteína vegetal y claridad mental. Un equilibrio perfecto de vegetales y especias para tu bienestar.',
    '
            <header class="post-header">
                <span class="hero-tag">Almuerzo / Cena</span>
                <h1>Albóndigas de Arvejas</h1>
                <p class="subtitle" style="text-align: center; font-style: italic; margin-top: 1rem;">
                    "Tu cocina es tu farmacia. ¡Anímate a probar este equilibrio de sabores!"
                </p>
            </header>

            <div class="featured-image">
                <img src="/recetas/albondigas-arvejas/cover.png" alt="Albóndigas de Arvejas">
            </div>

            <div class="post-content">
                
                <p class="intro">
                    Son una fuente de proteína vegetal maravillosa. En Ayurveda, la arveja brinda claridad mental. Para equilibrar su naturaleza seca, sumamos vegetales y grasas saludables (Ghee o Aceite de Oliva), logrando un balance perfecto para tu cuerpo.
                </p>

                <div class="divider" style="margin: 3rem auto;"></div>

                <div class="recipe-grid">
                    <div class="ingredients-section">
                        <h3 class="subsection-title">Ingredientes Clave</h3>
                        <ul class="ingredient-list">
                            <li class="ingredient-item">
                                <span><strong>Zanahoria:</strong> Humedad y dulzor.</span>
                            </li>
                            <li class="ingredient-item">
                                <span><strong>Espinaca:</strong> Energía vital (Prana).</span>
                            </li>
                            <li class="ingredient-item">
                                <span><strong>Cebollita:</strong> Fuego para activar tu Agni (digestión).</span>
                            </li>
                            <li class="ingredient-item">
                                <span><strong>Arvejas:</strong> Proteína y claridad mental.</span>
                            </li>
                            <li class="ingredient-item">
                                <span><strong>Harina (Avena/Arroz):</strong> 2 cucharadas para unir.</span>
                            </li>
                            <li class="ingredient-item">
                                <span><strong>Mix de semillas:</strong> Nutrición extra.</span>
                            </li>
                            <li class="ingredient-item no-border">
                                <span><strong>Especias:</strong> Comino, Jengibre, Laurel.</span>
                            </li>
                        </ul>
                    </div>

                    <div class="instructions-section">
                        <h3 class="subsection-title">Preparación</h3>
                        <ol class="instruction-list">
                            <li>
                                <strong>Remojo:</strong> 8 horas con laurel. Descartar el agua y hervir en agua limpia con especias.
                            </li>
                            <li>
                                <strong>Procesar:</strong> Colar y triturar ligeramente las arvejas ya frías.
                            </li>
                            <li>
                                <strong>Activar Agni:</strong> Saltear la cebolla y la zanahoria con comino y jengibre. Este "calor previo" evita la inflamación.
                            </li>
                            <li>
                                <strong>Mezclar:</strong> Unir las arvejas con los vegetales, la harina, las semillas y 1 huevo (opcional).
                            </li>
                            <li>
                                <strong>Formar:</strong> Dejar descansar la masa. Formar bolitas con manos húmedas y rebozar en harina de avena con sésamo.
                            </li>
                            <li>
                                <strong>Cocinar:</strong> Dorar al horno o sartén con un toque de Ghee.
                            </li>
                        </ol>
                    </div>
                </div>

                <div class="tip-box" style="margin-top: 3rem;">
                    <h4 style="margin-bottom: 0.5rem;">✨ Tip Nutricional</h4>
                    <p>Acompañalas con un cereal (como arroz integral) para obtener una proteína completa con todos los aminoácidos esenciales.</p>
                    <p style="margin-top: 1rem;">
                        <strong>Alquimia de Especias:</strong> Al usar comino y jengibre, no solo aportan sabor, sino que actúan como estimulante digestivo, preparando a tu estómago para absorber mejor los nutrientes de la arveja.
                    </p>
                </div>

                <div class="divider" style="margin: 3rem auto;"></div>

                <section class="dosha-variations">
                    <h3 class="subsection-title" style="text-align: center;">Personaliza según tu Dosha</h3>
                    <div class="variations-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem;">
                        <div class="variation-card" style="background: #f9f5f0; padding: 1.5rem; border-radius: 8px; text-align: center;">
                            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Vata 🌬️</h4>
                            <p>Agrega un extra de zanahoria rallada a la mezcla para aportar más humedad y dulzor.</p>
                        </div>
                        <div class="variation-card" style="background: #f9f5f0; padding: 1.5rem; border-radius: 8px; text-align: center;">
                            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Pitta 🔥</h4>
                            <p>Asegúrate de poner más espinaca para refrescar y nutrir sin sobrecalentar.</p>
                        </div>
                        <div class="variation-card" style="background: #f9f5f0; padding: 1.5rem; border-radius: 8px; text-align: center;">
                            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Kapha ⛰️</h4>
                            <p>Agrega una pizca de pimienta negra o jengibre en polvo extra a la masa para estimular.</p>
                        </div>
                    </div>
                </section>

                <div class="outro-box" style="text-align: center; margin-top: 4rem;">
                    <p style="font-style: italic; font-size: 1.2rem;">
                        "Siente la energía del Prana en cada bocado."
                    </p>
                </div>

                <div class="cta-container" style="text-align: center; margin-top: 3rem;">
                    <a href="https://wa.me/5493413246408" target="_blank" class="btn-reserva">CONSULTAR PLAN NUTRICIONAL</a>
                </div>

            </div>
        ',
    '2025-01-15',
    'recipe',
    '/articulos/albondigas-arvejas/cover.png'
),
(
    'Medallón de Quinoa y Vegetales',
    'medallon-quinoa',
    'Almuerzo / Cena',
    'Una receta tridóshica, ligera y nutritiva. Ideal para equilibrar Vata, Pitta y Kapha sin generar toxinas.',
    '
            <header class="post-header">
                <span class="hero-tag">Recetas Saludables y Ayurvédicas</span>
                <h1>Medallón de Quinoa y Vegetales</h1>
                <p class="hero-subtitle">Llenas de energía y armonía</p>
            </header>

            <div class="featured-image">
                <img src="/recetas/medallon-quinoa/medallon-quinoa.jpg" alt="Medallón de Quinoa y Vegetales"> 
            </div>

            <div class="post-content">
                
                <p class="intro">
                    ¿Sabías que la Quinoa es considerada un "superalimento"? Desde el Ayurveda, la quinoa es una de las pocas semillas Tridóshicas: equilibra a Vata, Pitta y Kapha. Es ligera, nutritiva y no genera toxinas (Ama) en el cuerpo.
                </p>

                <section class="ingredients-section">
                    <h3>¿Por qué elegir Quinoa? (Sus propiedades)</h3>
                    <div class="food-grid">
                        <div class="food-item">
                            <span class="food-name">Proteína Completa</span>
                            <span class="food-desc">Contiene los 9 aminoácidos esenciales.</span>
                        </div>
                        <div class="food-item">
                            <span class="food-name">Digestión Fácil</span>
                            <span class="food-desc">Es mucho más ligera que el arroz o el trigo, ideal para mantener nuestro fuego digestivo (Agni) encendido pero en calma.</span>
                        </div>
                        <div class="food-item">
                            <span class="food-name">Minerales</span>
                            <span class="food-desc">Rica en Hierro, Magnesio y Fósforo. Fundamental para la energía vital y para relajar el sistema nervioso.</span>
                        </div>
                        <div class="food-item">
                            <span class="food-name">Libre de Gluten</span>
                            <span class="food-desc">Su naturaleza es naturalmente pura y suave para nuestros intestinos. Fácil de asimilar.</span>
                        </div>
                    </div>
                </section>

                <p>
                    He preparado estos medallones con vegetales frescos y una mezcla de especias para potenciar su absorción. Al dorarlos a la plancha, activamos su energía y logramos esa textura que nos hace disfrutar cada bocado con presencia plena.
                </p>
                <p>
                    Esta receta es una de mis favoritas porque combina la practicidad con la profundidad de la nutrición ayurvédica. La quinoa es el vehículo perfecto para integrar los beneficios de los vegetales y las especias.
                </p>

                <div class="divider"></div>

                <section class="ingredients-section">
                    <h3>Ingredientes</h3>
                    <p class="section-subtitle">(Para 4-6 medallones)</p>
                    <ul class="ingredient-list">
                        <li class="ingredient-item">
                            <strong>1 taza de quinoa</strong> (lavada 7 veces para eliminar la saponina y la pesadez).
                        </li>
                        <li class="ingredient-item">
                            <strong>2 tazas de agua</strong>
                        </li>
                        <li class="ingredient-item">
                            <strong>1 taza de vegetales</strong> rallados o picados finitos (zanahoria, espinaca quedan geniales, un poquito de morrón y cebolla pequeña).
                        </li>
                        <li class="ingredient-item">
                            <strong>2 cucharadas de harina de garbanzos</strong> (para ligar y sumar más proteína).
                        </li>
                        <li class="ingredient-item">
                            <strong>Especias:</strong> 1 cdita de cúrcuma, ½ cdita de comino, una pizca de pimienta negra y sal del Himalaya.
                        </li>
                        <li class="ingredient-item">
                            <strong>Aceite con especias:</strong> 1 cda. (opcional, para sumar propiedades antiinflamatorias).
                        </li>
                        <li class="ingredient-item">
                            <strong>1 huevo</strong> de gallinas libres (agregar cuando la mezcla esté fría).
                        </li>
                        <li class="ingredient-item">
                            <strong>Materia grasa:</strong> Ghee, aceite de coco para la plancha o aceite de oliva extra virgen (solo un poquito).
                        </li>
                        <li class="ingredient-item no-border">
                            <strong>Semillas de Sésamo</strong> para colocar por encima (sabor y textura mágica).
                        </li>
                    </ul>
                </section>

                <div class="tip-box">
                    <div class="tip-header">Paso a Paso</div>
                    <ol class="step-list">
                        <li><strong>Activación y Cocción:</strong> Cocina la quinoa en el agua con una pizca de sal y la cúrcuma hasta que esté tierna y haya absorbido todo el líquido. Deja que entibie para que sea más fácil de manipular.</li>
                        <li><strong>Integración de Prana:</strong> En un bowl, mezcla la quinoa cocida con los vegetales crudos rallados. Los vegetales aportan energía vital fresca (Prana).</li>
                        <li><strong>El toque de las especias:</strong> Suma el comino, la pimienta y la harina de garbanzos. Mezcla bien.</li>
                        <li><strong>Forma y Fuego:</strong> Arma los medallones con las manos. Colocamos un poquito de semillas de sésamo por encima así le damos el toque crujiente.</li>
                        <li><strong>Cocción:</strong> En una sartén o plancha caliente con un toque de Ghee, dóralos de ambos lados. Buscamos ese color dorado.</li>
                        <li><strong>El servicio:</strong> Acompáñalos de una ensalada de hojas verdes (si eres Pitta) o vegetales al vapor (si eres Vata o Kapha).</li>
                    </ol>
                    <p class="quote-text">“Comer de forma ayurvédica no se trata de restricciones, sino de elegir ingredientes que nos hagan brillar desde adentro.”</p>
                </div>

                <div class="divider"></div>



                <div class="cta-container">
                    <a href="https://wa.me/5493413246408" target="_blank" class="btn-reserva">RESERVAR CONSULTORÍA</a>
                </div>

            </div>
        ',
    '2024-12-20',
    'recipe',
    '/articulos/medallon-quinoa/medallon-quinoa.jpg'
);
INSERT INTO posts (title, slug, category, description, content, date, type, image_url) VALUES
(
    'El Segundo Despertar',
    'el-segundo-despertar',
    'Ayurveda & Bienestar',
    'Bienvenida a tu Segundo Despertar. Una etapa donde el fuego de la juventud se transforma en la luz de la sabiduría.',
    '
            <header class="post-header">
                <span class="hero-tag">Ayurveda & Bienestar</span>
                <h1>El Segundo Despertar</h1>
                <p class="subtitle" style="text-align: center; font-style: italic; margin-top: 1rem;">
                    "Abrazando la Perimenopausia desde el Ayurveda"
                </p>
            </header>

            <div class="featured-image">
                <img src="/articulos/el-segundo-despertar/cover.png" alt="El Segundo Despertar">
            </div>

            <div class="post-content">
                <p class="intro">
                    Bienvenida a tu Segundo Despertar. Una etapa donde el fuego de la juventud se transforma en la luz de la sabiduría.
                </p>
                <p>
                    La medicina moderna lo llama declive hormonal; nosotros lo llamamos el momento en que tu energía deja de volcarse solo hacia afuera para empezar a nutrir tu sabiduría interna. Es una invitación a escuchar el lenguaje de tu cuerpo y responder con amor y respeto.
                </p>

                <div class="divider" style="margin: 3rem auto;"></div>

                <section class="step-section">
                    <h3 class="subsection-title">¿Qué está pasando en tu Alquimia interna?</h3>
                    <p>En esta transición, el dosha Vata empieza a predominar. Si no lo equilibramos, aparecen los síntomas clásicos que quizás estés experimentando:</p>
                    <ul class="clean-list">
                        <li>• <strong>Calores (Sofocos):</strong> Es el fuego de Pitta intentando salir.</li>
                        <li>• <strong>Ansiedad o miedos:</strong> Sentimientos de "desarraigo" que antes no estaban.</li>
                        <li>• <strong>Insomnio:</strong> La mente se vuelve volátil y el aire impide el descanso profundo.</li>
                        <li>• <strong>Sequedad:</strong> No solo en la piel, sino también en las articulaciones y las mucosas.</li>
                    </ul>
                </section>

                <section class="step-section" style="margin-top: 3rem;">
                    <h3 class="subsection-title">¿Qué es lo que necesita nuestro cuerpo?</h3>
                    <p>Para equilibrar ese exceso de aire, sequedad y calor necesitamos <strong>Calmar, Enraizar y Nutrir</strong>.</p>
                    
                    <h4 style="font-family: var(--font-serif); margin-top: 1.5rem;">• Grasas Inteligentes</h4>
                    <p>El Ghee y el Aceite de Sésamo son fundamentales. El Ayurveda dice: <em>"Donde hay sequedad, debe haber aceite"</em>.</p>

                    <h4 style="font-family: var(--font-serif); margin-top: 1.5rem;">• Alimentos de Enraizamiento</h4>
                    <p>Volvemos a las raíces (batata, zanahoria, remolacha) a los cereales calientes. Alimentos que enfrían hojas verdes, pepino.</p>
                    <div class="tip-box light-bg">
                        <strong>Evita:</strong> alimentos picantes, café, alcohol, alimentos crudos o helados, que aumentan el frío y la sequedad.
                    </div>

                    <h4 style="font-family: var(--font-serif); margin-top: 1.5rem;">• Descanso Sagrado</h4>
                    <p>El descanso ya no es un lujo, es una necesidad biológica. Crear un ritual de sueño donde el mundo exterior se apague temprano es vital para que las glándulas suprarrenales no se agoten.</p>
                </section>

                <section class="step-section" style="margin-top: 3rem;">
                    <h3 class="subsection-title">Tus Aliadas Ancestrales</h3>
                    <ul class="clean-list">
                        <li>• <strong>Shatavari (La Reina de las Raíces):</strong> La planta por excelencia para la mujer. Ayuda a hidratar los tejidos y calmar el sistema nervioso.</li>
                        <li>• <strong>La Salvia:</strong> Actúa como un freno natural para el calor excesivo y la transpiración nocturna, aportando además claridad mental. (Infusión: 3-4 hojas por la tarde).</li>
                        <li>• <strong>Hoja de Ortiga (Remineralización):</strong> Extraordinaria para fortalecer huesos y cabello. Ayuda a reducir la retención de líquidos y purifica la sangre. (Dejar reposar 15-20 min).</li>
                    </ul>
                </section>

                <section class="step-section" style="margin-top: 3rem;">
                    <h3 class="subsection-title">Nutrición de Sabiduría: Alquimia en tu plato</h3>
                    <p>Prioriza alimentos cocidos, untuosos y calientes:</p>

                    <h4 style="font-family: var(--font-serif); margin-top: 1.5rem;">1. Proteínas y Estructura</h4>
                    <ul class="clean-list">
                        <li>• <strong>Huevos:</strong> La "proteína perfecta" para mantener la masa muscular y la salud cerebral. Consumirlos preferentemente poché o con Ghee.</li>
                        <li>• <strong>Pescado:</strong> Es uno de los mejores aliados de la mujer en esta etapa. <em>“Incluir pescado de 3 a 4 veces por semana es como darle un baño de hidratación a tus células. Elige pescados azules pequeños para nutrir tu cerebro y pescados blancos para mantener tus músculos fuertes sin sobrecargar tu digestión."</em></li>
                        <li>• <strong>Tofu:</strong> Aliado de los fitoestrógenos para reducir sofocos. <strong>Tip Pro:</strong> ¡Cocínalo siempre! con jengibre o comino para que no genere pesadez.</li>
                    </ul>

                    <h4 style="font-family: var(--font-serif); margin-top: 1.5rem;">2. Vegetales y Frutas</h4>
                    <ul class="clean-list">
                        <li>• <strong>Palta y Espárragos:</strong> Nutren tus hormonas.</li>
                        <li>• <strong>Espinaca:</strong> ¡Siempre cocida! para que tus huesos absorban su calcio.</li>
                        <li>• <strong>Pepino:</strong> El "Hidratante Enfriador", excelente para calmar sofocos, consúmelo a temperatura ambiente.</li>
                        <li>• <strong>Hojas Verdes Crudas:</strong> Consumirlas crudas solo al mediodía, cuando tu fuego digestivo (Agni) está en su punto máximo.</li>
                    </ul>
                    
                    <div class="tip-box">
                        <div class="tip-header">✨ Tip (Sustituto de la ensalada)</div>
                        <p>Si las hojas verdes crudas en ensalada te inflaman, la mejor forma de obtener su beneficio enfriador es triturándolas.</p>
                        <p><strong>✨🙌🏻✨ Receta rápida:</strong> Un puñado de espinacas, 1/2 pepino, un trozo de manzana verde y un poco de agua de coco. Al estar triturado, la fibra ya está rota y tu cuerpo absorbe los minerales sin esfuerzo.</p>
                    </div>

                    <ul class="clean-list" style="margin-top: 1rem;">
                        <li>• <strong>Uvas negras y dulces:</strong> Nutren la sangre y refrescan.</li>
                        <li>• <strong>Peras y manzanas:</strong> (siempre asadas o al vapor), uvas oscuras, higos y granada.</li>
                    </ul>

                    <h4 style="font-family: var(--font-serif); margin-top: 1.5rem;">3. Semillas (Vitalidad Ósea)</h4>
                    <ul class="clean-list">
                        <li>• <strong>Sésamo:</strong> Tu fuente número uno de calcio.</li>
                        <li>• <strong>Calabaza, Chía y Lino:</strong> Para el magnesio y el Omega-3. (Recuerda remojarlas antes para activar su energía).</li>
                    </ul>
                </section>

                <section class="step-section" style="margin-top: 3rem;">
                    <h3 class="subsection-title">Rituales de Paz</h3>
                    <h4 style="font-family: var(--font-serif); margin-top: 1rem;">Tisana "Calma Profunda"</h4>
                    <p>Para esos días de cambios anímicos, mezcla:</p>
                    <ul class="clean-list">
                        <li>• <strong>Manzanilla:</strong> suaviza la irritabilidad.</li>
                        <li>• <strong>Pasiflora:</strong> frena el ruido mental.</li>
                        <li>• <strong>Valeriana:</strong> enraíza y da descanso.</li>
                    </ul>
                    <div class="tip-box light-bg">
                        <strong>Tip:</strong> Infusiona siempre tapado y añade una pizca de cardamomo para una digestión perfecta.
                    </div>
                </section>

                <section class="step-section" style="margin-top: 3rem;">
                    <h3 class="subsection-title">Moverse para Florecer</h3>
                    <p>En esta etapa, el ejercicio es medicina preventiva. El <strong>entrenamiento de Fuerza</strong> (pesas o bandas) no es negociable: la presión del músculo sobre el hueso es lo que protege tu calcio.</p>
                    <p>Realiza movimientos lentos y conscientes para no disparar el cortisol.</p>
                    <p>Complementa con caminatas ligeras al aire libre para nutrir tu Ojas (vitalidad) y Yoga para tu equilibrio.</p>
                </section>

                <div class="outro-box" style="background-color: #f9f5f0; padding: 2rem; border-radius: 8px; text-align: center; margin-top: 3rem;">
                    <p style="font-style: italic; font-weight: 600;">
                        "Nutre tu cuerpo con respeto, mueve tu energía con amor y permite que tu sabiduría interna sea la brújula de tu salud. Eres Naturaleza Esencial en su máxima expresión."
                    </p>
                </div>

                <div class="cta-container" style="text-align: center; margin-top: 3rem;">
                    <a href="https://wa.me/5493413246408" target="_blank" class="btn-reserva">RESERVAR CONSULTORÍA</a>
                </div>
            </div>
    ',
    '2026-01-16',
    'article',
    '/articulos/el-segundo-despertar/cover.png'
);
