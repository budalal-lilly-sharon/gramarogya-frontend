import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
export default function NearbyServices(){
  const nav = useNavigate()
  return(
    <div style={{ minHeight:'100vh', background:'#f6fbf7', paddingBottom:80 }}>
      <div style={{ background:'white', padding:16, display:'flex', gap:12 }}><button onClick={()=>nav('/home')}>←</button><h2 style={{ fontWeight:700 }}>Nearby Hospitals - దగ్గరలో</h2></div>
      <div style={{ height:140, background:'#e5e7eb', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, color:'#6b7280' }}>🗺️ Map View - 5 Hospitals within 5km</div>
      <div style={{ padding:12, display:'flex', flexDirection:'column', gap:10 }}>
        {[
          { name:'Govt General Hospital', dist:'2.3km', type:'Government' },
          { name:'Sai Krishna Clinic', dist:'1.1km', type:'Private' },
          { name:'Apollo Pharmacy', dist:'0.8km', type:'Medical Store' },
        ].map(h=><div key={h.name} style={{ background:'white', padding:12, borderRadius:12, display:'flex', justifyContent:'space-between', alignItems:'center' }}><div><p style={{ fontWeight:600, fontSize:12 }}>{h.name}</p><p style={{ fontSize:10, color:'#6b7280' }}>{h.type} • {h.dist}</p></div><button style={{ background:'#0B4D2E', color:'white', padding:'6px 12px', borderRadius:20, fontSize:10 }}>Directions</button></div>)}
      </div>
      <BottomNav/>
    </div>
  )
}