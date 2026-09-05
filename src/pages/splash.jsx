import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Splash() {
  const nav = useNavigate()
  useEffect(() => {
    const t = setTimeout(() => nav('/onboarding'), 2200)
    return () => clearTimeout(t)
  }, [nav])

  return (
    <div style={{ minHeight:'100vh', width:'100vw', background:'#0B4D2E', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <div style={{ width:80, height:80, background:'white', borderRadius:20, display:'flex', alignItems:'center', justifyContent:'center', fontSize:40, boxShadow:'0 20px 40px rgba(0,0,0,0.3)' }}>🌿</div>
      <h1 style={{ color:'white', fontWeight:900, fontSize:32, marginTop:20, letterSpacing:-1 }}>GramArogya</h1>
      <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13, letterSpacing:3, marginTop:6, fontWeight:700 }}>RURAL HEALTH COMPANION</p>
      <div style={{ marginTop:40, width:120, height:4, background:'rgba(255,255,255,0.2)', borderRadius:10, overflow:'hidden' }}>
        <div style={{ width:'100%', height:'100%', background:'white', borderRadius:10, animation:'load 2.2s ease' }}></div>
      </div>
      <style>{`@keyframes load { from{width:0%} to{width:100%} }`}</style>
    </div>
  )
}