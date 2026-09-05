import { useNavigate, useLocation } from 'react-router-dom'

export default function BottomNav() {
  const nav = useNavigate()
  const loc = useLocation()
  const path = loc.pathname

  const tabs = [
    { id:'home', label:'Home', icon:'🏠', route:'/home' },
    { id:'doctors', label:'Doctors', icon:'👨‍⚕️', route:'/doctors' },
    { id:'hospitals', label:'Hospitals', icon:'🏥', route:'/nearby' },
    { id:'pregnancy', label:'Mother', icon:'🤰', route:'/pregnancy' },
  ]

  const isEmergency = path==='/emergency' || path==='/108'

  return (
    <div style={{ position:'fixed', bottom:0, left:'50%', transform:'translateX(-50%)', width:'100%', maxWidth:430, zIndex:100, padding:'0 12px 12px', pointerEvents:'none' }}>
      <div style={{ 
        background:'rgba(255,255,255,0.92)', backdropFilter:'blur(20px)', 
        border:'1px solid rgba(0,0,0,0.06)', borderRadius:20, 
        display:'flex', alignItems:'center', justifyContent:'space-around', 
        padding:'8px 8px', boxShadow:'0 10px 40px rgba(0,0,0,0.12)',
        pointerEvents:'auto'
      }}>
        {tabs.map(t => {
          const active = path===t.route || (t.route==='/nearby' && (path==='/nearby' || path==='/hospitals'))
          return (
            <button key={t.id} onClick={()=>nav(t.route)} style={{
              flex:1, height:48, border:'none', borderRadius:14, cursor:'pointer',
              background: active? '#0B4D2E' : 'transparent',
              color: active? 'white' : '#6b7280',
              display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:2,
              transition:'all 0.2s'
            }}>
              <span style={{ fontSize:18 }}>{t.icon}</span>
              <span style={{ fontSize:9, fontWeight:800, letterSpacing:0.3 }}>{t.label}</span>
            </button>
          )
        })}
        
        {/* 108 Emergency FAB */}
        <button onClick={()=>nav('/emergency')} style={{
          width:56, height:56, borderRadius:16, border:'none', cursor:'pointer',
          background: isEmergency? '#7f1d1d' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          color:'white', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
          boxShadow: isEmergency? 'none' : '0 6px 20px rgba(239,68,68,0.4)',
          transform: isEmergency? 'scale(0.92)' : 'scale(1)',
          marginLeft:4
        }}>
          <span style={{ fontSize:16, fontWeight:900 }}>108</span>
          <span style={{ fontSize:7, fontWeight:900, letterSpacing:1 }}>SOS</span>
        </button>
      </div>
    </div>
  )
}