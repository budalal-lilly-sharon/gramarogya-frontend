import { useNavigate } from 'react-router-dom'

export default function DoctorProfile(){
  const nav = useNavigate()
  return(
    <div style={{ minHeight:'100vh', background:'white', maxWidth:430, margin:'0 auto' }}>
      <div style={{ background:'#0B4D2E', padding:20, color:'white' }}>
        <button onClick={()=>nav('/doctors')} style={{ color:'white', background:'rgba(255,255,255,0.15)', border:'none', padding:'6px 12px', borderRadius:20, cursor:'pointer' }}>← Back</button>
        <div style={{ display:'flex', gap:14, marginTop:16, alignItems:'center' }}>
          <div style={{ width:70, height:70, background:'white', borderRadius:20, display:'flex', alignItems:'center', justifyContent:'center', fontSize:36 }}>👨‍⚕️</div>
          <div>
            <h2 style={{ fontWeight:800 }}>Dr. Ramesh Kumar</h2>
            <p style={{ fontSize:11, opacity:0.8 }}>MBBS, MD - General Physician</p>
            <p style={{ fontSize:11, marginTop:4 }}>⭐ 4.8 (324 reviews) • 12 yrs exp</p>
          </div>
        </div>
      </div>
      <div style={{ padding:16 }}>
        <div style={{ display:'flex', gap:10 }}>
          <span style={{ background:'#dcfce7', padding:'6px 10px', borderRadius:8, fontSize:11, fontWeight:700 }}>✅ Available Today</span>
          <span style={{ background:'#e0f2fe', padding:'6px 10px', borderRadius:8, fontSize:11, fontWeight:700 }}>💬 Speaks English, Hindi</span>
        </div>
        <h4 style={{ fontWeight:800, marginTop:20, fontSize:13 }}>About Doctor</h4>
        <p style={{ fontSize:12, color:'#6b7280', marginTop:6, lineHeight:1.6 }}>Specialist in rural healthcare, treating fever, BP, diabetes, and infections. 8 years of experience at Govt Hospital. Trusted by 10k+ patients.</p>
        
        <div style={{ marginTop:16, background:'#f9fafb', padding:12, borderRadius:12 }}>
          <p style={{ fontSize:11, fontWeight:800 }}>Clinic Timing: 9AM - 5PM | Govt Hospital</p>
        </div>

        <button onClick={()=>nav('/home')} style={{ width:'100%', background:'#0B4D2E', color:'white', padding:16, borderRadius:14, marginTop:24, fontWeight:800, border:'none', cursor:'pointer' }}>Book Appointment - ₹200</button>
        <button style={{ width:'100%', background:'#f3f4f6', padding:14, borderRadius:14, marginTop:10, fontWeight:700, fontSize:13, border:'none', cursor:'pointer' }}>📞 Voice Call Doctor</button>
      </div>
    </div>
  )
}