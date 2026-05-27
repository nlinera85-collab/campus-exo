import React, { useState, useEffect } from 'react';
import { UserProgressType } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ModuleViewer from './components/ModuleViewer';
import Games from './components/Games';
import Glossary from './components/Glossary';
import { Award, Layers, Zap, Clock } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'exo_campus_progress_v1';

const initialProgress: UserProgressType = {
  completedModules: [],
  quizScores: {},
  points: 10, // Starts with a small reward
  unlockedBadges: [],
  gamesCompleted: {
    matching: false,
    dragDrop: false,
    fillBlank: false,
    timed: false
  }
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [progress, setProgress] = useState<UserProgressType>(initialProgress);

  // Load progress from localStorage on boot
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load user progress', e);
    }
  }, []);

  // Save progress to localStorage helper
  const saveProgress = (newProgress: UserProgressType) => {
    setProgress(newProgress);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProgress));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  };

  const handleModuleComplete = (moduleId: number, score: number, pointsEarned: number) => {
    const updatedCompletedModules = [...progress.completedModules];
    if (!updatedCompletedModules.includes(moduleId)) {
      updatedCompletedModules.push(moduleId);
    }

    const updatedQuizScores = { ...progress.quizScores };
    updatedQuizScores[moduleId] = score;

    const newProgress: UserProgressType = {
      ...progress,
      completedModules: updatedCompletedModules,
      quizScores: updatedQuizScores,
      points: progress.points + pointsEarned
    };

    saveProgress(newProgress);
  };

  const handleGameComplete = (gameCode: 'matching' | 'dragDrop' | 'fillBlank' | 'timed', pointsEarned: number) => {
    const updatedGamesCompleted = { ...progress.gamesCompleted };
    
    // Only grant points the first time the game is completed
    const wasAlreadyCompleted = updatedGamesCompleted[gameCode];
    updatedGamesCompleted[gameCode] = true;

    const newProgress: UserProgressType = {
      ...progress,
      gamesCompleted: updatedGamesCompleted,
      points: wasAlreadyCompleted ? progress.points : progress.points + pointsEarned
    };

    saveProgress(newProgress);
  };

  const handleResetProgress = () => {
    if (window.confirm('¿Estás seguro de que deseas reiniciar todo tu progreso e historial de puntos?')) {
      saveProgress(initialProgress);
      setCurrentTab('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row antialiased font-sans">
      
      {/* Sidebar Component */}
      <Sidebar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        points={progress.points}
        completedCount={progress.completedModules.length}
      />

      {/* Main Campus Section Container */}
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        
        {/* Dynamic header panel */}
        <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3 shrink-0">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
              Campus Virtual de Aprendizaje ExO
            </span>
            <h2 className="text-md sm:text-lg font-sans font-bold text-slate-100 mt-0.5 tracking-tight flex items-center gap-2">
              {currentTab === 'dashboard' && 'Mi Progreso General'}
              {currentTab === 'modules' && 'Capítulos y Módulos de Aprendizaje'}
              {currentTab === 'games' && 'Sala de Gamificación e Interactividad'}
              {currentTab === 'glossary' && 'Glosario Dinámico ExO'}
            </h2>
          </div>

          {/* Time & User Context info card */}
          <div className="flex items-center gap-4 bg-slate-950/60 border border-slate-800/80 px-4 py-2 rounded-xl text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 border-r border-slate-800 pr-3 mr-1">
              <Clock className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
              <span>UTC: 2026-05-20</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest">Estudiante:</span>
              <p className="text-slate-300 pointer-events-none lowercase">nlinera85@gmail.com</p>
            </div>
          </div>
        </header>

        {/* Tab Body Render with animation */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          {currentTab === 'dashboard' && (
            <Dashboard 
              progress={progress} 
              onNavigate={setCurrentTab}
              resetProgress={handleResetProgress}
            />
          )}

          {currentTab === 'modules' && (
            <ModuleCompleteWrapper>
              <ModuleViewer 
                completedModules={progress.completedModules}
                quizScores={progress.quizScores}
                onModuleComplete={handleModuleComplete}
              />
            </ModuleCompleteWrapper>
          )}

          {currentTab === 'games' && (
            <Games 
              points={progress.points}
              gamesCompleted={progress.gamesCompleted}
              onGameComplete={handleGameComplete}
            />
          )}

          {currentTab === 'glossary' && (
            <Glossary />
          )}
        </div>

      </main>
    </div>
  );
}

// Simple wrapper wrapper to add transition fade inside React component
function ModuleCompleteWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
}
