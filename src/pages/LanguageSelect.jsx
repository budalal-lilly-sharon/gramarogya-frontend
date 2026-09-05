import { useNavigate } from 'react-router-dom'

export default function LanguageSelect(){
  const nav = useNavigate()

  const selectLang = (lang) => {
    localStorage.setItem('lang', lang)
    nav('/role')
  }

  return (
    <div style={{ 
      minHeight:'100vh', 
      background:'#FFFEFB', 
      maxWidth:430, 
      margin:'0 auto', 
      display:'flex', 
      flexDirection:'column', 
      justifyContent:'center', 
      padding:24, 
      fontFamily:'system-ui' 
    }}>
      
      <div style={{ textAlign:'center', marginBottom:40 }}>
        <div style={{ 
          width:80, height:80, background:'#0B4D2E', 
          borderRadius:20, display:'flex', 
          alignItems:'center', justifyContent:'center',
          margin:'0 auto', fontSize:40
        }}>🏥</div>
        <h1 style={{ fontSize:32, fontWeight:900, marginTop:16, letterSpacing:-1 }}>AarogyaSetu</h1>
        <p style={{ color:'#0B4D2E', fontWeight:700, marginTop:4 }}>Your Health Companion</p>
        <p style={{ color:'#57534e', fontSize:13, marginTop:16 }}>Choose your preferred language</p>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        
        <button 
          onClick={()=>selectLang('en')}
          style={{ 
            padding:'18px 20px', borderRadius:16, 
            border:'2px solid #0B4D2E', background:'#0B4D2E', 
            color:'white', fontWeight:800, fontSize:16, cursor:'pointer',
            display:'flex', justifyContent:'space-between', alignItems:'center'
          }}
        >
          <span style={{ display:'flex', alignItems:'center', gap:12 }}>
            <span style={{ fontSize:22 }}>🇬🇧</span> English
          </span>
          <span>→</span>
        </button>

        <button 
          onClick={()=>selectLang('te')}
          style={{ 
            padding:'18px 20px', borderRadius:16, 
            border:'2px solid #e7e5e4', background:'white', 
            fontWeight:800, fontSize:16, cursor:'pointer',
            display:'flex', justifyContent:'space-between', alignItems:'center'
          }}
        >
          <span style={{ display:'flex', alignItems:'center', gap:12 }}>
            <span style={{ fontSize:22 }}>🇮🇳</span> Telugu
          </span>
          <span>→</span>
        </button>

        <button 
          onClick={()=>selectLang('hi')}
          style={{ 
            padding:'18px 20px', borderRadius:16, 
            border:'2px solid #e7e5e4', background:'white', 
            fontWeight:800, fontSize:16, cursor:'pointer',
            display:'flex', justifyContent:'space-between', alignItems:'center'
          }}
        >
          <span style={{ display:'flex', alignItems:'center', gap:12 }}>
            <span style={{ fontSize:22 }}>🇮🇳</span> Hindi
          </span>
          <span>→</span>
        </button>

      </div>

      <p style={{ textAlign:'center', fontSize:11, color:'#a8a29e', marginTop:32 }}>
        You can change language later in settings
      </p>
    </div>
  )
}