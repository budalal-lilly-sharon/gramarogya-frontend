import { useNavigate } from 'react-router-dom'

export default function Community() {
  const nav = useNavigate()

  const services = [
    { icon:'🏥', title:'Health Camps', subtitle:'Upcoming camps in your area' },
    { icon:'🤝', title:'Volunteer Network', subtitle:'Connect with volunteers near you' },
    { icon:'📢', title:'Health Awareness', subtitle:'Posters, Videos, Articles' },
    { icon:'💬', title:'Community Discussions', subtitle:'Ask, share and support each other' },
  ]

  return (
    <div style={{ minHeight:'100vh', background:'#f0fdf4', paddingBottom:30 }}>
      
      <div style={{ background:'white', padding:'12px 16px', display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid #eee', position:'sticky', top:0, zIndex:10 }}>
        <button onClick={()=>nav(-1)} style={{ width:36, height:36, background:'#f3f4f6', borderRadius:20, border:'none', fontWeight:900, cursor:'pointer' }}>←</button>
        <p style={{ fontWeight:900, fontSize:16 }}>Community</p>
      </div>

      <div style={{ margin:16, background:'linear-gradient(135deg,#0B4D2E,#16a34a)', borderRadius:16, padding:20, color:'white', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div>
          <h3 style={{ fontWeight:900, fontSize:16 }}>Be a Health Volunteer</h3>
          <p style={{ fontSize:12, opacity:0.9, marginTop:4 }}>Serve your community and save lives</p>
          <button style={{ marginTop:12, background:'white', color:'#0B4D2E', border:'none', padding:'8px 16px', borderRadius:20, fontWeight:800, fontSize:12, cursor:'pointer' }}>Join Now</button>
        </div>
        <div style={{ fontSize:50 }}>🤝</div>
      </div>

      <div style={{ padding:'0 16px', display:'flex', flexDirection:'column', gap:12 }}>
        {services.map((s,i)=>(
          <div key={i} style={{ background:'white', borderRadius:14, padding:16, display:'flex', gap:14, alignItems:'center', border:'1px solid #eee', cursor:'pointer' }}>
            <div style={{ width:48, height:48, background:'#f0fdf4', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22 }}>{s.icon}</div>
            <div>
              <p style={{ fontWeight:800, fontSize:14 }}>{s.title}</p>
              <p style={{ fontSize:11, color:'#6b7280', marginTop:2 }}>{s.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}