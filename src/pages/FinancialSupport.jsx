import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BottomNav from '../components/BottomNav'
import useAutoSpeak from '../hooks/useAutoSpeak'

export default function FinancialSupport(){
  const nav = useNavigate()
  const [selected, setSelected] = useState(null)
  const [showEligible, setShowEligible] = useState(false)
  useAutoSpeak('Government schemes. Check eligibility and apply.')

  const schemes = [
    { 
      id:1, title:'YSR Aarogyasri', amount:'₹5 Lakhs FREE', 
      desc:'Free medical treatment at network hospitals', 
      icon:'🏥', color:'#0B4D2E', status:'Eligible', statusColor:'#16a34a', bg:'#dcfce7',
      eligibility:['White Ration Card must', 'Annual income < ₹5 Lakhs', 'AP Resident only', 'Aadhaar linked'],
      docs:['Ration Card', 'Aadhaar Card', 'Income Certificate'],
      benefits:['Free surgery', 'Free medicines', 'Rs 225 per day food', 'Follow-up free']
    },
    { 
      id:2, title:'JSY - Janani Suraksha Yojana', amount:'₹1400 Cash', 
      desc:'Cash assistance for pregnancy care and delivery', 
      icon:'🤰', color:'#a16207', status:'Applied', statusColor:'#d97706', bg:'#fef3c7',
      eligibility:['BPL Family', 'Age >19 years', 'First 2 deliveries only', 'Govt hospital delivery'],
      docs:['Mother Aadhaar', 'Bank Passbook', 'ANC Card'],
      benefits:['Rs 1400 direct to bank', 'Free delivery', 'Free transport', 'Child vaccine free']
    },
    { 
      id:3, title:'PM Matru Vandana Yojana', amount:'₹5000 Support', 
      desc:'Financial support for first child birth', 
      icon:'👶', color:'#7c3aed', status:'Eligible', statusColor:'#16a34a', bg:'#dcfce7',
      eligibility:['First child only', 'Age 19+ years', 'Aadhaar mandatory', 'Bank account needed'],
      docs:['Aadhaar', 'Bank Account', 'MCP Card'],
      benefits:['5000 in 3 installments', 'Nutrition support', 'Free checkups']
    },
  ]

  const checkEligibility = (s) => {
    setSelected(s)
    setShowEligible(true)
  }

  return(
    <div style={{ minHeight:'100vh', background:'#f8fafc', paddingBottom:90, maxWidth:430, margin:'0 auto', position:'relative' }}>
      <div style={{ background:'white', padding:'14px 16px', display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid #eee', position:'sticky', top:0, zIndex:10 }}>
        <button onClick={()=>nav('/home')} style={{ width:36, height:36, background:'#f3f4f6', borderRadius:20, border:'none', fontWeight:900, cursor:'pointer' }}>←</button>
        <div>
          <h2 style={{ fontWeight:900, fontSize:15 }}>Government Schemes</h2>
          <p style={{ fontSize:10, color:'#6b7280' }}>100% FREE • Govt of AP Verified</p>
        </div>
        <span style={{ marginLeft:'auto', background:'#0B4D2E', color:'white', fontSize:8, fontWeight:900, padding:'5px 10px', borderRadius:100 }}>3 SCHEMES</span>
      </div>

      <div style={{ margin:16, background:'linear-gradient(135deg, #0B4D2E 0%, #052e16 100%)', borderRadius:18, padding:14, color:'white', display:'flex', gap:12, alignItems:'center' }}>
        <div style={{ width:44, height:44, background:'white', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>💰</div>
        <div><p style={{ fontWeight:900, fontSize:13 }}>You are eligible for 2 schemes!</p><p style={{ fontSize:10, opacity:0.8, marginTop:2 }}>Total benefits worth ₹5,06,400 • Apply now</p></div>
      </div>

      <div style={{ padding:'0 16px', display:'flex', flexDirection:'column', gap:12 }}>
        {schemes.map(s=>
          <div key={s.id} style={{ background:'white', padding:16, borderRadius:18, border:'1px solid #e5e7eb', boxShadow:'0 2px 12px rgba(0,0,0,0.04)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                <div style={{ width:40, height:40, background:'#f0fdf4', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>{s.icon}</div>
                <div><p style={{ fontWeight:900, fontSize:13 }}>{s.title}</p><p style={{ fontSize:10, color:s.color, fontWeight:800, marginTop:1 }}>{s.amount}</p></div>
              </div>
              <span style={{ background:s.bg, color:s.statusColor, padding:'4px 10px', borderRadius:20, fontSize:9, fontWeight:900 }}>{s.status}</span>
            </div>
            <p style={{ fontSize:11, color:'#6b7280', marginTop:10, lineHeight:1.5 }}>{s.desc}</p>
            
            {/* Eligibility preview */}
            <div style={{ marginTop:10, background:'#f9fafb', borderRadius:10, padding:10 }}>
              <p style={{ fontSize:9, fontWeight:900, letterSpacing:1, color:'#374151' }}>✓ ELIGIBILITY:</p>
              <div style={{ marginTop:6, display:'flex', flexWrap:'wrap', gap:6 }}>
                {s.eligibility.slice(0,2).map(e=><span key={e} style={{ fontSize:9, background:'white', border:'1px solid #e5e7eb', padding:'3px 8px', borderRadius:20 }}>{e}</span>)}
                <span style={{ fontSize:9, color:'#6b7280' }}>+{s.eligibility.length-2} more</span>
              </div>
            </div>

            <button onClick={()=>checkEligibility(s)} style={{ marginTop:12, background:'#0B4D2E', color:'white', padding:'12px 16px', borderRadius:12, fontSize:11, fontWeight:900, border:'none', cursor:'pointer', width:'100%' }}>Check Full Eligibility & Apply →</button>
          </div>
        )}
      </div>

      {/* PRO LEVEL MODAL */}
      {showEligible && selected && (
        <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', backdropFilter:'blur(8px)', zIndex:50, display:'flex', alignItems:'flex-end', justifyContent:'center' }}>
          <div style={{ background:'white', width:'100%', maxWidth:430, borderTopLeftRadius:28, borderTopRightRadius:28, maxHeight:'85vh', overflowY:'auto', padding:20 }}>
            <div style={{ width:40, height:4, background:'#e5e7eb', borderRadius:10, margin:'0 auto 16px' }}></div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                <div style={{ width:44, height:44, background:'#f0fdf4', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22 }}>{selected.icon}</div>
                <div><p style={{ fontWeight:900, fontSize:14 }}>{selected.title}</p><p style={{ fontSize:11, color:'#16a34a', fontWeight:800 }}>{selected.amount} • You are Eligible ✅</p></div>
              </div>
              <button onClick={()=>setShowEligible(false)} style={{ width:32, height:32, background:'#f3f4f6', borderRadius:100, border:'none', fontWeight:900, cursor:'pointer' }}>✕</button>
            </div>

            <div style={{ marginTop:18 }}>
              <p style={{ fontWeight:900, fontSize:12 }}>📋 Eligibility Criteria:</p>
              <div style={{ marginTop:10, display:'flex', flexDirection:'column', gap:8 }}>
                {selected.eligibility.map(e=><div key={e} style={{ display:'flex', gap:8, alignItems:'center', background:'#f0fdf4', padding:'8px 12px', borderRadius:10 }}><span style={{ color:'#16a34a', fontWeight:900 }}>✓</span><span style={{ fontSize:11, fontWeight:600 }}>{e}</span></div>)}
              </div>
            </div>

            <div style={{ marginTop:16 }}>
              <p style={{ fontWeight:900, fontSize:12 }}>📄 Documents Needed:</p>
              <div style={{ marginTop:8, display:'flex', gap:8, flexWrap:'wrap' }}>
                {selected.docs.map(d=><span key={d} style={{ fontSize:10, background:'#eff6ff', border:'1px solid #bfdbfe', padding:'6px 12px', borderRadius:100, fontWeight:700 }}>📄 {d}</span>)}
              </div>
            </div>

            <div style={{ marginTop:16 }}>
              <p style={{ fontWeight:900, fontSize:12 }}>🎁 Benefits You Get:</p>
              <div style={{ marginTop:8, display:'flex', flexDirection:'column', gap:6 }}>
                {selected.benefits.map(b=><div key={b} style={{ display:'flex', gap:8 }}><span style={{ color:'#7c3aed' }}>•</span><span style={{ fontSize:11 }}>{b}</span></div>)}
              </div>
            </div>

            <div style={{ marginTop:20, display:'flex', gap:10 }}>
              <button onClick={()=>setShowEligible(false)} style={{ flex:1, height:48, background:'#f3f4f6', border:'none', borderRadius:12, fontWeight:800, fontSize:13, cursor:'pointer' }}>Close</button>
              <button onClick={()=>{ alert('Application Submitted! Ration card verified ✅ You will get SMS soon'); setShowEligible(false) }} style={{ flex:2, height:48, background:'#0B4D2E', color:'white', border:'none', borderRadius:12, fontWeight:900, fontSize:13, cursor:'pointer' }}>Apply Now • FREE →</button>
            </div>
            <p style={{ textAlign:'center', fontSize:9, color:'#9ca3af', marginTop:10 }}>🔒 Govt Verified • No Fees • Direct Bank Transfer</p>
          </div>
        </div>
      )}

      <BottomNav/>
    </div>
  )
}