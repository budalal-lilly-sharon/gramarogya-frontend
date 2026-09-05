import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import useAutoSpeak from '../hooks/useAutoSpeak'
import { useState, useEffect } from 'react'

export default function Emergency() {
  const nav = useNavigate()
  const [calling, setCalling] = useState(false)
  const [shakeOn, setShakeOn] = useState(true)
  useAutoSpeak('Emergency page, Tap 108 for ambulance. Shake phone for SOS.')

  // SHAKE TO SOS - PRO FEATURE
  useEffect(()=>{
    let lastShake = 0
    const handleShake = (e)=>{
      if(!shakeOn) return
      const acc = e.accelerationIncludingGravity
      if(!acc) return
      const force = Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z)
      if(force > 45 && Date.now() - lastShake > 3000){
        lastShake = Date.now()
        if(window.confirm('🚨 Shake Detected! Call 108 Ambulance?\n\n📍 Location auto-shared to control room')){
          handleCall(108)
        }
      }
    }
    window.addEventListener('devicemotion', handleShake)
    return ()=> window.removeEventListener('devicemotion', handleShake)
  }, [shakeOn])

  const handleCall = (num) => {
    setCalling(true)
    setTimeout(()=> window.location.href=`tel:${num}`, 800)
  }

  return (
    <div style={{ minHeight:'100vh', background:'#050505', paddingBottom:90, maxWidth:430, margin:'0 auto', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column' }}>

      <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 50% 20%, #dc2626 0%, #7f1d1d 25%, #050505 70%)', opacity:0.7 }}></div>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(0deg, #000 0%, transparent 50%)' }}></div>

      <div style={{ position:'relative', zIndex:2, padding:'14px 16px', display:'flex', gap:12, alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', gap:12, alignItems:'center' }}>
          <button onClick={()=>nav(-1)} style={{ width:36, height:36, background:'rgba(255,255,255,0.1)', backdropFilter:'blur(10px)', borderRadius:20, border:'1px solid rgba(255,255,255,0.1)', color:'white', fontWeight:900, cursor:'pointer' }}>←</button>
          <div>
            <p style={{ fontWeight:900, fontSize:14, color:'white', letterSpacing:0.5 }}>EMERGENCY</p>
            <p style={{ fontSize:10, color:'rgba(255,255,255,0.6)', fontWeight:700 }}>Govt of AP • Free 24H</p>
          </div>
        </div>
        <div style={{ background:'#dc2626', color:'white', padding:'5px 10px', borderRadius:100, fontSize:9, fontWeight:900, letterSpacing:1, display:'flex', alignItems:'center', gap:6, border:'1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ width:6, height:6, background:'white', borderRadius:100, animation:'pulse 1s infinite' }}></div> LIVE
        </div>
      </div>

      <div style={{ position:'relative', zIndex:2, textAlign:'center', marginTop:6 }}>
        <p style={{ color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:900, letterSpacing:3 }}>ONE TAP • LOCATION AUTO-SHARED • SHAKE TO SOS</p>
        <h1 style={{ color:'white', fontWeight:900, fontSize:30, marginTop:6, letterSpacing:-1 }}>Need Help?</h1>
        <p style={{ color:'#fca5a5', fontSize:12, fontWeight:700, marginTop:4 }}>Ambulance reaches in 15 mins</p>
      </div>

      <div style={{ position:'relative', zIndex:2, marginTop:26, display:'flex', flexDirection:'column', alignItems:'center' }}>
        <div style={{ position:'absolute', width:260, height:260, borderRadius:1000, border:'1px solid rgba(239,68,68,0.25)', animation:'ping 2s infinite' }}></div>
        <div style={{ position:'absolute', width:210, height:210, borderRadius:1000, border:'1px solid rgba(239,68,68,0.15)', animation:'ping 2s infinite 0.6s' }}></div>

        <div onClick={()=>handleCall(108)} style={{
          width:180, height:180, borderRadius:1000,
          background: calling? '#7f1d1d' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          border:'7px solid rgba(255,255,255,0.12)',
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
          cursor:'pointer', boxShadow:'0 0 80px rgba(239,68,68,0.55)',
          transform: calling? 'scale(0.93)' : 'scale(1)', transition:'all 0.2s'
        }}>
          <p style={{ fontSize:52, fontWeight:900, color:'white', letterSpacing:-2, lineHeight:1 }}>108</p>
          <p style={{ fontSize:11, fontWeight:900, color:'white', marginTop:6, letterSpacing:2 }}>{calling? 'CALLING...' : 'TAP TO CALL'}</p>
          <p style={{ fontSize:9, color:'rgba(255,255,255,0.7)', fontWeight:700, marginTop:2 }}>AMBULANCE</p>
        </div>

        <div style={{ marginTop:18, background:'rgba(255,255,255,0.08)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.08)', padding:'6px 14px', borderRadius:100, display:'flex', alignItems:'center', gap:6 }}>
          <span style={{ fontSize:12 }}>📍</span>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:11, fontWeight:600 }}>Chittoor, AP • GPS Shared</p>
        </div>

        {/* SHAKE TOGGLE - PRO BADGE */}
        <div style={{ marginTop:12, background: shakeOn? '#dcfce7' : '#fee2e2', borderRadius:100, padding:'6px 12px', display:'flex', alignItems:'center', gap:8, border: shakeOn? '1px solid #86efac' : '1px solid #fca5a5' }}>
          <span style={{ fontSize:10 }}>{shakeOn? '📳' : '🔕'}</span>
          <span style={{ fontSize:9, fontWeight:900, color: shakeOn? '#16a34a' : '#dc2626' }}>{shakeOn? 'SHAKE TO SOS: ON' : 'SHAKE TO SOS: OFF'}</span>
          <button onClick={()=>setShakeOn(!shakeOn)} style={{ background: shakeOn? '#16a34a' : '#dc2626', color:'white', border:'none', padding:'4px 8px', borderRadius:100, fontSize:8, fontWeight:900, cursor:'pointer' }}>{shakeOn? 'ON' : 'OFF'}</button>
        </div>
        <p style={{ fontSize:8, color:'rgba(255,255,255,0.4)', marginTop:6 }}>Shake phone hard in emergency</p>
      </div>

      <div style={{ position:'relative', zIndex:2, padding:16, marginTop:18, display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{ display:'flex', gap:10 }}>
          <button onClick={()=>handleCall(104)} style={{ flex:1, height:52, background:'rgba(255,255,255,0.08)', backdropFilter:'blur(12px)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:14, color:'white', fontWeight:800, fontSize:12, cursor:'pointer' }}>📞 104 Advice</button>
          <button onClick={()=>handleCall(108)} style={{ flex:1, height:52, background:'white', border:'none', borderRadius:14, color:'#111827', fontWeight:900, fontSize:12, cursor:'pointer' }}>🚑 Call 108 Now</button>
        </div>

        <div style={{ background:'white', borderRadius:16, padding:14 }}>
          <p style={{ fontWeight:900, fontSize:11, color:'#111827', letterSpacing:0.5 }}>HOW IT WORKS • PRO FEATURES</p>
          <div style={{ marginTop:10, display:'flex', flexDirection:'column', gap:10 }}>
            <div style={{ display:'flex', gap:10, alignItems:'center' }}><div style={{ width:28, height:28, background:'#f0fdf4', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>📍</div><p style={{ fontSize:11, color:'#374151' }}><b>Location auto-sent</b> to 108 control room</p></div>
            <div style={{ display:'flex', gap:10, alignItems:'center' }}><div style={{ width:28, height:28, background:'#fef2f2', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>📳</div><p style={{ fontSize:11, color:'#374151' }}><b>Shake phone</b> to call ambulance instantly</p></div>
            <div style={{ display:'flex', gap:10, alignItems:'center' }}><div style={{ width:28, height:28, background:'#eff6ff', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>👨‍⚕️</div><p style={{ fontSize:11, color:'#374151' }}><b>Doctor video call</b> while ambulance arrives</p></div>
          </div>
        </div>
      </div>

      <BottomNav />
      <style>{`@keyframes ping{0%{transform:scale(0.85); opacity:0.8} 100%{transform:scale(1.5); opacity:0}} @keyframes pulse{0%,100%{opacity:1} 50%{opacity:0.2}}`}</style>
    </div>
  )
}