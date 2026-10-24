// Ha component fakta car chi drawing (SVG) ahe, varun disnari sports car.
// Car cha samorcha bhag ujvya baju la ahe.
export default function CarSvg() {
  return (
    <svg viewBox="0 0 300 120" aria-hidden="true" className="block h-auto w-full" style={{ filter: "drop-shadow(0 8px 14px rgba(0,0,0,.5))" }}>
    {/* rang (gradient) ithe define kele: cb = car cha rang, cg = kaach cha rang */}
    <defs>
    <linearGradient id="cb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffa13a"/><stop offset=".5" stopColor="#ff7a1a"/><stop offset="1" stopColor="#d9480f"/></linearGradient>
    <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3a3d86"/><stop offset="1" stopColor="#0c0d28"/></linearGradient>
    </defs>
    {/* car khali chi savli (shadow) */}
    <ellipse cx="152" cy="62" rx="146" ry="54" fill="#000" opacity=".28"/>
    {/* chaar chaka (maage 2, samor 2) */}
    <rect x="50" y="2" width="50" height="25" rx="9" fill="#0a0a14"/><rect x="50" y="93" width="50" height="25" rx="9" fill="#0a0a14"/>
    <rect x="210" y="2" width="46" height="25" rx="9" fill="#0a0a14"/><rect x="210" y="93" width="46" height="25" rx="9" fill="#0a0a14"/>
    <rect x="58" y="6" width="34" height="5" rx="2" fill="#2a2c55"/><rect x="58" y="109" width="34" height="5" rx="2" fill="#2a2c55"/>
    <rect x="216" y="6" width="32" height="5" rx="2" fill="#2a2c55"/><rect x="216" y="109" width="32" height="5" rx="2" fill="#2a2c55"/>
    <rect x="62" y="24" width="14" height="4" fill="#ff3b30"/><rect x="62" y="92" width="14" height="4" fill="#ff3b30"/>
    {/* car cha mukhya body */}
    <path d="M8 46C8 32 18 26 40 24L104 18C128 14 170 16 214 30C250 40 280 52 296 60C280 68 250 80 214 90C170 104 128 106 104 102L40 96C18 94 8 88 8 74Z" fill="url(#cb)"/>
    <path d="M214 30C250 40 280 52 296 60C280 68 250 80 214 90" fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="2"/>
    {/* pandhrya pattya (stripes) */}
    <rect x="14" y="58" width="84" height="4" fill="#fff" opacity=".55"/><rect x="214" y="58" width="72" height="4" fill="#fff" opacity=".55"/>
    <rect x="34" y="42" width="4" height="36" rx="2" fill="#7a2a07" opacity=".55"/><rect x="44" y="42" width="4" height="36" rx="2" fill="#7a2a07" opacity=".55"/><rect x="54" y="42" width="4" height="36" rx="2" fill="#7a2a07" opacity=".55"/><rect x="64" y="42" width="4" height="36" rx="2" fill="#7a2a07" opacity=".55"/><rect x="74" y="42" width="4" height="36" rx="2" fill="#7a2a07" opacity=".55"/><rect x="84" y="42" width="4" height="36" rx="2" fill="#7a2a07" opacity=".55"/>
    {/* kaach: maage, roof, samorchi windshield */}
    <path d="M100 42L122 39L122 81L100 78Z" fill="url(#cg)"/>
    <path d="M122 39L150 36L150 84L122 81C117 70 117 50 122 39Z" fill="#ff8a2a"/>
    <path d="M150 36C176 38 198 48 206 60C198 72 176 82 150 84Z" fill="url(#cg)"/>
    <path d="M156 42C172 44 186 50 194 57L156 57Z" fill="#fff" opacity=".2"/>
    <rect x="132" y="19" width="34" height="6" rx="3" fill="#7a2a07"/><rect x="132" y="95" width="34" height="6" rx="3" fill="#7a2a07"/>
    <path d="M172 22l16 0 2 7-18 0z M172 98l16 0 2-7-18 0z" fill="#c2410c"/>
    {/* maage cha motha wing ani lal tail light */}
    <rect x="1" y="26" width="10" height="68" rx="3" fill="#14153b"/><rect x="3" y="26" width="3" height="68" fill="#fff" opacity=".2"/>
    <rect x="9" y="44" width="4" height="32" rx="2" fill="#ff3b30"/>
    {/* samorche pandhre headlights */}
    <path d="M262 46l26 8-2 5-26-7z M262 74l26-8-2-5-26 7z" fill="#fff"/><path d="M286 54l8 6-8 6" fill="none" stroke="#0a0a14" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}
