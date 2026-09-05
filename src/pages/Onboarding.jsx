import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Onboarding() {
  const nav = useNavigate()
  const [step, setStep] = useState(0)

  const slides = [
    {
      badge: 'TRUSTED BY VILLAGES',
      title: 'Doctor at your Doorstep',
      desc: 'City ki vellakunda mee intike doctor. Hospital, ambulance anni mee village lo.',
    },
    {
      badge: '108 EMERGENCY',
      title: 'One Tap, Ambulance at Home',
      desc: 'Mee location auto-share. 15 min lo red cross hospital nundi 108 vastundi.',
    },
    {
      badge: 'FAMILY FIRST',
      title: 'Mee Kutumbam, Maa Badhyata',
      desc: 'Amma, nanna, pillalu - andariki okate app. Health records safe ga.',
    },
  ]

  return (
    <div style={{ minHeight:'100vh', width:'100vw', background:'#000', display:'flex', flexDirection:'column', position:'relative' }}>

      {/* IMAGE - NEE PROFESSIONAL IMAGE */}
      <div style={{ flex:1, position:'relative', overflow:'hidden', background:'#0a1a12' }}>
        {/* Actual Image */}
        <img
          src="/csp.jpeg"
          alt="GramArogya Professional"
          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 20%' }}
        />
        {/* Professional Gradient - Dark at bottom for text, subtle at top */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0.3) 100%)' }}></div>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(11,77,46,0.25) 0%, transparent 50%)' }}></div>

        {/* Top Branding - Professional */}
        <div style={{ position:'absolute', top:0, left:0, right:0, padding:'20px 20px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, background:'rgba(0,0,0,0.4)', backdropFilter:'blur(12px)', padding:'8px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ width:28, height:28, background:'white', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', fontSize:16 }}>🌿</div>
            <span style={{ color:'white', fontWeight:800, fontSize:13, letterSpacing:0.5 }}>GramArogya</span>
          </div>
          <button onClick={()=>nav('/home')} style={{ color:'white', background:'rgba(255,255,255,0.15)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.15)', padding:'8px 16px', borderRadius:100, fontSize:12, fontWeight:700, cursor:'pointer' }}>Skip</button>
        </div>

        {/* Bottom Content - Unique & Professional */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:24, paddingBottom:28 }}>
          <div style={{ display:'inline-flex', background:'rgba(74,222,128,0.15)', border:'1px solid rgba(74,222,128,0.3)', padding:'6px 12px', borderRadius:100 }}>
            <span style={{ color:'#4ade80', fontSize:10, fontWeight:900, letterSpacing:1.5 }}>{slides[step].badge}</span>
          </div>
          <h1 style={{ color:'white', fontWeight:900, fontSize:32, lineHeight:1.1, marginTop:14, letterSpacing:-0.5 }}>{slides[step].title.split(' ').slice(0,2).join(' ')}<br/><span style={{ color:'#4ade80' }}>{slides[step].title.split(' ').slice(2).join(' ')}</span></h1>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, lineHeight:1.6, marginTop:12, maxWidth:300 }}>{slides[step].desc}</p>

          <div style={{ display:'flex', alignItems:'center', gap:16, marginTop:24 }}>
            <div style={{ display:'flex', gap:6 }}>
              {[0,1,2].map(i => (
                <div key={i} style={{ width: i===step?32:8, height:4, borderRadius:10, background: i===step?'#4ade80':'rgba(255,255,255,0.3)', transition:'all 0.4s cubic-bezier(0.4,0,0.2,1)' }}></div>
              ))}
            </div>
            <div style={{ flex:1, height:1, background:'rgba(255,255,255,0.1)' }}></div>
            <span style={{ color:'rgba(255,255,255,0.5)', fontSize:12, fontWeight:700 }}>{step+1} / 3</span>
          </div>
        </div>
      </div>

      {/* Action Bar - Premium */}
      <div style={{ background:'#050805', padding:'18px 20px', display:'flex', gap:12, borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <button onClick={()=> step>0? setStep(step-1) : nav('/home')} style={{ width:54, height:54, borderRadius:14, background:'#141414', border:'1px solid #262626', color:'white', fontSize:20, cursor:'pointer' }}>{step>0?'←':'✕'}</button>
        <button onClick={()=> step<2? setStep(step+1) : nav('/home')} style={{ flex:1, height:54, borderRadius:14, background:'white', color:'black', border:'none', fontWeight:900, fontSize:16, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
          {step<2? 'Continue' : 'Start Your Health Journey'} <span style={{ fontSize:18 }}>→</span>
        </button>
      </div>
    </div>
  )
}