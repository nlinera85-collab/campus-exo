import React from 'react';
import { 
  Compass, 
  BookOpen, 
  Gamepad2, 
  HelpCircle, 
  Award, 
  Zap 
} from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  points: number;
  completedCount: number;
}

export default function Sidebar({ currentTab, setCurrentTab, points, completedCount }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Mi Progreso', icon: Compass, desc: 'Panel de estadísticas y logros' },
    { id: 'modules', label: 'Campus Virtual', icon: BookOpen, desc: 'Módulos de capacitación ExO' },
    { id: 'games', label: 'Sala de Juegos', icon: Gamepad2, desc: 'Retos de gamificación interactiva' },
    { id: 'glossary', label: 'Glosario ExO', icon: HelpCircle, desc: 'Términos, conceptos y siglas' },
  ];

  return (
    <aside 
      id="campus-sidebar" 
      className="w-full lg:w-72 bg-slate-900 border-r border-slate-800 text-slate-100 flex flex-col justify-between shrink-0"
    >
      <div>
        {/* Campus Header Brand */}
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="p-2.5 bg-amber-500 rounded-xl text-slate-950 shadow-md shadow-amber-500/20">
            <Zap className="h-6 w-6 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="font-sans font-bold text-lg tracking-tight bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Campus ExO
            </h1>
            <p className="text-[11px] text-slate-400 tracking-wider uppercase font-mono">
              Virtual Learning
            </p>
          </div>
        </div>

        {/* Dynamic score summary header */}
        <div className="p-4 mx-4 my-5 bg-gradient-to-br from-slate-800/80 to-slate-900 border border-slate-700/50 rounded-2xl flex items-center justify-between shadow-inner">
          <div className="flex items-center gap-2.5">
            <Award className="h-5 w-5 text-amber-400 stroke-[1.8]" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">Puntos ExO</p>
              <p className="text-lg font-bold text-amber-400 font-mono tracking-wide">{points} pts</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">Capítulos</p>
            <p className="text-sm font-semibold text-slate-200 font-mono">{completedCount} / 6</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="px-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`sidebar-tab-${item.id}`}
                onClick={() => setCurrentTab(item.id)}
                className={`w-full text-left flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 relative group cursor-pointer ${
                  isActive 
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/10' 
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-slate-100'
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-slate-950 rounded-r-md" />
                )}
                <Icon className={`h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                <div className="flex flex-col">
                  <span className="text-sm">{item.label}</span>
                  <span className={`text-[10px] leading-none ${isActive ? 'text-slate-900/80' : 'text-slate-400/80'}`}>
                    {item.desc}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer credits and user profile */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/40 text-center">
        <p className="text-[10px] text-slate-500 font-mono">
          Libro: Salim Ismail, M. Malone, Y. van Geest
        </p>
        <p className="text-[11px] text-amber-500/80 mt-1 hover:underline cursor-pointer" onClick={() => setCurrentTab('glossary')}>
          Manual de Instrucciones ExO
        </p>
      </div>
    </aside>
  );
}
