import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function PatientLogin() {
  const nav = useNavigate()
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState('phone')
  const [loading, setLoading] = useState(false)
  const API = import.meta.env.VITE_API_URL

  const sendOtp = async () => {
    if(mobile.length < 10) return alert('Valid mobile enter chey mawa')
    setLoading(true)
    try{
      const res = await fetch(`${API}/api/auth/send-otp`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ phone: mobile, role: 'patient' })
      })
      const data = await res.json()
      if(data.success){
        alert(`OTP Sent! 📱\nDemo OTP: ${data.demoOtp}\n\nRender logs lo kuda kanipistadi`)
        setStep('otp')
      }else{
        alert(data.message)
      }
    }catch(e){
      alert('Server offline anukunta mawa - Backend deploy ayinda check chey')
      console.log(e)
    }
    setLoading(false)
  }

  const verifyOtp = async () => {
    if(otp.length < 4) return alert('OTP enter chey')
    setLoading(true)
    try{
      const res = await fetch(`${API}/api/auth/verify-otp`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ phone: mobile, otp, role: 'patient' })
      })
      const data = await res.json()
      if(data.success){
        localStorage.setItem('role','patient')
        localStorage.setItem('phone', mobile)
        nav('/home')
      }else{
        alert(data.message || 'Wrong OTP')
      }
    }catch(e){ alert(e.message) }
    setLoading(false)
  }

  return (
    <div style={{ minHeight:'100vh', width:'100vw', background:'#FFFEFB', display:'flex', flexDirection:'column' }}>
      <div style={{ height:'45vh', width:'100%', position:'relative', background:'#0a1a12' }}>
        <img src="/csp.jpeg" alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(0deg, #FFFEFB 0%, transparent 50%, rgba(0,0,0,0.3) 100%)' }}></div>
        <div style={{ position:'absolute', bottom:20, left:24, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(10px)', padding:'8px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }}>
          <span style={{ color:'white', fontWeight:800, fontSize:11 }}>🧑‍🌾 PATIENT LOGIN - REAL OTP</span>
        </div>
      </div>

      <div style={{ flex:1, background:'#FFFEFB', borderTopLeftRadius:28, borderTopRightRadius:28, marginTop:-28, padding:24, zIndex:2 }}>
        <h1 style={{ fontWeight:900, fontSize:26 }}>Welcome Back 👋</h1>
        <p style={{ color:'#6b7280', fontSize:13, marginTop:4 }}>{step==='phone' ? 'Login to continue your health journey' : `OTP sent to +91 ${mobile}`}</p>

        {step==='phone' ? (
          <>
            <div style={{ marginTop:24, background:'white', border:'1.5px solid #e5e7eb', borderRadius:16, padding:16, display:'flex', gap:12, alignItems:'center' }}>
              <div style={{ width:44, height:44, background:'#f0fdf4', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>🧑‍🌾</div>
              <div><p style={{ fontWeight:800, fontSize:14 }}>Patient Access</p><p style={{ fontSize:11, color:'#6b7280' }}>Real OTP • Backend: {API}</p></div>
            </div>

            <div style={{ marginTop:20 }}>
              <label style={{ fontSize:11, fontWeight:800, letterSpacing:1 }}>MOBILE NUMBER</label>
              <div style={{ display:'flex', gap:10, marginTop:8, background:'white', border:'1.5px solid #e5e7eb', borderRadius:14, padding:'0 14px', height:56, alignItems:'center' }}>
                <span style={{ fontWeight:800, borderRight:'1px solid #eee', paddingRight:10 }}>+91</span>
                <input value={mobile} onChange={e=>setMobile(e.target.value)} placeholder="9XXXXXXXXX" maxLength={10} style={{ flex:1, border:'none', outline:'none', fontSize:15, fontWeight:600 }} />
              </div>
            </div>

            <button onClick={sendOtp} disabled={loading} style={{ width:'100%', height:54, marginTop:18, background:'#0B4D2E', color:'white', border:'none', borderRadius:14, fontWeight:900, fontSize:15, cursor:'pointer', opacity: loading?0.6:1 }}>{loading?'Sending OTP...':'Send Real OTP →'}</button>
          </>
        ) : (
          <>
            <div style={{ marginTop:24, background:'#f0fdf4', border:'1.5px solid #bbf7d0', borderRadius:16, padding:16 }}>
              <p style={{ fontWeight:800, fontSize:13, color:'#166534' }}>📱 OTP Sent Successfully!</p>
              <p style={{ fontSize:11, color:'#15803d', marginTop:4 }}>Check alert for OTP • Also works: 123456</p>
            </div>

            <div style={{ marginTop:20 }}>
              <label style={{ fontSize:11, fontWeight:800, letterSpacing:1 }}>ENTER 6-DIGIT OTP</label>
              <input value={otp} onChange={e=>setOtp(e.target.value)} placeholder="• • • • • •" maxLength={6} style={{ width:'100%', height:56, marginTop:8, borderRadius:14, border:'2px solid #0B4D2E', padding:'0 16px', outline:'none', fontSize:22, fontWeight:800, letterSpacing:8, textAlign:'center', boxSizing:'border-box' }} />
            </div>

            <button onClick={verifyOtp} disabled={loading} style={{ width:'100%', height:54, marginTop:18, background:'#0B4D2E', color:'white', border:'none', borderRadius:14, fontWeight:900, fontSize:15, cursor:'pointer', opacity: loading?0.6:1 }}>{loading?'Verifying...':'Verify & Login →'}</button>
            <button onClick={()=>setStep('phone')} style={{ width:'100%', marginTop:12, background:'transparent', border:'none', color:'#6b7280', fontSize:12, fontWeight:700, cursor:'pointer' }}>Change Number</button>
          </>
        )}

        <button onClick={()=>nav('/doctor-login')} style={{ width:'100%', height:48, marginTop:16, background:'#f3f4f6', border:'none', borderRadius:14, fontWeight:700, fontSize:13, color:'#374151', cursor:'pointer' }}>Are you a Doctor? Login here →</button>
      </div>
    </div>
  )
}