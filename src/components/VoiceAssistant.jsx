import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function VoiceAssistant() {
  const nav = useNavigate()
  const [listening, setListening] = useState(false)
  const [heard, setHeard] = useState('')

  const speak = (text) => {
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'te-IN'
    u.rate = 0.9
    window.speechSynthesis.speak(u)
  }

  const startListening = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) {
      alert('Me browser lo voice support ledu mava, Chrome lo open chey')
      return
    }

    const rec = new SR()
    rec.lang = 'te-IN'
    rec.interimResults = false
    rec.maxAlternatives = 1
    rec.start()
    setListening(true)

    rec.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase()
      setHeard(transcript)
      setListening(false)

      console.log('Heard:', transcript)

      // COMMANDS
      if (transcript.includes('doctor') || transcript.includes('డాక్టర్') || transcript.includes('vaidya')) {
        speak('డాక్టర్ దగ్గరికి వెళ్తున్నాం')
        nav('/doctors')
      }
      else if (transcript.includes('hospital') || transcript.includes('ఆసుపత్రి') || transcript.includes('aasupatri')) {
        speak('దగ్గర్లో ఉన్న ఆసుపత్రి చూపిస్తున్నాం')
        nav('/nearby')
      }
      else if (transcript.includes('108') || transcript.includes('emergency') || transcript.includes('అత్యవసర') || transcript.includes('ambulance')) {
        speak('వంద ఎనిమిదికి కాల్ చేస్తున్నాం')
        nav('/emergency')
      }
      else if (transcript.includes('garbham') || transcript.includes('pregnancy') || transcript.includes('గర్భం')) {
        speak('గర్భ సమ్రక్షణ పేజీకి వెళ్తున్నాం')
        nav('/pregnancy')
      }
      else if (transcript.includes('pillalu') || transcript.includes('child') || transcript.includes('baby') || transcript.includes('పిల్లలు')) {
        speak('పిల్లల సంరక్షణ')
        nav('/childcare')
      }
      else if (transcript.includes('home') || transcript.includes('inti') || transcript.includes('ఇంటికి')) {
        speak('హోమ్ కి వెళ్తున్నాం')
        nav('/')
      }
      else {
        speak('అర్థం కాలేదు, మళ్ళీ చెప్పండి. డాక్టర్, ఆసుపత్రి, నూట ఎనిమిది అని చెప్పండి')
      }

      // 3 sec tarvata heard text clear
      setTimeout(() => setHeard(''), 3000)
    }

    rec.onerror = () => {
      setListening(false)
      speak('వాయిస్ వినపడలేదు మళ్ళీ ప్రయత్నించండి')
    }

    rec.onend = () => {
      setListening(false)
    }
  }

  return (
    <>
      {/* Heard Text Bubble */}
      {heard && (
        <div style={{
          position:'fixed', bottom:170, right:16, left:16,
          background:'black', color:'white', padding:'10px 14px',
          borderRadius:20, fontSize:12, textAlign:'center',
          zIndex:1000, maxWidth:300, margin:'0 auto'
        }}>
          మీరు చెప్పింది: "{heard}"
        </div>
      )}

      {/* Floating Mic Button */}
      <button onClick={startListening} style={{
        position:'fixed', bottom:90, right:16,
        width:72, height:72, borderRadius:36,
        background: listening? '#ef4444' : '#0B4D2E',
        color:'white', fontSize:32,
        border:'4px solid white',
        boxShadow:'0 10px 30px rgba(0,0,0,0.3)',
        zIndex:999, cursor:'pointer',
        transform: listening? 'scale(1.1)' : 'scale(1)',
        transition:'0.2s',
        animation: listening? 'pulse 1s infinite' : 'none'
      }}>
        {listening? '●' : '🎤'}
      </button>

      {/* Label */}
      <div style={{
        position:'fixed', bottom:68, right:24,
        background:'white', padding:'2px 8px', borderRadius:10,
        fontSize:9, fontWeight:700, zIndex:999,
        boxShadow:'0 2px 8px rgba(0,0,0,0.1)'
      }}>
        {listening? 'వింటున్నా...' : 'మాట్లాడండి'}
      </div>

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.7) }
          70% { box-shadow: 0 0 0 15px rgba(239,68,68,0) }
          100% { box-shadow: 0 0 0 0 rgba(239,68,68,0) }
        }
      `}</style>
    </>
  )
}