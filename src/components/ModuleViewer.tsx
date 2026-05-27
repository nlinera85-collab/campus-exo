import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ChevronRight, 
  Award, 
  PlayCircle, 
  ArrowLeft,
  BookOpen, 
  Zap,
  RefreshCw,
  Lightbulb,
  FileText
} from 'lucide-react';
import { modulesData } from '../data/modules';
import { LearningModule } from '../types';

interface ModuleViewerProps {
  completedModules: number[];
  quizScores: { [moduleId: number]: number };
  onModuleComplete: (moduleId: number, score: number, pointsEarned: number) => void;
}

export default function ModuleViewer({ completedModules, quizScores, onModuleComplete }: ModuleViewerProps) {
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  
  // Quiz taking state
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]); // indexes chosen by user
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);

  const modules: LearningModule[] = modulesData;
  const activeModule = modules.find(m => m.id === selectedModuleId);

  // Initialize quiz states
  const startQuiz = () => {
    setCurrentQuizIndex(0);
    setQuizAnswers([]);
    setQuizSubmitted(false);
    setSelectedOption(null);
    setShowFeedback(false);
    setCorrectCount(0);
  };

  const handleSelectModule = (moduleId: number) => {
    setSelectedModuleId(moduleId);
    startQuiz();
  };

  const handleChooseOption = (optIdx: number) => {
    if (showFeedback) return; // Prevent clicking another option during feedback
    setSelectedOption(optIdx);
    setShowFeedback(true);
    
    const isCorrect = optIdx === activeModule!.quiz[currentQuizIndex].correctAnswer;
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setQuizAnswers(prev => [...prev, selectedOption!]);
    setSelectedOption(null);
    setShowFeedback(false);

    if (currentQuizIndex < 4) {
      setCurrentQuizIndex(prev => prev + 1);
    } else {
      // Quiz finished! Calculate score out of 5
      const finalScore = correctCount + (selectedOption === activeModule!.quiz[currentQuizIndex].correctAnswer ? 1 : 0);
      setQuizSubmitted(true);
      
      // Calculate points earned: 10 pts per correct answer, with a bonus of 20 points for a perfect score (5/5)
      const pointsEarned = finalScore * 10 + (finalScore === 5 ? 20 : 0);
      onModuleComplete(activeModule!.id, finalScore, pointsEarned);
    }
  };

  return (
    <div className="space-y-6">
      {!selectedModuleId ? (
        // Modules Grid Overview Selection
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-md">
            <div>
              <h3 className="text-lg font-sans font-bold text-slate-100 flex items-center gap-2">
                <BookOpen className="text-amber-500 h-5 w-5" />
                Módulos de Aprendizaje
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Selecciona uno de los capítulos estructurados del libro para profundizar en los conceptos de las Organizaciones Exponenciales.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {modules.map((mod) => {
              const isFinished = completedModules.includes(mod.id);
              const score = quizScores[mod.id];
              return (
                <div 
                  key={mod.id}
                  id={`module-card-${mod.id}`}
                  onClick={() => handleSelectModule(mod.id)}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 shadow-md flex flex-col justify-between group cursor-pointer hover:translate-y-[-2px]"
                >
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-semibold">
                        Módulo {mod.id}
                      </span>
                      {isFinished && (
                        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-mono text-[10px] font-semibold flex items-center gap-1">
                          <Check className="h-3.5 w-3.5" /> Completado ({score}/5)
                        </span>
                      )}
                    </div>

                    <h4 className="text-md font-sans font-bold text-slate-200 mt-3 group-hover:text-amber-400 transition-colors">
                      {mod.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {mod.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-mono">
                      Contiene: Resumen + Esquemas + Test Examen
                    </span>
                    <span className="text-xs text-amber-500 group-hover:text-amber-400 font-semibold flex items-center gap-1">
                      Comenzar <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // Active Module Material + Interactive Quiz Renders
        <div className="space-y-6">
          {/* Back button */}
          <button 
            onClick={() => setSelectedModuleId(null)}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors cursor-pointer bg-slate-900 px-4 py-2 border border-slate-800 rounded-lg shadow-inner self-start"
          >
            <ArrowLeft className="h-4 w-4" /> Regresar al Selector de Módulos
          </button>

          {/* Module Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Learning Material Summary Column */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Core summary card */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-semibold font-mono tracking-wider text-amber-500">Módulo de Aprendizaje {activeModule!.id}</span>
                  <h3 className="text-xl font-sans font-bold text-slate-100 tracking-tight mt-1">{activeModule!.title}</h3>
                  <p className="text-xs text-slate-400">{activeModule!.subtitle}</p>
                </div>

                {/* Summaries list */}
                <div className="space-y-6 pt-4 border-t border-slate-800">
                  {activeModule!.summary.map((sum, index) => (
                    <div key={index} className="space-y-2.5">
                      <h4 className="text-sm font-semibold text-amber-400 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500" />
                        {sum.title}
                      </h4>
                      <div className="space-y-2 pl-4 text-xs text-slate-300 leading-relaxed">
                        {sum.content.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphical Visual Aid Diagram / Compare Table requested in 1 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
                <h4 className="text-sm font-sans font-bold text-slate-100 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-500" />
                  Recurso Visual: {activeModule!.visualAid.title}
                </h4>

                {/* Render compare grid helper */}
                {activeModule!.visualAid.type === 'compare' && activeModule!.visualAid.labels && (
                  <div className="space-y-4 pt-2">
                    {activeModule!.visualAid.labels.map((rowArr, rIdx) => (
                      <div key={rIdx} className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-xs">
                        <div className="md:col-span-1 py-1 px-2.5 bg-slate-850 border border-slate-800 rounded font-bold text-slate-300 font-mono text-center md:text-left">
                          {rowArr.title}
                        </div>
                        <div className="md:col-span-2 p-3 bg-red-950/20 border border-red-500/10 rounded-lg text-red-400">
                          {rowArr.left}
                        </div>
                        <div className="md:col-span-2 p-3 bg-emerald-950/20 border border-emerald-500/10 rounded-lg text-emerald-300">
                          {rowArr.right}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Render tabular representation */}
                {activeModule!.visualAid.type === 'table' && activeModule!.visualAid.headers && activeModule!.visualAid.rows && (
                  <div className="overflow-x-auto rounded-xl border border-slate-800">
                    <table className="w-full text-xs text-left text-slate-300">
                      <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] font-mono">
                        <tr>
                          {activeModule!.visualAid.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-3">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 bg-slate-900/60">
                        {activeModule!.visualAid.rows.map((row, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-slate-855/50 transition-colors">
                            {row.map((val, cellIdx) => (
                              <td key={cellIdx} className={`px-4 py-3.5 ${cellIdx === 0 ? 'font-mono font-bold text-amber-500 text-center' : ''}`}>
                                {val}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Selected practical list cases from the book */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
                <h4 className="text-sm font-sans font-bold text-slate-100 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-400" />
                  Casos de Estudio Prácticos (Del Libro)
                </h4>
                <div className="space-y-4">
                  {activeModule!.examples.map((example, egIdx) => (
                    <div key={egIdx} className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl space-y-1 hover:border-slate-700/50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-200 text-xs">{example.company}</span>
                        {example.metric && (
                          <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-semibold">
                            {example.metric}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pt-1">{example.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Micro Exam quiz column requested in 2 */}
            <div id="module-quiz-panel" className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl h-fit">
              <h4 className="text-md font-sans font-bold text-slate-200 border-b border-slate-800 pb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-500" />
                Evaluación: Cap. {activeModule!.id}
              </h4>

              {/* Check if already finished or show interactive form */}
              {!quizSubmitted ? (
                <div className="space-y-5 pt-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-amber-500 font-semibold uppercase">Pregunta {currentQuizIndex + 1} de 5</span>
                    <span className="text-slate-400">Correctas: {correctCount} / 5</span>
                  </div>

                  {/* Question Title */}
                  <p className="text-xs text-slate-200 font-semibold leading-relaxed min-h-[48px]">
                    {activeModule!.quiz[currentQuizIndex].question}
                  </p>

                  {/* Option List */}
                  <div className="space-y-2">
                    {activeModule!.quiz[currentQuizIndex].options.map((opt, optIdx) => {
                      const isCorrectAnswerIdx = optIdx === activeModule!.quiz[currentQuizIndex].correctAnswer;
                      const isChosen = selectedOption === optIdx;
                      
                      let btnStyle = "border-slate-800 hover:border-slate-700 bg-slate-950/30 text-slate-300 hover:bg-slate-900/30";
                      
                      if (showFeedback) {
                        if (isCorrectAnswerIdx) {
                          btnStyle = "border-emerald-500/40 bg-emerald-500/10 text-emerald-300";
                        } else if (isChosen) {
                          btnStyle = "border-rose-500/40 bg-rose-500/10 text-rose-300";
                        } else {
                          btnStyle = "border-slate-900 bg-slate-950/20 text-slate-500 opacity-60";
                        }
                      } else if (isChosen) {
                        btnStyle = "border-amber-500/40 bg-amber-500/15 text-amber-300";
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleChooseOption(optIdx)}
                          disabled={showFeedback}
                          className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all duration-300 flex items-start gap-2.5 ${btnStyle} ${!showFeedback ? 'cursor-pointer' : ''}`}
                        >
                          <span className="font-mono bg-slate-900/80 px-1.5 py-0.5 rounded text-[10px] text-slate-400 font-bold">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanatory feedback upon selection */}
                  {showFeedback && (
                    <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
                      selectedOption === activeModule!.quiz[currentQuizIndex].correctAnswer
                        ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-400/90'
                        : 'bg-rose-500/5 border-rose-500/10 text-rose-400/90'
                    }`}>
                      <p className="font-bold flex items-center gap-1.5 font-sans mb-1">
                        {selectedOption === activeModule!.quiz[currentQuizIndex].correctAnswer ? (
                          <>💼 ¡Excelente Respuesta! Correcto.</>
                        ) : (
                          <>🔍 Incorrecto. Feedback Explicativo:</>
                        )}
                      </p>
                      <p className="italic text-[11px] leading-relaxed">
                        {activeModule!.quiz[currentQuizIndex].explanation}
                      </p>

                      <button
                        onClick={handleNextQuestion}
                        className="w-full mt-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Siguiente Pregunta <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                // Submit complete screen
                <div className="pt-6 text-center space-y-4">
                  <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl inline-block">
                    <Award className="h-10 w-10 text-amber-500 animate-bounce mx-auto" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-slate-100 text-md">¡Examen Terminado!</h5>
                    <p className="text-xs text-slate-400 mt-1">Cálculo de puntuación acumulada:</p>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl font-mono text-center">
                    <p className="text-[10px] tracking-widest text-slate-500 uppercase">Aciertos</p>
                    <p className="text-3xl font-extrabold text-amber-500 mt-1">{correctCount} / 5</p>
                    <p className="text-[10px] text-slate-400 mt-2">
                      +{correctCount * 10} pts ganados
                      {correctCount === 5 && " | +20 pts PERFECT BONUS!"}
                    </p>
                  </div>

                  <div className="flex gap-2.5 pt-2">
                    <button
                      onClick={startQuiz}
                      className="w-1/2 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="h-3.5 w-3.5" /> Reintentar
                    </button>
                    <button
                      onClick={() => setSelectedModuleId(null)}
                      className="w-1/2 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Ver Módulos
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
