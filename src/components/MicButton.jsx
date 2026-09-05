import { useState } from 'react';

export default function MicButton({ onResult }) {
  const [isListening, setIsListening] = useState(false);
  const [lang, setLang] = useState('te-IN'); // te-IN = Telugu, en-IN = English

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Mawa, ee browser lo mic work avvatledu! Chrome lo try chey mawa!");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = lang;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Voice:", transcript);
      onResult(transcript); // Symptom box lo auto fill

      // Backend ki kuda pampadam (optional)
      fetch('https://gramarogya-backend-production.up.railway.app/api/voice/transcribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: transcript, lang: lang })
      });
    };

    recognition.onerror = () => setIsListening(false);
    recognition.start();
  };

  return (
    <div className="flex items-center gap-2">
      <select value={lang} onChange={(e)=>setLang(e.target.value)} className="p-2 rounded border text-sm">
        <option value="te-IN">తెలుగు</option>
        <option value="en-IN">English</option>
      </select>

      <button
        onClick={startListening}
        className={`p-3 rounded-full text-white font-bold transition-all ${isListening? 'bg-red-500 animate-pulse scale-110' : 'bg-green-600 hover:bg-green-700'}`}
      >
        {isListening? '🔴' : '🎤'}
      </button>
      {isListening && <span className="text-sm text-red-500">Vinutunna mawa...</span>}
    </div>
  );
}