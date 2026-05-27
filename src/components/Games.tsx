import React, { useState, useEffect, useRef } from 'react';
import { 
  Gamepad2, 
  Check, 
  X, 
  Award, 
  ChevronRight, 
  RefreshCw, 
  Clock, 
  Zap, 
  Sparkles, 
  TrendingUp,
  Columns
} from 'lucide-react';

interface GamesProps {
  points: number;
  gamesCompleted: {
    matching: boolean;
    dragDrop: boolean;
    fillBlank: boolean;
    timed: boolean;
  };
  onGameComplete: (gameCode: 'matching' | 'dragDrop' | 'fillBlank' | 'timed', pointsEarned: number) => void;
}

export default function Games({ points, gamesCompleted, onGameComplete }: GamesProps) {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  // --- GAME 1: MATCHING STATE ---
  const initialLeftTerms = [
    { id: 'S', name: 'S (Staff on Demand)', matchId: '1' },
    { id: 'C', name: 'C (Comunidad y Entorno)', matchId: '2' },
    { id: 'A', name: 'A (Algoritmos)', matchId: '3' },
    { id: 'L', name: 'L (Activos Alquilados)', matchId: '4' }
  ];
  const initialRightDescs = [
    { id: 'desc-3', text: 'Permiten automatizar masivamente, sustituyendo la imprecisa intuición directiva humana.', matchId: '3' },
    { id: 'desc-1', text: 'Acceder a colaboradores externos temporales de alta destreza de forma ágil.', matchId: '1' },
    { id: 'desc-4', text: 'Reducir CAPEX apoyándose en recursos existentes ajenos (ej. nubes o vehículos).', matchId: '4' },
    { id: 'desc-2', text: 'Aprovechar la energía colectiva de fans y del crowd que comparten el PTM.', matchId: '2' }
  ];

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matches, setMatches] = useState<string[]>([]); // Array of leftId_rightId matches
  const [matchingFinished, setMatchingFinished] = useState(false);

  const selectLeftMatch = (leftId: string) => {
    setSelectedLeft(leftId);
    if (selectedRight) {
      checkMatch(leftId, selectedRight);
    }
  };

  const selectRightMatch = (rightId: string) => {
    setSelectedRight(rightId);
    if (selectedLeft) {
      checkMatch(selectedLeft, rightId);
    }
  };

  const checkMatch = (lId: string, rId: string) => {
    const leftTerm = initialLeftTerms.find(item => item.id === lId);
    const rightDesc = initialRightDescs.find(item => item.id === rId);

    if (leftTerm && rightDesc && leftTerm.matchId === rightDesc.matchId) {
      // Correct Match!
      const newMatchPair = `${lId}_${rId}`;
      setMatches(prev => [...prev, newMatchPair]);
    }
    
    // Reset selections after check
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  // Detect matching game completion
  useEffect(() => {
    if (matches.length === 4 && !matchingFinished) {
      setMatchingFinished(true);
      onGameComplete('matching', 50); // Earn 50 points
    }
  }, [matches]);

  const restartMatching = () => {
    setMatches([]);
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchingFinished(false);
  };


  // --- GAME 2: ORDER 6Ds TRIAL (DRAG-AND-TAP SORTING) ---
  const initialSteps6D = [
    { code: 'disrupt', text: '3. Disruptivo (La potencia quiebra el mercado tradicional)', correctIdx: 2 },
    { code: 'digital', text: '1. Digitalizar (Los procesos se vuelven bytes y ceros y unos)', correctIdx: 0 },
    { code: 'democrat', text: '6. Democratizar (El acceso se vuelve horizontal y libre)', correctIdx: 5 },
    { code: 'desmate', text: '4. Desmaterializar (Dispositivos físicos se disuelven en apps)', correctIdx: 3 },
    { code: 'distort', text: '2. Distorsionado (Al inicio el avance exponencial parece cero)', correctIdx: 1 },
    { code: 'desmone', text: '5. Desmonetizar (El costo marginal recae a cero absoluto)', correctIdx: 4 }
  ];

  const [currentSorting, setCurrentSorting] = useState<typeof initialSteps6D>(initialSteps6D);
  const [sortChecked, setSortChecked] = useState(false);
  const [isSortedCorrectly, setIsSortedCorrectly] = useState(false);

  const moveStep = (fromIdx: number, toIdx: number) => {
    if (sortChecked) return;
    const copied = [...currentSorting];
    const [moved] = copied.splice(fromIdx, 1);
    copied.splice(toIdx, 0, moved);
    setCurrentSorting(copied);
  };

  const verifySorting = () => {
    let correct = true;
    currentSorting.forEach((item, index) => {
      if (item.correctIdx !== index) {
        correct = false;
      }
    });

    setSortChecked(true);
    setIsSortedCorrectly(correct);
    if (correct) {
      onGameComplete('dragDrop', 60); // Earn 60 points
    }
  };

  const restartSorting = () => {
    // Shuffle slightly
    setCurrentSorting([...initialSteps6D].sort(() => Math.random() - 0.5));
    setSortChecked(false);
    setIsSortedCorrectly(false);
  };


  // --- GAME 3: FILL IN THE BLANKS ---
  const initialBlanks = [
    {
      id: 1,
      quote: "Cualquier compañía diseñada para triunfar en el siglo [ ___ ] está abocada al fracaso en el siglo [ ___ ].",
      options: ['XIX / XX', 'XX / XXI', 'XVIII / XIX', 'I / II'],
      correctAnswer: 'XX / XXI',
      explanation: 'Un adagio famoso de David S. Rose que sintetiza por qué las asunciones estables de management lineal murieron con la globalización exponencial.'
    },
    {
      id: 2,
      quote: "Si, cuando lanzas el producto, no te [ ___ ] de él, es que lo has lanzado demasiado tarde.",
      options: ['enorgulleces', 'arrepientes', 'avergüenzas', 'olvidas'],
      correctAnswer: 'avergüenzas',
      explanation: 'Atribuido a Reid Hoffman (LinkedIn), destaca la necesidad de lanzar rápido el MVP al mercado o de lo contrario el mercado exponencial te superará.'
    },
    {
      id: 3,
      quote: "La [ ___ ] toma estrategia de desayuno.",
      options: ['planeación', 'ejecución', 'regulación', 'reputación'],
      correctAnswer: 'ejecución',
      explanation: 'Una máxima común en Silicon Valley que destaca por qué hacer real las asunciones a tiempo real es mil veces mejor que reportes teóricos abstractos.'
    }
  ];

  const [blankIdx, setBlankIdx] = useState(0);
  const [chosenBlankOpt, setChosenBlankOpt] = useState<string | null>(null);
  const [blankChecked, setBlankChecked] = useState(false);
  const [blanksScore, setBlanksScore] = useState(0);
  const [blanksFinished, setBlanksFinished] = useState(false);

  const checkBlankAnswer = (opt: string) => {
    setChosenBlankOpt(opt);
    setBlankChecked(true);
    
    if (opt === initialBlanks[blankIdx].correctAnswer) {
      setBlanksScore(prev => prev + 1);
    }
  };

  const nextBlankQuestion = () => {
    setBlankChecked(false);
    setChosenBlankOpt(null);

    if (blankIdx < 2) {
      setBlankIdx(prev => prev + 1);
    } else {
      setBlanksFinished(true);
      if (blanksScore >= 2) {
        onGameComplete('fillBlank', 40); // Earn 40 points
      }
    }
  };

  const restartBlanks = () => {
    setBlankIdx(0);
    setChosenBlankOpt(null);
    setBlankChecked(false);
    setBlanksScore(0);
    setBlanksFinished(false);
  };


  // --- GAME 4: TIMED FIRE CHRONO TRIAL ---
  const timedQuestions = [
    { text: "El sistema inmunitario corporativo es un invento del gobierno para regular apps de transporte.", correct: false },
    { text: "Waze no poseía las costosas antenas sensores físicos de Navteq y costó $1.1B.", correct: true },
    { text: "Un PTM es igual a una declaración aburrida de misión orientada a accionistas.", correct: false },
    { text: "La holocracia es un sistema de gobernanza jerárquico-piramidal estricto.", correct: false },
    { text: "El superávit cognitivo es un término acuñado por Clay Shirky para describir la colaboración masiva.", correct: true }
  ];

  const [timedIdx, setTimedIdx] = useState(0);
  const [timerLeft, setTimerLeft] = useState(25); // 25 seconds countdown
  const [timedScore, setTimedScore] = useState(0);
  const [timedFinished, setTimedFinished] = useState(false);
  const [timedRunning, setTimedRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (timedRunning && timerLeft > 0) {
      interval = setInterval(() => {
        setTimerLeft(prev => prev - 1);
      }, 1000);
    } else if (timerLeft === 0 && timedRunning) {
      finishChronoGame();
    }
    return () => clearInterval(interval);
  }, [timedRunning, timerLeft]);

  const startChronoGame = () => {
    setTimedIdx(0);
    setTimerLeft(25);
    setTimedScore(0);
    setTimedFinished(false);
    setTimedRunning(true);
  };

  const answerChrono = (chosenBool: boolean) => {
    const isCorrect = chosenBool === timedQuestions[timedIdx].correct;
    if (isCorrect) {
      setTimedScore(prev => prev + 1);
    }

    if (timedIdx < 4) {
      setTimedIdx(prev => prev + 1);
    } else {
      finishChronoGame();
    }
  };

  const finishChronoGame = () => {
    setTimedRunning(false);
    setTimedFinished(true);
    
    // Earn 80 points if user answered at least 4 correctly
    if (timedScore >= 4) {
      onGameComplete('timed', 80);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Mini Title Grid */}
      {!activeGame ? (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-sans font-bold text-slate-100 flex items-center gap-2">
              <Gamepad2 className="text-amber-500 h-5 w-5" />
              Sala de Juegos Interactivos ExO
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Pon a prueba tus sentidos exponenciales, gana puntos para desbloquear medallas exclusivas y diviértete con la gamificación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Game Card 1 */}
            <div 
              onClick={() => { setActiveGame('matching'); restartMatching(); }}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/20 p-6 rounded-2xl flex flex-col justify-between shadow-lg cursor-pointer transition-all duration-300 hover:translate-y-[-2px] group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 border border-amber-500/10 px-2 py-0.5 rounded">Asociaciones</span>
                  {gamesCompleted.matching && (
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1"><Check className="h-3.5 w-3.5" /> Superado (+50 pts)</span>
                  )}
                </div>
                <h4 className="text-md font-sans font-bold text-slate-200 group-hover:text-amber-400 transition-colors">Emparejar SCALE</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Asocia los atributos externos del acrónimo con sus precisas descripciones de mercado en el menor número de intentos.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>Dificultad: Principiante</span>
                <span className="text-amber-500 font-semibold group-hover:underline">Jugar Ahora →</span>
              </div>
            </div>

            {/* Game Card 2 */}
            <div 
              onClick={() => { setActiveGame('dragDrop'); restartSorting(); }}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/20 p-6 rounded-2xl flex flex-col justify-between shadow-lg cursor-pointer transition-all duration-300 hover:translate-y-[-2px] group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-400 border border-indigo-500/10 px-2 py-0.5 rounded">Ordenamiento</span>
                  {gamesCompleted.dragDrop && (
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1"><Check className="h-3.5 w-3.5" /> Superado (+60 pts)</span>
                  )}
                </div>
                <h4 className="text-md font-sans font-bold text-slate-200 group-hover:text-amber-400 transition-colors">Ordenar las 6 D</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Ordena secuencialmente el ciclo exponencial de las tecnologías (desde Digitalizar hasta Democratizar).
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>Dificultad: Intermedia</span>
                <span className="text-amber-500 font-semibold group-hover:underline">Jugar Ahora →</span>
              </div>
            </div>

            {/* Game Card 3 */}
            <div 
              onClick={() => { setActiveGame('fillBlank'); restartBlanks(); }}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/20 p-6 rounded-2xl flex flex-col justify-between shadow-lg cursor-pointer transition-all duration-350 hover:translate-y-[-2px] group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 border border-emerald-500/10 px-2 py-0.5 rounded">Rellenar Frases</span>
                  {gamesCompleted.fillBlank && (
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1"><Check className="h-3.5 w-3.5" /> Superado (+40 pts)</span>
                  )}
                </div>
                <h4 className="text-md font-sans font-bold text-slate-200 group-hover:text-amber-400 transition-colors">Citas Célebres ExO</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Completa las frases más icónicas e inspiradoras del libro. Excelente para fijar los preceptos del nuevo management.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>Dificultad: Intermedia</span>
                <span className="text-amber-500 font-semibold group-hover:underline">Jugar Ahora →</span>
              </div>
            </div>

            {/* Game Card 4 */}
            <div 
              onClick={() => { setActiveGame('timed'); startChronoGame(); }}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/20 p-6 rounded-2xl flex flex-col justify-between shadow-lg cursor-pointer transition-all duration-300 hover:translate-y-[-2px] group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-rose-400 border border-rose-500/10 px-2 py-0.5 rounded font-bold animate-pulse">Reto Cronometrado</span>
                  {gamesCompleted.timed && (
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1"><Check className="h-3.5 w-3.5" /> Superado (+80 pts)</span>
                  )}
                </div>
                <h4 className="text-md font-sans font-bold text-slate-200 group-hover:text-amber-400 transition-colors">Juicio Rápido - 25 Segs</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Un reto vertiginoso. Responde Verdadero o Falso a enunciados críticos del libro antes de que se agote la cuenta del reloj.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>Dificultad: Avanzado</span>
                <span className="text-amber-500 font-semibold group-hover:underline">Jugar Ahora →</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Active Game Container
        <div>
          <button 
            onClick={() => setActiveGame(null)}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors cursor-pointer bg-slate-900 px-4 py-2 border border-slate-800 rounded-lg shadow-inner mb-6"
          >
            ← Volver a la Sala de Juegos
          </button>

          {/* GAME 1: MATCHING LAYOUT */}
          {activeGame === 'matching' && (
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest font-semibold text-amber-500">Minijuego de Asociación</span>
                <h4 className="text-md font-sans font-bold text-slate-100 mt-1">Emparejar el Atributo de SCALE</h4>
                <p className="text-xs text-slate-400">Click en un término de la izquierda, y luego en su significado correspondiente de la derecha.</p>
              </div>

              {!matchingFinished ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {/* Left Column */}
                  <div className="space-y-2.5">
                    <p className="text-[11px] uppercase tracking-wider font-mono text-slate-400 mb-1 font-semibold">Términos ExO</p>
                    {initialLeftTerms.map(term => {
                      const isMatched = matches.some(m => m.startsWith(term.id));
                      const isChosen = selectedLeft === term.id;
                      return (
                        <button
                          key={term.id}
                          disabled={isMatched}
                          onClick={() => selectLeftMatch(term.id)}
                          className={`w-full text-left p-3 border text-xs font-mono font-bold rounded-xl transition-all ${
                            isMatched 
                              ? 'bg-slate-950/20 border-slate-950 text-slate-600 cursor-not-allowed opacity-50'
                              : isChosen 
                                ? 'bg-amber-500/15 border-amber-500 text-amber-400 scale-[1.01]'
                                : 'bg-slate-950/30 border-slate-850 hover:bg-slate-900/30 text-slate-200 cursor-pointer'
                          }`}
                        >
                          {term.name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-2.5">
                    <p className="text-[11px] uppercase tracking-wider font-mono text-slate-400 mb-1 font-semibold">Significados Reales</p>
                    {initialRightDescs.map(desc => {
                      const isMatched = matches.some(m => m.endsWith(desc.id));
                      const isChosen = selectedRight === desc.id;
                      return (
                        <button
                          key={desc.id}
                          disabled={isMatched}
                          onClick={() => selectRightMatch(desc.id)}
                          className={`w-full text-left p-3 border text-xs leading-relaxed rounded-xl transition-all ${
                            isMatched 
                              ? 'bg-slate-950/20 border-slate-950 text-slate-600 cursor-not-allowed opacity-50'
                              : isChosen 
                                ? 'bg-amber-500/15 border-amber-500 text-amber-400 scale-[1.01]'
                                : 'bg-slate-950/30 border-slate-850 hover:bg-slate-900/30 text-slate-200 cursor-pointer'
                          }`}
                        >
                          {desc.text}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl inline-block text-emerald-400">
                    <Sparkles className="h-8 w-8 animate-pulse mx-auto" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-100 text-sm">¡Asociación Completada con Éxito!</h5>
                    <p className="text-xs text-slate-400 mt-1">Has emparejado todos los términos de SCALE de forma correcta.</p>
                  </div>
                  <p className="text-lg font-bold font-mono text-amber-400">+50 puntos ExO ganados</p>
                  <button 
                    onClick={restartMatching}
                    className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    Volver a Emparejar
                  </button>
                </div>
              )}
            </div>
          )}

          {/* GAME 2: DRAG-TAP SORTING */}
          {activeGame === 'dragDrop' && (
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest font-semibold text-indigo-400">Ordenando Conceptos</span>
                <h4 className="text-md font-sans font-bold text-slate-100 mt-1">Las 6 D Celestes del Crecimiento</h4>
                <p className="text-xs text-slate-400">Usa las flechas para desplazar las etapas hasta ordenarlas en la secuencia clásica correcta (1 a 6).</p>
              </div>

              <div className="space-y-2 max-w-xl mx-auto pt-2">
                {currentSorting.map((step, idx) => {
                  return (
                    <div 
                      key={step.code}
                      className="p-3 bg-slate-950/40 border border-slate-850 rounded-xl flex items-center justify-between text-xs transition-colors hover:border-slate-700/60"
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded bg-slate-900 border border-slate-700/50 flex items-center justify-center font-mono text-[10px] text-slate-400 font-bold self-start mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-slate-200">{step.text}</span>
                      </div>

                      {/* Direction controls */}
                      <div className="flex gap-1 shrink-0">
                        <button 
                          onClick={() => moveStep(idx, idx - 1)}
                          disabled={idx === 0 || sortChecked}
                          className="p-1 px-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-30 rounded text-[10px] text-slate-400 font-bold font-mono cursor-pointer"
                        >
                          ▲
                        </button>
                        <button 
                          onClick={() => moveStep(idx, idx + 1)}
                          disabled={idx === 5 || sortChecked}
                          className="p-1 px-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-30 rounded text-[10px] text-slate-400 font-bold font-mono cursor-pointer"
                        >
                          ▼
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center pt-2">
                {!sortChecked ? (
                  <button
                    onClick={verifySorting}
                    className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-md shadow-amber-500/10"
                  >
                    Verificar Secuencia
                  </button>
                ) : (
                  <div className="space-y-4">
                    {isSortedCorrectly ? (
                      <div className="space-y-2">
                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl inline-block text-xs font-semibold">
                          ✓ ¡Fielmente Ordenado de principio a fin! +60 pts
                        </div>
                        <p className="text-xs text-slate-400 mt-1">Conoces a detalle el ciclo fundamental de las 6 D del libro.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl inline-block text-xs font-semibold">
                          ✕ Incorrecto. Inténtalo de nuevo para ubicar la secuencia correcta de los pasos.
                        </div>
                        <br />
                        <button
                          onClick={restartSorting}
                          className="px-5 py-2 hover:text-slate-100 border border-slate-700 hover:border-slate-600 text-slate-400 bg-slate-800 text-xs font-semibold rounded-lg cursor-pointer"
                        >
                          Intentarlo Nuevamente
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* GAME 3: FILL IN THE BLANKS */}
          {activeGame === 'fillBlank' && (
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest font-semibold text-emerald-400">Rellenando las Frases</span>
                <h4 className="text-md font-sans font-bold text-slate-100 mt-1">Citas Célebres de Organizaciones Exponenciales</h4>
              </div>

              {!blanksFinished ? (
                <div className="space-y-5 pt-2 max-w-xl mx-auto">
                  <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                    <span>Pregunta {blankIdx + 1} de 3</span>
                    <span>Puntuación: {blanksScore} / 3</span>
                  </div>

                  {/* Quote layout */}
                  <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-2xl text-slate-200 text-xs leading-relaxed text-center font-serif italic">
                    "{initialBlanks[blankIdx].quote}"
                  </div>

                  {/* Option buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {initialBlanks[blankIdx].options.map((optOption) => {
                      const isChosen = chosenBlankOpt === optOption;
                      const isCorrect = optOption === initialBlanks[blankIdx].correctAnswer;
                      
                      let optStyle = "border-slate-800 text-slate-300 bg-slate-950/20 hover:bg-slate-900/40 hover:border-slate-700";
                      
                      if (blankChecked) {
                        if (isCorrect) {
                          optStyle = "border-emerald-500/40 bg-emerald-500/10 text-emerald-300";
                        } else if (isChosen) {
                          optStyle = "border-rose-500/40 bg-rose-500/10 text-rose-300";
                        } else {
                          optStyle = "border-slate-900 bg-slate-950/10 text-slate-600 opacity-50";
                        }
                      } else if (isChosen) {
                        optStyle = "border-amber-500 text-amber-400 bg-amber-500/10";
                      }

                      return (
                        <button
                          key={optOption}
                          disabled={blankChecked}
                          onClick={() => checkBlankAnswer(optOption)}
                          className={`p-3.5 border rounded-xl text-xs font-semibold leading-relaxed transition-all ${optStyle} ${!blankChecked ? 'cursor-pointer' : ''}`}
                        >
                          {optOption}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback explanation */}
                  {blankChecked && (
                    <div className="p-4 bg-slate-955 border border-slate-800/80 rounded-xl space-y-2 text-xs">
                      <p className="font-semibold text-amber-400 mb-1">Feedback de Contexto:</p>
                      <p className="italic text-[11px] leading-relaxed text-slate-400">
                        {initialBlanks[blankIdx].explanation}
                      </p>
                      
                      <button
                        onClick={nextBlankQuestion}
                        className="w-full mt-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Siguiente Frase <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                </div>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl inline-block text-emerald-400">
                    <Check className="h-8 w-8 animate-pulse mx-auto" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-100 text-sm">¡Completar Frases Terminado!</h5>
                    <p className="text-xs text-slate-400 mt-1">Conseguiste {blanksScore} de 3 respuestas correctas.</p>
                  </div>
                  
                  {blanksScore >= 2 ? (
                    <p className="text-lg font-bold font-mono text-amber-400">+40 puntos ExO ganados</p>
                  ) : (
                    <p className="text-xs text-red-400">Consigue al menos 2 correctas para ganar el premio de puntos.</p>
                  )}

                  <button 
                    onClick={restartBlanks}
                    className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    Volver a Jugar
                  </button>
                </div>
              )}
            </div>
          )}

          {/* GAME 4: TIMED TRIAL */}
          {activeGame === 'timed' && (
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-6">
              <div className="flex justify-between items-start gap-4 flex-col sm:flex-row">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-rose-500 animate-pulse">Reto de Velocidad</span>
                  <h4 className="text-md font-sans font-bold text-slate-100 mt-1">Juicio Rápido en la Curva Exponencial</h4>
                  <p className="text-xs text-slate-400">Verdad o Mentira. El tiempo apremia: decide rápido sobre estas tesis importantes del libro.</p>
                </div>

                {timedRunning && (
                  <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 px-3.5 py-1.5 rounded-xl font-mono text-xs text-rose-400 font-bold shrink-0">
                    <Clock className="h-4 w-4 animate-spin text-rose-500" />
                    <span>00:{timerLeft < 10 ? `0${timerLeft}` : timerLeft} segs</span>
                  </div>
                )}
              </div>

              {!timedRunning && !timedFinished ? (
                // Landing Screen before trigger
                <div className="py-6 text-center space-y-4">
                  <div className="p-4 bg-rose-500/5 border border-rose-500/15 rounded-2xl inline-block text-rose-500">
                    <Clock className="h-8 w-8 mx-auto" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-200 text-sm">¿Estás listo para el desafío?</h5>
                    <p className="text-xs text-slate-400 mt-1.5 max-w-sm mx-auto leading-relaxed">
                      Responderás de forma secuencial 5 sentencias diciendo si son verdaderas o falsas. Tienes 25 segundos para completar el test entero. ¡Necesitas 4 aciertos para un premio de puntos!
                    </p>
                  </div>
                  <button
                    onClick={startChronoGame}
                    className="px-6 py-3 bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-rose-500/10 cursor-pointer"
                  >
                    Iniciar Desafío Cronometrado
                  </button>
                </div>
              ) : timedRunning ? (
                // Active Game Render Quiz
                <div className="max-w-md mx-auto space-y-5 py-4 text-center">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span>Sentencia {timedIdx + 1} de 5</span>
                    <span>Aciertos: {timedScore}</span>
                  </div>

                  <p className="text-sm text-slate-200 font-bold min-h-[50px] leading-relaxed px-4">
                    "{timedQuestions[timedIdx].text}"
                  </p>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => answerChrono(true)}
                      className="w-1/2 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs cursor-pointer shadow-md shadow-emerald-500/10"
                    >
                      ✓ VERDADERO
                    </button>
                    <button
                      onClick={() => answerChrono(false)}
                      className="w-1/2 py-3.5 bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold rounded-xl text-xs cursor-pointer shadow-md shadow-rose-500/10"
                    >
                      ✕ FALSO
                    </button>
                  </div>
                </div>
              ) : (
                // Finished timed summary screen
                <div className="py-6 text-center space-y-4">
                  <div className={`p-4 rounded-2xl inline-block border ${
                    timedScore >= 4 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                      : 'bg-rose-500/10 border-rose-50 border-rose-500/20 text-rose-400'
                  }`}>
                    {timedScore >= 4 ? <Check className="h-8 w-8 animate-bounce mx-auto" /> : <X className="h-8 w-8 mx-auto" />}
                  </div>

                  <div>
                    <h5 className="font-semibold text-slate-100 text-sm">Reto Terminado</h5>
                    <p className="text-xs text-slate-400 mt-1">Completaste las 5 preguntas del Reto con rapidez.</p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl font-mono inline-block min-w-[124px]">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">Aciertos</p>
                    <p className="text-2xl font-extrabold text-amber-500 mt-1.5">{timedScore} / 5</p>
                  </div>

                  {timedScore >= 4 ? (
                    <p className="text-sm font-bold text-amber-500 tracking-wide">🏆 ¡Éxito Increíble! Ganas +80 puntos ExO</p>
                  ) : (
                    <p className="text-xs text-rose-400 max-w-xs mx-auto leading-relaxed">Necesitas al menos 4 de 5 respuestas correctas para ganar el premio de puntos. ¡Vuelve a intentarlo!</p>
                  )}

                  <br />
                  <button 
                    onClick={startChronoGame}
                    className="px-6 py-2.5 bg-rose-500 hover:bg-rose-400 text-slate-950 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    Volver a Desafiar
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      )}

    </div>
  );
}
