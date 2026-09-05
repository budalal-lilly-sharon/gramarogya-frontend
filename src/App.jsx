import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Nearby from './pages/Nearby'
import Pregnancy from './pages/Pregnancy'
import FinancialSupport from './pages/FinancialSupport'

function SplashScreen() {
  return (
    <div style={{ minHeight:'100vh', width:'100vw', background:'#0B4D2E', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white' }}>
      <div style={{ width:92, height:92, background:'white', borderRadius:24, display:'flex', alignItems:'center', justifyContent:'center', fontSize:40, boxShadow:'0 12px 32px rgba(0,0,0,0.25)' }}>🌿</div>
      <h1 style={{ fontWeight:900, fontSize:34, marginTop:20, letterSpacing:-1 }}>GramArogya</h1>
      <p style={{ marginTop:6, fontSize:11, opacity:0.7, letterSpacing:3, fontWeight:800 }}>RURAL HEALTH COMPANION</p>
      <div style={{ marginTop:32, width:120, height:4, background:'rgba(255,255,255,0.2)', borderRadius:10, overflow:'hidden' }}>
        <div style={{ width:'100%', height:'100%', background:'white', animation:'load 2s ease-in-out' }}></div>
      </div>
      <p style={{ marginTop:16, fontSize:10, opacity:0.5, fontWeight:600 }}>Govt of AP • Trusted by 10,000+ villages</p>
      <style>{`@keyframes load{0%{width:0%} 100%{width:100%}}`}</style>
    </div>
  )
}

function Onboarding() {
  const nav = useNavigate()
  const [step, setStep] = useState(0)
  const slides = [
    { badge: 'TRUSTED BY VILLAGES', title: 'Doctor at your Doorstep', desc: 'No need to travel to city. Expert doctor care at home - hospital & family included.' },
    { badge: '108 EMERGENCY', title: 'One Tap, Ambulance Home', desc: 'Location auto-shared. Ambulance reaches in 15 mins from nearest hospital.' },
    { badge: 'FAMILY FIRST', title: 'Your Family Safe', desc: 'For mother, father, children - complete health records in one app.' },
  ]
  return (
    <div style={{ minHeight:'100vh', width:'100%', background:'#000', display:'flex', flexDirection:'column' }}>
      <div style={{ flex:1, position:'relative', overflow:'hidden', background:'#0a1a12' }}>
        <img src="/csp.jpeg" alt="GramArogya" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 20%' }} onError={(e) => { e.target.style.display='none'; e.target.parentElement.style.background='linear-gradient(135deg, #0B4D2E 0%, #052e1a 100%)' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.4) 100%)' }}></div>
        <div style={{ position:'absolute', top:0, left:0, right:0, padding:20, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, background:'rgba(0,0,0,0.4)', backdropFilter:'blur(12px)', padding:'8px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ width:26, height:26, background:'white', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', fontSize:14 }}>🌿</div>
            <span style={{ color:'white', fontWeight:800, fontSize:12 }}>GramArogya</span>
          </div>
          <button onClick={()=>nav('/login')} style={{ color:'white', background:'rgba(255,255,255,0.15)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.15)', padding:'8px 16px', borderRadius:100, fontSize:11, fontWeight:700, cursor:'pointer' }}>Skip</button>
        </div>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:24, paddingBottom:26 }}>
          <div style={{ display:'inline-flex', background:'rgba(74,222,128,0.15)', border:'1px solid rgba(74,222,128,0.3)', padding:'5px 12px', borderRadius:100 }}>
            <span style={{ color:'#4ade80', fontSize:10, fontWeight:900, letterSpacing:1.5 }}>{slides[step].badge}</span>
          </div>
          <h1 style={{ color:'white', fontWeight:900, fontSize:30, lineHeight:1.1, marginTop:12 }}>{slides[step].title.split(' ').slice(0,2).join(' ')}<br/><span style={{ color:'#4ade80' }}>{slides[step].title.split(' ').slice(2).join(' ')}</span></h1>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, lineHeight:1.6, marginTop:10, maxWidth:310 }}>{slides[step].desc}</p>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:20 }}>
            <div style={{ display:'flex', gap:6 }}>{[0,1,2].map(i => <div key={i} style={{ width: i===step?28:8, height:4, borderRadius:10, background: i===step?'#4ade80':'rgba(255,255,255,0.3)', transition:'all 0.4s' }}></div>)}</div>
            <div style={{ flex:1, height:1, background:'rgba(255,255,255,0.1)' }}></div>
            <span style={{ color:'rgba(255,255,255,0.5)', fontSize:11, fontWeight:700 }}>{step+1} / 3</span>
          </div>
        </div>
      </div>
      <div style={{ background:'#050805', padding:'16px 20px', display:'flex', gap:12, borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <button onClick={()=> step>0? setStep(step-1) : nav('/login')} style={{ width:52, height:52, borderRadius:14, background:'#141414', border:'1px solid #262626', color:'white', fontSize:18, cursor:'pointer' }}>{step>0?'←':'✕'}</button>
        <button onClick={()=> step<2? setStep(step+1) : nav('/login')} style={{ flex:1, height:52, borderRadius:14, background:'white', color:'black', border:'none', fontWeight:900, fontSize:15, cursor:'pointer' }}>{step<2? 'Continue' : 'Start Journey'} →</button>
      </div>
    </div>
  )
}

function PatientLogin() {
  const nav = useNavigate()
  const [mobile, setMobile] = useState('')
  return (
    <div style={{ minHeight:'100vh', width:'100vw', background:'#FFFEFB', display:'flex', flexDirection:'column' }}>
      <div style={{ height:'42vh', width:'100%', position:'relative', background:'#0a1a12' }}>
        <img src="/csp.jpeg" alt="" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 20%' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(0deg, #FFFEFB 0%, rgba(255,254,251,0.2) 40%, rgba(0,0,0,0.35) 100%)' }}></div>
        <div style={{ position:'absolute', bottom:18, left:20, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(10px)', padding:'8px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }}>
          <span style={{ color:'white', fontWeight:800, fontSize:11 }}>🧑‍🌾 PATIENT LOGIN</span>
        </div>
      </div>
      <div style={{ flex:1, background:'#FFFEFB', borderTopLeftRadius:28, borderTopRightRadius:28, marginTop:-28, padding:24, zIndex:2, boxShadow:'0 -10px 40px rgba(0,0,0,0.08)' }}>
        <h1 style={{ fontWeight:900, fontSize:26, color:'#111827' }}>Welcome Back 👋</h1>
        <p style={{ color:'#6b7280', fontSize:13, marginTop:4 }}>Login to continue your health journey</p>
        <div style={{ marginTop:20 }}>
          <label style={{ fontSize:11, fontWeight:800, letterSpacing:1, color:'#374151' }}>MOBILE NUMBER</label>
          <div style={{ display:'flex', gap:10, marginTop:8, background:'white', border:'1.5px solid #e5e7eb', borderRadius:14, padding:'0 14px', height:54, alignItems:'center' }}>
            <span style={{ fontWeight:800, borderRight:'1px solid #eee', paddingRight:10, fontSize:14 }}>+91</span>
            <input value={mobile} onChange={e=>setMobile(e.target.value)} placeholder="Enter your mobile" style={{ flex:1, border:'none', outline:'none', fontSize:15, fontWeight:600 }} />
          </div>
        </div>
        <button onClick={()=>nav('/otp')} style={{ width:'100%', height:54, marginTop:18, background:'#0B4D2E', color:'white', border:'none', borderRadius:14, fontWeight:900, fontSize:15, cursor:'pointer', boxShadow:'0 8px 20px rgba(11,77,46,0.3)' }}>Send OTP →</button>
        <button onClick={()=>nav('/doctor-login')} style={{ width:'100%', height:48, marginTop:12, background:'#f3f4f6', border:'none', borderRadius:14, fontWeight:700, fontSize:13, color:'#374151', cursor:'pointer' }}>Are you a Doctor? Login here →</button>
        <p style={{ textAlign:'center', fontSize:11, color:'#9ca3af', marginTop:16 }}>🔒 Secure & Govt Verified</p>
      </div>
    </div>
  )
}

function OTPVerify() {
  const nav = useNavigate()
  const [otp, setOtp] = useState(['','','',''])
  const [timer, setTimer] = useState(30)
  useEffect(()=>{ if(timer>0){ const t=setTimeout(()=>setTimer(timer-1),1000); return ()=>clearTimeout(t)} },[timer])
  return (
    <div style={{ minHeight:'100vh', width:'100vw', background:'#FFFEFB', display:'flex', flexDirection:'column', padding:24 }}>
      <button onClick={()=>nav(-1)} style={{ width:40, height:40, borderRadius:12, background:'#f3f4f6', border:'none', fontSize:18, cursor:'pointer', fontWeight:800 }}>←</button>
      <div style={{ marginTop:20, width:56, height:56, background:'#0B4D2E', borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26 }}>🔐</div>
      <h1 style={{ fontWeight:900, fontSize:26, marginTop:16, color:'#111827' }}>Verify OTP</h1>
      <p style={{ color:'#6b7280', fontSize:13, marginTop:6 }}>Code sent to +91 9XXXX XXXXX<br/>Enter 4-digit code</p>
      <div style={{ display:'flex', gap:12, marginTop:26, justifyContent:'center' }}>
        {otp.map((d,i)=>(
          <input key={i} value={d} onChange={e=>{
            const v=e.target.value.slice(-1).replace(/\D/,'')
            const n=[...otp]; n[i]=v; setOtp(n)
            if(v && i<3) document.getElementById(`otp-${i+1}`)?.focus()
          }} id={`otp-${i}`} maxLength={1}
          style={{ width:56, height:58, borderRadius:14, border:'1.5px solid #e5e7eb', textAlign:'center', fontSize:22, fontWeight:900, outline:'none', background:'white' }} />
        ))}
      </div>
      <div style={{ textAlign:'center', marginTop:18 }}>
        {timer>0? <span style={{ fontSize:13, color:'#6b7280' }}>Resend OTP in <b>{timer}s</b></span> : <span onClick={()=>setTimer(30)} style={{ fontSize:13, color:'#0B4D2E', fontWeight:900, cursor:'pointer' }}>Resend OTP ↻</span>}
      </div>
      <button onClick={()=>nav('/home')} style={{ width:'100%', height:54, marginTop:28, background:'#0B4D2E', color:'white', border:'none', borderRadius:14, fontWeight:900, fontSize:15, cursor:'pointer' }}>Verify & Continue →</button>
      <div style={{ marginTop:'auto', background:'#f0fdf4', border:'1px solid #dcfce7', borderRadius:14, padding:14, display:'flex', gap:10 }}>
        <span>💡</span><p style={{ fontSize:11, color:'#374151' }}><b>Demo: 1234</b> - Any 4 digits works</p>
      </div>
    </div>
  )
}

function DoctorLogin() {
  const nav = useNavigate()
  const [id, setId] = useState('')
  const [pass, setPass] = useState('')
  return (
    <div style={{ minHeight:'100vh', width:'100vw', background:'#f8fafc', display:'flex', flexDirection:'column' }}>
      <div style={{ background:'#0B4D2E', padding:'26px 24px', paddingBottom:32 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', gap:10, alignItems:'center' }}>
            <div style={{ width:40, height:40, background:'white', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>👨‍⚕️</div>
            <div><p style={{ color:'white', fontWeight:900, fontSize:15 }}>GramArogya</p><p style={{ color:'rgba(255,255,255,0.6)', fontSize:10, fontWeight:700 }}>DOCTOR PORTAL</p></div>
          </div>
          <span style={{ background:'#4ade80', color:'#052e16', fontSize:9, fontWeight:900, padding:'6px 12px', borderRadius:100 }}>VERIFIED ONLY</span>
        </div>
        <h1 style={{ color:'white', fontWeight:900, fontSize:24, marginTop:22 }}>Doctor Login</h1>
        <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13, marginTop:6 }}>Secure access for verified professionals</p>
      </div>
      <div style={{ flex:1, background:'#f8fafc', borderTopLeftRadius:28, borderTopRightRadius:28, marginTop:-20, padding:24, position:'relative', zIndex:2 }}>
        <input value={id} onChange={e=>setId(e.target.value)} placeholder="Medical ID / Email" style={{ width:'100%', height:52, marginTop:8, borderRadius:14, border:'1.5px solid #e2e8f0', padding:'0 16px', outline:'none', fontSize:14, fontWeight:600, boxSizing:'border-box' }} />
        <input value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" style={{ width:'100%', height:52, marginTop:12, borderRadius:14, border:'1.5px solid #e2e8f0', padding:'0 16px', outline:'none', fontSize:14, fontWeight:600, boxSizing:'border-box' }} />
        <button onClick={()=>nav('/doctor-dashboard')} style={{ width:'100%', height:54, marginTop:20, background:'#0B4D2E', color:'white', border:'none', borderRadius:14, fontWeight:900, fontSize:15, cursor:'pointer' }}>Login as Doctor →</button>
        <button onClick={()=>nav('/login')} style={{ width:'100%', height:48, marginTop:12, background:'white', border:'1.5px solid #e2e8f0', borderRadius:14, fontWeight:700, fontSize:13, color:'#374151', cursor:'pointer' }}>← Patient Login</button>
      </div>
    </div>
  )
}

function DoctorDashboard() {
  const nav = useNavigate()
  return (
    <div style={{ minHeight:'100vh', width:'100%', background:'#f8fafc', paddingBottom:80, maxWidth:430, margin:'0 auto' }}>
      <div style={{ background:'#0B4D2E', padding:'20px 20px 28px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', gap:12, alignItems:'center' }}>
            <div style={{ width:44, height:44, background:'white', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22 }}>👨‍⚕️</div>
            <div><p style={{ color:'white', fontWeight:900, fontSize:15 }}>Dr. Ramesh Kumar</p><p style={{ color:'#4ade80', fontSize:11, fontWeight:700 }}>MBBS • Available • Chittoor</p></div>
          </div>
          <button onClick={()=>nav('/home')} style={{ background:'rgba(255,255,255,0.15)', border:'none', color:'white', padding:'8px 14px', borderRadius:100, fontSize:11, fontWeight:800, cursor:'pointer' }}>Patient View</button>
        </div>
        <div style={{ display:'flex', gap:10, marginTop:20 }}>
          <div style={{ flex:1, background:'rgba(255,255,255,0.1)', borderRadius:14, padding:12, border:'1px solid rgba(255,255,255,0.1)' }}><p style={{ color:'rgba(255,255,255,0.6)', fontSize:10, fontWeight:800 }}>TODAY</p><p style={{ color:'white', fontWeight:900, fontSize:20, marginTop:4 }}>12</p><p style={{ color:'rgba(255,255,255,0.7)', fontSize:11 }}>Appointments</p></div>
          <div style={{ flex:1, background:'white', borderRadius:14, padding:12 }}><p style={{ color:'#6b7280', fontSize:10, fontWeight:800 }}>EARNINGS</p><p style={{ color:'#0B4D2E', fontWeight:900, fontSize:20, marginTop:4 }}>₹4.2k</p><p style={{ color:'#6b7280', fontSize:11 }}>Today</p></div>
          <div style={{ flex:1, background:'#4ade80', borderRadius:14, padding:12 }}><p style={{ color:'#052e16', fontSize:10, fontWeight:800 }}>RATING</p><p style={{ color:'#052e16', fontWeight:900, fontSize:20, marginTop:4 }}>4.8</p><p style={{ color:'#052e16', fontSize:11 }}>⭐ 128 reviews</p></div>
        </div>
      </div>
      <div style={{ padding:16, marginTop:-10 }}>
        <h3 style={{ fontWeight:900, fontSize:14 }}>Upcoming Patients • Today</h3>
        {[
          {name:'Lakshmi Devi', time:'10:30 AM', type:'Pregnancy Checkup', village:'Kuppam', urgent:false},
          {name:'Raju Farmer', time:'11:15 AM', type:'Fever & Cold', village:'Chittoor', urgent:true},
          {name:'Sita Child', time:'12:00 PM', type:'Vaccination', village:'Palamaner', urgent:false},
        ].map((p,i)=>(
          <div key={i} style={{ background:'white', borderRadius:16, padding:14, marginTop:10, border:'1px solid #e2e8f0', display:'flex', justifyContent:'space-between', alignItems:'center', borderLeft:`4px solid ${p.urgent?'#ef4444':'#0B4D2E'}` }}>
            <div style={{ display:'flex', gap:10, alignItems:'center' }}>
              <div style={{ width:40, height:40, background: p.urgent?'#fef2f2':'#f0fdf4', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center' }}>🧑‍🌾</div>
              <div><p style={{ fontWeight:800, fontSize:13 }}>{p.name} {p.urgent && <span style={{ background:'#fef2f2', color:'#ef4444', fontSize:8, padding:'2px 6px', borderRadius:100, fontWeight:900 }}>URGENT</span>}</p><p style={{ fontSize:11, color:'#64748b' }}>{p.type} • {p.village}</p></div>
            </div>
            <span style={{ background:'#0B4D2E', color:'white', padding:'6px 12px', borderRadius:100, fontSize:11, fontWeight:800 }}>{p.time}</span>
          </div>
        ))}
        <button onClick={()=>nav('/')} style={{ width:'100%', height:48, marginTop:20, background:'#111827', color:'white', border:'none', borderRadius:12, fontWeight:800, cursor:'pointer' }}>Logout → Go to Onboarding</button>
      </div>
    </div>
  )
}

function Childcare() {
  const nav = useNavigate()
  return (
    <div style={{ minHeight:'100vh', background:'#FFFEFB', maxWidth:430, margin:'0 auto', paddingBottom:90 }}>
      <div style={{ background:'white', padding:'12px 16px', display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid #f3f4f6', position:'sticky', top:0, zIndex:10 }}>
        <button onClick={()=>nav(-1)} style={{ width:36, height:36, background:'#f3f4f6', borderRadius:10, border:'none', fontWeight:900, cursor:'pointer' }}>←</button>
        <p style={{ fontWeight:900, fontSize:15 }}>Child Care</p>
      </div>
      <div style={{ margin:16, background:'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', borderRadius:20, padding:16, color:'white', display:'flex', gap:14, alignItems:'center' }}>
        <div style={{ width:56, height:56, background:'white', borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', fontSize:30 }}>👶</div>
        <div><p style={{ fontWeight:900, fontSize:16 }}>Child Care & Vaccines</p><p style={{ fontSize:11, opacity:0.9, marginTop:4 }}>0-5 years growth tracking</p><p style={{ fontSize:10, background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 8px', borderRadius:100, marginTop:6, fontWeight:800 }}>FREE Govt Service</p></div>
      </div>
      <div style={{ padding:16, textAlign:'center' }}>
        <p style={{ fontSize:13, color:'#6b7280' }}>Vaccination chart, Nutrition guide coming in next update mawa! 🚀</p>
        <button onClick={()=>nav('/home')} style={{ marginTop:16, background:'#0B4D2E', color:'white', border:'none', padding:'10px 20px', borderRadius:12, fontWeight:800, cursor:'pointer' }}>Go to Home →</button>
      </div>
    </div>
  )
}

function Emergency() {
  const nav = useNavigate()
  const [calling, setCalling] = useState(false)
  const handleCall = (num) => { setCalling(true); setTimeout(()=> window.location.href=`tel:${num}`, 800) }
  return (
    <div style={{ minHeight:'100vh', width:'100%', background:'#050505', display:'flex', flexDirection:'column', alignItems:'center', position:'relative', overflow:'hidden', maxWidth:430, margin:'0 auto' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 50% 20%, #dc2626 0%, #7f1d1d 25%, #050505 70%)', opacity:0.7 }}></div>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(0deg, #000 0%, transparent 50%)' }}></div>
      <div style={{ position:'relative', zIndex:2, width:'100%', padding:'14px 16px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <button onClick={()=>nav(-1)} style={{ width:36, height:36, background:'rgba(255,255,255,0.1)', backdropFilter:'blur(10px)', borderRadius:20, border:'1px solid rgba(255,255,255,0.1)', color:'white', fontWeight:900, cursor:'pointer' }}>←</button>
        <div style={{ background:'#dc2626', color:'white', padding:'5px 10px', borderRadius:100, fontSize:9, fontWeight:900, display:'flex', gap:6, alignItems:'center' }}><div style={{ width:6, height:6, background:'white', borderRadius:100, animation:'pulse 1s infinite' }}></div> LIVE EMERGENCY</div>
        <div style={{ width:36 }}></div>
      </div>
      <div style={{ position:'relative', zIndex:2, textAlign:'center', marginTop:10 }}>
        <p style={{ color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:900, letterSpacing:3 }}>FREE • GOVT OF AP • 24/7</p>
        <h1 style={{ color:'white', fontWeight:900, fontSize:32, marginTop:6 }}>EMERGENCY</h1>
        <p style={{ color:'#fca5a5', fontSize:12, fontWeight:700, marginTop:4 }}>Ambulance in 15 mins • Location auto-shared</p>
      </div>
      <div style={{ position:'relative', zIndex:2, marginTop:28, display:'flex', flexDirection:'column', alignItems:'center' }}>
        <div style={{ position:'absolute', width:260, height:260, borderRadius:1000, border:'1px solid rgba(239,68,68,0.25)', animation:'ping 2s infinite' }}></div>
        <div style={{ position:'absolute', width:210, height:210, borderRadius:1000, border:'1px solid rgba(239,68,68,0.15)', animation:'ping 2s infinite 0.6s' }}></div>
        <div onClick={()=>handleCall(108)} style={{ width:180, height:180, borderRadius:1000, background: calling? '#7f1d1d' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', border:'7px solid rgba(255,255,255,0.12)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', cursor:'pointer', boxShadow:'0 0 80px rgba(239,68,68,0.55)', transform: calling? 'scale(0.93)' : 'scale(1)', transition:'all 0.2s' }}>
          <p style={{ fontSize:52, fontWeight:900, color:'white', lineHeight:1 }}>108</p>
          <p style={{ fontSize:11, fontWeight:900, color:'white', marginTop:6, letterSpacing:2 }}>{calling? 'CALLING...' : 'TAP TO CALL'}</p>
        </div>
      </div>
      <div style={{ position:'relative', zIndex:2, width:'100%', padding:16, marginTop:24, display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{ display:'flex', gap:10 }}>
          <button onClick={()=>handleCall(104)} style={{ flex:1, height:52, background:'rgba(255,255,255,0.08)', backdropFilter:'blur(12px)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:14, color:'white', fontWeight:800, fontSize:12, cursor:'pointer' }}>📞 104 Advice</button>
          <button onClick={()=>handleCall(108)} style={{ flex:1, height:52, background:'white', border:'none', borderRadius:14, color:'#111827', fontWeight:900, fontSize:12, cursor:'pointer' }}>🚑 Call Now</button>
        </div>
        <div style={{ background:'white', borderRadius:16, padding:14 }}>
          <p style={{ fontWeight:900, fontSize:11 }}>WHAT HAPPENS NEXT?</p>
          <div style={{ marginTop:10, display:'flex', flexDirection:'column', gap:10 }}>
            <div style={{ display:'flex', gap:10 }}><div style={{ width:28, height:28, background:'#f0fdf4', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>📍</div><p style={{ fontSize:11, color:'#374151' }}><b>Location shared</b> - Auto sent to control room</p></div>
            <div style={{ display:'flex', gap:10 }}><div style={{ width:28, height:28, background:'#fef2f2', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>🚑</div><p style={{ fontSize:11, color:'#374151' }}><b>Ambulance dispatched</b> - 2 mins, 15 mins ETA</p></div>
          </div>
        </div>
      </div>
      <style>{`@keyframes ping{0%{transform:scale(0.85); opacity:0.8} 100%{transform:scale(1.5); opacity:0}} @keyframes pulse{0%,100%{opacity:1} 50%{opacity:0.2}}`}</style>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1800); return () => clearTimeout(t) }, [])
  if (loading) return <SplashScreen />
  return (
    <BrowserRouter>
      <div style={{ width:'100%', minHeight:'100vh', background:'#f6fbf7', display:'flex', justifyContent:'center' }}>
        <div style={{ width:'100%', maxWidth:430, background:'#f6fbf7', minHeight:'100vh', position:'relative', boxShadow:'0 0 80px rgba(0,0,0,0.08)' }}>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/login" element={<PatientLogin />} />
            <Route path="/otp" element={<OTPVerify />} />
            <Route path="/doctor-login" element={<DoctorLogin />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/nearby" element={<Nearby />} />
            <Route path="/hospitals" element={<Nearby />} />
            <Route path="/pregnancy" element={<Pregnancy />} />
            <Route path="/childcare" element={<Childcare />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/108" element={<Emergency />} />
            <Route path="/financial-support" element={<FinancialSupport />} />
            <Route path="/schemes" element={<FinancialSupport />} />
            <Route path="/government-schemes" element={<FinancialSupport />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}