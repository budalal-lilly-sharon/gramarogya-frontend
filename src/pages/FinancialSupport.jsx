import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function FinancialSupport(){
  const nav = useNavigate()
  return(
    <div style={{ minHeight:'100vh', background:'#eff6ff', paddingBottom:80, maxWidth:430, margin:'0 auto' }}>
      <div style={{ background:'white', padding:'16px', display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid #eee', position:'sticky', top:0 }}>
        <button onClick={()=>nav('/home')} style={{ width:36, height:36, background:'#f3f4f6', borderRadius:20, border:'none', fontWeight:900, cursor:'pointer' }}>←</button>
        <h2 style={{ fontWeight:900, fontSize:15 }}>Government Schemes</h2>
      </div>

      <div style={{ padding:16, display:'flex', flexDirection:'column', gap:12 }}>
        {[
          { title:'YSR Aarogyasri', desc:'Free medical treatment up to ₹5 Lakhs at network hospitals', status:'Eligible', color:'#dcfce7', statusColor:'#16a34a', icon:'🏥' },
          { title:'JSY - Janani Suraksha Yojana', desc:'₹1400 cash assistance for pregnancy care and delivery', status:'Applied', color:'#fef3c7', statusColor:'#d97706', icon:'🤰' },
          { title:'PM Matru Vandana Yojana', desc:'₹5000 financial support for first child birth', status:'Eligible', color:'#dcfce7', statusColor:'#16a34a', icon:'👶' },
        ].map(s=>
          <div key={s.title} style={{ background:'white', padding:16, borderRadius:16, border:'1px solid #e5e7eb' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                <div style={{ width:36, height:36, background:'#f0f9ff', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center' }}>{s.icon}</div>
                <p style={{ fontWeight:800, fontSize:13 }}>{s.title}</p>
              </div>
              <span style={{ background:s.color, color:s.statusColor, padding:'4px 10px', borderRadius:20, fontSize:10, fontWeight:800 }}>{s.status}</span>
            </div>
            <p style={{ fontSize:11, color:'#6b7280', marginTop:10, lineHeight:1.5 }}>{s.desc}</p>
            <button style={{ marginTop:12, background:'#0B4D2E', color:'white', padding:'10px 16px', borderRadius:10, fontSize:11, fontWeight:800, border:'none', cursor:'pointer', width:'100%' }}>Check Eligibility & Apply</button>
          </div>
        )}
      </div>

      <BottomNav/>
    </div>
  )
}