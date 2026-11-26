import type { Category, Era, Milestone } from '../types/timeline'

/**
 * Base de conocimiento cronológica.
 *
 * Criterio de inclusión: hitos que introducen o consolidan una tecnología
 * inalámbrica con impacto verificable en la industria (estándar publicado,
 * producto comercial o demostración reproducible). Las cifras de velocidad
 * son valores teóricos de referencia del estándar, no rendimiento real.
 *
 * Orden: estrictamente ascendente por año.
 */

export const categories: Category[] = [
  {
    id: 'mobile',
    label: 'Redes móviles',
    shortLabel: 'Móviles',
    blurb: 'De la llamada analógica al 5G-Advanced y la investigación 6G.',
    accent: '#ff7a59',
  },
  {
    id: 'wifi',
    label: 'Wi-Fi',
    shortLabel: 'Wi-Fi',
    blurb: 'IEEE 802.11 desde 2 Mbps en 2,4 GHz hasta 46 Gbps con Wi-Fi 7.',
    accent: '#4ad6c5',
  },
  {
    id: 'iot',
    label: 'Corto alcance / IoT',
    shortLabel: 'IoT',
    blurb: 'Bluetooth, Zigbee, Thread, Matter, NFC y Ultra-Wideband.',
    accent: '#a78bfa',
  },
  {
    id: 'radio',
    label: 'Satelital / Radio',
    shortLabel: 'Radio',
    blurb: 'Los cimientos físicos, la radiodifusión y la era espacial.',
    accent: '#f2c94c',
  },
]

export const eras: Era[] = [
  {
    id: 'foundations',
    label: 'Los fundamentos',
    shortLabel: 'Fundamentos',
    start: 1864,
    end: 1899,
    description:
      'La física demuestra lo que la ingeniería aún no sabía usar: el espacio puede transportar información sin cables.',
  },
  {
    id: 'radio-age',
    label: 'La era de la radio',
    shortLabel: 'Radio',
    start: 1900,
    end: 1945,
    description:
      'La telegrafía sin hilos cruza océanos, la voz se modula y la radiodifusión se convierte en el primer medio masivo.',
  },
  {
    id: 'analog-space',
    label: 'Satélites y analógico',
    shortLabel: 'Satélites',
    start: 1946,
    end: 1979,
    description:
      'El transistor miniaturiza el transmisor, el satélite globaliza la señal y la telefonía celular da sus primeros pasos.',
  },
  {
    id: 'digital-revolution',
    label: 'La revolución digital',
    shortLabel: 'Digital',
    start: 1980,
    end: 1999,
    description:
      'Todo se digitaliza: GSM, las bandas ISM, el nacimiento de 802.11 y Bluetooth.',
  },
  {
    id: 'massive-connectivity',
    label: 'Conectividad masiva',
    shortLabel: 'Conectividad',
    start: 2000,
    end: 2009,
    description:
      'MIMO, LTE y UWB convierten la conexión inalámbrica en infraestructura cotidiana.',
  },
  {
    id: 'iot-4g',
    label: 'IoT y 4G',
    shortLabel: 'IoT / 4G',
    start: 2010,
    end: 2019,
    description:
      'Miles de millones de dispositivos: Wi-Fi gigabit, LTE-Advanced, mallas domésticas y 5G.',
  },
  {
    id: '5g-ai',
    label: '5G, 6 GHz y 6G',
    shortLabel: '5G / 6G',
    start: 2020,
    end: 2029,
    description:
      'Nuevo espectro, interoperabilidad real, latencia determinista y los primeros borradores de la próxima década.',
  },
]

export const milestones: Milestone[] = [
  {
    id: 'maxwell-1864',
    year: 1864,
    title: 'Las ecuaciones de Maxwell',
    category: 'radio',
    standard: 'Teoría electromagnética clásica',
    frequency: 'Predicción teórica de todo el espectro',
    maxSpeed: 'No aplica: formulación matemática',
    summary:
      'James Clerk Maxwell unifica electricidad, magnetismo y óptica, y predice que la luz es una onda electromagnética capaz de propagarse por el vacío.',
    technicalDetails:
      'Presentadas en 1864 y sistematizadas en “A Dynamical Theory of the Electromagnetic Field” (1865), las ecuaciones introducen la corriente de desplazamiento y demuestran que los campos se propagan como ondas a c = 1/√(ε₀μ₀). La predicción se verificó experimentalmente veintitrés años después.',
    impact:
      'Es el punto cero de toda la ingeniería inalámbrica: sin este marco no existirían la radio, el radar, el Wi-Fi, el Bluetooth ni la telefonía móvil.',
    tags: ['electromagnetismo', 'física', 'teoría'],
    status: 'historical',
  },
  {
    id: 'hertz-1887',
    year: 1887,
    title: 'Hertz demuestra las ondas electromagnéticas',
    category: 'radio',
    standard: 'Oscilador y resonador de chispa',
    frequency: 'Ondas métricas, del orden de 30–100 MHz',
    maxSpeed: 'Alcance de laboratorio: pocos metros',
    summary:
      'Heinrich Hertz genera ondas de radio con una chispa eléctrica y las detecta a distancia con un resonador, confirmando la teoría de Maxwell.',
    technicalDetails:
      'Hertz usó un oscilador de chispa con esferas de latón y un aro de alambre con un pequeño entrehierro como receptor. Midiendo la posición de los nodos de la onda estacionaria obtuvo la longitud de onda y demostró que su velocidad coincidía con la de la luz. También describió la reflexión, refracción y polarización de las ondas.',
    impact:
      'Convierte una predicción matemática en una tecnología posible. La unidad de frecuencia lleva su nombre y su montaje es el antecesor directo de todo transmisor de radio.',
    tags: ['ondas de radio', 'experimento', 'VHF'],
    status: 'historical',
  },
  {
    id: 'marconi-1895',
    year: 1895,
    title: 'Marconi y la telegrafía sin hilos',
    category: 'radio',
    standard: 'Telegrafía sin hilos (transmisor de chispa)',
    frequency: 'Ondas largas y medias: decenas de kHz a pocos MHz',
    maxSpeed: 'Morse: del orden de 10–25 palabras por minuto',
    summary:
      'Guglielmo Marconi combina el oscilador de Hertz, el cohesor de Branly y una antena vertical para transmitir código Morse a 1,5 km sin cables.',
    technicalDetails:
      'El transmisor descargaba un condensador a través de un entrehierro, generando pulsos de radiofrecuencia de banda ancha; el cohesor detectaba la energía y un relé la convertía en clics audibles. La patente británica de 1896 protegió el sistema y en 1899 logró cruzar el Canal de la Mancha, unos 50 km.',
    impact:
      'Nace la industria de las comunicaciones inalámbricas y, con ella, el socorro marítimo por radio. La radio deja de ser una curiosidad de laboratorio para volverse infraestructura.',
    tags: ['Morse', 'telegrafía', 'marítimo'],
    status: 'historical',
  },
  {
    id: 'transatlantic-1901',
    year: 1901,
    title: 'Primera señal transatlántica',
    category: 'radio',
    standard: 'Enlace de chispa de gran potencia',
    frequency: 'Ondas largas, alrededor de 800 kHz',
    maxSpeed: 'Un único carácter Morse repetido',
    summary:
      'El 12 de diciembre, Marconi recibe en Signal Hill (Terranova) la letra “S” enviada desde Poldhu (Cornualles), a 3.400 km de distancia.',
    technicalDetails:
      'La estación de Poldhu empleaba cuatro mástiles de 48 m y decenas de kilovatios para excitar una antena de gran longitud de onda. La señal fue tan débil que el receptor telefónico apenas la distinguía del ruido atmosférico, lo que alimentó un largo debate técnico sobre su reproducibilidad.',
    impact:
      'Demuestra que el océano no es una barrera para la información. Impulsa la radio de onda larga, las estaciones costeras y la futura regulación internacional del espectro.',
    tags: ['transatlántico', 'onda larga', 'Marconi'],
    status: 'historical',
  },
  {
    id: 'fessenden-1906',
    year: 1906,
    title: 'Primera transmisión de voz por radio',
    category: 'radio',
    standard: 'Modulación de amplitud (AM) con alternador de alta frecuencia',
    frequency: '≈ 50 kHz (onda larga)',
    maxSpeed: 'Audio analógico: ~3 kHz de ancho de banda',
    summary:
      'Reginald Fessenden emite voz y música desde Brant Rock (Massachusetts) la Nochebuena de 1906, sustituyendo los pulsos Morse por una onda continua modulada.',
    technicalDetails:
      'Fessenden utilizó un alternador de alta frecuencia construido por General Electric para generar una portadora continua y moduló su amplitud con un micrófono de carbono. La onda continua permitía transmitir voz, algo imposible con la chispa de banda ancha.',
    impact:
      'Abre la puerta a la radiodifusión sonora y a la modulación como técnica central de la radio. La AM definirá las primeras cinco décadas del medio.',
    tags: ['AM', 'voz', 'onda continua'],
    status: 'historical',
  },
  {
    id: 'kdka-1920',
    year: 1920,
    title: 'Nace la radiodifusión comercial',
    category: 'radio',
    standard: 'AM comercial (banda de 530–1700 kHz)',
    frequency: 'Onda media: 530–1700 kHz, canales de 10 kHz',
    maxSpeed: 'Audio limitado a ~10 kHz por canal',
    summary:
      'KDKA, en Pittsburgh, emite los resultados electorales el 2 de noviembre de 1920 y se convierte en la primera emisora comercial con programación regular.',
    technicalDetails:
      'La emisora operaba con 100 W en 360 m de longitud de onda. El receptor de galena y el superheterodino, popularizado en los años veinte, hicieron que la radio pasara del taller del aficionado al salón familiar. En 1922 la BBC inició sus emisiones y la banda se estandarizó por regiones.',
    impact:
      'La radio se convierte en el primer medio de comunicación masivo en tiempo real: información, música y publicidad entran en millones de hogares.',
    tags: ['AM', 'broadcast', 'medios'],
    status: 'historical',
  },
  {
    id: 'fm-1933',
    year: 1933,
    title: 'Armstrong inventa la FM',
    category: 'radio',
    standard: 'Modulación de frecuencia (FM) de banda ancha',
    frequency: 'Banda original de 42–50 MHz; hoy 87,5–108 MHz',
    maxSpeed: 'Audio de alta fidelidad, 200 kHz por canal',
    summary:
      'Edwin Armstrong patenta la FM de banda ancha, una modulación que intercambia ancho de banda por inmunidad al ruido y a las interferencias.',
    technicalDetails:
      'Al variar la frecuencia de la portadora en lugar de su amplitud, la información no depende de la intensidad recibida, por lo que la estática de origen eléctrico se rechaza de forma natural. Armstrong construyó un receptor superheterodino con limitador y discriminador para demostrar la mejora.',
    impact:
      'Habilita la radio de alta fidelidad y, décadas después, la banda ciudadana y los enlaces de audio profesionales. La FM sigue siendo el estándar de la radio musical.',
    tags: ['FM', 'alta fidelidad', 'VHF'],
    status: 'historical',
  },
  {
    id: 'transistor-1947',
    year: 1947,
    title: 'El transistor de estado sólido',
    category: 'radio',
    standard: 'Transistor de contacto puntual de germanio',
    frequency: 'No aplica: habilita RF portátil y de bajo consumo',
    maxSpeed: 'Primeros prototipos: conmutación de kHz a MHz',
    summary:
      'Bardeen, Brattain y Shockley demuestran el transistor en Bell Labs y sustituyen la válvula por un dispositivo pequeño, frío y eficiente.',
    technicalDetails:
      'El primer transistor de contacto puntual usaba dos contactos metálicos sobre germanio; el transistor de unión de 1948 fue la base industrial. Su conmutación rápida, bajo voltaje y reducido consumo permitieron amplificadores de RF miniaturizados y circuitos integrados.',
    impact:
      'Hace posible el walkie-talkie, la radio portátil, los satélites y, en última instancia, el teléfono móvil. Es la pieza que permitió que la electrónica inalámbrica saliera del laboratorio.',
    tags: ['semiconductores', 'Bell Labs', 'hardware'],
    status: 'historical',
  },
  {
    id: 'sputnik-1957',
    year: 1957,
    title: 'Sputnik 1 y la era espacial',
    category: 'radio',
    standard: 'Baliza de radio a bordo de un satélite artificial',
    frequency: '20,005 y 40,002 MHz',
    maxSpeed: 'Telemetría: “bips” de ~0,3 s',
    summary:
      'El 4 de octubre la Unión Soviética pone en órbita el primer satélite artificial, que emite un pitido de radio escuchable por radioaficionados de todo el mundo.',
    technicalDetails:
      'Sputnik 1 pesaba 83,6 kg y completaba una órbita cada 96 minutos. Sus dos transmisores de 1 W alternaban pulsos de 0,3 s en 20,005 y 40,002 MHz, audibles durante tres semanas. La telemetría incluía temperatura y presión interna.',
    impact:
      'Desencadena la carrera espacial y demuestra el valor estratégico del espectro orbital. De aquí surgen los sistemas satelitales de navegación y comunicaciones.',
    tags: ['satélite', 'órbita', 'telemetría'],
    status: 'historical',
  },
  {
    id: 'telstar-1962',
    year: 1962,
    title: 'Telstar 1: el primer satélite de comunicaciones activo',
    category: 'radio',
    standard: 'Transpondedor de microondas en órbita baja',
    frequency: 'Enlace ascendente 6,39 GHz / descendente 4,17 GHz',
    maxSpeed: '1 canal de TV o 60 circuitos telefónicos bidireccionales',
    summary:
      'Telstar 1 retransmite en directo imágenes de televisión entre Estados Unidos y Europa, demostrando que un satélite puede repetir señales sin cables submarinos.',
    technicalDetails:
      'Con 77 kg y una órbita elíptica de hasta 5.900 km, el satélite amplificaba la señal con un tubo de ondas progresivas de 3,3 W. Cada pasada visible duraba unos 20 minutos, por lo que se necesitaban antenas de seguimiento de gran ganancia en tierra.',
    impact:
      'Inaugura la televisión transatlántica en vivo y el modelo de negocio de los satélites geoestacionarios (Intelsat, 1964). La distribución global de medios nunca volvió a ser la misma.',
    tags: ['satélite', 'microondas', 'televisión'],
    status: 'historical',
  },
  {
    id: 'alohanet-1971',
    year: 1971,
    title: 'ALOHAnet y el acceso aleatorio',
    category: 'radio',
    standard: 'ALOHA: acceso múltiple por paquetes con repetición',
    frequency: '400 MHz (UHF)',
    maxSpeed: '9,6 kbps compartidos',
    summary:
      'La Universidad de Hawái conecta islas con una red de radio por paquetes en la que los nodos transmiten cuando tienen datos y reintentan si hay colisión.',
    technicalDetails:
      'ALOHAnet usaba un canal UHF de 9,6 kbps y un controlador central conectado por líneas telefónicas. Su eficiencia máxima teórica era del 18,4 %, mejorada al 36,8 % con ALOHA ranurado. El análisis de colisiones inspiró CSMA/CD y CSMA/CA.',
    impact:
      'Es el ancestro conceptual de Ethernet y del acceso al medio en Wi-Fi: la idea de compartir un espectro con escucha y reintento sigue vigente en 802.11.',
    tags: ['paquetes', 'CSMA', 'UHF'],
    status: 'historical',
  },
  {
    id: 'dynatac-1973',
    year: 1973,
    title: 'Primera llamada desde un móvil de mano',
    category: 'mobile',
    standard: 'Prototipo Motorola DynaTAC (AMPS experimental)',
    frequency: '≈ 850 MHz (banda celular de EE. UU.)',
    maxSpeed: 'Voz analógica en FM',
    summary:
      'Martin Cooper, de Motorola, llama desde una acera de Nueva York a su rival de Bell Labs con un teléfono portátil de 1,1 kg y 30 minutos de batería.',
    technicalDetails:
      'El DynaTAC contenía 30 circuitos integrados y una batería de níquel-cadmio; la llamada se cursó por una estación base experimental de Bell Labs. El diseño comercial tardaría diez años en llegar al mercado con el DynaTAC 8000X.',
    impact:
      'Demuestra que la telefonía celular puede ser personal, no solo instalada en automóviles. Fija la imagen cultural del teléfono móvil.',
    tags: ['celular', 'Motorola', '1G'],
    status: 'historical',
  },
  {
    id: 'nmt-1981',
    year: 1981,
    title: 'NMT: el primer sistema celular automático',
    category: 'mobile',
    standard: 'Nordic Mobile Telephone (NMT 450)',
    frequency: '450 MHz; NMT 900 llegaría en 1986',
    maxSpeed: 'Voz analógica; datos por módem a 1,2 kbps',
    summary:
      'Suecia, Noruega, Dinamarca y Finlandia estrenan una red celular con traspaso automático entre celdas y roaming internacional.',
    technicalDetails:
      'NMT usaba FDMA con canales de 25 kHz (450) o 12,5 kHz (900) y señalización digital fuera de banda, lo que permitía handover y autenticación del terminal. Fue el primer sistema en ofrecer roaming automático entre países.',
    impact:
      'Establece el modelo de operador móvil con cobertura nacional y roaming. Su éxito nórdico convenció a Europa de la necesidad de un estándar común: GSM.',
    tags: ['1G', 'FDMA', 'roaming'],
    status: 'historical',
  },
  {
    id: 'amps-1983',
    year: 1983,
    title: 'AMPS: el 1G llega a Estados Unidos',
    category: 'mobile',
    standard: 'Advanced Mobile Phone System (AMPS)',
    frequency: '824–894 MHz, canales FM de 30 kHz',
    maxSpeed: 'Voz analógica en un canal FM de 30 kHz',
    summary:
      'La red AMPS de Bell se comercializa en Chicago y define la arquitectura celular que dominará la primera generación móvil en América.',
    technicalDetails:
      'AMPS dividía el territorio en celdas con reutilización de frecuencias, control de potencia y handover asistido por la red. Cada canal de 30 kHz transportaba voz FM con señalización FSK. Su variante digital D-AMPS (1993) añadió TDMA.',
    impact:
      'Crea el mercado masivo de telefonía móvil en EE. UU. y fija conceptos como roaming, tarifa por minuto y terminal subvencionado.',
    tags: ['1G', 'AMPS', 'celular'],
    status: 'historical',
  },
  {
    id: 'ism-1985',
    year: 1985,
    title: 'La FCC libera las bandas ISM',
    category: 'wifi',
    standard: 'Parte 15 de la FCC: uso sin licencia con espectro ensanchado',
    frequency: '900 MHz, 2,4 GHz y 5,8 GHz',
    maxSpeed: 'No define velocidad: habilita productos de consumo',
    summary:
      'Estados Unidos autoriza transmisores de baja potencia sin licencia en bandas industriales, científicas y médicas, con la condición de usar espectro ensanchado.',
    technicalDetails:
      'La decisión de 1985 abrió 900 MHz, 2,4 GHz y 5,8 GHz a equipos de hasta 1 W con técnicas de spread spectrum. La banda de 2,4 GHz, de 83,5 MHz de ancho, se convirtió en el terreno común mundial de Wi-Fi, Bluetooth, Zigbee y microondas.',
    impact:
      'Sin este marco regulatorio no habría Wi-Fi ni Bluetooth de consumo. Es la decisión de política de espectro más influyente de la historia de la conectividad inalámbrica.',
    tags: ['espectro', 'ISM', 'regulación'],
    status: 'historical',
  },
  {
    id: 'gsm-1991',
    year: 1991,
    title: 'GSM: el 2G digital europeo',
    category: 'mobile',
    standard: 'GSM / 3GPP Release 90',
    frequency: '900 MHz (luego 1800 MHz)',
    maxSpeed: '9,6 kbps por canal; SMS de 160 caracteres',
    summary:
      'La primera red GSM entra en servicio en Finlandia y sustituye la voz analógica por voz digital, SIM y roaming paneuropeo.',
    technicalDetails:
      'GSM combina TDMA con canales de 200 kHz y 8 ranuras por portadora, códecs de voz digital y una red de señalización común (MAP). La autenticación mediante SIM y el cifrado A5 permitieron operar en múltiples países con un solo contrato.',
    impact:
      'Digitaliza la telefonía móvil, crea el mercado de la mensajería SMS y sienta las bases de la itinerancia global. Más de 5.000 millones de suscripciones lo convirtieron en el estándar más extendido de la historia.',
    tags: ['2G', 'TDMA', 'SIM'],
    status: 'historical',
  },
  {
    id: 'ieee80211-1997',
    year: 1997,
    title: 'IEEE 802.11: nace el Wi-Fi',
    category: 'wifi',
    standard: 'IEEE 802.11-1997',
    frequency: '2,4 GHz (banda ISM)',
    maxSpeed: '1–2 Mbps',
    summary:
      'El primer estándar de red local inalámbrica define el acceso al medio CSMA/CA y la trama 802.11, con saltos de frecuencia o secuencia directa.',
    technicalDetails:
      '802.11-1997 especificaba tres capas físicas: infrarrojos, FHSS a 1–2 Mbps y DSSS a 1–2 Mbps. Introdujo el mecanismo CSMA/CA con acknowledgment, la trama MAC y la asociación a un punto de acceso, elementos que siguen presentes en Wi-Fi 7.',
    impact:
      'Crea la categoría WLAN y el ecosistema que en 1999 se agruparía bajo la marca Wi-Fi. Su arquitectura de tramas ha sobrevivido casi intacta durante tres décadas.',
    tags: ['WLAN', 'CSMA/CA', '802.11'],
    status: 'historical',
  },
  {
    id: 'bluetooth-1999',
    year: 1999,
    title: 'Bluetooth 1.0 y la red personal',
    category: 'iot',
    standard: 'Bluetooth 1.0 (IEEE 802.15.1)',
    frequency: '2,4 GHz ISM, 79 canales de 1 MHz',
    maxSpeed: '721 kbps (v1.1); 10 m de alcance',
    summary:
      'El Bluetooth SIG, fundado en 1998 por Ericsson, Nokia, IBM, Intel y Toshiba, publica la especificación 1.0 para sustituir los cables entre dispositivos personales.',
    technicalDetails:
      'Bluetooth usa FHSS con 1.600 saltos por segundo, una piconet de hasta 7 esclavos y un maestro que reparte ranuras. Su perfil serie (SPP) permitió conectar auriculares, impresoras y sincronizar agendas sin cables.',
    impact:
      'Nace la red de área personal (PAN). Los auriculares inalámbricos y los manos libres crearon un mercado de miles de millones de unidades y prepararon el camino para LE Audio.',
    tags: ['PAN', 'FHSS', 'Bluetooth SIG'],
    status: 'historical',
  },
  {
    id: 'wifi-b-1999',
    year: 1999,
    title: '802.11b y la marca Wi-Fi',
    category: 'wifi',
    standard: 'IEEE 802.11b / Wi-Fi Alliance (WECA)',
    frequency: '2,4 GHz ISM',
    maxSpeed: '11 Mbps',
    summary:
      'La enmienda 802.11b multiplica por cinco la velocidad y la alianza WECA certifica la interoperabilidad bajo el nombre Wi-Fi.',
    technicalDetails:
      '802.11b adoptó DSSS con modulación CCK, 11 canales solapados (3 no solapados) y retroceso CSMA/CA. La certificación de interoperabilidad resolvió el caos de equipos incompatibles y permitió que un portátil funcionara en cualquier red pública.',
    impact:
      'Wi-Fi se convierte en un producto de consumo masivo y en sinónimo de internet sin cables. Los hotspots de aeropuertos y cafeterías popularizan el acceso móvil antes del 3G.',
    tags: ['Wi-Fi 1', 'CCK', 'interoperabilidad'],
    status: 'historical',
  },
  {
    id: 'wifi-a-2001',
    year: 2001,
    title: '802.11a y la banda de 5 GHz',
    category: 'wifi',
    standard: 'IEEE 802.11a',
    frequency: '5 GHz (banda U-NII)',
    maxSpeed: '54 Mbps',
    summary:
      'La primera enmienda OFDM de Wi-Fi traslada la red local a 5 GHz, con más canales y menos interferencia que 2,4 GHz.',
    technicalDetails:
      '802.11a divide el canal de 20 MHz en 52 subportadoras OFDM y usa 64-QAM, logrando 54 Mbps. Su alcance era menor y su costo inicial alto, por lo que convivió con 802.11b hasta la llegada de 802.11g.',
    impact:
      'Introduce OFDM en Wi-Fi, la técnica que sostiene todas las generaciones posteriores hasta Wi-Fi 7. También abre el debate entre cobertura (2,4 GHz) y capacidad (5 GHz).',
    tags: ['OFDM', '5 GHz', '64-QAM'],
    status: 'historical',
  },
  {
    id: 'uwb-2002',
    year: 2002,
    title: 'UWB: pulsos de banda ultraancha',
    category: 'iot',
    standard: 'FCC Part 15 UWB / WiMedia (2005)',
    frequency: '3,1–10,6 GHz con anchos de banda ≥500 MHz',
    maxSpeed: '480 Mbps (WiMedia); precisión de centímetros',
    summary:
      'La FCC autoriza la banda ultraancha: pulsos de muy baja potencia repartidos sobre varios gigahercios que permiten medir distancias con precisión centimétrica.',
    technicalDetails:
      'UWB transmite impulsos de duración nanométrica, con una densidad espectral inferior a −41,3 dBm/MHz para no interferir. La resolución temporal de los pulsos permite time-of-flight y localización precisa incluso en interiores. WiMedia estandarizó 480 Mbps para video, aunque el mercado migró a la medición de posición.',
    impact:
      'Habilita el radar de corto alcance, el seguimiento de activos y la localización precisa (U1/U2 de Apple, Find My). Es la base de las llaves digitales de automóvil y del posicionamiento indoor.',
    tags: ['UWB', 'ranging', 'radar'],
    status: 'historical',
  },
  {
    id: 'wifi-g-2003',
    year: 2003,
    title: '802.11g unifica velocidad y compatibilidad',
    category: 'wifi',
    standard: 'IEEE 802.11g',
    frequency: '2,4 GHz',
    maxSpeed: '54 Mbps',
    summary:
      '802.11g lleva OFDM a 2,4 GHz manteniendo compatibilidad con 802.11b, y convierte el Wi-Fi doméstico en la norma para compartir internet.',
    technicalDetails:
      'La enmienda combina OFDM (54 Mbps) con DSSS/CCK para tramas de legado, usando protección RTS/CTS cuando conviven dispositivos b. La coexistencia con microondas y teléfonos inalámbricos en 2,4 GHz motivó las primeras técnicas de mitigación de interferencia.',
    impact:
      'El router doméstico con Wi-Fi se masifica. La red inalámbrica deja de ser un accesorio empresarial y pasa a ser la conexión principal de millones de hogares.',
    tags: ['Wi-Fi 3', 'OFDM', 'hogar'],
    status: 'historical',
  },
  {
    id: 'nfc-2004',
    year: 2004,
    title: 'NFC Forum y el pago sin contacto',
    category: 'iot',
    standard: 'ISO/IEC 18092 / 14443 (NFC Forum)',
    frequency: '13,56 MHz (inducción magnética)',
    maxSpeed: '106 / 212 / 424 kbps; alcance ≤4 cm',
    summary:
      'Nokia, Philips y Sony fundan el NFC Forum para unificar la comunicación de campo cercano y hacer posible el pago con el móvil.',
    technicalDetails:
      'NFC opera por acoplamiento inductivo a 13,56 MHz, con modos lector/escritor, tarjeta emulada y peer-to-peer. La distancia mínima protege la transacción y el estándar hereda de RFID la capacidad de alimentar la etiqueta pasiva mediante el campo del lector.',
    impact:
      'Convierte el teléfono en tarjeta de transporte, llave y medio de pago. Apple Pay (2014) y Google Pay generalizan una interacción de un solo gesto.',
    tags: ['NFC', 'RFID', 'pagos'],
    status: 'historical',
  },
  {
    id: 'zigbee-2005',
    year: 2005,
    title: 'Zigbee y la malla doméstica',
    category: 'iot',
    standard: 'IEEE 802.15.4 / Zigbee 1.0',
    frequency: '2,4 GHz (también 868/915 MHz)',
    maxSpeed: '250 kbps; alcance 10–100 m por salto',
    summary:
      'Zigbee ratifica su especificación sobre 802.15.4 y crea redes de malla de bajo consumo para sensores, luces y domótica.',
    technicalDetails:
      'Zigbee usa CSMA/CA, direccionamiento de 16 bits, topologías de malla y árbol, y perfiles de aplicación (HA, SE, ZLL). Un coordinador forma la red y los routers intermedios propagan paquetes; el consumo permite años con una pila de botón.',
    impact:
      'Es la columna vertebral de la domótica de bajo consumo y de los sensores industriales. Su capa de red inspiró Thread y su modelo de clústeres llegó hasta Matter.',
    tags: ['Zigbee', 'malla', '802.15.4'],
    status: 'historical',
  },
  {
    id: 'lte-2008',
    year: 2008,
    title: 'LTE: la arquitectura todo-IP',
    category: 'mobile',
    standard: '3GPP Release 8 (LTE)',
    frequency: 'Bandas de 700 MHz a 2,6 GHz (FDD y TDD)',
    maxSpeed: '300 Mbps en bajada (20 MHz, 4×4 MIMO); 75 Mbps en subida',
    summary:
      '3GPP publica LTE, una red de paquetes sin conmutación de circuitos que abandona el modelo telefónico y adopta OFDMA y MIMO.',
    technicalDetails:
      'LTE usa OFDMA en el enlace descendente y SC-FDMA en el ascendente para reducir el PAPR del terminal. La red EPC separa plano de control y de usuario, y la voz se cursa sobre IP (VoLTE). Las subportadoras de 15 kHz y la agregación de portadoras posteriores escalan el ancho de banda.',
    impact:
      'Hace que internet móvil sea verdaderamente banda ancha. El streaming, las apps nativas y la economía de los datos nacen de esta arquitectura plana y de baja latencia.',
    tags: ['4G', 'OFDMA', 'MIMO'],
    status: 'historical',
  },
  {
    id: 'wifi-n-2009',
    year: 2009,
    title: '802.11n: MIMO llega al Wi-Fi',
    category: 'wifi',
    standard: 'IEEE 802.11n (Wi-Fi 4)',
    frequency: '2,4 GHz y 5 GHz',
    maxSpeed: '600 Mbps (4×4 MIMO, 40 MHz)',
    summary:
      'Wi-Fi adopta MIMO y canales de 40 MHz, usando trayectos múltiples para multiplicar la velocidad y mejorar la cobertura.',
    technicalDetails:
      '802.11n introdujo multiplexación espacial, agregación de tramas A-MPDU, beamforming opcional y hasta cuatro flujos espaciales. La ganancia de multiplexación depende de la correlación del canal; por eso el rendimiento real crece con la distancia de las antenas.',
    impact:
      'Permite video en alta definición por Wi-Fi y consolida la doble banda en el router doméstico. MIMO se convirtió en la base de todas las generaciones siguientes.',
    tags: ['Wi-Fi 4', 'MIMO', '40 MHz'],
    status: 'historical',
  },
  {
    id: 'lte-a-2011',
    year: 2011,
    title: 'LTE-Advanced y el 4G real',
    category: 'mobile',
    standard: '3GPP Release 10 (LTE-Advanced)',
    frequency: 'Agregación de portadoras en múltiples bandas',
    maxSpeed: '1 Gbps en bajada (hasta 3 Gbps en versiones posteriores)',
    summary:
      'La agregación de portadoras y el MIMO de orden superior cumplen los requisitos del ITU para 4G: 1 Gbps en condiciones ideales.',
    technicalDetails:
      'LTE-Advanced agrega hasta cinco portadoras de 20 MHz (100 MHz en total), añade MIMO 8×8 en bajada, coordinación entre celdas (CoMP) y relays. Release 12 introdujo agregación dual con Wi-Fi y Release 13 licenció el espectro no licenciado (LAA).',
    impact:
      'Convierte la conexión móvil en sustituto del cable en muchos hogares y habilita la nube móvil. La agregación de portadoras anticipa la complejidad del 5G.',
    tags: ['4G', 'carrier aggregation', 'MIMO'],
    status: 'historical',
  },
  {
    id: 'wifi-ac-2013',
    year: 2013,
    title: '802.11ac: Wi-Fi gigabit',
    category: 'wifi',
    standard: 'IEEE 802.11ac (Wi-Fi 5)',
    frequency: '5 GHz',
    maxSpeed: '6,93 Gbps (8 flujos, 160 MHz, 256-QAM)',
    summary:
      'Wi-Fi 5 se queda en 5 GHz, amplía los canales a 80 y 160 MHz y añade MU-MIMO para servir a varios clientes a la vez.',
    technicalDetails:
      '802.11ac introduce 256-QAM, beamforming explícito estandarizado y MU-MIMO en bajada (Wave 2). Al depender de 5 GHz, la cobertura es menor que en 2,4 GHz, lo que impulsa los sistemas de malla con varios puntos de acceso.',
    impact:
      'El Wi-Fi supera al cable Fast Ethernet en el hogar y habilita 4K, VR y copias de seguridad inalámbricas. La malla doméstica se vuelve mainstream.',
    tags: ['Wi-Fi 5', 'MU-MIMO', '5 GHz'],
    status: 'historical',
  },
  {
    id: 'thread-2015',
    year: 2015,
    title: 'Thread: IPv6 sobre malla',
    category: 'iot',
    standard: 'Thread 1.1 (IEEE 802.15.4)',
    frequency: '2,4 GHz',
    maxSpeed: '250 kbps; malla auto-reparable',
    summary:
      'Thread Group publica una red de malla IPv6 nativa para el hogar, sin necesidad de un hub propietario ni de traducción de protocolos.',
    technicalDetails:
      'Thread combina 6LoWPAN, IPv6 y el enrutamiento de malla RPL sobre 802.15.4. Los nodos se autoconfiguran, eligen un líder y admiten un border router que conecta la malla con la LAN. Su modelo de seguridad por credenciales de red facilita el aprovisionamiento.',
    impact:
      'Da al IoT doméstico una red IP estándar y se convierte en uno de los dos transportes de Matter. Es la alternativa abierta a las mallas propietarias.',
    tags: ['Thread', '6LoWPAN', 'malla'],
    status: 'historical',
  },
  {
    id: 'bluetooth-5-2016',
    year: 2016,
    title: 'Bluetooth 5: más alcance y velocidad',
    category: 'iot',
    standard: 'Bluetooth Core Specification 5.0',
    frequency: '2,4 GHz ISM',
    maxSpeed: '2 Mbps; alcance teórico ×4 (hasta ~200 m)',
    summary:
      'Bluetooth 5 duplica la velocidad, cuadruplica el alcance y multiplica por ocho la capacidad de los anuncios, habilitando balizas y redes de sensores.',
    technicalDetails:
      'La especificación añade el modo LE 2M PHY, codificación de largo alcance (LE Coded) y extensiones de publicidad de hasta 255 bytes. En 2017, Bluetooth Mesh permitió redes de muchos a muchos sin Wi-Fi.',
    impact:
      'Bluetooth deja de ser solo para auriculares: se convierte en infraestructura de balizas, localización indoor y sensores de bajo consumo.',
    tags: ['Bluetooth 5', 'LE', 'beacons'],
    status: 'historical',
  },
  {
    id: 'wifi-6-2019',
    year: 2019,
    title: 'Wi-Fi 6: eficiencia en entornos densos',
    category: 'wifi',
    standard: 'IEEE 802.11ax (Wi-Fi 6)',
    frequency: '2,4 GHz y 5 GHz',
    maxSpeed: '9,6 Gbps (8×8, 160 MHz, 1024-QAM)',
    summary:
      'Wi-Fi 6 no persigue solo el pico de velocidad: introduce OFDMA, MU-MIMO completo y TWT para atender a decenas de dispositivos sin colapsar.',
    technicalDetails:
      '802.11ax divide el canal en unidades de recursos (RU) asignables por usuario, usa BSS Coloring para reutilizar el espectro entre redes vecinas y programa las transmisiones con Target Wake Time para ahorrar batería. 1024-QAM eleva la eficiencia espectral un 25 % sobre 256-QAM.',
    impact:
      'Diseñado para estadios, oficinas y hogares con decenas de dispositivos. El Wi-Fi deja de medirse solo en Mbps y empieza a medirse en latencia y capacidad agregada.',
    tags: ['Wi-Fi 6', 'OFDMA', 'TWT'],
    status: 'historical',
  },
  {
    id: '5g-nr-2019',
    year: 2019,
    title: '5G NR: banda ancha, URLLC y mmWave',
    category: 'mobile',
    standard: '3GPP Release 15 (5G NR)',
    frequency: 'Sub-6 GHz (3,5 GHz) y mmWave (24–39 GHz)',
    maxSpeed: '20 Gbps pico; latencia objetivo de 1 ms (URLLC)',
    summary:
      'Las primeras redes 5G comerciales estrenan numerología flexible, Massive MIMO y ondas milimétricas para tres perfiles de servicio distintos.',
    technicalDetails:
      '5G NR usa subportadoras escalables (15–120 kHz), haces dirigidos con arrays de antenas y un núcleo de servicio basado en SBA. eMBB, URLLC y mMTC se aíslan mediante network slicing; el espectro se comparte dinámicamente entre 4G y 5G con DSS.',
    impact:
      'Conecta fábricas, vehículos y ciudades además de personas. mmWave demuestra capacidad extrema a corta distancia, mientras sub-6 garantiza cobertura.',
    tags: ['5G', 'mmWave', 'URLLC'],
    status: 'historical',
  },
  {
    id: 'wifi-6e-2021',
    year: 2021,
    title: 'Wi-Fi 6E abre la banda de 6 GHz',
    category: 'wifi',
    standard: 'IEEE 802.11ax (Wi-Fi 6E)',
    frequency: '5.925–7.125 GHz: 1.200 MHz de espectro nuevo',
    maxSpeed: '9,6 Gbps; 14 canales de 80 MHz o 7 de 160 MHz',
    summary:
      'La FCC y otros reguladores liberan 6 GHz para Wi-Fi, añadiendo una autopista vacía de interferencias y multiplicando la capacidad disponible.',
    technicalDetails:
      'Wi-Fi 6E reutiliza la física de 802.11ax en 6 GHz, con canales de 20 a 160 MHz y obligación de control de potencia (LPI/SP). Al no convivir con microondas ni Bluetooth, la eficiencia es mucho mayor, aunque la propagación es más directa y exige más puntos de acceso.',
    impact:
      'Resuelve la congestión de 2,4 y 5 GHz en hogares y oficinas. Habilita realidad mixta, streaming 8K y backhaul inalámbrico de alta capacidad.',
    tags: ['Wi-Fi 6E', '6 GHz', 'espectro'],
    status: 'historical',
  },
  {
    id: 'matter-2022',
    year: 2022,
    title: 'Matter 1.0: interoperabilidad real',
    category: 'iot',
    standard: 'Matter 1.0 (Connectivity Standards Alliance)',
    frequency: 'Sobre Wi-Fi, Ethernet y Thread (2,4 GHz)',
    maxSpeed: 'No aplica: capa de aplicación común',
    summary:
      'Amazon, Apple, Google y Samsung lanzan Matter 1.0, un modelo de datos y protocolo común para que cualquier dispositivo funcione con cualquier plataforma.',
    technicalDetails:
      'Matter define clústeres de atributos y comandos sobre IPv6, con comisionamiento por Bluetooth LE y credenciales de red verificadas por certificados. Un dispositivo Thread requiere un border router; uno Wi-Fi se conecta directamente. La seguridad se basa en el modelo de fabricante y en attestation certificates.',
    impact:
      'Reduce la fragmentación del hogar inteligente y acaba con la dependencia de un único ecosistema. Es el mayor intento de estandarización del IoT doméstico desde Zigbee.',
    tags: ['Matter', 'CSA', 'interoperabilidad'],
    status: 'historical',
  },
  {
    id: 'le-audio-2022',
    year: 2022,
    title: 'LE Audio y Auracast',
    category: 'iot',
    standard: 'Bluetooth LE Audio / Auracast (Basic Audio Profile)',
    frequency: '2,4 GHz ISM',
    maxSpeed: 'Códec LC3 de baja latencia; múltiples flujos sincronizados',
    summary:
      'Bluetooth LE Audio estrena el códec LC3 y la difusión Auracast, que permite enviar audio a un número ilimitado de auriculares y audífonos.',
    technicalDetails:
      'LE Audio usa isocronous channels (ISO) para sincronizar varios receptores con latencia configurable. LC3 ofrece mejor calidad que SBC con menor bitrate. Auracast define una emisora de audio pública a la que cualquier receptor se suscribe, como una radio de corto alcance.',
    impact:
      'Mejora la accesibilidad auditiva, multiplica la autonomía y crea nuevas experiencias colectivas: cines, gimnasios y aeropuertos con audio propio.',
    tags: ['LE Audio', 'Auracast', 'LC3'],
    status: 'current',
  },
  {
    id: 'wifi-7-2024',
    year: 2024,
    title: 'Wi-Fi 7: 46 Gbps y Multi-Link',
    category: 'wifi',
    standard: 'IEEE 802.11be (Wi-Fi 7)',
    frequency: '2,4, 5 y 6 GHz simultáneamente',
    maxSpeed: '46 Gbps (16 flujos, 320 MHz, 4096-QAM)',
    summary:
      'Wi-Fi 7 combina canales de 320 MHz, 4096-QAM y Multi-Link Operation para usar varias bandas a la vez y reducir la latencia de forma drástica.',
    technicalDetails:
      '802.11be añade MLO (agregación y conmutación de enlaces), Multi-RU, preamble puncturing para usar espectro fragmentado y coordinación multi-AP. 4096-QAM exige relaciones señal/ruido muy altas. La certificación de la Wi-Fi Alliance comenzó en enero de 2024.',
    impact:
      'El Wi-Fi se acerca a la fibra y compite con el cable en latencia. Es la base de la realidad extendida, el cloud gaming y los enlaces inalámbricos de 10 Gbps.',
    tags: ['Wi-Fi 7', 'MLO', '320 MHz'],
    status: 'current',
  },
  {
    id: 'bluetooth-6-2024',
    year: 2024,
    title: 'Bluetooth 6.0 y el ranging seguro',
    category: 'iot',
    standard: 'Bluetooth Core Specification 6.0',
    frequency: '2,4 GHz ISM',
    maxSpeed: 'Channel Sounding: distancia con precisión de centímetros',
    summary:
      'Bluetooth 6.0 introduce Channel Sounding para medir distancias reales con precisión centimétrica y mejorar la seguridad de las llaves digitales.',
    technicalDetails:
      'Channel Sounding combina medición de fase (PBR) y tiempo de vuelo (RTT) sobre múltiples canales para estimar distancia y detectar ataques de retransmisión. La versión añade filtrado de anuncios basado en decisiones, mejoras de ISOAL y un nuevo marco de intervalos para tráfico sensible a latencia.',
    impact:
      'Compite directamente con UWB en llaves de coche, localización de objetos y control de acceso, sin renunciar al bajo consumo del ecosistema Bluetooth.',
    tags: ['Bluetooth 6', 'Channel Sounding', 'seguridad'],
    status: 'current',
  },
  {
    id: '5g-advanced-2024',
    year: 2024,
    title: '5G-Advanced: la red que aprende',
    category: 'mobile',
    standard: '3GPP Release 18 (5G-Advanced)',
    frequency: 'Sub-6 GHz, mmWave y espectro satelital (NTN)',
    maxSpeed: 'Hasta 10 Gbps agregados; latencia determinista',
    summary:
      'Release 18 consolida el 5G-Advanced con IA integrada en la red, comunicaciones no terrestres y mejoras de eficiencia energética.',
    technicalDetails:
      '5G-Advanced incorpora modelos de IA/ML para gestión de haces y posicionamiento, RedCap para dispositivos de menor complejidad, NTN para enlace directo satélite-móvil y mejoras de MIMO y duplexación. Release 19 y 20 profundizan en IA nativa y preparación del 6G.',
    impact:
      'Convierte la red móvil en plataforma programable para industria, vehículos autónomos y satélites. Es el puente tecnológico hacia el 6G.',
    tags: ['5G-Advanced', 'IA', 'NTN'],
    status: 'current',
  },
  {
    id: 'sixg-2026',
    year: 2026,
    title: '6G: hacia la red cognitiva',
    category: 'mobile',
    standard: 'IMT-2030 (ITU-R M.2160) / 3GPP Release 20-21',
    frequency: 'Sub-THz (100–300 GHz), sub-6 y espectro compartido',
    maxSpeed: 'Objetivo ITU: 100–200 Gbps pico; demos de laboratorio por encima de 1 Tbps',
    summary:
      'La industria define el 6G como una red que integra comunicación, sensado y computación, con IA nativa y cobertura ubicua gracias a satélites.',
    technicalDetails:
      'El marco IMT-2030 del ITU-R fija objetivos de latencia de 0,1 ms, densidad de 10⁷ dispositivos/km² y posicionamiento submétrico. Se investigan bandas sub-THz, superficies inteligentes reconfigurables (RIS), duplexación flexible y redes no terrestres integradas. La comercialización se espera hacia 2030.',
    impact:
      'Promete fusionar el mundo físico y digital con gemelos digitales, robótica conectada y sensado ambiental. Su estandarización marcará la próxima década.',
    tags: ['6G', 'IMT-2030', 'sub-THz'],
    status: 'emerging',
  },
  {
    id: 'wifi-8-2028',
    year: 2028,
    title: 'Wi-Fi 8: fiabilidad antes que velocidad',
    category: 'wifi',
    standard: 'IEEE 802.11bn (Ultra High Reliability)',
    frequency: '2,4, 5 y 6 GHz',
    maxSpeed: 'Objetivo: latencia determinista y roaming sin cortes',
    summary:
      'El grupo 802.11bn trabaja en Wi-Fi 8 con coordinación multi-AP, MLO mejorado y redundancia para garantizar fiabilidad, no solo pico de velocidad.',
    technicalDetails:
      'Ultra High Reliability propone transmisión coordinada entre puntos de acceso, MLO con recuperación ante fallos de enlace, agregación de unidades de recursos y gestión de interferencia entre redes. El objetivo es una latencia de cola baja y disponibilidad tipo industrial.',
    impact:
      'Orientado a fábricas, hospitales y realidad extendida, donde un paquete perdido importa más que un gigabit extra. El Wi-Fi se diseña como infraestructura crítica.',
    tags: ['Wi-Fi 8', '802.11bn', 'UHR'],
    status: 'emerging',
  },
]

/** Utilidades de consulta usadas por la interfaz. */
export const categoryById = Object.fromEntries(
  categories.map((category) => [category.id, category]),
) as Record<Category['id'], Category>

export const getEraForYear = (year: number): Era =>
  eras.find((era) => year >= era.start && year <= era.end) ?? eras[eras.length - 1]

export const totalYears =
  milestones[milestones.length - 1].year - milestones[0].year
