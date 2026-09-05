export default function ServiceCard({icon, title, subtitle, onClick}){
  return(
    <div onClick={onClick} className="bg-white p-3 rounded-2xl shadow-sm border flex gap-3 items-center cursor-pointer active:scale-95">
      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-xl">{icon}</div>
      <div><p className="font-bold text-[13px]">{title}</p><p className="text-[11px] text-gray-500">{subtitle}</p></div>
    </div>
  )
}