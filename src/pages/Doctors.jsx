import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BottomNav from '../components/BottomNav'

export default function Doctors() {
  const nav = useNavigate()
  const [searchParams] = useSearchParams()
  const [filter, setFilter] = useState('All')
  const [userSymptom, setUserSymptom] = useState('')
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const s = searchParams.get('symptom') || localStorage.getItem('userSymptom') || ''
    const l = searchParams.get('lang') || localStorage.getItem('voiceLang') || 'en'
    setUserSymptom(s)
    // AUTO DETECT: Telugu letters OR telugu words OR lang=te
    const lower = s.toLowerCase()
    const hasTelugu = /[\u0C00-\u0C7F]/.test(s) || l === 'te' || lower.includes('jwaram') || lower.includes('జ్వరం') || lower.includes('daggu') || lower.includes('జలుబు') || lower.includes('tala') || lower.includes('తల')
    setLang(hasTelugu? 'te' : 'en')
  }, [searchParams])

  const isTelugu = lang === 'te'

  const doctors = [
    { name:'Dr. Priya Sharma', spl:'Pregnancy Specialist', spl_te:'గర్భధారణ నిపుణురాలు', exp:'8 yrs', rating:'4.9', online:true, lang:'Telugu, English', fee:'Free', fee_te:'ఉచితం', img:'👩‍⚕️', available:'Available now', available_te:'ఇప్పుడు అందుబాటులో', color:'#0B4D2E' },
    { name:'Dr. Ramesh Kumar', spl:'Child Specialist', spl_te:'పిల్లల వైద్య నిపుణుడు', exp:'12 yrs', rating:'4.8', online:true, lang:'Telugu', fee:'Free', fee_te:'ఉచితం', img:'👨‍⚕️', available:'In 5 mins', available_te:'5 నిమిషాల్లో', color:'#15803d' },
    { name:'Dr. Anjali Devi', spl:'General Physician', spl_te:'జనరల్ వైద్యురాలు', exp:'6 yrs', rating:'4.7', online:false, lang:'Telugu, Hindi', fee:'Free', fee_te:'ఉచితం', img:'👩‍⚕️', available:'Offline', available_te:'ఆఫ్‌లైన్', color:'#6b7280' },
    { name:'Dr. Suresh Reddy', spl:'Heart Specialist', spl_te:'గుండె నిపుణుడు', exp:'15 yrs', rating:'4.9', online:true, lang:'English', fee:'₹100', fee_te:'₹100', img:'👨‍⚕️', available:'Available now', available_te:'ఇప్పుడు అందుబాటులో', color:'#1d4ed8' },
  ]

  const filtered = doctors.filter(d => {
    if(filter==='All') return true
    if(filter==='Online') return d.online
    if(filter==='Free') return d.fee==='Free'
    return d.spl.toLowerCase().includes(filter.toLowerCase())
  })

  const getGuidance = () => {
    const s = userSymptom.toLowerCase()
    const te = isTelugu
    if (s.includes('jwaram') || s.includes('fever') || s.includes('జ్వరం')) {
      return {
        title: te? '🤒 జ్వరం గుర్తించబడింది' : '🤒 Fever Detected',
        tips: te? ['ఎక్కువ నీళ్లు తాగండి మరియు హైడ్రేటెడ్ గా ఉండండి', 'పూర్తిగా విశ్రాంతి తీసుకోండి, చల్లగాలికి దూరంగా ఉండండి', 'పారాసిటమాల్ వంటి మందుల గురించి డాక్టర్‌ను అడగండి'] : ['Drink plenty of water and stay hydrated', 'Take complete rest, avoid cold exposure', 'Ask doctor about common medicines like Paracetamol'],
        when: te? '102°F కంటే ఎక్కువ జ్వరం ఉంటే లేదా 2 రోజుల కంటే ఎక్కువ ఉంటే వెంటనే డాక్టర్‌ను సంప్రదించండి.' : 'If fever is above 102°F or lasts more than 2 days, consult doctor immediately.',
      }
    }
    if (s.includes('headache') || s.includes('tala') || s.includes('తల') || s.includes('head')) {
      return {
        title: te? '🤕 తలనొప్పి గుర్తించబడింది' : '🤕 Headache Detected',
        tips: te? ['చీకటి మరియు నిశ్శబ్ద గదిలో విశ్రాంతి తీసుకోండి', 'నీళ్లు ఎక్కువ తాగండి, ఫోన్ చూడటం తగ్గించండి', 'తలకు సున్నితంగా మసాజ్ చేయండి'] : ['Rest in a dark and quiet room', 'Drink water and reduce screen time', 'Light head massage can help'],
        when: te? '3 రోజుల కంటే ఎక్కువ తలనొప్పి ఉంటే వాంతులు లేదా మసక దృష్టి ఉంటే డాక్టర్‌ను కలవండి.' : 'If headache persists for more than 3 days or with vomiting or blurred vision, consult doctor.',
      }
    }
    if (s.includes('cough') || s.includes('cold') || s.includes('daggu') || s.includes('జలుబు')) {
      return {
        title: te? '🤧 జలుబు దగ్గు గుర్తించబడింది' : '🤧 Cough & Cold Detected',
        tips: te? ['రోజుకు రెండుసార్లు ఆవిరి పట్టండి', 'తేనెతో గోరువెచ్చని నీళ్లు తాగండి', 'దుమ్ము, చల్లని పానీయాలకు దూరంగా ఉండండి'] : ['Steam inhalation twice a day', 'Drink warm water with honey', 'Avoid dust and cold drinks'],
        when: te? '7 రోజుల కంటే ఎక్కువ దగ్గు ఉంటే లేదా ఛాతీ నొప్పి ఉంటే డాక్టర్‌ను కలవండి.' : 'If cough lasts more than 7 days or you have chest pain, consult doctor.',
      }
    }
    return {
      title: te? `🩺 లక్షణం: "${userSymptom}"` : `🩺 Symptom: "${userSymptom}"`,
      tips: te? ['సరైన సలహా కోసం మా ఆన్‌లైన్ డాక్టర్లను సంప్రదించండి', 'సొంతంగా మందులు వాడకండి', 'మీ పూర్తి వివరాలు డాక్టర్‌కు చెప్పండి'] : ['Please consult our online doctors for accurate advice', 'Avoid self-medication', 'Share your complete history with doctor'],
      when: te? 'లక్షణాలు పెరిగితే వెంటనే డాక్టర్‌ను సంప్రదించండి.' : 'If symptoms worsen, please consult doctor immediately.',
    }
  }

  const guidance = userSymptom? getGuidance() : null

  return (
    <div style={{ minHeight:'100vh', background:'#FFFEFB', maxWidth:430, margin:'0 auto', paddingBottom:90 }}>
      <div style={{ background:'white', padding:'14px 16px', display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid #f3f4f6', position:'sticky', top:0, zIndex:10 }}>
        <button onClick={()=>nav(-1)} style={{ width:36, height:36, borderRadius:10, border:'none', background:'#f3f4f6', fontWeight:800, cursor:'pointer' }}>←</button>
        <div style={{ flex:1 }}>
          <h2 style={{ fontWeight:900, fontSize:16, color:'#111827' }}>{isTelugu? 'వైద్యులు' : 'Doctors'}</h2>
          <p style={{ fontSize:11, color:'#6b7280' }}>🟢 {doctors.filter(d=>d.online).length} online • {isTelugu? 'తక్షణ వీడియో' : 'Instant video'}</p>
        </div>
        <div style={{ background: isTelugu? '#fef3c7':'#dbeafe', border:`1px solid ${isTelugu? '#fde68a':'#bfdbfe'}`, padding:'4px 8px', borderRadius:100, fontSize:10, fontWeight:900 }}>{isTelugu? 'తెలుగు':'EN'}</div>
      </div>

      {userSymptom && guidance && (
        <div style={{ margin:'12px 16px 0 16px', background: isTelugu? '#fffbeb' : '#eff6ff', border:`1.5px solid ${isTelugu? '#fde68a' : '#bfdbfe'}`, borderRadius:16, padding:12 }}>
          <p style={{ fontSize:11, fontWeight:800, color: isTelugu? '#92400e' : '#1e40af' }}>{isTelugu? '🎤 మీరు చెప్పింది:' : '🎤 YOU SAID:'} <span style={{ background: isTelugu? '#f59e0b':'#3b82f6', color:'white', padding:'2px 6px', borderRadius:99, fontSize:9, marginLeft:6 }}>{isTelugu? 'TELUGU' : 'ENGLISH'}</span></p>
          <p style={{ fontSize:13, fontWeight:900, color:'#111827', marginTop:2 }}>"{userSymptom}"</p>
          <div style={{ marginTop:10, background:'white', borderRadius:12, padding:10, border:`1px solid ${isTelugu? '#fef3c7':'#dbeafe'}` }}>
            <p style={{ fontWeight:900, fontSize:12 }}>{guidance.title}</p>
            <ul style={{ margin:'6px 0 0 16px', fontSize:11, color:'#374151' }}>
              {guidance.tips.map((t,i)=><li key={i}>{t}</li>)}
            </ul>
            <p style={{ fontSize:10, color:'#dc2626', fontWeight:700, marginTop:8 }}>⚠️ {guidance.when}</p>
            <p style={{ fontSize:9, color:'#6b7280', marginTop:8, fontStyle:'italic', lineHeight:1.4 }}>
              {isTelugu? 'ఈ సమాచారం అవగాహన కోసం మాత్రమే. మందుల మోతాదును డాక్టర్ మాత్రమే నిర్ణయిస్తారు. సొంతంగా మందులు వాడకండి.' : 'This information is for educational purposes only and is not medical advice. Medicine and injection dosage can only be decided by a qualified doctor. Please do not self-medicate.'}
            </p>
          </div>
          <button onClick={()=>{localStorage.removeItem('userSymptom'); localStorage.removeItem('voiceLang'); setUserSymptom(''); nav('/doctors')}} style={{ marginTop:10, fontSize:10, background:'#111827', color:'white', border:'none', padding:'6px 12px', borderRadius:100, fontWeight:800, cursor:'pointer' }}>{isTelugu? 'తొలగించు ✕' : 'Clear ✕'}</button>
        </div>
      )}

      <div style={{ padding:'12px 16px', display:'flex', gap:8, overflowX:'auto' }}>
        {['All','Online','Free'].map(f=>(
          <button key={f} onClick={()=>setFilter(f)} style={{ padding:'8px 16px', borderRadius:100, border: filter===f? '1px solid #0B4D2E' : '1px solid #e5e7eb', background: filter===f? '#0B4D2E' : 'white', color: filter===f? 'white' : '#374151', fontWeight:800, fontSize:11, whiteSpace:'nowrap', cursor:'pointer' }}>{f}</button>
        ))}
      </div>

      <div style={{ margin:'0 16px', background:'#0B4D2E', borderRadius:14, padding:12, display:'flex', alignItems:'center', gap:10 }}>
        <div style={{ width:36, height:36, background:'white', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>⚡</div>
        <div style={{ flex:1 }}>
          <p style={{ fontWeight:900, fontSize:12, color:'white' }}>{isTelugu? 'తక్షణ సంప్రదింపు' : 'Instant Consultation'}</p>
          <p style={{ fontSize:10, color:'rgba(255,255,255,0.7)' }}>{isTelugu? 'సగటు వేచి ఉండే సమయం 2 నిమిషాలు' : 'Avg wait 2 mins • English + Telugu support'}</p>
        </div>
        <span style={{ background:'#4ade80', color:'#052e16', fontSize:9, fontWeight:900, padding:'5px 10px', borderRadius:100 }}>● LIVE</span>
      </div>

      <div style={{ padding:'16px', display:'flex', flexDirection:'column', gap:12 }}>
        {filtered.map((d,i)=>(
          <div key={i} style={{ background:'white', borderRadius:20, padding:14, border:'1px solid #f3f4f6', boxShadow:'0 4px 16px rgba(0,0,0,0.04)', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, left:0, width:4, height:'100%', background: d.online? d.color : '#e5e7eb' }}></div>
            <div style={{ display:'flex', gap:12, paddingLeft:8 }}>
              <div style={{ width:56, height:56, background:'#f0fdf4', borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, position:'relative', border:'1px solid #dcfce7' }}>{d.img}<div style={{ position:'absolute', bottom:-2, right:-2, width:16, height:16, background: d.online? '#22c55e' : '#9ca3af', borderRadius:100, border:'2px solid white' }}></div></div>
              <div style={{ flex:1 }}>
                <p style={{ fontWeight:900, fontSize:13, color:'#111827' }}>{d.name}</p>
                <p style={{ fontSize:11, color:d.color, fontWeight:800, marginTop:2 }}>{isTelugu? d.spl_te : d.spl} • {d.exp}</p>
                <div style={{ display:'flex', gap:6, marginTop:4, alignItems:'center' }}>
                  <span style={{ background:'#fefce8', color:'#a16207', fontSize:9, fontWeight:900, padding:'3px 7px', borderRadius:100, border:'1px solid #fef08a' }}>⭐ {d.rating}</span>
                  <span style={{ fontSize:10, color:'#6b7280' }}>🗣️ {d.lang}</span>
                </div>
              </div>
              <span style={{ background: d.online? '#f0fdf4' : '#f9fafb', color: d.online? '#15803d' : '#6b7280', fontSize:9, fontWeight:800, padding:'4px 8px', borderRadius:100, height:'fit-content' }}>{isTelugu? d.available_te : d.available}</span>
            </div>
            <div style={{ display:'flex', gap:8, marginTop:14, paddingLeft:8 }}>
              <button style={{ flex:1, height:40, background:'#f9fafb', border:'1px solid #f3f4f6', borderRadius:12, fontWeight:800, fontSize:12, cursor:'pointer' }}>{isTelugu? '💬 ఉచిత చాట్':'💬 Chat Free'}</button>
              <button style={{ flex:1.3, height:40, background: d.online? '#111827' : '#e5e7eb', color: d.online? 'white' : '#9ca3af', border:'none', borderRadius:12, fontWeight:900, fontSize:12, cursor:'pointer' }}>📹 {isTelugu? 'వీడియో':'Video'} • {isTelugu? d.fee_te : d.fee}</button>
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  )
}