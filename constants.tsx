import React from 'react';
import { StepType, RitualStepData, DayConfig, RitualIntention } from './types';
import { Sparkles, Moon, Flame, Heart, Zap, Sun, Star, Droplets, Smile, Key, Activity, Gem, Users } from 'lucide-react';

// Configuration for the Menu
export const DAYS_CONFIG: DayConfig[] = [
  { day: 1, title: "Día 1: Limpieza Energética", subtitle: "Elimina bloqueos, rencores y miedos.", icon: <Droplets className="w-6 h-6" />, element: "Agua y Sal" },
  { day: 2, title: "Día 2: El Espejo de Afrodita", subtitle: "Despierta tu magnetismo personal.", icon: <Smile className="w-6 h-6" />, element: "Un Espejo" },
  { day: 3, title: "Día 3: Abriendo Caminos", subtitle: "Destraba la energía estancada.", icon: <Key className="w-6 h-6" />, element: "Una Llave Antigua" },
  { day: 4, title: "Día 4: Miel de Atracción", subtitle: "Endulza la relación o el destino.", icon: <Heart className="w-6 h-6" />, element: "Miel o Azúcar" },
  { day: 5, title: "Día 5: Conexión Telepática", subtitle: "Envía mensajes al alma deseada.", icon: <Activity className="w-6 h-6" />, element: "Hilo Rojo" },
  { day: 6, title: "Día 6: Fuego de Pasión", subtitle: "Enciende la chispa y el deseo.", icon: <Flame className="w-6 h-6" />, element: "Canela" },
  { day: 7, title: "Día 7: Sello de Eternidad", subtitle: "Consolida y agradece al universo.", icon: <Gem className="w-6 h-6" />, element: "Una Piedra o Cristal" },
];

// Content Generator Function based on Day AND Intention
export const getStepsForDay = (day: number, intention: RitualIntention): RitualStepData[] => {
  
  const isNewLove = intention === RitualIntention.NEW_LOVE;
  
  let ritualContent;
  let prayerContent;
  let specificPrep;

  switch (day) {
    case 1: // Limpieza
      specificPrep = "Un vaso con agua y una pizca de sal marina.";
      ritualContent = (
        <div className="space-y-6">
           <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-blue-400">
            <h4 className="font-semibold text-blue-200 mb-2">1. El Agua Purificadora</h4>
            <p>Sostén el vaso con agua y sal. {isNewLove ? "Visualiza que el agua absorbe todas tus relaciones pasadas para dejar espacio a lo nuevo." : "Visualiza que el agua lava los rencores, las peleas y el dolor causados por esa persona específica."}</p>
          </div>
          <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-mystic-400">
            <h4 className="font-semibold text-mystic-200 mb-2">2. Liberación</h4>
            <p>Di en voz baja: "{isNewLove ? "Suelto mi pasado." : "Suelto el dolor, pero mantengo el amor."}". Siente cómo el peso sale de tu pecho.</p>
          </div>
        </div>
      );
      prayerContent = isNewLove 
        ? "Agua sagrada, limpia mi corazón. Cierro ciclos viejos para que el amor verdadero pueda entrar. Estoy limpio/a, estoy listo/a para recibir."
        : "Agua sagrada, limpia las heridas entre (Nombre de la persona) y yo. Que el rencor se diluya y solo quede la verdad del amor que nos une.";
      break;
    
    case 2: // Amor Propio (Universal)
      specificPrep = "Un espejo (de mano o de pared).";
      ritualContent = (
        <div className="space-y-6">
           <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-pink-400">
            <h4 className="font-semibold text-pink-200 mb-2">1. El Encuentro</h4>
            <p>Mírate a los ojos en el espejo. Este ritual funciona igual para <strong>hombres y mujeres</strong>. Mira más allá de tu género, mira tu alma.</p>
          </div>
          <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-gold-400">
            <h4 className="font-semibold text-gold-200 mb-2">2. Reconocimiento</h4>
            <p>Toca tu reflejo y di: 'Soy digno/a de ser amado/a intensamente. Mi energía es magnética'.</p>
          </div>
        </div>
      );
      prayerContent = "Diosa interior, despierta mi brillo. Me amo, me acepto y me honro. Soy un imán de belleza y bondad. Quien se acerque a mí, sentirá mi luz.";
      break;

    case 3: // Caminos
      specificPrep = "Una llave (puede ser de tu casa o una antigua) y una vela blanca.";
      ritualContent = (
        <div className="space-y-6">
           <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-yellow-200">
            <h4 className="font-semibold text-yellow-100 mb-2">1. La Apertura</h4>
            <p>Sostén la llave. Imagina una puerta dorada. {isNewLove ? "Detrás está tu nueva pareja ideal." : "Detrás está el regreso de tu ser amado, renovado."}</p>
          </div>
          <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-mystic-400">
            <h4 className="font-semibold text-mystic-200 mb-2">2. El Paso</h4>
            <p>Gira la llave en el aire y di: "Abro lo que estaba cerrado. Destrabo mi felicidad amorosa ahora."</p>
          </div>
        </div>
      );
      prayerContent = isNewLove
        ? "Universo, abre los caminos. Que aparezca la persona correcta en el momento divino. La puerta de mi soledad se cierra y se abre la del compañerismo."
        : "Universo, elimina los obstáculos entre nosotros. Que el camino de regreso para (Nombre) sea claro, fácil y libre de interferencias. La puerta está abierta.";
      break;

    case 4: // Miel
      specificPrep = "Un poco de miel, azúcar o canela en tu dedo.";
      ritualContent = (
        <div className="space-y-6">
           <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-orange-400">
            <h4 className="font-semibold text-orange-200 mb-2">1. Dulzura Vital</h4>
            <p>Pon una gota de miel en tu dedo. La miel no distingue género ni tiempo, solo atrae.</p>
          </div>
          <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-pink-400">
            <h4 className="font-semibold text-pink-200 mb-2">2. El Sello Dulce</h4>
            <p>Prueba la miel y visualiza {isNewLove ? "besos dulces de alguien nuevo." : "que la relación con (Nombre) se vuelve tierna y amable de nuevo."}</p>
          </div>
        </div>
      );
      prayerContent = isNewLove
        ? "Dulzura divina, endulza mi destino. Atraigo un amor suave, sin amarguras. Que mis palabras sean miel para quien ha de llegar."
        : "Endulzo el pensamiento y el corazón de (Nombre). Que deje el orgullo y recuerde solo la dulzura de nuestro amor. Que vuelva manso/a y amoroso/a.";
      break;

    case 5: // Hilo Rojo
      specificPrep = "Un hilo rojo, cinta roja o una prenda roja.";
      ritualContent = (
        <div className="space-y-6">
           <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-red-500">
            <h4 className="font-semibold text-red-300 mb-2">1. El Lazo Invisible</h4>
            <p>Enrolla el hilo en tu dedo anular izquierdo. Siente el latido de tu corazón en el dedo.</p>
          </div>
          <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-mystic-400">
            <h4 className="font-semibold text-mystic-200 mb-2">2. Transmisión</h4>
            <p>Cierra los ojos. Envía un mensaje telepático: "{isNewLove ? "Te estoy esperando, ven a mí." : "(Nombre), te perdono y te amo, vuelve a casa."}"</p>
          </div>
        </div>
      );
      prayerContent = isNewLove
        ? "Hilo del destino, conéctame con mi alma gemela. Donde quiera que esté, que sienta mi llamada. Nuestros corazones vibran al unísono."
        : "Hilo rojo inquebrantable, tira de (Nombre) hacia mí. Que no tenga paz hasta que no esté en mis brazos. Estamos unidos por un pacto superior.";
      break;

    case 6: // Fuego
      specificPrep = "Una pizca de canela en polvo y una vela (roja o naranja).";
      ritualContent = (
        <div className="space-y-6">
           <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-red-600">
            <h4 className="font-semibold text-red-400 mb-2">1. Fuego Universal</h4>
            <p>Enciende la vela. El fuego es la pasión que vive en todo hombre y toda mujer.</p>
          </div>
          <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-orange-500">
            <h4 className="font-semibold text-orange-300 mb-2">2. La Chispa</h4>
            <p>Esparce la canela con cuidado sobre la llama. Visualiza {isNewLove ? "una noche de pasión con un nuevo amor." : "el reencuentro íntimo con tu ex pareja."}</p>
          </div>
        </div>
      );
      prayerContent = "Fuego sagrado, enciende el deseo. Que la química sea explosiva y sana. Despierto mi energía sexual y magnética. Soy fuego, soy atracción pura.";
      break;

    case 7: // Sello
      specificPrep = "Una piedra, cuarzo o un objeto pequeño que conserves.";
      ritualContent = (
        <div className="space-y-6">
           <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-purple-400">
            <h4 className="font-semibold text-purple-200 mb-2">1. Cargar el Talismán</h4>
            <p>Sostén la piedra. Pasa toda la energía de tu intención ({isNewLove ? "Nuevo Amor" : "Retorno de Amor"}) a este objeto.</p>
          </div>
          <div className="bg-mystic-800/30 p-4 rounded-lg border-l-2 border-gold-400">
            <h4 className="font-semibold text-gold-200 mb-2">2. Confianza</h4>
            <p>Guarda este objeto cerca de tu cama o en tu bolsillo como un imán constante.</p>
          </div>
        </div>
      );
      prayerContent = "Gracias Universo. Mi petición ha sido escuchada. Sello este ritual con fe. Ya sea un nuevo comienzo o un regreso bendecido, acepto lo mejor para mí. Hecho está.";
      break;

    default: 
      specificPrep = "Vela roja.";
      ritualContent = <p>Ritual genérico.</p>;
      prayerContent = "Pido amor.";
  }

  return [
    {
      id: StepType.WELCOME,
      title: `Día ${day}: ${isNewLove ? "Atracción Nueva" : "Reconexión"}`,
      buttonText: "Comenzar Ritual",
      content: (
        <div className="space-y-4 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-gold-400 animate-pulse-slow" />
          </div>
          <h3 className="text-xl font-light text-gold-200">Jornada Espiritual - Día {day}</h3>
          <p className="leading-relaxed text-sm md:text-base">
            Bienvenido/a a este espacio sagrado. Recuerda: <br/>
            <span className="text-mystic-300 italic">"La magia de Lady Soraya funciona para <strong>hombres y mujeres</strong> por igual."</span>
          </p>
          <div className="bg-mystic-800/50 p-3 rounded-lg border border-mystic-600 mt-2">
            <p className="text-white text-lg font-medium">{DAYS_CONFIG[day-1].subtitle}</p>
          </div>
        </div>
      )
    },
    {
      id: StepType.PREPARATION,
      title: "Preparación del Altar",
      buttonText: "Tengo los elementos",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <Moon className="w-10 h-10 text-mystic-300" />
          </div>
          <ul className="space-y-4 text-left bg-mystic-800/50 p-6 rounded-lg border border-mystic-700">
            <li className="flex items-start gap-3">
              <span className="text-gold-400 mt-1">✦</span>
              <span>Busca un lugar tranquilo y respira profundo 3 veces.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-400 mt-1">✦</span>
              <span><strong>Elemento de hoy:</strong> {specificPrep}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-400 mt-1">✦</span>
              <span>Enfoca tu mente en tu objetivo: <strong className="text-gold-300">{isNewLove ? "Nuevo Amor" : "Regreso del Ex"}</strong>.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: StepType.RITUAL,
      title: "El Ritual Sagrado",
      buttonText: "Continuar a la Oración",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <Flame className="w-10 h-10 text-red-400 animate-pulse" />
          </div>
          <p className="text-center text-sm text-mystic-300 mb-4">
            Realiza las siguientes acciones con fe.
          </p>
          {ritualContent}
        </div>
      )
    },
    {
      id: StepType.PRAYER,
      title: "Invocación Poderosa",
      buttonText: "He recitado la oración",
      content: (
        <div className="space-y-6 text-center">
          <div className="flex justify-center mb-4">
            <Heart className="w-10 h-10 text-pink-400" />
          </div>
          <p className="text-mystic-200 mb-4">
            Repite en voz alta con autoridad:
          </p>
          <blockquote className="italic text-lg font-light leading-loose text-gold-100 bg-gradient-to-b from-mystic-800 to-transparent p-6 rounded-xl border border-mystic-600 shadow-lg shadow-mystic-900/50">
            "{prayerContent}"
          </blockquote>
        </div>
      )
    },
    {
      id: StepType.ACTIVATION,
      title: "Sello Energético",
      buttonText: "Activar Energía",
      content: (
        <div className="space-y-6 text-center">
          <div className="flex justify-center mb-4">
            <Zap className="w-10 h-10 text-gold-400" />
          </div>
          <p>
            Cierra tus ojos. Visualiza tu deseo cumplido.
          </p>
          <div className="bg-mystic-900/50 p-6 rounded-full w-48 h-48 mx-auto flex flex-col items-center justify-center border-2 border-dashed border-gold-500/30 animate-[spin_10s_linear_infinite]">
              <span className="text-2xl font-bold text-gold-400 animate-none" style={{animation: 'none'}}>Hecho Está</span>
          </div>
        </div>
      )
    },
    {
      id: StepType.POST_RITUAL,
      title: "Consejo del Día",
      buttonText: "Entendido",
      content: (
        <div className="space-y-5">
          <div className="flex justify-center mb-4">
            <Sun className="w-10 h-10 text-orange-300" />
          </div>
          <div className="bg-mystic-800/40 p-4 rounded border border-mystic-600">
             <p className="text-lg text-gold-100 text-center">
               "No fuerces nada hoy. La energía ya está en movimiento. Confía en el proceso."
             </p>
          </div>
        </div>
      )
    },
    {
      id: StepType.CLOSING,
      title: "Cierre de Lady Soraya",
      buttonText: "Consultar al Oráculo",
      content: (
        <div className="space-y-6 text-center">
           <div className="flex justify-center mb-6">
            <Star className="w-12 h-12 text-purple-300 animate-float" />
          </div>
          <h3 className="text-2xl font-light text-gold-200">Has completado el Día {day}</h3>
          <p className="leading-relaxed">
            "Tu intención ha sido lanzada al universo. 
            Te espero mañana para continuar."
          </p>
          <div className="mt-8 pt-8 border-t border-mystic-700">
             <p className="text-sm text-mystic-400">
               Si tienes dudas sobre tu caso específico, pregunta al Oráculo abajo.
             </p>
          </div>
        </div>
      )
    }
  ];
};