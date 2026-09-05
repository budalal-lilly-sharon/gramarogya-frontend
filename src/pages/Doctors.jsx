import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BottomNav from '../components/BottomNav'

export default function Doctors() {
  const nav = useNavigate()
  const [filter, setFilter] = useState('All')

  const doctors = [
    { name:'Dr. Priya Sharma', spl:'Pregnancy Specialist', exp:'8 yrs', rating:'4.9', online:true, lang:'Telugu, English', fee:'Free', img:'👩‍⚕️', available:'Available now', color:'#0B4D2E' },
    { name:'Dr. Ramesh Kumar', spl:'Child Specialist', exp:'12 yrs', rating:'4.8', online:true, lang:'Telugu', fee:'Free', img:'👨‍⚕️', available:'In 5 mins', color:'#15803d' },
    { name:'Dr. Anjali Devi', spl:'General Physician', exp:'6 yrs', rating:'4.7', online:false, lang:'Telugu, Hindi', fee:'Free', img:'👩‍⚕️', available:'Offline', color:'#6b7280' },
    { name:'Dr. Suresh Reddy', spl:'Heart Specialist', exp:'15 yrs', rating:'4.9', online:true, lang:'English', fee:'₹100', img:'👨‍⚕️', available:'Available now', color:'#1d4ed8' },
  ]

  const filtered = doctors.filter(d => {
    if(filter==='All') return true
    if(filter==='Online') return d.online
    if(filter==='Free') return d.fee==='Free'
    return d.spl.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <div style={{ minHeight:'100vh', background:'#FFFEFB', maxWidth:430, margin:'0 auto', paddingBottom:90 }}>
      
      {/* Header */}
      <div style={{ background:'white', padding:'14px 16px', display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid #f3f4f6', position:'sticky', top:0, zIndex:10 }}>
        <button onClick={()=>nav(-1)} style={{ width:36, height:36, borderRadius:10, border:'none', background:'#f3f4f6', fontWeight:800, cursor:'pointer' }}>←</button>
        <div style={{ flex:1 }}>
          <h2 style={{ fontWeight:900, fontSize:16, color:'#111827' }}>Doctors</h2>
          <p style={{ fontSize:11, color:'#6b7280' }}>🟢 {doctors.filter(d=>d.online).length} online • Instant video consult</p>
        </div>
        <div style={{ width:36, height:36, background:'#f0fdf4', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid #dcfce7' }}>🔍</div>
      </div>

      {/* Filter Pills */}
      <div style={{ padding:'12px 16px', display:'flex', gap:8, overflowX:'auto' }}>
        {['All','Online','Pregnancy','Child','Free'].map(f=>(
          <button key={f} onClick={()=>setFilter(f)} style={{ 
            padding:'8px 16px', borderRadius:100, border: filter===f ? '1px solid #0B4D2E' : '1px solid #e5e7eb', 
            background: filter===f ? '#0B4D2E' : 'white',
            color: filter===f ? 'white' : '#374151',
            fontWeight:800, fontSize:11, whiteSpace:'nowrap', cursor:'pointer', transition:'all 0.2s'
          }}>{f}</button>
        ))}
      </div>

      {/* Top Banner */}
      <div style={{ margin:'0 16px', background:'#0B4D2E', borderRadius:14, padding:12, display:'flex', alignItems:'center', gap:10, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, #0B4D2E 0%, #14532d 100%)' }}></div>
        <div style={{ width:36, height:36, background:'white', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', position:'relative', zIndex:1, fontSize:18 }}>⚡</div>
        <div style={{ flex:1, position:'relative', zIndex:1 }}>
          <p style={{ fontWeight:900, fontSize:12, color:'white' }}>Instant Consultation</p>
          <p style={{ fontSize:10, color:'rgba(255,255,255,0.7)' }}>Avg wait 2 mins • Telugu support</p>
        </div>
        <span style={{ background:'#4ade80', color:'#052e16', fontSize:9, fontWeight:900, padding:'5px 10px', borderRadius:100, position:'relative', zIndex:1 }}>● LIVE</span>
      </div>

      {/* Doctor Cards - PREMIUM */}
      <div style={{ padding:'16px', display:'flex', flexDirection:'column', gap:12 }}>
        {filtered.map((d,i)=>(
          <div key={i} style={{ background:'white', borderRadius:20, padding:14, border:'1px solid #f3f4f6', boxShadow:'0 4px 16px rgba(0,0,0,0.04)', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, left:0, width:4, height:'100%', background: d.online? d.color : '#e5e7eb' }}></div>
            
            <div style={{ display:'flex', gap:12, paddingLeft:8 }}>
              <div style={{ width:56, height:56, background:'#f0fdf4', borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, position:'relative', border:'1px solid #dcfce7' }}>
                {d.img}
                <div style={{ position:'absolute', bottom:-2, right:-2, width:16, height:16, background: d.online? '#22c55e' : '#9ca3af', borderRadius:100, border:'2px solid white', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <div style={{ width:6, height:6, background:'white', borderRadius:100, animation: d.online? 'pulse 1.5s infinite' : 'none' }}></div>
                </div>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                  <div>
                    <p style={{ fontWeight:900, fontSize:13, color:'#111827' }}>{d.name}</p>
                    <p style={{ fontSize:11, color:d.color, fontWeight:800, marginTop:2 }}>{d.spl} • {d.exp}</p>
                    <div style={{ display:'flex', gap:6, marginTop:4, alignItems:'center' }}>
                      <span style={{ background:'#fefce8', color:'#a16207', fontSize:9, fontWeight:900, padding:'3px 7px', borderRadius:100, border:'1px solid #fef08a' }}>⭐ {d.rating}</span>
                      <span style={{ fontSize:10, color:'#6b7280' }}>🗣️ {d.lang}</span>
                    </div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <span style={{ background: d.online? '#f0fdf4' : '#f9fafb', color: d.online? '#15803d' : '#6b7280', fontSize:9, fontWeight:800, padding:'4px 8px', borderRadius:100, border:`1px solid ${d.online? '#dcfce7' : '#f3f4f6'}` }}>{d.available}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ display:'flex', gap:8, marginTop:14, paddingLeft:8 }}>
              <button style={{ flex:1, height:40, background:'#f9fafb', border:'1px solid #f3f4f6', borderRadius:12, fontWeight:800, fontSize:12, cursor:'pointer', color:'#111827' }}>💬 Chat Free</button>
              <button style={{ flex:1.3, height:40, background: d.online? '#111827' : '#e5e7eb', color: d.online? 'white' : '#9ca3af', border:'none', borderRadius:12, fontWeight:900, fontSize:12, cursor:'pointer', boxShadow: d.online? '0 4px 12px rgba(0,0,0,0.15)' : 'none' }}>📹 Video • {d.fee}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency */}
      <div style={{ margin:'0 16px', background:'#111827', borderRadius:16, padding:14, display:'flex', alignItems:'center', gap:12 }}>
        <div style={{ width:40, height:40, background:'#dc2626', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>🚨</div>
        <div style={{ flex:1 }}>
          <p style={{ fontWeight:900, fontSize:12, color:'white' }}>Emergency? Doctor not available?</p>
          <p style={{ fontSize:10, color:'rgba(255,255,255,0.6)', marginTop:2 }}>108 Ambulance in 15 mins • Free</p>
        </div>
        <button onClick={()=>nav('/emergency')} style={{ background:'white', color:'#111827', border:'none', padding:'9px 16px', borderRadius:100, fontWeight:900, fontSize:11, cursor:'pointer' }}>CALL 108</button>
      </div>

      <BottomNav />
      <style>{`@keyframes pulse{0%,100%{opacity:1} 50%{opacity:0.3}}`}</style>
    </div>
  )
}