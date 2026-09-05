import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
export default function Profile(){
  const nav = useNavigate()
  return(
    <div style={{ minHeight:'100vh', background:'#f6fbf7', paddingBottom:80 }}>
      <div style={{ background:'#0B4D2E', padding:20, color:'white', borderRadius:'0 0 20px 20px' }}>
        <div style={{ display:'flex', gap:12, alignItems:'center' }}><div style={{ width:60, height:60, background:'white', borderRadius:30, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, color:'#0B4D2E' }}>👩</div><div><p style={{ fontWeight:700 }}>Lakshmi Garu</p><p style={{ fontSize:11, opacity:0.8 }}>+91 98765 43210 • Narasaraopet</p></div></div>
      </div>
      <div style={{ padding:16, display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{ background:'white', borderRadius:12, padding:12, fontSize:13 }}>👨‍👩‍👧 Family Members (4)<span style={{ float:'right' }}>→</span></div>
        <div style={{ background:'white', borderRadius:12, padding:12, fontSize:13 }}>📄 My Reports<span style={{ float:'right' }}>→</span></div>
        <div style={{ background:'white', borderRadius:12, padding:12, fontSize:13 }}>🌐 Language: తెలుగు<span style={{ float:'right' }}>→</span></div>
        <button onClick={()=>nav('/onboarding')} style={{ background:'#fee2e2', color:'#dc2626', padding:12, borderRadius:12, fontWeight:600, fontSize:13, marginTop:10 }}>Logout</button>
      </div>
      <BottomNav/>
    </div>
  )
}