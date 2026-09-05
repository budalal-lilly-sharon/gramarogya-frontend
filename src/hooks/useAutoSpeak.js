import { useEffect } from 'react'

export default function useAutoSpeak(textTelugu) {
  useEffect(() => {
    // 0.6 sec tarvata matladutadi, page load ayyaka
    const timer = setTimeout(() => {
      // old voice aapestondi
      window.speechSynthesis.cancel()

      // kotta voice
      const utterance = new SpeechSynthesisUtterance(textTelugu)
      utterance.lang = 'te-IN'  // Telugu
      utterance.rate = 0.9      // koncham slow ga
      utterance.pitch = 1
      utterance.volume = 1

      window.speechSynthesis.speak(utterance)
    }, 600)

    // page nundi bayataki velthe voice aapestondi
    return () => {
      clearTimeout(timer)
      window.speechSynthesis.cancel()
    }
  }, []) // okasari matrame matladutadi
}