import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import useAutoSpeak from '../hooks/useAutoSpeak'
import BottomNav from '../components/BottomNav'
import MicButton from '../components/MicButton'

export default function Home() {
  const nav = useNavigate()
  const [searchText, setSearchText] = useState('')
  useAutoSpeak('Welcome to GramArogya. Choose a service.')

  const cards = [
    { id:'doctors', title:'DOCTOR', sub:'Online Consult', desc:'Instant video call', icon:'👨‍⚕️', color:'#0B4D2E', count:'6 Online', path:'/doctors' },
    { id:'hospitals', title:'HOSPITAL', sub:'12 Nearby', desc:'Find clinics fast', icon:'🏥', color:'#1d4ed8', count:'< 5km', path:'/nearby' },
    { id:'emergency', title:'EMERGENCY', sub:'108 Ambulance', desc:'Tap to call now', icon:'🚨', color:'#dc2626', count:'24/7 LIVE', path:'/emergency', isEmergency:true },
    { id:'pregnancy', title:'PREGNANCY', sub:'9 Months', desc:'Mother & baby care', icon:'🤰', color:'#a16207', count:'Guide', path:'/pregnancy' },
    { id:'child', title:'CHILD CARE', sub:'0-5 Years', desc:'Vaccines & growth', icon:'👶', color:'#15803d', count:'Tracker', path:'/childcare' },
    { id:'financial', title:'GOVT SCHEMES', sub:'Aarogyasri', desc:'Benefits & support', icon:'💰', color:'#7c3aed', count:'Free', path:'/financial-support' },
  ]

  // MAWA NEW LOGIC - VOICE TO DOCTOR REDIRECT
  const handleVoiceResult = (text) => {
    setSearchText(text)
    localStorage.setItem('userSymptom', text)
    setTimeout(() => {
      nav(`/doctors?symptom=${encodeURIComponent(text)}`)
    }, 1500)
  }

  const handleSearchKey = (e) => {
    if (e.key === 'Enter' && searchText.trim()) {
      localStorage.setItem('userSymptom', searchText)
      nav(`/doctors?symptom=${encodeURIComponent(searchText)}`)
    }
  }

  return (
    <div style={{ minHeight:'100vh', background:'#FFFEFB', paddingBottom:90, maxWidth:430, margin:'0 auto', position:'relative' }}>
      <div style={{ height:260, width:'100%', position:'relative', background:'#0a1a12', overflow:'hidden' }}>
        <img src="/csp.jpeg" alt="" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 25%' }} onError={(e)=>e.target.style.display='none'} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(0deg, rgba(5,8,5,0.97) 0%, rgba(0,0,0,0.35) 50%, rgba(11,77,46,0.4) 100%)' }}></div>
        <div style={{ position:'absolute', top:0, left:0, right:0, padding:16, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', gap:10, alignItems:'center', background:'rgba(0,0,0,0.4)', backdropFilter:'blur(12px)', padding:'8px 12px', borderRadius:100, border:'1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ width:28, height:28, background:'white', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', fontSize:14 }}>🌿</div>
            <span style={{ color:'white', fontWeight:900, fontSize:12 }}>GramArogya</span>
          </div>
          <div style={{ display:'flex', gap:8 }}>
            <div style={{ width:36, height:36, background:'rgba(255,255,255,0.15)', backdropFilter:'blur(10px)', borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid rgba(255,255,255,0.15)' }}>🔔</div>
            <div style={{ width:36, height:36, background:'white', borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center', fontSize:16 }}>👤</div>
          </div>
        </div>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:20 }}>
          <div style={{ display:'inline-flex', background:'rgba(74,222,128,0.15)', border:'1px solid rgba(74,222,128,0.3)', padding:'4px 10px', borderRadius:100, marginBottom:8 }}>
            <span style={{ color:'#4ade80', fontSize:9, fontWeight:900, letterSpacing:1 }}>🌾 CHITTOOR • AP • VERIFIED</span>
          </div>
          <h1 style={{ color:'white', fontWeight:900, fontSize:22, lineHeight:1.2 }}>Namaste! Ramesh 🙏</h1>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:12, marginTop:4 }}>Your family health is secure today</p>
        </div>
      </div>

      <div style={{ padding:'14px 16px 0 16px' }}>
        <div style={{ background:'white', borderRadius:16, padding:'10px 12px', display:'flex', alignItems:'center', gap:8, border:'1.5px solid #0B4D2E', boxShadow:'0 4px 16px rgba(11,77,46,0.08)' }}>
          <span style={{ fontSize:16 }}>🔍</span>
          <input 
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            onKeyDown={handleSearchKey}
            placeholder="మాట్లాడండి... / Type symptoms & press Enter"
            style={{ flex:1, border:'none', outline:'none', fontSize:13, fontWeight:600 }}
          />
          <MicButton onResult={handleVoiceResult} />
        </div>
        {searchText && <p style={{ fontSize:11, color:'#0B4D2E', marginTop:6, fontWeight:700 }}>🎤 You said: {searchText} - Taking to doctor...</p>}
      </div>

      <div style={{ padding:16 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
          <h3 style={{ fontWeight:900, fontSize:15, color:'#111827' }}>Our Services</h3>
          <span style={{ fontSize:11, color:'#6b7280', fontWeight:600, background:'#f3f4f6', padding:'4px 8px', borderRadius:100 }}>6 services • Free</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {cards.map(c => (
            <div key={c.id} onClick={()=>nav(c.path)} style={{
              background: c.isEmergency ? '#fef2f2' : 'white',
              borderRadius:20, padding:14, cursor:'pointer',
              border: c.isEmergency? '1.5px solid #fecaca' : '1px solid #f3f4f6',
              boxShadow:'0 2px 12px rgba(0,0,0,0.04)',
              position:'relative', overflow:'hidden',
            }}>
              {c.isEmergency && <div style={{ position:'absolute', top:0, right:0, background:'#dc2626', color:'white', fontSize:8, fontWeight:900, padding:'4px 8px', borderBottomLeftRadius:10 }}>● LIVE</div>}
              <div style={{ width:44, height:44, background: c.isEmergency? '#fee2e2' : '#f0fdf4', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22 }}>{c.icon}</div>
              <p style={{ fontWeight:900, fontSize:12, marginTop:12 }}>{c.title}</p>
              <p style={{ fontSize:10, color:c.color, fontWeight:800, marginTop:2 }}>{c.sub}</p>
              <p style={{ fontSize:10, color:'#9ca3af', marginTop:3 }}>{c.desc}</p>
              <div style={{ marginTop:10, display:'flex', alignItems:'center', gap:6 }}>
                <span style={{ fontSize:9, fontWeight:800, color:'white', background: c.isEmergency?'#dc2626':'#111827', padding:'4px 9px', borderRadius:100 }}>{c.count}</span>
                <span style={{ fontSize:11 }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ margin:'0 16px', background:'#111827', borderRadius:16, padding:14, display:'flex', alignItems:'center', gap:12 }}>
        <div style={{ width:42, height:42, background:'white', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>🚑</div>
        <div style={{ flex:1 }}>
          <p style={{ color:'white', fontWeight:900, fontSize:12 }}>Need Ambulance?</p>
          <p style={{ color:'rgba(255,255,255,0.6)', fontSize:10 }}>Location auto-shared • 15 mins ETA</p>
        </div>
        <button onClick={()=>nav('/emergency')} style={{ background:'#dc2626', color:'white', border:'none', padding:'10px 16px', borderRadius:100, fontWeight:900, fontSize:12, cursor:'pointer' }}>CALL 108</button>
      </div>

      <BottomNav />
    </div>
  )
}