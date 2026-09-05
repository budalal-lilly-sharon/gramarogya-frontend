import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BottomNav from '../components/BottomNav'

const hospitals = [
  { id:1, name:'Govt Area Hospital', type:'Government', dist:'0.9 km', time:'4 min', beds:'120 Beds', rating:'4.2', phone:'08647-222333', addr:'Court Road, Narasaraopet', services:['Emergency 24/7','Maternity','General'], color:'#16a34a', free:true, busy:'Low crowd' },
  { id:2, name:'Lakshmi Super Speciality', type:'Private', dist:'1.5 km', time:'6 min', beds:'80 Beds', rating:'4.5', phone:'9848000011', addr:'Guntur Road, NRT', services:['ICU','Cardiology','Gynecology'], color:'#2563eb', free:false, busy:'Medium' },
  { id:3, name:'PHC - Narasaraopet', type:'Government - PHC', dist:'2.1 km', time:'8 min', beds:'30 Beds', rating:'4.0', phone:'104', addr:'Kotappakonda Road', services:['Free Checkup','Vaccines','108'], color:'#16a34a', free:true, busy:'Low crowd' },
  { id:4, name:'Child Care Hospital', type:'Private - Children', dist:'1.2 km', time:'5 min', beds:'40 Beds', rating:'4.6', phone:'9848000012', addr:'Near Bus Stand', services:['Child Specialist','NICU','Vaccines'], color:'#f59e0b', free:false, busy:'High' },
  { id:5, name:'Aarogyasri Network Hospital', type:'Govt Scheme Hospital', dist:'3.0 km', time:'10 min', beds:'200 Beds', rating:'4.3', phone:'08647-224444', addr:'Vinukonda Road', services:['Free for BPL','Surgery','Aarogyasri'], color:'#9333ea', free:true, busy:'Low crowd' },
]

export default function Nearby() {
  const nav = useNavigate()
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = hospitals.filter(h => {
    const s = search.toLowerCase()
    const matchSearch = h.name.toLowerCase().includes(s)
    const matchFilter = filter==='All' || (filter==='Free' && h.free) || h.type.includes(filter)
    return matchSearch && matchFilter
  })

  return (
    <div style={{ minHeight:'100vh', background:'#FFFEFB', paddingBottom:90, maxWidth:430, margin:'0 auto' }}>
      
      {/* HEADER */}
      <div style={{ background:'white', padding:'12px 16px', position:'sticky', top:0, zIndex:10, borderBottom:'1px solid #f3f4f6' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <button onClick={()=>nav(-1)} style={{ width:36, height:36, background:'#f3f4f6', borderRadius:10, border:'none', fontWeight:900, cursor:'pointer' }}>←</button>
          <div style={{ flex:1 }}>
            <p style={{ fontWeight:900, fontSize:15, color:'#111827' }}>Nearby Hospitals</p>
            <p style={{ fontSize:11, color:'#6b7280' }}>📍 Chittoor • {filtered.length} found • 5km radius</p>
          </div>
          <button onClick={()=>window.location.href='tel:108'} style={{ background:'#dc2626', color:'white', border:'none', padding:'8px 14px', borderRadius:100, fontWeight:900, fontSize:11, cursor:'pointer', boxShadow:'0 4px 12px rgba(239,68,68,0.3)' }}>108 SOS</button>
        </div>

        {/* Search */}
        <div style={{ marginTop:12, display:'flex', gap:8 }}>
          <div style={{ flex:1, background:'#f9fafb', border:'1.5px solid #f3f4f6', borderRadius:14, padding:'0 14px', height:44, display:'flex', gap:8, alignItems:'center' }}>
            <span style={{ fontSize:14 }}>🔍</span>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search hospital, doctor, service..." style={{ border:'none', background:'transparent', outline:'none', flex:1, fontSize:13, fontWeight:500 }} />
          </div>
          <div style={{ width:44, height:44, background:'#f9fafb', border:'1.5px solid #f3f4f6', borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>🗺️</div>
        </div>

        {/* Filters */}
        <div style={{ marginTop:12, display:'flex', gap:8, overflowX:'auto', paddingBottom:2 }}>
          {['All','Free','Government','Private','Children'].map(f => (
            <button key={f} onClick={()=>setFilter(f)} style={{
              padding:'8px 14px', borderRadius:100, border: filter===f? '1px solid #0B4D2E':'1px solid #e5e7eb',
              background: filter===f? '#0B4D2E':'white', color: filter===f? 'white':'#374151',
              fontSize:11, fontWeight:800, whiteSpace:'nowrap', cursor:'pointer', transition:'all 0.2s'
            }}>{f}</button>
          ))}
        </div>
      </div>

      {/* MAP CARD - PREMIUM */}
      <div style={{ margin:16, background:'white', borderRadius:20, border:'1px solid #f3f4f6', overflow:'hidden', boxShadow:'0 4px 20px rgba(0,0,0,0.04)' }}>
        <div style={{ height:140, background:'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 50%, #f0fdf4 100%)', position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
          {/* Fake map pins */}
          <div style={{ position:'absolute', top:30, left:40, width:32, height:32, background:'white', borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 12px rgba(0,0,0,0.1)', fontSize:16 }}>🏥</div>
          <div style={{ position:'absolute', top:50, right:60, width:32, height:32, background:'#0B4D2E', borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 12px rgba(0,0,0,0.15)', fontSize:14, color:'white' }}>+</div>
          <div style={{ position:'absolute', bottom:30, left:80, width:28, height:28, background:'white', borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 12px rgba(0,0,0,0.1)' }}>🏥</div>
          <div style={{ textAlign:'center' }}>
            <div style={{ width:48, height:48, background:'#3b82f6', borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto', border:'3px solid white', boxShadow:'0 4px 16px rgba(59,130,246,0.4)' }}><span style={{ fontSize:20 }}>📍</span></div>
            <p style={{ fontWeight:900, fontSize:12, marginTop:8, color:'#111827' }}>You are here</p>
            <p style={{ fontSize:10, color:'#6b7280' }}>Narasaraopet Center</p>
          </div>
          <div style={{ position:'absolute', top:12, right:12, background:'rgba(0,0,0,0.75)', backdropFilter:'blur(8px)', color:'white', padding:'6px 10px', borderRadius:100, fontSize:10, fontWeight:800 }}>🗺️ 5 Nearby</div>
        </div>
        <div style={{ padding:12, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <p style={{ fontSize:11, color:'#6b7280', fontWeight:600 }}>🟢 All hospitals open now • Lowest wait: 4 mins</p>
          <button style={{ background:'#f3f4f6', border:'none', padding:'6px 12px', borderRadius:100, fontSize:10, fontWeight:800, cursor:'pointer' }}>View Map →</button>
        </div>
      </div>

      {/* Hospital Cards */}
      <div style={{ padding:'0 16px', display:'flex', flexDirection:'column', gap:12 }}>
        {filtered.map(h => (
          <div key={h.id} style={{ background:'white', borderRadius:20, padding:14, border:'1px solid #f3f4f6', boxShadow:'0 2px 12px rgba(0,0,0,0.03)', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, left:0, width:4, height:'100%', background:h.color }}></div>
            
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
              <div style={{ flex:1, paddingLeft:8 }}>
                <div style={{ display:'flex', gap:6, alignItems:'center', flexWrap:'wrap' }}>
                  <p style={{ fontWeight:900, fontSize:13, color:'#111827' }}>{h.name}</p>
                  {h.free && <span style={{ background:'#0B4D2E', color:'white', fontSize:8, fontWeight:900, padding:'3px 7px', borderRadius:100 }}>FREE</span>}
                  <span style={{ background:'#f3f4f6', color:'#6b7280', fontSize:8, fontWeight:800, padding:'3px 7px', borderRadius:100 }}>⭐ {h.rating}</span>
                </div>
                <p style={{ fontSize:11, color:'#6b7280', marginTop:4, fontWeight:500 }}>{h.type} • 🛏️ {h.beds} • <span style={{ color: h.busy==='Low crowd' ? '#16a34a' : h.busy==='Medium' ? '#f59e0b' : '#ef4444', fontWeight:800 }}>{h.busy}</span></p>
                <p style={{ fontSize:11, color:'#9ca3af', marginTop:3 }}>📍 {h.addr}</p>
              </div>
              <div style={{ textAlign:'right' }}>
                <p style={{ fontWeight:900, fontSize:15, color:'#0B4D2E' }}>{h.dist}</p>
                <p style={{ fontSize:10, color:'#6b7280', fontWeight:700 }}>{h.time} away</p>
                <div style={{ marginTop:6, width:36, height:36, background:'#f0fdf4', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, border:'1px solid #dcfce7' }}>🏥</div>
              </div>
            </div>

            <div style={{ display:'flex', gap:4, marginTop:10, paddingLeft:8, flexWrap:'wrap' }}>
              {h.services.map(s => <span key={s} style={{ background:'#f9fafb', border:'1px solid #f3f4f6', fontSize:9, padding:'4px 8px', borderRadius:100, fontWeight:700, color:'#374151' }}>{s}</span>)}
            </div>

            <div style={{ display:'flex', gap:8, marginTop:12, paddingLeft:8 }}>
              <button onClick={()=>window.location.href=`tel:${h.phone}`} style={{ flex:1, background:'#111827', color:'white', border:'none', padding:'11px', borderRadius:12, fontWeight:900, fontSize:12, cursor:'pointer' }}>📞 Call</button>
              <button onClick={()=>window.open(`https://www.google.com/maps/search/${h.name}+Narasaraopet`)} style={{ flex:1, background:'white', border:'1.5px solid #e5e7eb', color:'#111827', padding:'11px', borderRadius:12, fontWeight:800, fontSize:12, cursor:'pointer' }}>🧭 Direction</button>
              <button style={{ width:44, background:'#f0fdf4', border:'1px solid #dcfce7', borderRadius:12, fontSize:16, cursor:'pointer' }}>↗️</button>
            </div>
          </div>
        ))}
      </div>

      {/* Tip */}
      <div style={{ margin:16, background:'#0B4D2E', borderRadius:16, padding:14, display:'flex', gap:12, alignItems:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, #0B4D2E 0%, #14532d 100%)' }}></div>
        <div style={{ width:36, height:36, background:'rgba(255,255,255,0.15)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', position:'relative', zIndex:1, fontSize:18 }}>💡</div>
        <div style={{ flex:1, position:'relative', zIndex:1 }}>
          <p style={{ fontWeight:900, fontSize:11, color:'#4ade80' }}>FREE TIP FOR BPL FAMILIES</p>
          <p style={{ fontSize:11, color:'rgba(255,255,255,0.8)', marginTop:2, lineHeight:1.4 }}>Show BPL card - free surgery under Aarogyasri. Call 104 for guidance.</p>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}