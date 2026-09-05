import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function PatientLogin() {
  const nav = useNavigate()
  const [mobile, setMobile] = useState('')
  return (
    <div style={{ minHeight:'100vh', width:'100vw', background:'#FFFEFB', display:'flex', flexDirection:'column' }}>
      <div style={{ height:'45vh', width:'100%', position:'relative', background:'#0a1a12' }}>
        <img src="/csp.jpeg" alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(0deg, #FFFEFB 0%, transparent 50%, rgba(0,0,0,0.3) 100%)' }}></div>
        <div style={{ position:'absolute', bottom:20, left:24, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(10px)', padding:'8px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }}>
          <span style={{ color:'white', fontWeight:800, fontSize:11 }}>🧑‍🌾 PATIENT LOGIN</span>
        </div>
      </div>

      <div style={{ flex:1, background:'#FFFEFB', borderTopLeftRadius:28, borderTopRightRadius:28, marginTop:-28, padding:24, zIndex:2 }}>
        <h1 style={{ fontWeight:900, fontSize:26 }}>Welcome Back 👋</h1>
        <p style={{ color:'#6b7280', fontSize:13, marginTop:4 }}>Login to continue your health journey</p>

        <div style={{ marginTop:24, background:'white', border:'1.5px solid #e5e7eb', borderRadius:16, padding:16, display:'flex', gap:12, alignItems:'center' }}>
          <div style={{ width:44, height:44, background:'#f0fdf4', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>🧑‍🌾</div>
          <div><p style={{ fontWeight:800, fontSize:14 }}>Patient Access</p><p style={{ fontSize:11, color:'#6b7280' }}>Book doctors, 108, records</p></div>
        </div>

        <div style={{ marginTop:20 }}>
          <label style={{ fontSize:11, fontWeight:800, letterSpacing:1 }}>MOBILE NUMBER</label>
          <div style={{ display:'flex', gap:10, marginTop:8, background:'white', border:'1.5px solid #e5e7eb', borderRadius:14, padding:'0 14px', height:56, alignItems:'center' }}>
            <span style={{ fontWeight:800, borderRight:'1px solid #eee', paddingRight:10 }}>+91</span>
            <input value={mobile} onChange={e=>setMobile(e.target.value)} placeholder="Enter mobile" style={{ flex:1, border:'none', outline:'none', fontSize:15, fontWeight:600 }} />
          </div>
        </div>

        <button onClick={()=>nav('/home')} style={{ width:'100%', height:54, marginTop:18, background:'#0B4D2E', color:'white', border:'none', borderRadius:14, fontWeight:900, fontSize:15, cursor:'pointer' }}>Send OTP →</button>
        <button onClick={()=>nav('/doctor-login')} style={{ width:'100%', height:48, marginTop:12, background:'#f3f4f6', border:'none', borderRadius:14, fontWeight:700, fontSize:13, color:'#374151', cursor:'pointer' }}>Are you a Doctor? Login here →</button>
      </div>
    </div>
  )
}