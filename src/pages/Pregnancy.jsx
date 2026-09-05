import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BottomNav from '../components/BottomNav'

export default function Pregnancy() {
  const nav = useNavigate()
  const [tab, setTab] = useState('food')

  const data = {
    food: {
      title: 'HEALTHY FOOD', color: '#0B4D2E', light:'#f0fdf4',
      items: [
        { icon:'🥛', title:'Milk, Curd, Paneer daily', desc:'For baby bone growth and calcium. 2 glasses milk daily.', tag:'Must Daily' },
        { icon:'🥚', title:'Eggs, Dal, Chicken, Fish', desc:'Rich protein for healthy baby weight gain.', tag:'Protein' },
        { icon:'🥦', title:'Green Leafy Vegetables', desc:'Spinach, Fenugreek - Rich iron, prevents anemia.', tag:'Iron' },
        { icon:'🍎', title:'Fruits - Apple, Guava', desc:'Vitamins & immunity booster for mother.', tag:'Vitamins' },
        { icon:'🥜', title:'Nuts - Groundnut, Almonds', desc:'Healthy fats for baby brain development.', tag:'Brain' },
        { icon:'⛔', title:'AVOID: Papaya, Pineapple, Alcohol', desc:'Can cause risk in early months. Strictly avoid.', danger:true },
      ]
    },
    medicine: {
      title: 'MEDICINES', color: '#2563eb', light:'#eff6ff',
      items: [
        { icon:'💊', title:'Folic Acid - First 3 months MUST', desc:'Prevents birth defects. Take daily without fail.', tag:'Important' },
        { icon:'💊', title:'Iron + Calcium - From 4th month', desc:'Take at different times for best absorption.', tag:'4th Month+' },
        { icon:'💉', title:'TT Injections - 2 doses', desc:'At 5th and 7th month for protection.', tag:'Vaccine' },
        { icon:'⚠️', title:'No medicine without doctor advice', desc:'Even for cold/fever - always ask doctor first.', danger:true },
      ]
    },
    exercise: {
      title: 'SAFE CARE', color: '#9333ea', light:'#faf5ff',
      items: [
        { icon:'🚶‍♀️', title:'Walk 20-30 min daily', desc:'Improves blood flow & helps easy delivery.', tag:'Daily' },
        { icon:'🧘‍♀️', title:'Deep Breathing & Meditation', desc:'Reduces stress, controls BP.', tag:'Relax' },
        { icon:'🪑', title:'Butterfly Pose', desc:'Helps normal delivery. Ask ASHA worker.', tag:'Pelvic' },
        { icon:'😴', title:'Sleep on Left Side 8 Hours', desc:'Best for baby blood supply & oxygen.', tag:'Sleep' },
        { icon:'⛔', title:'AVOID: Heavy lifting, High heels', desc:'Risk of miscarriage. Take rest.', danger:true },
      ]
    },
    visit: {
      title: 'HOSPITAL VISITS', color: '#dc2626', light:'#fef2f2',
      items: [
        { icon:'📅', title:'Month 1-3: Once a month', desc:'First checkup, blood tests, weight check.', tag:'Month 1-3' },
        { icon:'📅', title:'Month 4-6: Twice a month', desc:'Baby growth scan - Ultrasound.', tag:'Month 4-6' },
        { icon:'📅', title:'Month 7-8: Every 15 days', desc:'BP, Sugar, Weight monitoring.', tag:'Month 7-8' },
        { icon:'📅', title:'Month 9: Every Week', desc:'Final delivery preparation.', tag:'Month 9' },
        { icon:'🚨', title:'Go IMMEDIATELY if: Bleeding, No movement', desc:'Call 108 ambulance immediately. Do not wait.', danger:true },
      ]
    }
  }

  const current = data[tab]

  return (
    <div style={{ minHeight:'100vh', background:'#FFFEFB', paddingBottom:90, maxWidth:430, margin:'0 auto' }}>

      {/* Header */}
      <div style={{ background:'white', padding:'12px 16px', display:'flex', alignItems:'center', gap:12, position:'sticky', top:0, zIndex:10, borderBottom:'1px solid #f3f4f6' }}>
        <button onClick={()=>nav(-1)} style={{ width:36, height:36, background:'#f3f4f6', borderRadius:10, border:'none', fontWeight:900, cursor:'pointer' }}>←</button>
        <div style={{ flex:1 }}>
          <p style={{ fontWeight:900, fontSize:15, color:'#111827' }}>Pregnancy Care</p>
          <p style={{ fontSize:11, color:'#6b7280' }}>🤰 Healthy Mother & Baby</p>
        </div>
        <button onClick={()=>window.location.href='tel:104'} style={{ background:'#0B4D2E', color:'white', border:'none', padding:'8px 14px', borderRadius:100, fontWeight:800, fontSize:11, cursor:'pointer' }}>104 Help</button>
      </div>

      {/* Hero */}
      <div style={{ margin:16, background:'linear-gradient(135deg, #0B4D2E 0%, #14532d 100%)', borderRadius:20, padding:16, display:'flex', gap:14, alignItems:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-30, right:-30, width:120, height:120, background:'rgba(255,255,255,0.08)', borderRadius:100 }}></div>
        <div style={{ width:52, height:52, background:'white', borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, position:'relative', zIndex:1 }}>🤰</div>
        <div style={{ flex:1, position:'relative', zIndex:1 }}>
          <p style={{ fontWeight:900, fontSize:14, color:'white' }}>9 Months Journey</p>
          <p style={{ fontSize:11, color:'rgba(255,255,255,0.7)', marginTop:2 }}>Week-by-week care for safe delivery</p>
          <div style={{ marginTop:8, display:'flex', gap:6 }}>
            <span style={{ background:'rgba(255,255,255,0.15)', color:'#4ade80', fontSize:9, fontWeight:800, padding:'4px 8px', borderRadius:100, border:'1px solid rgba(74,222,128,0.2)' }}>ASHA Supported</span>
            <span style={{ background:'white', color:'#0B4D2E', fontSize:9, fontWeight:800, padding:'4px 8px', borderRadius:100 }}>Govt Free</span>
          </div>
        </div>
      </div>

      {/* Week Progress */}
      <div style={{ margin:'0 16px', background:'white', borderRadius:16, padding:14, border:'1px solid #f3f4f6', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div>
          <p style={{ fontSize:10, fontWeight:800, color:'#6b7280', letterSpacing:1 }}>CURRENT WEEK</p>
          <p style={{ fontWeight:900, fontSize:16, marginTop:2 }}>Week 22 • 2nd Trimester</p>
        </div>
        <div style={{ textAlign:'right' }}>
          <div style={{ width:80, height:6, background:'#f3f4f6', borderRadius:100, overflow:'hidden' }}><div style={{ width:'55%', height:'100%', background:'#0B4D2E', borderRadius:100 }}></div></div>
          <p style={{ fontSize:10, color:'#6b7280', marginTop:4, fontWeight:700 }}>55% Complete</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display:'flex', gap:8, padding:'16px', overflowX:'auto' }}>
        {[
          { id:'food', label:'FOOD', icon:'🍲' },
          { id:'medicine', label:'MEDICINE', icon:'💊' },
          { id:'exercise', label:'CARE', icon:'🧘' },
          { id:'visit', label:'VISITS', icon:'🏥' },
        ].map(t => (
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            minWidth:74, height:68, borderRadius:16, border: tab===t.id? `1.5px solid ${data[t.id].color}` : '1.5px solid #f3f4f6',
            background: tab===t.id? data[t.id].light : 'white', color: tab===t.id? data[t.id].color : '#6b7280',
            fontWeight:900, fontSize:10, cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:4, transition:'all 0.2s'
          }}>
            <span style={{ fontSize:18 }}>{t.icon}</span>{t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ margin:'0 16px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:4, height:16, background:current.color, borderRadius:10 }}></div>
          <h2 style={{ fontWeight:900, fontSize:13, color: current.color, letterSpacing:0.5 }}>{current.title}</h2>
        </div>
        <div style={{ marginTop:12, display:'flex', flexDirection:'column', gap:10 }}>
          {current.items.map((it,i)=>(
            <div key={i} style={{
              background:'white', borderRadius:16, padding:14, display:'flex', gap:12,
              border: it.danger? '1.5px solid #fecaca' : '1px solid #f3f4f6',
              borderLeft: `4px solid ${it.danger? '#ef4444' : current.color}`,
              boxShadow: it.danger? '0 4px 16px rgba(239,68,68,0.08)' : '0 2px 10px rgba(0,0,0,0.02)'
            }}>
              <div style={{ width:38, height:38, background: it.danger? '#fef2f2' : current.light, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{it.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', gap:6, alignItems:'center' }}>
                  <p style={{ fontWeight:800, fontSize:12, color:'#111827', flex:1 }}>{it.title}</p>
                  {it.tag &&!it.danger && <span style={{ background:'#f9fafb', border:'1px solid #f3f4f6', fontSize:8, fontWeight:800, padding:'2px 6px', borderRadius:100, color:'#6b7280' }}>{it.tag}</span>}
                </div>
                <p style={{ fontSize:11, color:'#6b7280', marginTop:4, lineHeight:1.4 }}>{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency */}
      <div style={{ margin:16, background:'#111827', borderRadius:18, padding:14, display:'flex', gap:12, alignItems:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 100% 0%, #dc2626 0%, transparent 50%)', opacity:0.4 }}></div>
        <div style={{ width:40, height:40, background:'#dc2626', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', position:'relative', zIndex:1, fontSize:20 }}>🚨</div>
        <div style={{ flex:1, position:'relative', zIndex:1 }}>
          <p style={{ fontWeight:900, fontSize:12, color:'white' }}>Emergency Signs?</p>
          <p style={{ fontSize:10, color:'rgba(255,255,255,0.6)', marginTop:2, lineHeight:1.3 }}>Bleeding, No movement, Headache → Call now</p>
        </div>
        <div style={{ display:'flex', gap:6, position:'relative', zIndex:1 }}>
          <button onClick={()=>window.location.href='tel:108'} style={{ background:'#dc2626', color:'white', border:'none', padding:'10px 14px', borderRadius:12, fontWeight:900, fontSize:11, cursor:'pointer' }}>108</button>
          <button onClick={()=>window.location.href='tel:104'} style={{ background:'white', color:'#111827', border:'none', padding:'10px 14px', borderRadius:12, fontWeight:900, fontSize:11, cursor:'pointer' }}>104</button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}