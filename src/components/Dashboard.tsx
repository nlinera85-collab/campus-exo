import React from 'react';
import { 
  Award, 
  CheckCircle, 
  Gamepad2, 
  Trophy, 
  Zap, 
  TrendingUp, 
  Layers, 
  Flame, 
  BookOpen,
  XCircle,
  Clock
} from 'lucide-react';
import { UserProgressType } from '../types';

interface DashboardProps {
  progress: UserProgressType;
  onNavigate: (tab: string) => void;
  resetProgress: () => void;
}

export default function Dashboard({ progress, onNavigate, resetProgress }: DashboardProps) {
  const completedModulesCount = progress.completedModules.length;
  const progressPercentage = Math.round((completedModulesCount / 6) * 100);
  
  // Calculate total quizzes score
  const quizScoresArray = Object.values(progress.quizScores);
  const totalCorrectQuizzes = quizScoresArray.reduce((acc, curr) => acc + curr, 0);

  // Define achievements
  const badgesList = [
    {
      id: 'badge-iniciado',
      title: 'Iniciado ExO',
      desc: 'Completaste tu primer módulo de aprendizaje.',
      unlocked: completedModulesCount >= 1,
      icon: Zap,
      color: 'from-blue-500/20 to-blue-600/30 text-blue-400 border-blue-500/30'
    },
    {
      id: 'badge-scale',
      title: 'Maestro SCALE',
      desc: 'Dominaste los atributos externos e internos.',
      unlocked: progress.completedModules.includes(2) && progress.completedModules.includes(3),
      icon: Layers,
      color: 'from-indigo-500/20 to-indigo-600/30 text-indigo-400 border-indigo-500/30'
    },
    {
      id: 'badge-mentes',
      title: 'Superávit Cognitivo',
      desc: 'Alcanzaste una puntuación acumulada superior a 200 pts.',
      unlocked: progress.points >= 200,
      icon: Flame,
      color: 'from-amber-500/20 to-amber-600/30 text-amber-400 border-amber-500/30'
    },
    {
      id: 'badge-timed',
      title: 'Plan Quinquenal Muerto',
      desc: 'Superaste el desafío cronometrado con éxito.',
      unlocked: progress.gamesCompleted.timed,
      icon: Clock,
      color: 'from-rose-500/20 to-rose-600/30 text-rose-400 border-rose-500/30'
    },
    {
      id: 'badge-expert',
      title: 'Ejecutivo Exponencial',
      desc: 'Completaste el 100% de los módulos y exámenes.',
      unlocked: completedModulesCount === 6,
      icon: Trophy,
      color: 'from-amber-500/30 to-amber-600/40 text-amber-200 border-amber-500/50 blink'
    }
  ];

  // Games summary count
  const gamesCount = Object.values(progress.gamesCompleted).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Header section with greetings */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700/40 shadow-xl">
        <div>
          <h2 className="text-2xl font-sans font-bold text-slate-100 tracking-tight">
            ¡Hola, Innovador Exponencial!
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Bienvenido al Campus Virtual de Aprendizaje de **Organizaciones Exponenciales**. Prepárate para disrumpir el modelo tradicional lineal.
          </p>
        </div>
        <button 
          onClick={resetProgress}
          className="px-4 py-2 bg-slate-800/80 hover:bg-red-950/20 hover:text-red-400 text-xs font-semibold text-slate-400 rounded-lg border border-slate-700 hover:border-red-500/20 transition-all cursor-pointer"
        >
          Reiniciar Progreso
        </button>
      </div>

      {/* Progress Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Core global progress */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Progreso del Campus</span>
              <span className="text-xl font-bold font-mono text-amber-500">{progressPercentage}%</span>
            </div>
            {/* Progress Bar container */}
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mb-4">
              <div 
                className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
            <span>Módulos: {completedModulesCount} / 6</span>
            <span>Juegos: {gamesCount} / 4</span>
          </div>
        </div>

        {/* Total Points */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center gap-4 shadow-lg">
          <div className="p-3.5 bg-amber-500/10 text-amber-500 rounded-xl border border-amber-500/20">
            <Zap className="h-7 w-7" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Puntaje Acumulado</span>
            <h3 className="text-3xl font-bold font-mono text-slate-100 mt-1">{progress.points} pts</h3>
            <p className="text-[11px] text-amber-500/80 mt-1 cursor-pointer font-mono hover:underline" onClick={() => onNavigate('games')}>
              ¡Juega para multiplicar tus puntos!
            </p>
          </div>
        </div>

        {/* Quizzes scores */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center gap-4 shadow-lg">
          <div className="p-3.5 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
            <CheckCircle className="h-7 w-7" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Evaluaciones Aprobadas</span>
            <h3 className="text-3xl font-bold font-mono text-slate-100 mt-1">{totalCorrectQuizzes} / 30</h3>
            <p className="text-[11px] text-slate-400 mt-1 font-mono">
              Respuestas correctas acumuladas
            </p>
          </div>
        </div>
      </div>

      {/* Grid: Badges/Achievements & Direct Navigation Help */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Unlocked Badges / Achievments */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg space-y-4">
          <h3 className="text-md font-sans font-bold text-slate-200 flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-400" />
            Medallas y Logros de Transformación
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {badgesList.map((badge) => {
              const IconComponent = badge.icon;
              return (
                <div 
                  key={badge.id}
                  className={`p-4 rounded-xl border flex gap-3 transition-transform duration-300 hover:scale-[1.02] ${
                    badge.unlocked 
                      ? `bg-slate-800/40 border-slate-700/60` 
                      : 'bg-slate-950/20 border-slate-900/60 opacity-40 grayscale'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 flex items-center justify-center border ${
                    badge.unlocked 
                      ? `bg-gradient-to-br ${badge.color}` 
                      : 'bg-slate-900 text-slate-600 border-slate-800'
                  }`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">{badge.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{badge.desc}</p>
                    <span className={`inline-block text-[9px] font-semibold uppercase mt-1.5 px-1.5 py-0.5 rounded ${
                      badge.unlocked 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-slate-800 text-slate-500'
                    }`}>
                      {badge.unlocked ? 'Desbloqueado' : 'Bloqueado'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary of Book Core Thesis / Quotes */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-md font-sans font-bold text-slate-200 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-amber-500" />
              Tesis Central de ExO
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed italic">
              "Una **Organización Exponencial (ExO)** es aquella cuyo impacto o resultado es desproporcionadamente grande —al menos **diez veces superior**— al compararla con sus iguales, gracias al uso de nuevas técnicas organizativas orientadas por la información."
            </p>
            <div className="bg-slate-950/60 border border-slate-800 p-3.5 rounded-xl space-y-2">
              <p className="text-[11px] text-amber-400 font-mono font-semibold uppercase">Mantra del mes:</p>
              <p className="text-xs text-slate-400 italic">
                "Cualquier compañía diseñada para triunfar en el siglo XX está abocada al fracaso en el siglo XXI."
              </p>
              <p className="text-[10px] text-right text-slate-500 font-mono">— David S. Rose</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button 
              onClick={() => onNavigate('modules')}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold rounded-xl transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="h-4 w-4" />
              Comenzar a Aprender
            </button>
            <button 
              onClick={() => onNavigate('games')}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Gamepad2 className="h-4 w-4" />
              Probar Juegos ExO
            </button>
          </div>
        </div>
      </div>

      {/* Visual representation of ExO vs Linear attributes to meet visual schema/tables requested in 1 */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
        <h3 className="text-md font-sans font-bold text-slate-200 mb-4 flex items-center gap-2">
          <Layers className="h-5 w-5 text-amber-500" />
          La Revolución del Modelo Organizativo
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          Compara de un vistazo cómo las organizaciones progresan desde un modelo corporativo tradicional a uno de tipo exponencial:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/20">
            <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
              <span className="font-semibold text-slate-400 font-mono">Organizaciones Lineales (Tradicional)</span>
              <span className="text-red-400 font-mono text-[10px]">● Eficiencia Rígida</span>
            </div>
            <ul className="p-4 space-y-2.5 text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 select-none">✕</span>
                <span>Enfocada a gestionar la **escasez** de activos y recursos en posesión directa.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 select-none">✕</span>
                <span>Procesos jerárquicos secuenciales y toma de decisiones lenta de arriba-abajo (top-down).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 select-none">✕</span>
                <span>Inflexibilidad de estructuras unida a planes corporativos de reportes y de 5 años.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 select-none">✕</span>
                <span>Inmunidad al cambio: el sistema inmunitario corporativo ahoga las ideas radicalmente disruptivas.</span>
              </li>
            </ul>
          </div>

          <div className="border border-amber-500/20 rounded-xl overflow-hidden bg-amber-500/5">
            <div className="bg-slate-950 px-4 py-2 border-b border-amber-500/10 flex items-center justify-between">
              <span className="font-semibold text-amber-400 font-mono">Organizaciones Exponenciales (ExO)</span>
              <span className="text-amber-400 font-mono text-[10px] animate-pulse">● Crecimiento 10x</span>
            </div>
            <ul className="p-4 space-y-2.5 text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 select-none">✓</span>
                <span>Enfocada a direccionar y dar sentido a la **abundancia** de flujos de información externos.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 select-none">✓</span>
                <span>Descentralización, autonomía de equipos, algoritmos inteligentes e interfaces automatizadas.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 select-none">✓</span>
                <span>Metodología Lean Startup de experimentación veloz, prototipado rápido y MVPs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 select-none">✓</span>
                <span>Protege y cultiva la innovación en las "Fronteras" operacionales para evitar anticuerpos internos.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
