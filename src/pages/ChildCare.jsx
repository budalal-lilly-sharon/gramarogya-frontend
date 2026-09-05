import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Childcare() {
  const nav = useNavigate()
  const [tab, setTab] = useState('food')

  const data = {
    food: {
      title: 'BABY FOOD BY AGE',
      color:'#16a34a',
      items: [
        { age:'0-6 Months', eng:'ONLY Breast Milk', desc:'No water, no cow milk, no honey - Only mother milk for 6 months', icon:'🤱' },
        { age:'6-12 Months', eng:'Dal Water, Mashed Banana, Rice Porridge', desc:'Soft, mashed, less salt and sugar', icon:'🍌' },
        { age:'1-3 Years', eng:'Idli, Upma, Egg, Curd Rice, Fruits', desc:'3 times solid food + 2 times milk daily', icon:'🍚' },
        { age:'3-5 Years', eng:'All Home Food - Dal, Vegetables, Roti, Milk', desc:'Avoid junk food, chocolate, cold drinks', icon:'🥗' },
        { age:'IMPORTANT', eng:'AVOID: Honey before 1 year, Salt/Sugar before 6 months', desc:'Can cause serious infection', danger:true, icon:'❌' },
      ]
    },
    vaccine: {
      title:'VACCINATION SCHEDULE',
      color:'#2563eb',
      items: [
        { age:'At Birth', eng:'BCG, OPV, Hepatitis B', desc:'Given at Govt hospital free of cost', icon:'💉' },
        { age:'6 Weeks', eng:'Pentavalent + Rotavirus', desc:'Fever may come - Normal side effect', icon:'💉' },
        { age:'10 & 14 Weeks', eng:'2nd & 3rd Dose Pentavalent', desc:'Do not miss any dose', icon:'💉' },
        { age:'9-12 Months', eng:'Measles, Vitamin A', desc:'Very important for brain development', icon:'💉' },
        { age:'1.5 Years & 5 Years', eng:'Booster Doses', desc:'Carry vaccination card to Anganwadi', icon:'📋' },
      ]
    },
    care: {
      title:'DAILY CARE ROUTINE',
      color:'#9333ea',
      items: [
        { age:'Bathing', eng:'Daily Bath with Lukewarm Water', desc:'Use mild baby soap, no cold water', icon:'🛁' },
        { age:'Massage', eng:'Oil Massage 4 Times a Week', desc:'Coconut oil helps strengthen bones', icon:'💆' },
        { age:'Sleep', eng:'12-16 Hours Sleep Required', desc:'Keep room quiet, no loud TV', icon:'😴' },
        { age:'Hygiene', eng:'Cut Nails Weekly, Wash Hands', desc:'Prevents infection and illness', icon:'✋' },
      ]
    },
    danger: {
      title:'DANGER SIGNS - CALL 108 IMMEDIATELY',
      color:'#dc2626',
      items: [
        { age:'FEVER', eng:'High Fever > 3 Days, Not Drinking Milk', desc:'Go to hospital immediately', danger:true, icon:'🌡️' },
        { age:'BREATHING', eng:'Fast Breathing, Chest Indrawing', desc:'Sign of Pneumonia', danger:true, icon:'😮‍💨' },
        { age:'DIARRHEA', eng:'Loose Motions > 6 Times, No Urine for 6 Hours', desc:'Dehydration - Give ORS', danger:true, icon:'💧' },
        { age:'CRITICAL', eng:'Continuous Crying, Fits, Blue Lips', desc:'Call 108 NOW - Emergency', danger:true, icon:'🚨' },
      ]
    }
  }

  const current = data[tab]

  return (
    <div style={{ minHeight:'100vh', background:'#f0fdf4', paddingBottom:30 }}>
      <div style={{ background:'white', padding:'12px 16px', display:'flex', alignItems:'center', gap:12, position:'sticky', top:0, zIndex:10, borderBottom:'1px solid #eee' }}>
        <button onClick={()=>nav(-1)} style={{ width:36, height:36, background:'#f3f4f6', borderRadius:20, border:'none', fontWeight:900 }}>←</button>
        <div>
          <p style={{ fontWeight:900, fontSize:14, color:'#15803d' }}>CHILD CARE</p>
          <p style={{ fontSize:10, color:'#6b7280' }}>0 to 5 Years - Healthy Future</p>
        </div>
      </div>

      <div style={{ margin:16, background:'white', borderRadius:16, padding:14, display:'flex', gap:12, border:'1px solid #bbf7d0' }}>
        <div style={{ fontSize:40 }}>👶</div>
        <div style={{ flex:1 }}>
          <p style={{ fontWeight:900, fontSize:13 }}>Monthly Weight Check</p>
          <p style={{ fontSize:11, color:'#6b7280', marginTop:4 }}>Normal: Birth 2.5kg → 1yr 9kg → 5yr 18kg. Visit Anganwadi monthly.</p>
        </div>
        <button onClick={()=>window.location.href='tel:104'} style={{ background:'#16a34a', color:'white', border:'none', padding:'8px 12px', borderRadius:10, fontWeight:800, fontSize:11, height:36, alignSelf:'center' }}>104</button>
      </div>

      <div style={{ display:'flex', gap:8, padding:'0 16px', overflowX:'auto' }}>
        {[
          { id:'food', label:'FOOD', icon:'🍲' },
          { id:'vaccine', label:'VACCINE', icon:'💉' },
          { id:'care', label:'CARE', icon:'🧼' },
          { id:'danger', label:'DANGER', icon:'🚨' },
        ].map(t => (
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            minWidth:70, padding:'10px 8px', borderRadius:12, border: tab===t.id? `2px solid ${current.color}` : '1px solid #e5e7eb',
            background: tab===t.id? current.color : 'white', color: tab===t.id? 'white' : '#374151',
            fontWeight:800, fontSize:11
          }}>
            <span style={{ fontSize:16, display:'block' }}>{t.icon}</span>{t.label}
          </button>
        ))}
      </div>

      <div style={{ margin:16 }}>
        <h2 style={{ fontWeight:900, fontSize:14, color:current.color }}>{current.title}</h2>
        <div style={{ marginTop:12, display:'flex', flexDirection:'column', gap:10 }}>
          {current.items.map((it,i)=>(
            <div key={i} style={{ background:'white', borderRadius:14, padding:12, display:'flex', gap:10, border: it.danger? '1.5px solid #fca5a5' : '1px solid #eee', borderLeft:`4px solid ${it.danger? '#ef4444' : current.color}` }}>
              <div style={{ fontSize:22 }}>{it.icon}</div>
              <div style={{ flex:1 }}>
                <p style={{ fontWeight:800, fontSize:10, color:'#6b7280' }}>{it.age}</p>
                <p style={{ fontWeight:800, fontSize:12 }}>{it.eng}</p>
                <p style={{ fontSize:10, color:'#6b7280', marginTop:2 }}>{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ margin:16, background:'#fffbeb', borderRadius:14, padding:14, border:'1px solid #fde68a' }}>
        <p style={{ fontWeight:900, fontSize:12 }}>💧 How to Make ORS at Home</p>
        <p style={{ fontSize:11, marginTop:6 }}>1 litre boiled water + 6 spoons sugar + 1/2 spoon salt. Mix well and give to child.</p>
      </div>

      <div style={{ margin:16, display:'flex', gap:8 }}>
        <button onClick={()=>window.location.href='tel:108'} style={{ flex:1, background:'#dc2626', color:'white', border:'none', padding:12, borderRadius:12, fontWeight:900 }}>CALL 108 EMERGENCY</button>
        <button onClick={()=>window.location.href='tel:104'} style={{ flex:1, background:'white', border:'1px solid #16a34a', color:'#16a34a', padding:12, borderRadius:12, fontWeight:900 }}>CALL 104 ADVICE</button>
      </div>
    </div>
  )
}