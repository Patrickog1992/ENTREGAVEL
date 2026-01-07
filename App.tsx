import React, { useState } from 'react';
import { getStepsForDay, DAYS_CONFIG } from './constants';
import { StepType, RitualStepData, RitualIntention } from './types';
import StarBackground from './components/StarBackground';
import Oracle from './components/Oracle';
import { ChevronRight, RefreshCw, ArrowLeft, Heart, History, Sparkles, Users } from 'lucide-react';

const App: React.FC = () => {
  const [intention, setIntention] = useState<RitualIntention | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Generate steps based on Day AND Intention
  const steps: RitualStepData[] = (selectedDay && intention) ? getStepsForDay(selectedDay, intention) : [];
  const currentStep = steps[currentStepIndex];
  
  const isLastStep = selectedDay && currentStepIndex === steps.length - 1;

  // --- Handlers ---

  const handleIntentionSelect = (selectedIntention: RitualIntention) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIntention(selectedIntention);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  const handleDaySelect = (day: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedDay(day);
      setCurrentStepIndex(0);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  const handleBackToDays = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedDay(null);
      setCurrentStepIndex(0);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  const handleBackToIntention = () => {
     setIsTransitioning(true);
    setTimeout(() => {
      setIntention(null);
      setSelectedDay(null);
      setCurrentStepIndex(0);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  const handleNext = () => {
    if (!selectedDay) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 selection:bg-gold-500/30 selection:text-gold-200">
      <StarBackground />
      
      {/* Mystical Header */}
      <header className="absolute top-0 left-0 w-full p-6 text-center z-10">
        <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-gold-400 uppercase opacity-80 cursor-pointer" onClick={handleBackToIntention}>
          Lady Soraya
        </h1>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2"></div>
        
        {/* Breadcrumb Navigation */}
        <div className="absolute left-4 top-6 flex flex-col items-start gap-2">
            {intention && !selectedDay && (
                <button 
                onClick={handleBackToIntention}
                className="text-mystic-400 hover:text-white flex items-center gap-1 text-xs md:text-sm transition-colors"
                >
                <ArrowLeft className="w-3 h-3" /> Inicio
                </button>
            )}
            {selectedDay && (
            <button 
            onClick={handleBackToDays}
            className="text-mystic-400 hover:text-white flex items-center gap-1 text-xs md:text-sm transition-colors"
            >
            <ArrowLeft className="w-3 h-3" /> Días
            </button>
            )}
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-4xl relative z-10 mt-20 mb-12">
        
        {/* VIEW 1: INTENTION SELECTION (Start) */}
        {!intention && (
             <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="text-center mb-10 space-y-4">
                    <div className="flex justify-center">
                        <Users className="w-12 h-12 text-mystic-300" />
                    </div>
                    <h2 className="text-3xl font-light text-white">¿Cuál es tu Deseo?</h2>
                    <p className="text-mystic-300 max-w-md mx-auto leading-relaxed">
                        Este ritual sagrado ha sido preparado para <strong>hombres y mujeres</strong>. 
                        La energía del amor es universal. Elige tu camino para personalizar tu experiencia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 max-w-3xl mx-auto">
                    {/* Option: New Love */}
                    <button
                        onClick={() => handleIntentionSelect(RitualIntention.NEW_LOVE)}
                        className="group relative bg-mystic-900/60 backdrop-blur-md border border-mystic-700 rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold-400 hover:bg-mystic-800 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] flex flex-col items-center gap-4"
                    >
                        <div className="p-4 bg-mystic-800 rounded-full text-pink-400 group-hover:scale-110 transition-transform duration-500">
                            <Sparkles className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Atraer Nuevo Amor</h3>
                        <p className="text-sm text-mystic-400">
                            Deseo encontrar a alguien especial, abrir mis caminos y dejar el pasado atrás.
                        </p>
                    </button>

                    {/* Option: Return Love */}
                    <button
                        onClick={() => handleIntentionSelect(RitualIntention.RETURN_LOVE)}
                        className="group relative bg-mystic-900/60 backdrop-blur-md border border-mystic-700 rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold-400 hover:bg-mystic-800 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] flex flex-col items-center gap-4"
                    >
                        <div className="p-4 bg-mystic-800 rounded-full text-red-400 group-hover:scale-110 transition-transform duration-500">
                            <History className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Volver con mi Ex</h3>
                        <p className="text-sm text-mystic-400">
                            Deseo recuperar a una persona específica, sanar la relación y tener una segunda oportunidad.
                        </p>
                    </button>
                </div>
            </div>
        )}

        {/* VIEW 2: DAY SELECTION MENU */}
        {intention && !selectedDay && (
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
             <div className="text-center mb-10">
                <span className="text-xs uppercase tracking-widest text-gold-500 mb-2 block">
                    {intention === RitualIntention.NEW_LOVE ? "Camino: Nuevo Amor" : "Camino: Reconquista"}
                </span>
                <h2 className="text-3xl font-light text-white mb-3">Tu Jornada de 7 Días</h2>
                <p className="text-mystic-300 max-w-lg mx-auto">
                  Selecciona el día actual. Sigue el orden para una mayor efectividad.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {DAYS_CONFIG.map((dayConfig) => (
                  <button
                    key={dayConfig.day}
                    onClick={() => handleDaySelect(dayConfig.day)}
                    className="
                      group relative overflow-hidden bg-mystic-900/40 backdrop-blur-md border border-mystic-700 rounded-xl p-6
                      text-left transition-all duration-300 hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(118,82,214,0.3)]
                      flex flex-col gap-3
                    "
                  >
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-mystic-800 rounded-full text-gold-400 group-hover:text-white group-hover:bg-gold-500 transition-colors">
                        {dayConfig.icon}
                      </div>
                      <span className="text-4xl font-bold text-mystic-800 group-hover:text-mystic-700 transition-colors opacity-50">
                        0{dayConfig.day}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-gold-200">{dayConfig.title}</h3>
                      <p className="text-sm text-mystic-400 mt-1 line-clamp-2">{dayConfig.subtitle}</p>
                    </div>
                    <div className="mt-2 pt-3 border-t border-mystic-800 flex items-center gap-2 text-xs text-mystic-500 uppercase tracking-wider">
                       <span>Elemento: {dayConfig.element}</span>
                    </div>
                  </button>
                ))}
             </div>
          </div>
        )}

        {/* VIEW 3: RITUAL FLOW STEPS */}
        {intention && selectedDay && (
          <div className="w-full max-w-2xl mx-auto">
            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {steps.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentStepIndex 
                      ? 'w-8 bg-gold-400 shadow-[0_0_10px_rgba(255,215,0,0.5)]' 
                      : idx < currentStepIndex 
                        ? 'w-2 bg-mystic-500' 
                        : 'w-2 bg-mystic-800'
                  }`}
                />
              ))}
            </div>

            {/* Card Content */}
            <div 
              className={`
                bg-mystic-900/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 md:p-12
                transition-all duration-500 transform
                ${isTransitioning ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}
              `}
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-wide font-sans text-center">
                  {currentStep?.title}
                </h2>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
              </div>

              <div className="text-mystic-100 text-lg font-light leading-relaxed">
                {currentStep?.content}
              </div>

              <div className="mt-10 flex justify-center">
                {isLastStep ? (
                  <div className="flex flex-col gap-4 w-full">
                    <Oracle />
                    
                    <button
                      onClick={handleBackToDays}
                      className="mt-8 flex items-center justify-center gap-2 text-mystic-400 hover:text-white transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Volver al Menú de Días</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleNext}
                    className="
                      group relative px-8 py-3 bg-transparent border border-gold-500/50 rounded-full
                      text-gold-100 font-medium tracking-wider overflow-hidden transition-all duration-300
                      hover:bg-gold-500/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:border-gold-400
                    "
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {currentStep?.buttonText}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="absolute bottom-4 text-center text-xs text-mystic-600 z-10 w-full px-4">
        <p>© {new Date().getFullYear()} Templo de Lady Soraya. Energía para Todos.</p>
      </footer>
    </div>
  );
};

export default App;