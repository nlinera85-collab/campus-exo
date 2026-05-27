import { LearningModule } from '../types';

export const modulesData: LearningModule[] = [
  {
    id: 1,
    title: 'La Era del Crecimiento Exponencial',
    subtitle: 'Pensamiento lineal vs exponencial, el Momento Iridium y el surgimiento de Waze',
    summary: [
      {
        title: 'El Paradigma Exponencial',
        content: [
          'Vivimos en una constante universal de cambio, pero hoy en día la velocidad del cambio se está acelerando radicalmente debido al auge de las tecnologías basadas en la información (computación, sensores, inteligencia artificial, robótica, impresión 3D).',
          'Los humanos y directivos tradicionales están programados para pensar de forma LINEAL (crecimiento paso a paso o aritmético: 1, 2, 3, 4...). Sin embargo, la ley de rendimiento acelerado provoca un crecimiento EXPONENCIAL (duplicación periódica: 0.01, 0.02, 0.04, 0.08, 0.16... hasta que explota en la curva).',
          'Al inicio de la curva, el crecimiento exponencial parece CERO (crecimiento distorsionado), lo que lleva a directivos y analistas a declarar tecnologías emergentes como fracasos prematuros, para luego verse completamente superados cuando la curva alcanza el codo de aceleración extrema (ej: Proyecto Genoma Humano).'
        ]
      },
      {
        title: 'El Momento Iridium',
        content: [
          'Se define como el gran error estratégico de utilizar herramientas lineales y proyecciones del pasado para intentar predecir y dominar un futuro que se mueve de forma exponencial.',
          'El ejemplo histórico clásico es Motorola Iridium, que en 1980 proyectó un servicio celular satelital pesado. Fijaron el plan de negocios 12 años antes del lanzamiento, ignorando que las redes satelitales serían sustituidas rápidamente por la caída exponencial de precios y miniaturización de transmisiones celulares físicas. Les costó una bancarrota de $5 mil millones.',
          'Caso de Eastman Kodak: En 2012 Kodak declaró bancarrota. Ellos mismos habían inventado la tecnología digital, pero la rechazaron por depender del modelo analógico de escasez (negativos, papel, químicos). No previeron el costo marginal cero del almacenamiento y transmisión de fotos.'
        ]
      },
      {
        title: 'La Historia de dos Compañías: Nokia vs Waze',
        content: [
          'En 2007, Nokia lideraba el mundo de la telefonía móvil. Compró Navteq por un asombroso capital de $8.1 mil millones en un esfuerzo de monopolizar los sensores de tráfico físicos en carreteras en Europa y EE.UU.',
          'Al mismo tiempo se fundaba Waze, una pequeña startup israelí sin hardware propio de sensores físicos. ¿Su truco? Aprovechar la información de los sensores GPS de los smartphones de sus propios usuarios (Crowdsourcing).',
          'Nokia dependía del costo masivo de infraestructura física pesada para expandir su red celular. Waze tenía un costo marginal cercano a CERO para añadir una nueva fuente de información sobre el tráfico. En 2012 Nokia cayó a una fracción de su valor de mercado, mientras Waze con 51 empleados fue comprada por Google por $1.1 mil millones.'
        ]
      }
    ],
    examples: [
      {
        company: 'Nokia / Navteq',
        description: 'Gastó $8,100 millones para poseer sensores físicos. Estrategia lineal obsoleta.',
        metric: 'Pérdida de liderazgo ($140 mil millones a $8.2 mil millones)'
      },
      {
        company: 'Waze',
        description: 'Usó el crowdsourcing y los smartphones existentes de los usuarios de forma exponencial.',
        metric: 'Comprada por $1,100 millones con solo 100 empleados en 2013'
      },
      {
        company: 'Eastman Kodak',
        description: 'Se aferró al modelo de escasez analógica y fotos físicas de $1 de costo unitario.',
        metric: 'Quiebra en 2012, superada por Instagram (13 empleados comprada por $1,000M)'
      }
    ],
    visualAid: {
      type: 'compare',
      title: 'Diferencias Radicales en Modelos Organizacionales',
      labels: [
        { title: 'Filosofía base', left: 'Lineal: Basada en la propiedad de activos y jerarquías estables (Escasez)', right: 'Exponencial: Basada en el acceso a la información y recursos de comunidades (Abundancia)' },
        { title: 'Uso de Activos', left: 'Poseer equipamiento y personal a tiempo completo fijo (Gasto fijo masivo)', right: 'Alquilar y apalancarse de recursos existentes en el exterior (Costo variable)' },
        { title: 'Toma de Decisiones', left: 'De arriba hacia abajo (Top-Down) guiada por el control jerárquico', right: 'Descentralizada, autoorganizada y guiada por algoritmos y datos a tiempo real' },
        { title: 'Metodología', left: 'Modelo Cascada: planeación rígida en planes de 5 años y desprecio al error', right: 'Lean Startup: experimentación rápida, MVPs, fallar rápido para pivotar' }
      ]
    },
    quiz: [
      {
        id: 101,
        question: '¿Qué es un "Momento Iridium"?',
        options: [
          'La aceleración rápida de la tecnología conforme la Ley de Moore se generaliza.',
          'Utilizar proyecciones y herramientas lineales para predecir un mañana exponencial y volátil.',
          'El instante en que una startup es adquirida por una megacorporación tecnológica.',
          'La descentralización radical del control del tráfico aéreo mediante nuevos microchips.'
        ],
        correctAnswer: 1,
        explanation: 'El Momento Iridium ocurre cuando directivos y empresas proyectan el futuro de forma lineal e incremental usando tendencias pasadas (como planeación tradicional), ignorando que la información acelera el entorno exponencialmente, lo que guía al desastre.'
      },
      {
        id: 102,
        question: '¿Por qué falló la inmensa compra de Navteq por parte de Nokia?',
        options: [
          'Porque la tecnología de mapas nunca interesó a los anunciantes ni consumidores.',
          'Porque no consiguieron el apoyo regulatorio en la Unión Europea.',
          'Porque se basaron en poseer sensores físicos sumamente caros mientras Waze accedió a los sensores ya existentes en los smartphones de los usuarios.',
          'Porque Apple demandó a Nokia por plagiar la interfaz táctil del iPhone.'
        ],
        correctAnswer: 2,
        explanation: 'Nokia persiguió un enfoque lineal adquiriendo costosas antenas físicas y sensores fijos de carreteras en posesión. Por el contrario, Waze usó la abundancia de GPSs ya distribuidos en los smartphones de los usuarios mediante crowdsourcing a costo cero.'
      },
      {
        id: 103,
        question: '¿Cuánto dura un ciclo de duplicación promedio según la Ley de Moore original?',
        options: [
          'Cada 10 años en promedio.',
          'Aproximadamente cada 18 a 24 meses.',
          'Cada 5 semanas exactas.',
          'Dos duplicaciones exponenciales al mes.'
        ],
        correctAnswer: 1,
        explanation: 'La Ley de Moore estipula que el costo/rendimiento de la computación duplica su potencia y reduce su precio a la mitad aproximadamente cada 18 o 24 meses de manera continua.'
      },
      {
        id: 104,
        question: '¿Qué diferencia define la transformación analógica a digital de Kodak?',
        options: [
          'La fotografía digital se basaba en la abundancia de fotos gratuitas y costo marginal cero, rompiendo el modelo tradicional de escasez analógica.',
          'La calidad óptica de las cámaras analógicas siempre fue sumamente inferior a los primeros sensores.',
          'Los clientes decidieron de forma consensuada rechazar compartir archivos.',
          'No existía personal técnico capaz de reparar las viejas impresoras de revelado manual.'
        ],
        correctAnswer: 0,
        explanation: 'El paso de Kodak a lo digital redujo el costo marginal de tomar una foto extra a cero absoluto, democratizándola y rompiendo el modelo de negocios basado en procesar químicos de películas físicas de $1.'
      },
      {
        id: 105,
        question: '¿Cuál es la primera etapa de las "6 D" en la aceleración exponencial?',
        options: [
          'Disrupción física de la herencia corporativa.',
          'Desmaterialización de las linternas en smartphones.',
          'Digitalización de un sustrato analógico en información.',
          'Democratización completa del mercado local.'
        ],
        correctAnswer: 2,
        explanation: 'Según las 6 Ds de Peter Diamandis, una vez que una tecnología o producto pasa a ser "Digital" (Digitalización), entra en la curva donde la información acelera exponencialmente su costo-beneficio.'
      }
    ]
  },
  {
    id: 2,
    title: 'El Cerebro Externo: SCALE',
    subtitle: 'El Propósito de Transformación Masiva y los 5 Atributos Externos',
    summary: [
      {
        title: 'El PTM: Ancla de la abundancia',
        content: [
          'Las Organizaciones Exponenciales (ExO) piensan en GRANDE. El Propósito de Transformación Masiva (PTM) es la base que guía la expansión rápida.',
          'No es una declaración de misión o un lema aburrido de "hacer alianzas estratégicas para accionistas". Es una aspiración sincera de transformar el planeta o una industria entera, atrayendo fans, apasionados, hackers y socios autónomos.',
          'Ejemplos: Google ("Organizar la información mundial"), Singularity University ("Impactar positivamente a mil millones de personas"). El PTM sustituye la burocracia canalizando la motivación de una comunidad externa gigantesca.'
        ]
      },
      {
        title: 'Personal a Demanda (Staff on Demand)',
        content: [
          'Consiste en apalancarse y servirse de capital intelectual externo (profesionales independientes, freelancers, comunidades abiertas) en lugar de retener una gran plantilla interna rígida y costosa.',
          'Esto minimiza el overhead jerárquico y permite reclutar rápidamente talento diverso sin trabas burocráticas.',
          'Caso Gigwalk: Con solo unos pocos empleados fijos, despliega a medio millón de operarios que completan micro-tareas de relevamiento comercial con smartphones en todo el mundo, pagándoles por tarea completada.'
        ]
      },
      {
        title: 'Comunidad y Entorno (Community & Crowd)',
        content: [
          'La comunidad son los fans, exalumnos, clientes fieles y socios que comparten el PTM de una ExO. El entorno es el resto del público general (crowd), con billones de horas de tiempo libre de "superávit cognitivo".',
          'Una ExO crea comunidades en público y deja que las personas las encuentren y colaboren de igual a igual.',
          'Caso DIY Drones: Chris Anderson de la revista Wired creó una comunidad donde apasionados diseñaron de forma libre aeronaves teledirigidas con capacidades del 98% de un Predator militar ($300 frente a $4 millones de costo gubernamental).'
        ]
      },
      {
        title: 'Algoritmos y Activos Leveraged (A & L)',
        content: [
          'Algoritmos: Toda ExO se apoya en algoritmos de aprendizaje automático (Machine Learning) o profundo (Deep Learning) para optimizar rutas, emparejar socios, sugerir contenidos y tomar decisiones rápidas libres de sesgos humanos.',
          'Activos Excluidos (Leveraged Assets): Alquilar o apalancarse de recursos existentes en lugar de poseerlos físicamente. Dropbox usa la nube; Airbnb usa los dormitorios extra de usuarios; Uber usa los vehículos subutilizados de dueños particulares.',
          'Si un activo se basa en información o es un bien común, tener acceso libre a él es muy superior a poseerlo bajo el balance de activos tradicional.'
        ]
      },
      {
        title: 'Compromiso (Engagement)',
        content: [
          'Mecanismos para motivar e incentivar a la comunidad externa a interactuar y crear bucles de feedback positivos.',
          'Se logra mediante la gamificación (puntos, tablas de puntuación, niveles), concursos y competencias abiertas de innovación.',
          'Premio Ansari X-Prize: Otorgó $10 millones a quien creara una nave espacial reutilizable autónoma de civiles, atrayendo $100 millones en I+D de 26 equipos.'
        ]
      }
    ],
    examples: [
      {
        company: 'Airbnb',
        description: 'Cero hoteles en propiedad. Apoya su modelo en Activos Externos (Apalancados) y valor de reputación.',
        metric: 'Valor de $10 mil millones superando a Hyatt Hoteles en 2013'
      },
      {
        company: 'Kaggle',
        description: 'Atrae a 185,000 científicos de datos de nivel mundial para competir de forma directa en algoritmos.',
        metric: 'Mejoró un algoritmo tradicional de Allstate de 60 años en un 271% en 3 días'
      },
      {
        company: 'Pep Boys',
        description: 'Adoptó la plataforma Axonify con sistemas de juego diarios para capacitar empleados externos e internos.',
        metric: 'Redujo robos en un 55% e incidentes de seguridad en un 45%'
      }
    ],
    visualAid: {
      type: 'table',
      title: 'Desglose del Acrónimo SCALE',
      headers: ['Letra', 'Atributo Exterior', 'Propósito Estratégico', 'Caso de Ejemplo'],
      rows: [
        ['S', 'Staff on Demand', 'Atracción rápida de un ejército flexible de expertos externos a bajo coste.', 'Gigwalk, oDesk, Kaggle'],
        ['C', 'Community & Crowd', 'Aprovechar la inteligencia colectiva y el superávit cognitivo orbital.', 'DIY Drones, Reddit, Wikipedia'],
        ['A', 'Algorithms', 'Automatizar procesos a gran escala libre de fricción y sesgos cognitivos.', 'PageRank de Google, Rutas de UPS'],
        ['L', 'Leveraged Assets', 'Reducir el CAPEX a cero, operando de forma flexible en activos ajenos.', 'Habitaciones en Airbnb, Flotas de Uber'],
        ['E', 'Engagement', 'Motivar el comportamiento de la comunidad con gamificación y premios.', 'Premio Ansari X-Prize, Pep Boys Axonify']
      ]
    },
    quiz: [
      {
        id: 201,
        question: '¿Cuál de los siguientes no es un atributo externo de SCALE?',
        options: [
          'Staff on Demand (Empleados a demanda)',
          'Leveraged Assets (Activos externos apalancados)',
          'Autonomy (Autonomía descentralizada)',
          'Algorithms (Algoritmos)'
        ],
        correctAnswer: 2,
        explanation: 'La Autonomía (A de IDEAS) es un mecanismo de control INTERNO del cerebro organizativo, no de escala EXTERNA.'
      },
      {
        id: 202,
        question: '¿Qué es el PTM en una organización exponencial?',
        options: [
          'Un Plan de Transportes Marítimos de alta tecnología.',
          'El Propósito de Transformación Masiva: el ancla aspiracional que unifica la organización.',
          'Un Prototipo de Modelo Virtual de experimentación rápida.',
          'La tasa promedio de duplicación marginal de los datos de un servidor.'
        ],
        correctAnswer: 1,
        explanation: 'El PTM (Propósito de Transformación Masiva) es la estrella guía que inspira a equipos y comunidades, apuntando muy alto en impacto planetario o sectorial (ej. TED "Ideas dignas de difundir").'
      },
      {
        id: 203,
        question: '¿Cómo reduce una ExO su CAPEX (gasto de capital fijo) mediante "Leveraged Assets"?',
        options: [
          'Aumentando los salarios fijos corporativos del equipo base.',
          'Evitando adquirir propiedades, flotas o fábricas, alquilándolos o usándolos en un esquema compartido.',
          'Invirtiendo en el mercado de criptomonedas de riesgo.',
          'Duplicando la cantidad de servidores físicos de almacenamiento propio de la empresa.'
        ],
        correctAnswer: 1,
        explanation: 'Al depender de activos que ya existen y están subutilizados (ej: carros de dueños en Uber), las ExOs escalan sus operaciones mundialmente con un gasto marginal casi nulo.'
      },
      {
        id: 204,
        question: '¿Qué es el "superávit cognitivo"?',
        options: [
          'La capacidad ociosa de almacenamiento en memoria de servidores de IA.',
          'El exceso de tiempo libre y de energía mental que la comunidad online puede aportar a proyectos abiertos.',
          'La saturación de datos que ahoga a los empleados de un banco tradicional.',
          'La tasa alta de rotación que afecta negativamente al equipo de Zappos.'
        ],
        correctAnswer: 1,
        explanation: 'Acuñado por Clay Shirky, el superávit cognitivo representa el billón de horas de tiempo libre al año de la humanidad conectada que prefiere colaborar y cocrear en la web en lugar de consumir pasivamente televisión.'
      },
      {
        id: 205,
        question: '¿Qué logro demostró el concurso de algoritmos de Allstate en Kaggle?',
        options: [
          'Que los actuarios de 60 años de experiencia superaron a todos los desconocidos.',
          'Que una idea de un robot autodirigido ganó la carrera de camiones de UPS.',
          'Que científicos de datos externos (no expertos del ramo) superaron un algoritmo interno de 60 años, mejorándolo un 271% en solo 3 días.',
          'Que el ecosistema de Google falló catastróficamente al clasificar fotos.'
        ],
        correctAnswer: 2,
        explanation: 'El concurso demostró el poder de la diversidad y del talento Staff on Demand. Un grupo multidisciplinario de no expertos resolvió un reto actuarial refinado por décadas, disminuyendo drásticamente costos en Allstate.'
      }
    ]
  },
  {
    id: 3,
    title: 'El Cerebro Interno: IDEAS',
    subtitle: 'Mecanismos internos de control y regulación de la abundancia',
    summary: [
      {
        title: 'La Necesidad de Control Interno',
        content: [
          'Si aplicas únicamente los mecanismos externos de abundancia (SCALE), tu organización se romperá bajo un tsunami caótico de datos, aportes de usuarios y miles de ideas desordenadas.',
          'Las ExO necesitan un cerebro izquierdo robusto y automatizado para regular y digerir este flujo. El acrónimo para el control interno es IDEAS.',
          'Cosechar abundancia exige una altísima automatización de procesos internos, reduciendo la distancia entre adquirir información útil y ejecutar la decisión.'
        ]
      },
      {
        title: 'Interfaces (Filtrado de Abundancia)',
        content: [
          'Se definen como los algoritmos y flujos de trabajo automatizados que procesan y canalizan el output de SCALE hacia las personas correctas en el momento oportuno.',
          'Caso App Store de Apple: Un ecosistema de 9 millones de desarrolladores distribuye 1.2 millones de aplicaciones. Su sistema de filtros editoriales y algoritmos automatizados administra este flujo abrumador sin intervención burocrática manual y lenta.',
          'Otros ejemplos de Interfaces: el algoritmo que empareja conductores en Uber, las votaciones de ideas en Quirky y la curaduría automática de repositorios en GitHub.'
        ]
      },
      {
        title: 'Cuadros de Mando (Dashboards)',
        content: [
          'Medir la organización en tiempo real, desechando los "planes de reporte trimestrales o anuales" obsoletos.',
          'Se apoya en la implementación de los OKR de alta frecuencia (Objetivos y Resultados Claves) creados internacionalmente en Intel y popularizados por Google.',
          'Los OKR se definen de abajo hacia arriba de manera transparente (todos en Google pueden ver los OKR de todos, incluido el CEO), motivando la cohesión social y reduciendo drásticamente la latencia corporativa.'
        ]
      },
      {
        title: 'Experimentación y Autonomía (E & A)',
        content: [
          'Experimentación (E): Adoptar Lean Startup de Steve Blank y Eric Ries. Formular hipótesis, crear MVPs (Productos Mínimo Viables), probar con clientes reales rápidos y estar dispuesto a fracasar y "pivotar" de inmediato.',
          'Caso Adobe KickStart: Otorga una caja roja con una guía y una tarjeta cargada con $1,000 libres para validar ideas locas en un plazo de 45 días sin requerir firmas del comité.',
          'Autonomía (A): Equipos pequeños autoorganizados que descartan el jefe tradicional paternalista.',
          'Ejemplo de Valve Corp ($2.5B revenue por empleado): 330 empleados sin gerentes fijos. Las personas colocan ruedas en sus escritorios físicos y los mueven hacia los proyectos del campus ExO en los que deseen trabajar de verdad.'
        ]
      },
      {
        title: 'Tecnologías Sociales (Social Technologies)',
        content: [
          'Integrar herramientas como wikis corporativas, chats en tiempo real, nubes compartidas de archivos de igual a igual (Google Drive, Dropbox) y gestores de tareas sociales (Asana).',
          'Su único objetivo es eliminar la latencia de la de toma de decisiones provocada por correos corporativos "oficiales", fomentando una comunicación horizontal instantánea.',
          'Esto resulta en la "empresa de cero latencia", donde el flujo entre la idea creativa y la implementación en el mercado desaparece por completo.'
        ]
      }
    ],
    examples: [
      {
        company: 'Valve Software',
        description: 'Compañía de videojuegos sin gerentes clásicos ni descripciones fijas de puestos de trabajo.',
        metric: 'Generación récord de utilidades por empleado (más alta que Google y Apple)'
      },
      {
        company: 'Zappos.com',
        description: 'La tienda de calzado en línea adoptó la Holocracia absoluta para descentralizar la autoridad.',
        metric: 'Reemplazó el mando tradicional eliminando títulos fijos de 1,500 personas'
      },
      {
        company: 'Adobe',
        description: 'Implementó el taller de innovación abierta KickStart con capital semilla instantáneo.',
        metric: 'Participación masiva del 8% de toda su plantilla interna en experimentación real en 1 año'
      }
    ],
    visualAid: {
      type: 'table',
      title: 'Desglose del Acrónimo IDEAS',
      headers: ['Letra', 'Atributo Interno', 'Objetivo de Control', 'Caso de Ejemplo'],
      rows: [
        ['I', 'Interfaces', 'Automatizar el procesamiento del tsunami de SCALE hacia dentro.', 'App Store de Apple, Quirky Voting'],
        ['D', 'Dashboards', 'Administrar indicadores bajo OKRs transparentes en tiempo real.', 'OKRs públicos de Google y LinkedIn'],
        ['E', 'Experimentation', 'Lanzar MVPs rápidos y promover iteraciones científicas sin miedo al error.', 'Caja KickStart de Adobe, Kaizen de Apple'],
        ['A', 'Autonomy', 'Habilitar la innovación sin permiso con equipos autoorganizados descentralizados.', 'Valve Software, CLOUs de Morning Star'],
        ['S', 'Social Technologies', 'Reducir la latencia horizontal eliminando jerarquías de correo corporativo.', 'Uso integrado de GitHub, Asana y Slack']
      ]
    },
    quiz: [
      {
        id: 301,
        question: '¿Cuál es la función principal de las "Interfaces" en las ExO?',
        options: [
          'Adquirir más activos de hardware pesado para almacenar datos.',
          'Manejar el mercadeo de la compañía en campañas de televisión tradicional.',
          'Procesar y filtrar el volumen gigante y abundante del exterior de manera automatizada.',
          'Prevenir que la mesa directiva revise los estados de flujo de caja.'
        ],
        correctAnswer: 2,
        explanation: 'Las interfaces (I de IDEAS) automatizan los nexos entre las externalidades masivas de SCALE (Crowd, Staff, Assets) y el núcleo de la empresa de manera que el sistema escale sin trabas manuales.'
      },
      {
        id: 302,
        question: '¿Cuál es un principio central del sistema de "Dashboards" y OKRs en las ExO?',
        options: [
          'Mantener las metas y el rendimiento individual completamente secretos para evitar pánico.',
          'Establecer objetivos exclusivamente cualitativos de arriba hacia abajo que castiguen el error.',
          'La transparencia total y pública de los objetivos y el seguimiento a tiempo real de abajo hacia arriba.',
          'Actualizar los planes estratégicos únicamente cada 5 años en un documento cerrado.'
        ],
        correctAnswer: 2,
        explanation: 'En ExOs como Google o LinkedIn, los OKRs son transparentes para toda la empresa; cualquiera puede ver las métricas de sus pares o líderes, agilizando el feedback horizontal.'
      },
      {
        id: 303,
        question: '¿En qué consiste el experimento de la caja "KickStart" de Adobe?',
        options: [
          'En un software robotizado que de manera aleatoria sabotea el código web.',
          'En un kit con $1,000 y una guía paso a paso para que cualquier empleado valide hipótesis con clientes reales en 45 días.',
          'En evaluar con ADN perfiles de los ingenieros de software para predecir si renunciarán.',
          'En comprar 10 conejillos de indias de laboratorio para testear sensores biométricos.'
        ],
        correctAnswer: 1,
        explanation: 'Adobe habilitó la experimentación científica y el emprendimiento interno entregando tarjetas de crédito con $1,000 cargados y autonomía total para validar un MVP.'
      },
      {
        id: 304,
        question: '¿Qué caracteriza la estructura operativa interna de "Valve Software"?',
        options: [
          'La fijación rígida de roles jerárquicos y revisiones de rendimiento de 360 grados obligatorias.',
          'Que el CEO aprueba obligatoriamente todo cambio o línea de código mediante firmas escritas.',
          'Un campus móvil donde no hay gerentes fijos y los escritorios con ruedas permiten unirse de forma libre a proyectos motivantes.',
          'La prohibición total del uso de tecnologías sociales externas.'
        ],
        correctAnswer: 2,
        explanation: 'Valve opera bajo un esquema de Autonomía total. Los empleados mueven literalmente suss escritorios a los grupos que lideran proyectos que coinciden con su pasión y el PTM de la empresa.'
      },
      {
        id: 305,
        question: '¿Cuál es el beneficio de sustituir el email corporativo tradicional por "Tecnologías Sociales"?',
        options: [
          'Facilitar los despidos masivos al registrar datos biométricos puntualmente.',
          'Reducir drásticamente la latencia y la distancia entre la información fluida y la toma de decisiones.',
          'Lograr que los reguladores aprueben patentes con mayor celeridad legal.',
          'Incentivar a los programadores a apagar sus equipos los días de entrega.'
        ],
        correctAnswer: 1,
        explanation: 'Las tecnologías sociales abiertas asincrónicas (como Asana, wikis, Slack) transforman la comunicación interna. La información relevante fluye libremente en la organización, recortando demoras de aprobaciones burocráticas.'
      }
    ]
  },
  {
    id: 4,
    title: 'Implicaciones y Disrupción Exponencial',
    subtitle: 'Las 6 D, la desmaterialización de activos y el fin del plan institucional de 5 años',
    summary: [
      {
        title: 'El Ciclo de las 6 D del Cambio Técnico',
        content: [
          'El paso de un sustrato material a la información genera un tsunami económico descrito por Peter Diamandis en 6 etapas secuenciales.',
          '1) Digitalizar: El proceso pasa a almacenarse en ceros y unos (fotos analógicas a archivos JPG, CD físico a archivo digital MP3).',
          '2) Distorsionar: Inicialmente, la duplicación exponencial de cifras diminutas (0.01 -> 0.02) parece lineal o invisible. Muchos la subestiman.',
          '3) Disrumpir: La potencia es tan alta que el mercado analógico quiebra súbitamente (Wikipedia disrumpiendo enciclopedias impresas).',
          '4) Desmaterializar: Múltiples aparatos se disuelven en aplicaciones de software (la linterna, el calculador, el GPS y la grabadora se alojan gratis en tu smartphone).',
          '5) Desmonetizar: El costo marginal de producción y distribución se desploma a cero absoluto.',
          '6) Democratizar: Las herramientas de alta gama se vuelven accesibles para cualquier persona en el planeta.'
        ]
      },
      {
        title: 'Muerte al Plan Quinquenal de Negocios',
        content: [
          'Históricamente, los departamentos de estrategia elaboraban pesados "planes de 5 años". Pero en un mundo exponencial, un plan rígido a mediano plazo es una práctica suicida.',
          'El futuro cambia tan velozmente que los planes a 5 años plantean escenarios irreales y desactualizados, actuando como un lastre operacional que sofoca la reacción de la empresa.',
          'La alternativa en ExOs: El PTM actúa como brújula fija emocional a largo plazo, acoplada a planes de operación ágiles de un año como máximo, adaptándose al curso a tiempo real del mercado.'
        ]
      },
      {
        title: 'El Caso TED y la Plataforma de Franquicia del Saber',
        content: [
          'En 2001, TED era una conferencia anual selecta y cerrada en Monterrey. Se estancó en crecimiento anual de ingresos y alcance geográfico de mercado.',
          'Chris Anderson adquirió TED y aplicó dos cambios exponenciales radicales: Regaló las prestigiosas charlas filmadas de forma totalmente gratuita en la web, y creó el kit franquiciado "TEDx" para que cualquier fan creara su propio evento local de igual a igual.',
          'Muchos analistas lineales predijeron que regalar el contenido de alta gama destruiría la venta de boletos de la conferencia nuclear. Sin embargo, generó una explosión cultural: las charlas recibieron miles de millones de visitas y la marca se viralizó de una forma salvaje en todo el mundo.'
        ]
      }
    ],
    examples: [
      {
        company: 'TED / TEDx',
        description: 'Dio acceso libre a su saber mediante video en línea y liberó la franquicia de eventos locales de forma descentralizada.',
        metric: 'Más de 12,000 eventos TEDx celebrados de forma espontánea por voluntarios'
      },
      {
        company: 'Craigslist / eBay',
        description: 'Desmonetizaron y desmaterializaron la sección física pagada de clasificados de periódicos impresos obsoletos.',
        metric: 'Provocó una caída monumental del 80% de ingresos de periódicos en EE.UU.'
      },
      {
        company: 'Wikipedia',
        description: 'Democratizó el acceso al saber, destruyendo la Enciclopedia Británica tradicional de costo elevado de impresión.',
        metric: 'Sustituyó y expandió por 100 veces el contenido de las enciclopedias impresas'
      }
    ],
    visualAid: {
      type: 'compare',
      title: 'El Ciclo Exponencial de las 6 D',
      labels: [
        { title: '1- Digitalización', left: 'Representar procesos y activos analógicos rígidos del mundo físico en datos y bytes.', right: 'Fotografía química -> Archivo digital JPG. Mapas de Navteq -> Flujo digital en Waze.' },
        { title: '2- Distorsión', left: 'Periodo de crecimiento inicial aparentemente invisible donde la duplicación parece cero.', right: 'Pasar de 0.01% a 0.02% de penetración. Los competidores tradicionales del sector lo desprecian.' },
        { title: '3- Disrupción', left: 'La tecnología emergente explota, superando el costo-beneficio del modelo tradicional.', right: 'Uso ubicuo del smartphone barriendo las líneas fijas y cámaras compactas tradicionales.' },
        { title: '4- Desmaterialización', left: 'Los objetos y equipamientos físicos costosos se transforman en bits y software gratuito.', right: 'Linternas, GPSs, grabadoras, cámaras, mapas físicos integrados como apps gratuitas.' },
        { title: '5- Desmonetización', left: 'El costo marginal de entregar un producto extra cae a cero absoluto.', right: 'Instagram compartiendo miles de millones de fotos sin costo de negativos ni químicos.' },
        { title: '6- Democratización', left: 'El equipamiento o recurso que antes requería corporaciones multimillonarias pasa a estar al alcance de todos.', right: 'Impresoras 3D hogareñas por $100, micro-laboratorios de ADN por $500, APIs libres de IA.' }
      ]
    },
    quiz: [
      {
        id: 401,
        question: '¿Por qué el "plan quinquenal tradicional de negocios" es obsoleto en la era ExO?',
        options: [
          'Porque redactarlos requiere sistemas de dibujo obsoletos.',
          'Porque la rapidez del cambio de la información genera escenarios simulados irreales, actuando como un lastre rígido corporativo.',
          'Porque los gobiernos prohibieron los monopolios planificados.',
          'Porque los empleados rechazan leer documentos extensos los fines de semana.'
        ],
        correctAnswer: 1,
        explanation: 'En entornos exponenciales, planear rígidamente a 5 años es suicida ya que las duplicaciones tecnológicas disrumpen constantemente las asunciones básicas. Es superior usar un PTM como brújula y ajustar planes ágiles anuales.'
      },
      {
        id: 402,
        question: '¿Qué paso de las 6 D describe cuando un dispositivo físico y costoso pasa a ser una app gratuita de software?',
        options: [
          'Democratización total.',
          'Desmaterialización de activos.',
          'Digitalización inicial.',
          'Diversificación Kaizen.'
        ],
        correctAnswer: 1,
        explanation: 'La desmaterialización disuelve el hardware existente en bits y software (ej. smartphones absorbiendo calculadoras, GPS, reproductores MP3 y brújulas).'
      },
      {
        id: 403,
        question: '¿Qué paradoja de mercado ocurrió cuando TED decidió regalar todas sus prestigiosas charlas en video gratis en la web?',
        options: [
          'La empresa quebró a los 3 meses por carecer de patrocinadores de peso.',
          'Los boletos de la conferencia física nuclear aumentaron de valor y se agotaron masivamente impulsados por la viralidad del contenido regalado.',
          'Obligaron a los conferencistas a pagar por filmar sus propias charlas.',
          'Cientos de universidades demandaron a TED por usurpar el rol escolar tradicional.'
        ],
        correctAnswer: 1,
        explanation: 'Al regalar las charlas (desmonetizando y democratizando el saber), TED creó una comunidad global inmensa de entusiastas, lo que disparó exponencialmente el estatus de la marca y la venta hiper-selectiva de pases físicos.'
      },
      {
        id: 404,
        question: '¿Qué sesgo mental tradicional frena a las grandes compañías de "desmonetizar" sus productos antes que otros?',
        options: [
          'El sesgo de confirmación y el sesgo de costo hundido (aferrarse a la inversión pesada hecha en el negocio analógico).',
          'La obsesión por contratar jóvenes inexpertos.',
          'El miedo exagerado a la regulación de la propiedad intelectual fraccional.',
          'La ausencia total de científicos de datos entrenados.'
        ],
        correctAnswer: 0,
        explanation: 'El sesgo de costo hundido ata emocionalmente del directivo tradicional al modelo viejo porque gastó millones (ej. Kodak con celuloide o Nokia con Navteq), impidiendo disrumpir el propio negocio antes de que un competidor exponencial lo barra.'
      },
      {
        id: 405,
        question: '¿Qué ocurre en el codo de aceleración extrema en la fase de "Distorsión"?',
        options: [
          'La curva se desploma a niveles negativos irrelevantes.',
          'El crecimiento pasa de parecer invisible o cercano a cero a multiplicarse de forma trepidante y disruptiva.',
          'Los accionistas demandan obligatoriamente la disolución de la Holocracia.',
          'Los algoritmos sustituyen por completo el PTM fundacional.'
        ],
        correctAnswer: 1,
        explanation: 'La distorsión inicial oculta la potencia real (0.01% al 0.02% parece un fracaso), pero una vez superado el codo o punto de quiebre de la curva (ej: secuenciación del ADN, impresoras 3D), el crecimiento geométrico arrolla a los escépticos lineales.'
      }
    ]
  },
  {
    id: 5,
    title: 'Creación y Proceso de una ExO',
    subtitle: 'Los 12 pasos para lanzar tu startup exponencial y encontrar tu modelo de negocios',
    summary: [
      {
        title: 'El Enfoque en el Problema, No la Idea',
        content: [
          'Contrario al mito popular que dicta que una startup nace de "una brillante tecnología loca", los fundadores exponenciales excelentes se obsesionan por resolver un PROBLEMA planetario doloroso (PTM).',
          'Centrarse en el espacio de un problema nos mantiene flexibles: si la idea de tecnología inicial falla, pivotas con rapidez hacia otra solución. Si te aferras ciegamente a una idea rígida, intentarás forzar una tecnología en un espacio donde no calza, sumándote en los "cadáveres de Silicon Valley".'
        ]
      },
      {
        title: 'Los Primeros Pasos del Empuje ExO',
        content: [
          'Paso 1: Elige un PTM apasionante. Responde a la pregunta: ¿Cuál es el mayor dolor del planeta que me apasiona solventar?',
          'Paso 2: Une o crea comunidades PTM afines (ej: foros abiertos de entusiastas, investigadores).',
          'Paso 3: Construye un equipo fundador sinérgico. Típicamente 3 cofundadores treintañeros y de peso técnico. Los roles clave: El Soñador/Visionario, el UX Designer (diseñador de la experiencia de usuario), el Programador/Ingeniero, el Finanzista/Negociador.'
        ]
      },
      {
        title: 'El Business Model Canvas de una ExO',
        content: [
          'Paso 4: Propone una idea revolucionaria que logre una mejora de 10 veces frente al statu quo analógico tradicional.',
          'Paso 5: Construye un Canvas de Modelo de Negocio (Alexander Osterwalder) simplificado.',
          'Paso 6: Encuentra el modelo de negocios exponencial propiamente dicho (modelos Freemium, gratis, de acceso abierto, de suscripción mensual basados en la abundancia de bits).'
        ]
      },
      {
        title: 'Del PMV a la Escala de Atributos',
        content: [
          'Paso 7: Construye tu PMV (Producto Mínimo Viable). Es el experimento de software más rústico y simple posible lanzado a testear hipótesis básicas con el cliente de forma empírica.',
          'Paso 8: Valida Marketing y Ventas (Modelo Pirata "AARRR": Adquisición, Activación, Retención, Retorno, Referencias).',
          'Paso 9: Implementa e inyecta los atributos de SCALE (exterior) e IDEAS (interior). Determina cuáles de los 11 encajan estratégicamente en tu modelo (ej: Airbnb usó Leveraged Assets y Community; GitHub usó Autonomy, Social Tech y Community).'
        ]
      }
    ],
    examples: [
      {
        company: 'Local Motors',
        description: 'Construyó el Rally Fighter, el primer automóvil creado 100% por crowdsourcing con el diseño abierto en Creative Commons.',
        metric: 'Desarrolló un vehículo 5 veces más rápido y por una fracción (0.1%) de los costos de automotrices clásicas ($3 millones frente a $3,000 millones)'
      },
      {
        company: 'GoPro',
        description: 'Fundada por Nick Woodman sobre el PTM "Ayudar a capturar y compartir experiencias". Apoyó su producción en Foxconn (Activos Externos).',
        metric: 'Multiplicó sus ventas físicas por más de 50 veces en un plazo de 5 años'
      },
      {
        company: 'PayPal (La Mafia PayPal)',
        description: 'Fundores (Musk, Thiel, Hoffman, Levchin) basaron su inicio en una cultura íntima de amistad en vez de jerarquías frías corporativas.',
        metric: 'Cofundadores ayudaron a crear Tesla, LinkedIn, YouTube, Yelp y Palantir'
      }
    ],
    visualAid: {
      type: 'table',
      title: 'Los 12 Pasos del Lanzamiento ExO',
      headers: ['Paso', 'Nombre del Paso', 'Descripción e Implementación Rápida'],
      rows: [
        ['Paso 1', 'Elige un PTM', 'Encuentra tu pasión resolviendo un problema doloroso planetario.'],
        ['Paso 2', 'Une/Crea Comunidades', 'Ubica entusiastas del PTM y cocrea en foros abiertos en línea.'],
        ['Paso 3', 'Construye un Equipo', 'Genera sinergia uniendo al Visionario, el UX, el Programador y Finanzas.'],
        ['Paso 4', 'Idea Revolucionaria', 'Planea una mejora de 10x que disminuya el costo de suministro de forma drástica.'],
        ['Paso 5', 'Canvas de Negocios', 'Diseña los bloques principales simples de valor, canales y flujos.'],
        ['Paso 6', 'Encuentra un Modelo', 'Apóyate en esquemas Freemium, plataformas, accesos y de suscripción.'],
        ['Paso 7', 'Construye el PMV', 'Lanza la versión de software más rústica y simple posible para testar hipótesis.'],
        ['Paso 8', 'Valida Ventas AARRR', 'Adquisición, Activación, Retención, Retorno y Referencias de usuarios.'],
        ['Paso 9', 'Implementa SCALE/IDEAS', 'Equipa tu startup con 3 o 4 atributos clave de escala internos y externos.'],
        ['Paso 10', 'Establece la Cultura', 'Ancla la cultura en el PTM, rituales íntimos de transparencia y confianza abierta.'],
        ['Paso 11', 'Preguntas Periódicas', 'Hazte periódicamente las 8 preguntas críticas ExO (ej. ¿Costo de suministro a cero?).'],
        ['Paso 12', 'Construye Plataforma', 'Transforma tu ExO exitosa en una plataforma simbiótica donde surjan otras ExOs.']
      ]
    },
    quiz: [
      {
        id: 501,
        question: '¿Por qué la metodología ExO aconseja centrar la startup en el "espacio de un problema" antes de atarse a una "única tecnología"?',
        options: [
          'Porque redactar patentes tecnológicas es ilegal en etapas tempranas.',
          'Porque centrarse en el problema nos mantiene flexibles para pivotar, evitando encajar la tecnología a toda costa en un espacio donde no cabe.',
          'Porque los inversionistas rechazan financiar patentes de software complejas.',
          'Porque los programadores prefieren solucionar problemas matemáticos que crear código visual.'
        ],
        correctAnswer: 1,
        explanation: 'Enfocarse en resolver un problema (PTM) evita el romance ciego con una sola idea rígida de hardware o código que luego a los clientes no interese. Calibras y pivotas con libertad analizando datos.'
      },
      {
        id: 502,
        question: '¿Qué conforma el equipo fundador clásico de una ExO según la experiencia de Silicon Valley?',
        options: [
          'Un gran equipo de 50 ejecutivos maduros optimizadores de finanzas tradicionales.',
          'Típicamente 3 cofundadores de peso técnico con los roles del Visionario, el Diseñador UX, el Programador y el experto de Finanzas.',
          'Un director ejecutivo único contratado por la banca de inversión de Wall Street.',
          'Un robot inteligente de automatización de código asincrónico.'
        ],
        correctAnswer: 1,
        explanation: 'Las ExOs triunfadoras suelen arrancar con un equipo multidisciplinario pequeño de 3 personas promedio, balanceando la generación de ideas y el descubrimiento de valor con la entrega meticulosa y el código de software.'
      },
      {
        id: 503,
        question: '¿Qué es el PMV o MVP en el desarrollo ágil corporativo?',
        options: [
          'Un Prototipo de Medida de Ventas de alto volumen financiero.',
          'La versión más rústica, simple y económica posible de un producto lanzada al mercado para validar empíricamente hipótesis del cliente.',
          'El programador más valioso de la organización (Most Valuable Programmer).',
          'La patente final perfectamente aprobada y cerrada frente a copia ilegal.'
        ],
        correctAnswer: 1,
        explanation: 'El PMV (Producto Mínimo Viable) es el núcleo de la experimentación. Se valida velozmente de forma científica con usuarios finales si la solución capta interés, descartando ideas malas con un costo bajísimo.'
      },
      {
        id: 504,
        question: '¿Qué describe el modelo pirata "AARRR" para validación rápida de mercado?',
        options: [
          'Adquisición, Activación, Retención, Retorno, Referencias: las capas que describen el embudo para fidelizar usuarios.',
          'Alarmas, Algoritmos, Redes, Rutas, Regulaciones: la automatización técnica de camiones de Coyote Logistics.',
          'Aversión al riesgo, Anclaje, Abundancia, Autonomía total, Aceptación regulatoria.',
          'Ataque inmunitario, Aplanamiento jerárquico, Aceleración, Alquiler de activos, Aprobación regulatoria.'
        ],
        correctAnswer: 0,
        explanation: 'El modelo onomatopéyico pirata AARRR de Dave McClure sirve para evaluar de forma cuantitativa cómo transicionan los usuarios desde descubrir el servicio (Adquisición), tener una buena experiencia inicial (Activación), regresar (Retención), pagar (Retorno) y recomendarnos (Referencias).'
      },
      {
        id: 505,
        question: '¿Por qué la quiebra del monopolio de la cámara Flip comprada por Cisco es un ejemplo relevante?',
        options: [
          'Porque la cámara Flip no tenía baterías de ion-litio.',
          'Porque Cisco aplicó un modelo corporativo de alta burocracia, e ignoraron la disrupción salvaje de la lente y video HD agregada de serie gratis en el iPhone.',
          'Porque el gobierno de EE.UU. multó a Cisco por fijación de precios monopolísticos.',
          'Porque Cisco decidió de forma voluntaria regalar la tecnología de video analógico libremente.'
        ],
        correctAnswer: 1,
        explanation: 'Cisco gastó $600 millones para poseer la tecnología de la cámara de bolsillo Flip. No obstante, Woodman con GoPro HD Hero desmaterializó y revolucionó la experiencia con cámaras baratas adaptables orientadas a comunidades apasionadas, barriendo el modelo rígido lineal.'
      }
    ]
  },
  {
    id: 6,
    title: 'ExO para Corporaciones y el Ejecutivo',
    subtitle: 'El Sistema Inmunitario Corporativo, los Líderes ExO y las Estrategias de Frontera',
    summary: [
      {
        title: 'El Sistema Inmunitario de la Corporación',
        content: [
          'El mayor peligro que acecha a la innovación en una gran empresa no procede del mercado... ¡procede de adentro!',
          'Se le llama "Sistema Inmunitario Corporativo". Los gerentes corporativos tradicionales, entrenados para mitigar riesgos, proteger el statu quo y reportar ganancias trimestrales (los llamados "anticuerpos corporativos"), perciben cualquier cambio radical disruptivo como una amenaza.',
          'Atacan y destruyen los proyectos innovadores internos, exigiendo de inmediato reportajes rígidos, contabilidad lineal y retornos de inversión prematuros que ahogan la etapa experimental (ej: Brickhouse en Yahoo).'
        ]
      },
      {
        title: 'Estrategias de Frontera: Scaling Edge',
        content: [
          '¿Cómo se innova con éxito en una gran corporación sin que los anticuerpos destruyan el brote?',
          'Estrategia "Scaling Edge" (John Hagel): NO intentes cambiar o canibalizar el modelo central de la empresa desde adentro. Esto desatará el ataque inmunitario masivo.',
          'La alternativa: Establece la innovación de forma completamente autónoma en la FRONTERA física de la organización. Pon al mando a un líder "Evangelista", con poco dinero inicial (fuerza la creatividad), y protégelo físicamente, conectándolo con comunidades externas. Solo cuando tenga masa crítica enorme en la frontera, inicia la migración corporativa.'
        ]
      },
      {
        title: 'Liderazgo Corporativo Exponencial',
        content: [
          'El ejecutivo de nivel C se reformula por completo en la era de la abundancia.',
          '**CXO (Chief Exponential Officer)**: El rol definitivo del CEO del futuro que lidera con visión sintonizada a la Ley de Moore, abriendo patentes y fusionándose con startups para dinamizar el curso corporativo.',
          '**CDO (Chief Data Officer)**: El directivo de datos que evita la trampa de las "métricas de vanidad", automatizando la inteligencia del negocio y construyendo interfaces simbióticas.',
          '**CHRO (Chief Human Resources Officer)**: Recluta basados en potencial, alfabetización frente al riesgo y "reverse mentoring" (jóvenes digitalmente nativos asesorando al Consejo directivo).'
        ]
      }
    ],
    examples: [
      {
        company: 'La Compañía Coca-Cola',
        description: 'Formuló el PTM "Refrescar al mundo". Aplicó Lean Startup lanzando múltiples MVPs independientes de marca.',
        metric: 'Mejoró sus objetivos de rentabilidad y sostenibilidad en un 20% en tiempo récord'
      },
      {
        company: 'Haier Corp',
        description: 'El visionario Zhang Ruimin disolvió toda la gerencia media de su gigante de electrodomésticos chino de 80,000 personal.',
        metric: 'Dividió la organización en 2,000 células autogestionadas (ZZJYT) centradas en la demanda del cliente final'
      },
      {
        company: 'Zappos (Holacracy)',
        description: 'Tony Hsieh eliminó por completo los títulos de puestos y jerarquías clásicas con confianza total en su gente.',
        metric: 'Llamada de servicio al cliente más larga registrada de 10 horas y 29 minutos sin guiones fijos'
      }
    ],
    visualAid: {
      type: 'compare',
      title: 'El Conflicto: Sistema Inmunitario vs Estrategia de Frontera',
      labels: [
        { title: 'Definición', left: 'Sistema Inmunitario: Los gerentes y departamentos tradicionales protegen celosamente las líneas existentes de ingresos.', right: 'Estrategia de Frontera: Equipos pequeños, autónomos e interdisciplinarios operan lejos de la sede central de la empresa.' },
        { title: 'Reacción típica', left: '"¿Por qué se llevan a mis mejores ingenieros? Están canibalizando mi producto nuclear corporativo."', right: 'Usa poco capital corporativo inicial (para forzar la creatividad), validando ideas rápidas con comunidades externas.' },
        { title: 'Manejo Directivo', left: 'Intento de asimilar y absorber la startup innovadora dentro de las 5 divisiones existentes de la empresa, ahogándola en reportes.', right: 'El líder innovador reporta de forma directa y formal única y exclusivamente con el CEO, aislando al equipo de la burocracia.' },
        { title: 'Destino final', left: 'Desaparición prematura de la innovación (como Brickhouse en Yahoo en 2008).', right: 'La empresa en la frontera alcanza masa crítica pesada, sustituyendo el núcleo analógico heredado (ej. iTunes/iPhone disrumpiendo a Apple).' }
      ]
    },
    quiz: [
      {
        id: 601,
        question: '¿Qué es el "Sistema Inmunitario Corporativo"?',
        options: [
          'La resistencia física que muestran los ingenieros al trabajar horas extra.',
          'La respuesta burocrática y de control de los gerentes tradicionales que ataca y ahoga la innovación radical interna por proteger el statu quo.',
          'El departamento médico de seguridad social de una gran distribuidora de fármacos.',
          'Sistemas avanzados de ciberseguridad contra hackeos de USBs en aparcamientos.'
        ],
        correctAnswer: 1,
        explanation: 'Acuñado por Salim Ismail, describe a los "anticuerpos corporativos" (gerencia tradicional motivada por rendimientos lineales predecibles) boicoteando, aislada o explícitamente, los brotes rápidos de innovación experimental.'
      },
      {
        id: 602,
        question: 'Según la estrategia de "Scaling Edge" de John Hagel, ¿dónde se debe ubicar la innovación radical?',
        options: [
          'En el núcleo central operativo de la empresa, forzando a los gerentes de marca a adoptar Holocracia de la noche a la mañana.',
          'En las fronteras de la organización como un ente aislado, autónomo y sin canibalizar el producto nuclear al inicio.',
          'Únicamente en foros informales de la página de Facebook de la compañía.',
          'Se debe externalizar de forma obligatoria en su totalidad a manufactureras en China.'
        ],
        correctAnswer: 1,
        explanation: 'Para evitar activar la destructiva respuesta inmunitaria corporativa, el nuevo proyecto exponencial debe crecer de forma protegida y silenciosa en las fronteras, logrando masa crítica antes de la integración.'
      },
      {
        id: 603,
        question: '¿Qué innovadora reforma aplicó Zhang Ruimin a los 80,000 empleados del gigante chino Haier?',
        options: [
          'Los despidió de forma masiva para contratar exclusivamente Staff on Demand temporal.',
          'Eliminó por completo la gerencia media y los dividió en 2,000 unidades de negocio autogestionadas (ZZJYT) independientes.',
          'Los obligó a mudarse físicamente a las instalaciones de mach49 en Silicon Valley.',
          'Reemplazó el email por un software de reconocimiento facial robótico diario.'
        ],
        correctAnswer: 1,
        explanation: 'Haier rompió la pesada pirámide lineal. Reorganizó su masa colectiva en 2,000 micro-organizaciones autónomas enfocadas directamente al mercado que votaban trimestralmente a sus propios líderes.'
      },
      {
        id: 604,
        question: '¿Qué rol adquiere la "mentoría inversa" (reverse mentoring) en Recursos Humanos ExO?',
        options: [
          'Que las máquinas de IA enseñan costura técnica a los operarios.',
          'La contratación de psicólogos especializados en aversión a pérdidas.',
          'Jóvenes empleados de la generación del milenio que cubren brechas tecnológicas y educan al Consejo Directivo y líderes de nivel C.',
          'Asignar de forma aleatoria roles de gerencia media a los optimizadores corporativos.'
        ],
        correctAnswer: 2,
        explanation: 'En las ExOs (como Starbucks con Clara Shih ingresando al Consejo directivo a los 31 años), los nativos digitales capacitan y despiertan a los veteranos ejecutivos corporativos lineales sobre el metabolismo vertiginoso de la web.'
      },
      {
        id: 605,
        question: '¿Por qué falló Brickhouse tras su lanzamiento en Yahoo en 2007?',
        options: [
          'Porque sus diseñadores fallaron en crear prototipos móviles básicos.',
          'Porque el mercado de Internet para el consumidor se extinguió en 2008.',
          'Porque Yahoo intentó asimilar a Brickhouse para construir productos del mercado central nuclear, permitiendo a los celos e interferencias burocráticas destruir su autonomía.',
          'Porque Google compró la incubadora por una suma millonaria hostil.'
        ],
        correctAnswer: 2,
        explanation: 'A pesar del excelentísimo equipo reunido, el sistema inmunitario de Yahoo deshechó la autonomía de Brickhouse. Yahoo la forzó a operar bajo la aprobación rígida de comités tradicionales de marca y legal, matando el brote ágil.'
      }
    ]
  }
];
