import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function DoctorLogin() {
  const nav = useNavigate()
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState('phone') // phone or otp
  const [loading, setLoading] = useState(false)
  const API = import.meta.env.VITE_API_URL

  const sendOtp = async () => {
    if(phone.length < 10) return alert('Valid phone enter chey mawa')
    setLoading(true)
    try{
      const res = await fetch(`${API}/api/auth/send-otp`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ phone, role: 'doctor' })
      })
      const data = await res.json()
      if(data.success){
        alert(`Doctor OTP: ${data.demoOtp} 📱\n(Real SMS kuda vastadi)`)
        setStep('otp')
      }
    }catch(e){ alert('Server error mawa: '+e.message) }
    setLoading(false)
  }

  const verifyOtp = async () => {
    setLoading(true)
    try{
      const res = await fetch(`${API}/api/auth/verify-otp`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ phone, otp, role: 'doctor' })
      })
      const data = await res.json()
      if(data.success){
        localStorage.setItem('role','doctor')
        localStorage.setItem('phone', phone)
        nav('/home')
      }else{
        alert(data.message || 'Wrong OTP')
      }
    }catch(e){ alert(e.message) }
    setLoading(false)
  }

  return (
    <div style={{ minHeight:'100vh', width:'100vw', background:'#f8fafc', display:'flex', flexDirection:'column' }}>
      <div style={{ background:'#0B4D2E', padding:'28px 24px', paddingBottom:32 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', gap:10, alignItems:'center' }}>
            <div style={{ width:40, height:40, background:'white', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>👨‍⚕️</div>
            <div><p style={{ color:'white', fontWeight:900, fontSize:15 }}>GramArogya</p><p style={{ color:'rgba(255,255,255,0.6)', fontSize:10, fontWeight:700, letterSpacing:1 }}>DOCTOR PORTAL</p></div>
          </div>
          <span style={{ background:'#4ade80', color:'#052e16', fontSize:9, fontWeight:900, padding:'6px 12px', borderRadius:100, letterSpacing:1 }}>VERIFIED ONLY</span>
        </div>
        <h1 style={{ color:'white', fontWeight:900, fontSize:24, marginTop:24, lineHeight:1.2 }}>Doctor Login</h1>
        <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13, marginTop:6 }}>Secure OTP access for verified doctors</p>
      </div>

      <div style={{ flex:1, background:'#f8fafc', borderTopLeftRadius:28, borderTopRightRadius:28, marginTop:-20, padding:24 }}>

        <div style={{ background:'white', borderRadius:16, padding:16, border:'1px solid #e2e8f0', display:'flex', gap:12 }}>
          <div style={{ width:40, height:40, background:'#eff6ff', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center' }}>🏥</div>
          <div><p style={{ fontWeight:800, fontSize:13 }}>Doctor OTP Verification</p><p style={{ fontSize:11, color:'#64748b', marginTop:2 }}>Registered mobile number required</p></div>
        </div>

        {step==='phone' ? (
          <>
            <div style={{ marginTop:20 }}>
              <label style={{ fontSize:11, fontWeight:800 }}>MOBILE NUMBER</label>
              <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+91 9XXXXXXXXX" style={{ width:'100%', height:52, marginTop:8, borderRadius:14, border:'1.5px solid #e2e8f0', padding:'0 16px', outline:'none', fontSize:14, fontWeight:600, boxSizing:'border-box' }} />
            </div>
            <button onClick={sendOtp} disabled={loading} style={{ width:'100%', height:54, marginTop:20, background:'#0B4D2E', color:'white', border:'none', borderRadius:14, fontWeight:900, cursor:'pointer', opacity: loading?0.6:1 }}>{loading?'Sending...':'Send Doctor OTP →'}</button>
          </>
        ) : (
          <>
            <div style={{ marginTop:20 }}>
              <label style={{ fontSize:11, fontWeight:800 }}>ENTER OTP SENT TO {phone}</label>
              <input value={otp} onChange={e=>setOtp(e.target.value)} placeholder="6-digit OTP" maxLength={6} style={{ width:'100%', height:52, marginTop:8, borderRadius:14, border:'1.5px solid #0B4D2E', padding:'0 16px', outline:'none', fontSize:20, fontWeight:800, letterSpacing:4, textAlign:'center', boxSizing:'border-box' }} />
              <p style={{ fontSize:10, color:'#64748b', marginTop:8 }}>Demo OTP: 123456 works always</p>
            </div>
            <button onClick={verifyOtp} disabled={loading} style={{ width:'100%', height:54, marginTop:20, background:'#0B4D2E', color:'white', border:'none', borderRadius:14, fontWeight:900, cursor:'pointer', opacity: loading?0.6:1 }}>{loading?'Verifying...':'Verify & Login →'}</button>
            <button onClick={()=>setStep('phone')} style={{ width:'100%', marginTop:10, background:'transparent', border:'none', color:'#64748b', fontSize:12, fontWeight:700, cursor:'pointer' }}>Change Number</button>
          </>
        )}

        <button onClick={()=>nav('/login')} style={{ width:'100%', height:48, marginTop:16, background:'white', border:'1.5px solid #e2e8f0', borderRadius:14, fontWeight:700, fontSize:13, color:'#374151', cursor:'pointer' }}>← Patient Login</button>

        <p style={{ textAlign:'center', fontSize:11, color:'#94a3b8', marginTop:20 }}>🔒 End-to-end encrypted • Real OTP via {API}</p>
      </div>
    </div>
  )
}