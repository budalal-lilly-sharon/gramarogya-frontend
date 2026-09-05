import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function ElderCare(){
  const nav = useNavigate()
  return(
    <div style={{ minHeight:'100vh', background:'#f0fdf4', paddingBottom:80, maxWidth:430, margin:'0 auto' }}>
      <div style={{ background:'white', padding:'16px', display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid #eee', position:'sticky', top:0 }}>
        <button onClick={()=>nav('/home')} style={{ width:36, height:36, background:'#f3f4f6', borderRadius:20, border:'none', fontWeight:900, cursor:'pointer' }}>←</button>
        <h2 style={{ fontWeight:900, fontSize:15 }}>Elder Care</h2>
      </div>

      <div style={{ padding:16 }}>
        <div style={{ background:'white', padding:16, borderRadius:16, border:'1px solid #eee' }}>
          <p style={{ fontSize:11, color:'#6b7280', fontWeight:700, letterSpacing:0.5 }}>TODAY'S READING</p>
          <div style={{ display:'flex', gap:12, marginTop:12 }}>
            <div style={{ flex:1, background:'#fef2f2', padding:14, borderRadius:12, textAlign:'center', border:'1px solid #fecaca' }}>
              <p style={{ fontSize:11, fontWeight:700, color:'#6b7280' }}>BP</p>
              <p style={{ fontWeight:900, color:'#dc2626', fontSize:18, marginTop:4 }}>128/82</p>
              <p style={{ fontSize:10, color:'#16a34a', fontWeight:700, marginTop:2 }}>Normal</p>
            </div>
            <div style={{ flex:1, background:'#f0fdf4', padding:14, borderRadius:12, textAlign:'center', border:'1px solid #bbf7d0' }}>
              <p style={{ fontSize:11, fontWeight:700, color:'#6b7280' }}>Sugar</p>
              <p style={{ fontWeight:900, color:'#16a34a', fontSize:18, marginTop:4 }}>98 mg</p>
              <p style={{ fontSize:10, color:'#16a34a', fontWeight:700, marginTop:2 }}>Normal</p>
            </div>
          </div>
          <p style={{ fontSize:10, color:'#9ca3af', marginTop:10, textAlign:'center' }}>Last updated: Today 8:00 AM</p>
        </div>

        <button style={{ width:'100%', background:'#0B4D2E', color:'white', padding:16, borderRadius:12, marginTop:16, fontWeight:800, fontSize:13, border:'none', cursor:'pointer' }}>+ Add Today's Reading</button>

        <div style={{ marginTop:20, background:'white', borderRadius:14, padding:14, border:'1px solid #eee' }}>
          <p style={{ fontWeight:800, fontSize:12 }}>Quick Tips for Elders</p>
          <p style={{ fontSize:11, color:'#6b7280', marginTop:6, lineHeight:1.6 }}>• Walk 30 mins daily • Less salt & sugar • Check BP weekly • Take medicines on time</p>
        </div>
      </div>

      <BottomNav/>
    </div>
  )
}