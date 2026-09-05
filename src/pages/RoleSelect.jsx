import { useNavigate } from 'react-router-dom'

export default function RoleSelect(){
  const nav = useNavigate()
  return (
    <div style={{ minHeight:'100vh', background:'#FFFEFB', maxWidth:430, margin:'0 auto', padding:24, fontFamily:'system-ui', display:'flex', flexDirection:'column', justifyContent:'center' }}>
      <h1 style={{ fontSize:28, fontWeight:900 }}>Who are you?</h1>
      <p style={{ color:'#57534e', marginBottom:30 }}>Select your role</p>
      <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
        <div onClick={()=>nav('/onboarding')} style={{ padding:20, borderRadius:16, border:'2px solid #0B4D2E', background:'white', cursor:'pointer' }}>
          <h3 style={{ fontWeight:800 }}>Patient</h3>
          <p style={{ fontSize:13, color:'#57534e' }}>Book appointments</p>
        </div>
        <div onClick={()=>nav('/onboarding')} style={{ padding:20, borderRadius:16, border:'2px solid black', background:'black', color:'white', cursor:'pointer' }}>
          <h3 style={{ fontWeight:800 }}>Doctor</h3>
          <p style={{ fontSize:13, color:'#ccc' }}>Manage patients</p>
        </div>
      </div>
    </div>
  )
}