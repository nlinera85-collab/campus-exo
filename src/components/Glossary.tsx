import React, { useState } from 'react';
import { glossaryData } from '../data/glossary';
import { Search, HelpCircle, ArrowUpRight, Award } from 'lucide-react';

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'SCALE' | 'IDEAS' | 'Metodología' | 'General'>('All');
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);

  // Filter glossary items
  const filteredItems = glossaryData.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories: ('All' | 'SCALE' | 'IDEAS' | 'Metodología' | 'General')[] = ['All', 'SCALE', 'IDEAS', 'Metodología', 'General'];

  return (
    <div className="space-y-6">
      {/* Header card */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-sans font-bold text-slate-100 flex items-center gap-2">
          <HelpCircle className="text-amber-500 h-5 w-5" />
          Glosario Dinámico de Conceptos ExO
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Busca, filtra y haz click en cualquier palabra técnica, sigla o metodología extraída del libro para ver al instante su definición detallada y estudio de caso.
        </p>
      </div>

      {/* Filter Options and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div id="glossary-search" className="w-full md:w-80 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 h-4.5 w-4.5" />
          <input
            type="text"
            placeholder="Buscar concepto o definición..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div id="glossary-category-filters" className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider uppercase font-semibold border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/10'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700/60'
              }`}
            >
              {cat === 'All' ? 'Todos' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic List Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Left/Main Column: Terms list */}
        <div className="md:col-span-1 border border-slate-800 rounded-2xl overflow-hidden bg-slate-900 shadow-inner h-[500px] flex flex-col justify-between">
          <div className="p-4 border-b border-slate-850 bg-slate-950/40">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Conceptos Encontrados: {filteredItems.length}</span>
          </div>

          <div className="overflow-y-auto divide-y divide-slate-850 shrink grow">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => {
                const isSelected = selectedTermId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedTermId(item.id)}
                    className={`w-full text-left p-4 transition-all flex justify-between items-center group cursor-pointer ${
                      isSelected 
                        ? 'bg-slate-800/50 text-amber-400 border-l-2 border-amber-500' 
                        : 'text-slate-350 hover:bg-slate-800/20 hover:text-slate-100'
                    }`}
                  >
                    <div className="space-y-1 pr-3">
                      <p className="text-xs font-semibold">{item.term}</p>
                      <span className={`inline-block text-[8px] font-mono font-semibold uppercase px-1.5 py-0.5 rounded border ${
                        item.category === 'SCALE' 
                          ? 'bg-amber-500/5 text-amber-400 border-amber-500/10' 
                          : item.category === 'IDEAS'
                            ? 'bg-indigo-500/5 text-indigo-400 border-indigo-500/10'
                            : 'bg-slate-800 text-slate-400 border-slate-750'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-slate-400 select-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center text-xs text-slate-500 font-mono">
                Ningún término coincide con el filtro de búsqueda.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Active Term full detail pane */}
        <div id="glossary-detail-pane" className="md:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl min-h-[500px]">
          {selectedTermId ? (() => {
            const activeTerm = glossaryData.find(item => item.id === selectedTermId)!;
            return (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex justify-between items-start gap-4 flex-wrap pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 font-bold border border-amber-500/10 px-2 py-0.5 rounded">
                      Clasificación: {activeTerm.category}
                    </span>
                    <h4 className="text-md font-sans font-bold text-slate-100 mt-2">
                      {activeTerm.term}
                    </h4>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-1">Definición y Propósito</p>
                  <p className="text-xs text-slate-200 leading-relaxed bg-slate-950/30 p-4 rounded-xl border border-slate-850">
                    {activeTerm.definition}
                  </p>
                </div>

                {activeTerm.example && (
                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-1.5">
                      <Award className="h-4 w-4 text-amber-500" />
                      Ejemplo y Contexto del Libro
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed bg-amber-500/[0.02] border border-amber-500/10 p-4 rounded-xl italic">
                      {activeTerm.example}
                    </p>
                  </div>
                )}
              </div>
            );
          })() : (
            // Empty view helper
            <div className="flex flex-col items-center justify-center text-center p-12 min-h-[460px] space-y-3">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-full text-slate-600">
                <HelpCircle className="h-10 w-10 text-slate-500/70" />
              </div>
              <div>
                <h5 className="font-sans font-bold text-slate-300 text-sm">Visualizar Definición</h5>
                <p className="text-xs text-slate-500 max-w-xs mt-1">
                  Haz click en cualquier término de la lista de la izquierda para desplegamiento total del saber exponencial al instante.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
