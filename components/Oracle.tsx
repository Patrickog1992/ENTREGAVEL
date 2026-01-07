import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Loader2 } from 'lucide-react';

const Oracle: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAsk = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      if (!process.env.API_KEY) {
          throw new Error("API Key not found");
      }
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        Eres Lady Soraya, una sacerdotisa espiritual sabia, mística y amable.
        Responde a las preguntas del usuario sobre amor y energía de manera breve (máximo 3 frases).
        Usa un tono esotérico, esperanzador y en Español.
        No des consejos médicos ni legales. Enfócate en la energía, la intención y el amor propio.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: systemInstruction,
        },
      });

      setAnswer(response.text || "El oráculo está en silencio. Intenta conectar de nuevo más tarde.");
      
    } catch (err) {
      console.error(err);
      setError("El vínculo con el oráculo es débil en este momento. Por favor, intenta más tarde. (Verifica tu API Key)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-mystic-800/60 backdrop-blur-md rounded-xl border border-gold-500/30 p-6 shadow-2xl animate-fade-in mt-8">
      <div className="text-center mb-6">
        <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
        <h3 className="text-xl font-semibold text-gold-300">Oráculo de Luz</h3>
        <p className="text-sm text-mystic-300 mt-2">
          Pregunta sobre tu energía o tu camino en el amor.
        </p>
      </div>

      {!answer ? (
        <div className="space-y-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Escribe tu pregunta aquí..."
            className="w-full bg-mystic-900/50 border border-mystic-600 rounded-lg p-3 text-white placeholder-mystic-500 focus:outline-none focus:border-gold-500 transition-colors h-24 resize-none"
          />
          <button
            onClick={handleAsk}
            disabled={loading || !question.trim()}
            className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-300
              ${loading || !question.trim() 
                ? 'bg-mystic-700 text-mystic-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/50 hover:shadow-purple-700/50'
              }`}
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
            {loading ? 'Consultando...' : 'Enviar al Universo'}
          </button>
          {error && <p className="text-red-300 text-xs text-center mt-2">{error}</p>}
        </div>
      ) : (
        <div className="animate-fade-in">
          <div className="bg-mystic-900/40 p-4 rounded-lg border border-gold-500/20 mb-6">
            <p className="text-gold-100 italic font-light leading-relaxed">"{answer}"</p>
          </div>
          <button
            onClick={() => { setAnswer(null); setQuestion(''); }}
            className="w-full py-2 text-sm text-mystic-300 hover:text-white transition-colors"
          >
            Hacer otra pregunta
          </button>
        </div>
      )}
    </div>
  );
};

export default Oracle;