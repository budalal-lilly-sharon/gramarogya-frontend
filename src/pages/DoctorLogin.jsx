import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function DoctorLogin() {
  const nav = useNavigate()
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
        <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13, marginTop:6 }}>Secure access for verified medical professionals</p>
      </div>

      <div style={{ flex:1, background:'#f8fafc', borderTopLeftRadius:28, borderTopRightRadius:28, marginTop:-20, padding:24 }}>
        <div style={{ background:'white', borderRadius:16, padding:16, border:'1px solid #e2e8f0', display:'flex', gap:12 }}>
          <div style={{ width:40, height:40, background:'#eff6ff', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center' }}>🏥</div>
          <div><p style={{ fontWeight:800, fontSize:13 }}>Medical Verification Required</p><p style={{ fontSize:11, color:'#64748b', marginTop:2 }}>MBBS ID & Hospital code needed</p></div>
        </div>

        <div style={{ marginTop:20 }}>
          <label style={{ fontSize:11, fontWeight:800 }}>MEDICAL ID / EMAIL</label>
          <input placeholder="e.g. DOC12345 or dr@email.com" style={{ width:'100%', height:52, marginTop:8, borderRadius:14, border:'1.5px solid #e2e8f0', padding:'0 16px', outline:'none', fontSize:14, fontWeight:600, boxSizing:'border-box' }} />
        </div>
        <div style={{ marginTop:16 }}>
          <label style={{ fontSize:11, fontWeight:800 }}>PASSWORD</label>
          <input type="password" placeholder="Enter password" style={{ width:'100%', height:52, marginTop:8, borderRadius:14, border:'1.5px solid #e2e8f0', padding:'0 16px', outline:'none', fontSize:14, fontWeight:600, boxSizing:'border-box' }} />
        </div>

        <button onClick={()=>nav('/home')} style={{ width:'100%', height:54, marginTop:20, background:'#0B4D2E', color:'white', border:'none', borderRadius:14, fontWeight:900, cursor:'pointer' }}>Login as Doctor →</button>
        <button onClick={()=>nav('/login')} style={{ width:'100%', height:48, marginTop:12, background:'white', border:'1.5px solid #e2e8f0', borderRadius:14, fontWeight:700, fontSize:13, color:'#374151', cursor:'pointer' }}>← Patient Login</button>

        <p style={{ textAlign:'center', fontSize:11, color:'#94a3b8', marginTop:20 }}>🔒 End-to-end encrypted • NMC Verified</p>
      </div>
    </div>
  )
}