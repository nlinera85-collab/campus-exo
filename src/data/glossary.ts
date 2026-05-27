import { GlossaryItem } from '../types';

export const glossaryData: GlossaryItem[] = [
  {
    id: 'ptm',
    term: 'PTM (Propósito de Transformación Masiva)',
    category: 'General',
    definition: 'El propósito mayor y aspiracional al que se dirige una organización exponencial. No es una simple declaración de misión interna (ej: Cisco o Microsoft tradicional), sino una visión que captura el corazón y la mente de las personas dentro y fuera del ecosistema (ej: "Organización de la información mundial" de Google, o "Ideas dignas de difundir" de TED). Genera un "movimiento cultural" y un "poder de atracción" autónomo.',
    example: 'Singularity University busca "Impactar positivamente a mil millones de personas". Quirky busca "Haz la invención accesible".'
  },
  {
    id: 'momento_iridium',
    term: 'Momento Iridium',
    category: 'General',
    definition: 'Ocurre cuando una compañía utiliza herramientas corporativas lineales y tendencias del pasado para predecir un futuro que se acelera de forma exponencial, lo que resulta en un fracaso catastrófico. Proviene del proyecto satelital de Motorola, "Iridium", el cual se basó en proyecciones fijas tomadas 12 años antes de que el sistema fuera operativo, ignorando la caída rápida de costos y miniaturización de las torres celulares físicas terrestres en la década de los 90.',
    example: 'Fracaso masivo de Motorola Iridium (pérdida de $5,000 millones), o Eastman Kodak declarando bancarrota en 2012 tras rechazar la cámara digital que ellos mismos inventaron.'
  },
  {
    id: 'ley_de_moore',
    term: 'Ley de Moore',
    category: 'Metodología',
    definition: 'La ley empírica enunciada por Gordon Moore que indica que la potencia/rendimiento de la computación (la cantidad de transistores en un microchip) se duplica aproximadamente cada 18 a 24 meses mientras que su costo cae a la mitad. Salim Ismail destaca que este fenómeno de duplicación se aplica a CUALQUIER tecnología basada en la información (sensores, 3D, biología sintética, robótica).',
    example: 'El costo de secuenciar un genoma humano completo cayó de $10 millones en 2007 (analógico) a $1,000 en 2014, un ritmo 5 veces más rápido que la Ley de Moore.'
  },
  {
    id: 'staff_on_demand',
    term: 'Staff on Demand (S)',
    category: 'SCALE',
    definition: 'Mecanismo externo de SCALE que consiste en contratar personal de forma temporal y flexible según el trabajo lo requiera, en lugar de mantener una costosa plantilla interna contratada a tiempo completo. Esto disminuye la burocracia, aumenta la agilidad y fomenta una diversidad masiva de ideas.',
    example: 'Gigwalk utilizando medio millón de operarios móviles con smartphones para revisar góndolas de Walmart, o Kaggle con 185,000 expertos compitiendo de forma abierta.'
  },
  {
    id: 'community_crowd',
    term: 'Community & Crowd (C)',
    category: 'SCALE',
    definition: 'Mecanismo externo consistente en construir una comunidad (usuarios, fans, exalumnos y socios que comparten el PTM de la organización) y aprovechar el entorno (crowd, millones de personas fuera de la red nuclear con tiempo libre y superávit cognitivo) para validar productos, ideas, financiamiento y marketing.',
    example: 'Chris Anderson liderando DIY Drones (55,000 miembros creando un dron Predator militarizado por $300 en lugar del costo del gobierno de $4M), o plataformas de Crowdfunding como Kickstarter que democratizan el capital.'
  },
  {
    id: 'algorithms',
    term: 'Algorithms (A)',
    category: 'SCALE',
    definition: 'Mecanismo de escala que utiliza algoritmos informáticos, Aprendizaje Automático (Machine Learning) y Aprendizaje Profundo (Deep Learning con redes neuronales de múltiples capas) para automatizar procesos y decisiones, prescindiendo de la lenta e imprecisa intuición puramente humana (sesgos cognitivos como el de confirmación, aversión al riesgo o falacia de planificación).',
    example: 'Algoritmo PageRank de Google para ordenar la popularidad de la web, o UPS ahorrando $2.55 mil millones y 85 millones de millas al usar telemática algoritmos de rutas de camiones.'
  },
  {
    id: 'leveraged_assets',
    term: 'Leveraged Assets (L)',
    category: 'SCALE',
    definition: 'La estrategia de no adquirir ni poseer activos físicos o equipamiento, sino depender del alquiler, uso compartido o plataformas colaborativas. Esto reduce el CAPEX (gasto de capital fijo) a un costo variable bajo en el estado de Pérdidas y Ganancias, permitiendo un escalamiento con costos marginales cercanos a cero.',
    example: 'Airbnb gestionando 500,000 anuncios de habitaciones en 33,000 ciudades en 2013 sin poseer ningún inmueble propio, o Uber prescindiendo de la propiedad de vehículos.'
  },
  {
    id: 'engagement',
    term: 'Engagement (E)',
    category: 'SCALE',
    definition: 'El uso de dinámicas de juegos (gamificación), sistemas de reputación digital, incentivos virtuales (puntos, monedas, tablas de posiciones) y concursos para motivar y fidelizar la comunidad externa y activar el comportamiento colaborativo humano.',
    example: 'Pep Boys utilizando Axonify (gamificación de aprendizaje) recortando incidentes de seguridad en un 45% y robos en un 55%; o las competencias de incentivo de la Fundación X-Prize.'
  },
  {
    id: 'interfaces',
    term: 'Interfaces (I)',
    category: 'IDEAS',
    definition: 'Mecanismos de control interno que actúan como puentes o filtros, procesando y canalizando el flujo abundante de resultados generados por el exterior (SCALE) de manera automatizada hacia el interior de la organización (IDEAS) sin requerir supervisión manual constante.',
    example: 'La App Store de Apple (editorial board revisando millones de aplicaciones entregadas por externos), o Google AdWords proveyendo automatización de campañas de publicidad.'
  },
  {
    id: 'dashboards',
    term: 'Dashboards (D)',
    category: 'IDEAS',
    definition: 'Paneles de visualización a tiempo real que miden el rendimiento de la organización a través de objetivos y resultados clave (OKRs deIntel/Google) y métricas de valor (como uso repetido, NPS, retención real) en contra de métricas clásicas de vanidad (visitas crudas o descargas).',
    example: 'Google utilizando OKRs completamente públicos y transparentes en toda la corporación, o focus@will midiendo transacciones de efectivo a tiempo real.'
  },
  {
    id: 'experimentation',
    term: 'Experimentation (E)',
    category: 'IDEAS',
    definition: 'La adopción formal de la metodología Lean Startup, lanzando Productos Mínimos Viables (MVP), iterando rápidamente y testeando constantemente hipótesis sobre el cliente con riesgos controlados. Implica aceptar el fracaso controlado como insumo principal de aprendizaje (Kaizen moderno).',
    example: 'Adobe con la caja KickStart (tarjeta de crédito cargada con $1,000 para que cualquier empleado valide hipótesis en 45 días), o Netflix desechando el algoritmo de alquiler de DVD por millon de dólares al pivotar a streaming. Steve Blank y Eric Ries promoviendo fallar rápido y barato.'
  },
  {
    id: 'autonomy',
    term: 'Autonomy (A)',
    category: 'IDEAS',
    definition: 'Equipos multidisciplinarios y autoorganizados que operan con autoridad descentralizada. Se elimina el mando tradicional jerárquico-secuencial (top-down) para habilitar la agilidad rápida e innovación sin pedir permiso, usualmente empleando sistemas como la Holocracia (Holacracy).',
    example: 'Valve (330 empleados sin gerentes ni títulos de trabajo estructurados, donde eligen libremente a qué proyectos unirse), o Zappos eliminando títulos y capas jerárquicas.'
  },
  {
    id: 'social_technologies',
    term: 'Social Technologies (S)',
    category: 'IDEAS',
    definition: 'Implementación de plataformas colaborativas avanzadas en la nube (Wikis, Asana, Slack, redes de interacción) diseñadas para reducir la latencia de comunicación, pasando de buscar activamente información a ver fluir los datos de forma orgánica, creando una "empresa de cero latencia".',
    example: 'Citibank reduciendo costos drásticamente al pasar de 300 bases de datos de clientes aisladas a plataformas sociales internas en la nube; o GitHub operando vía salas de chat.'
  },
  {
    id: 'holocracia',
    term: 'Holocracia (Holacracy)',
    category: 'Metodología',
    definition: 'Una tecnología social o sistema de gobernanza organizacional en el que la autoridad y la toma de decisiones se distribuyen a través de círculos o equipos fractales autoorganizados, en lugar de estar concentrados en la cima de una pirámide de mando tradicional.',
    example: 'Zappos adoptando Holocracia completa para sus 1,500 empleados, despojándose de todos los jefes y puestos tradicionales de mando.'
  },
  {
    id: 'sistema_inmunitario',
    term: 'Sistema Inmunitario Corporativo',
    category: 'General',
    definition: 'La respuesta natural de resistencia y ataque que ejercen los departamentos y gerentes de una organización tradicional madura contra cualquier proyecto innovador interno, percibiéndolo como una amenaza a su estatus, presupuesto o statu quo (los llamados "anticuerpos corporativos"). El principal peligro de disrupción en grandes empresas es el boicot interno.',
    example: 'El sistema inmunitario de Yahoo destruyendo los vestigios de autonomía de su excelente incubadora interna, Brickhouse, en 2007-2008 al forzar a sus desarrolladores a cooperar con procesos burocráticos.'
  },
  {
    id: '6_des',
    term: 'Las 6 D del Cambio Exponencial',
    category: 'Metodología',
    definition: 'La trayectoria de crecimiento exponencial de toda tecnología basada en información: 1) Digital: el sustrato se vuelve digital (la imagen pasa a ceros y unos); 2) Distorsionado: al inicio las duplicaciones pequeñas (0.01 -> 0.02) parecen imperceptibles o fracasos; 3) Disruptivo: la tecnología explota y quiebra el mercado tradicional; 4) Desmaterializar: los dispositivos físicos se disuelven en aplicaciones (linterna, GPS, cámara fotos en smartphone); 5) Desmonetizar: el costo marginal se desploma a cero; 6) Democratizar: el acceso es libre y horizontal para cualquiera.',
    example: 'La desmaterialización completa de cámaras analógicas de Kodak en álbumes virtuales en la nube.'
  }
];
