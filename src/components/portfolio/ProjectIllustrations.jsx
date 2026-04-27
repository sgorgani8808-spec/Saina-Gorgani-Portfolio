import React from "react";

export function ArchiveIllustration() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="450" fill="hsl(222,38%,10%)" />
      {[0,1,2,3,4,5].map((i) => (
        <g key={i} transform={`translate(${60 + (i % 3) * 230}, ${60 + Math.floor(i / 3) * 165})`}>
          <rect width="200" height="140" rx="10" fill="hsl(222,30%,15%)" stroke="hsl(152,60%,42%)" strokeWidth="1" />
          <rect x="16" y="16" width="168" height="80" rx="6" fill="hsl(222,28%,20%)" />
          <line x1="16" y1="108" x2="184" y2="108" stroke="hsl(210,12%,30%)" strokeWidth="1" />
          <rect x="16" y="116" width="80" height="6" rx="3" fill="hsl(210,12%,35%)" />
          <rect x="108" y="116" width="40" height="6" rx="3" fill="hsl(152,60%,42%)" opacity="0.7" />
          <line x1="30" y1="36" x2="170" y2="36" stroke="hsl(152,60%,42%)" strokeWidth="0.8" opacity="0.4" />
          <line x1="30" y1="50" x2="140" y2="50" stroke="hsl(210,12%,40%)" strokeWidth="0.8" opacity="0.4" />
          <line x1="30" y1="64" x2="155" y2="64" stroke="hsl(210,12%,40%)" strokeWidth="0.8" opacity="0.4" />
          <circle cx="170" cy="50" r="14" fill="hsl(152,60%,42%)" opacity="0.15" />
          <circle cx="170" cy="50" r="5" fill="hsl(152,60%,42%)" opacity="0.6" />
        </g>
      ))}
      <rect x="0" y="0" width="800" height="40" fill="hsl(222,40%,7%)" />
      <circle cx="24" cy="20" r="6" fill="hsl(152,60%,42%)" opacity="0.8" />
      <rect x="40" y="15" width="60" height="10" rx="5" fill="hsl(210,12%,35%)" />
      <rect x="640" y="13" width="70" height="14" rx="7" fill="hsl(152,60%,42%)" opacity="0.6" />
      <rect x="720" y="13" width="60" height="14" rx="7" fill="hsl(222,28%,20%)" />
    </svg>
  );
}

export function SplashIllustration() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="450" fill="hsl(0,0%,98%)" />
      <rect x="0" y="0" width="800" height="56" fill="hsl(222,60%,25%)" />
      <circle cx="40" cy="28" r="12" fill="hsl(152,55%,32%)" />
      {[0,1,2,3].map((i) => (
        <rect key={i} x={160 + i * 100} y="21" width="60" height="14" rx="7" fill="white" opacity="0.15" />
      ))}
      <rect x="650" y="18" width="80" height="20" rx="10" fill="hsl(152,55%,32%)" />
      <rect x="80" y="100" width="300" height="28" rx="6" fill="hsl(222,60%,25%)" opacity="0.15" />
      <rect x="80" y="138" width="420" height="20" rx="5" fill="hsl(222,60%,25%)" opacity="0.08" />
      <rect x="80" y="166" width="380" height="20" rx="5" fill="hsl(222,60%,25%)" opacity="0.08" />
      <rect x="80" y="208" width="100" height="36" rx="18" fill="hsl(152,55%,32%)" />
      <rect x="196" y="208" width="100" height="36" rx="18" fill="none" stroke="hsl(222,60%,25%)" strokeWidth="1.5" />
      <rect x="480" y="80" width="260" height="200" rx="16" fill="hsl(150,25%,92%)" />
      <rect x="508" y="108" width="204" height="144" rx="10" fill="hsl(222,60%,25%)" opacity="0.08" />
      <line x1="520" y1="130" x2="700" y2="130" stroke="hsl(222,60%,25%)" strokeWidth="1" opacity="0.2" />
      <line x1="520" y1="148" x2="680" y2="148" stroke="hsl(222,60%,25%)" strokeWidth="1" opacity="0.2" />
      <line x1="520" y1="166" x2="690" y2="166" stroke="hsl(222,60%,25%)" strokeWidth="1" opacity="0.2" />
      {[0,1,2].map((i) => (
        <g key={i} transform={`translate(${80 + i * 224}, 310)`}>
          <rect width="200" height="100" rx="12" fill="hsl(150,25%,92%)" />
          <rect x="16" y="16" width="168" height="50" rx="6" fill="white" />
          <rect x="16" y="74" width="80" height="10" rx="5" fill="hsl(222,60%,25%)" opacity="0.2" />
        </g>
      ))}
    </svg>
  );
}

export function BackendIllustration() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="450" fill="hsl(222,40%,7%)" />
      <rect x="40" y="160" width="160" height="130" rx="12" fill="hsl(222,30%,15%)" stroke="hsl(152,60%,42%)" strokeWidth="1.2" />
      <text x="120" y="195" textAnchor="middle" fill="hsl(152,60%,42%)" fontSize="11" fontFamily="monospace">CLIENT</text>
      <rect x="60" y="208" width="120" height="8" rx="4" fill="hsl(210,12%,30%)" />
      <rect x="60" y="224" width="80" height="8" rx="4" fill="hsl(210,12%,30%)" />
      <rect x="60" y="248" width="100" height="20" rx="10" fill="hsl(152,60%,42%)" opacity="0.6" />
      <line x1="200" y1="225" x2="300" y2="225" stroke="hsl(152,60%,42%)" strokeWidth="1.5" strokeDasharray="6 3" />
      <polygon points="300,220 314,225 300,230" fill="hsl(152,60%,42%)" />
      <line x1="314" y1="225" x2="480" y2="225" stroke="hsl(152,60%,42%)" strokeWidth="1.5" strokeDasharray="6 3" />
      <rect x="300" y="100" width="180" height="250" rx="12" fill="hsl(222,38%,12%)" stroke="hsl(222,55%,50%)" strokeWidth="1.2" />
      <text x="390" y="135" textAnchor="middle" fill="hsl(222,55%,70%)" fontSize="11" fontFamily="monospace">EXPRESS</text>
      {["GET /items","POST /items","PUT /items/:id","DELETE /items/:id"].map((r, i) => (
        <g key={i}>
          <rect x="320" y={152 + i * 44} width="140" height="28" rx="6" fill="hsl(222,28%,18%)" />
          <text x="330" y={171 + i * 44} fill="hsl(152,60%,42%)" fontSize="9" fontFamily="monospace">{r}</text>
        </g>
      ))}
      <line x1="480" y1="225" x2="560" y2="225" stroke="hsl(222,55%,50%)" strokeWidth="1.5" strokeDasharray="6 3" />
      <polygon points="560,220 574,225 560,230" fill="hsl(222,55%,50%)" />
      <rect x="574" y="160" width="180" height="130" rx="12" fill="hsl(222,30%,15%)" stroke="hsl(222,55%,50%)" strokeWidth="1.2" />
      <text x="664" y="195" textAnchor="middle" fill="hsl(222,55%,70%)" fontSize="11" fontFamily="monospace">MONGODB</text>
      {[0,1,2].map((i) => (
        <ellipse key={i} cx="664" cy={218 + i * 28} rx="50" ry="10" fill="hsl(222,28%,20%)" stroke="hsl(222,55%,50%)" strokeWidth="0.8" />
      ))}
      <rect x="40" y="60" width="120" height="30" rx="8" fill="hsl(152,60%,42%)" opacity="0.15" />
      <text x="100" y="80" textAnchor="middle" fill="hsl(152,60%,42%)" fontSize="11" fontFamily="monospace">Vue.js SSR</text>
      <line x1="100" y1="90" x2="100" y2="160" stroke="hsl(152,60%,42%)" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
    </svg>
  );
}

export function InventoryIllustration() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="450" fill="hsl(0,0%,98%)" />
      <rect x="0" y="0" width="200" height="450" fill="hsl(222,60%,25%)" />
      <circle cx="40" cy="44" r="16" fill="hsl(152,55%,32%)" />
      {[0,1,2,3,4].map((i) => (
        <g key={i}>
          <rect x="16" y={100 + i * 54} width="168" height="36" rx="8" fill={i === 1 ? "hsl(152,55%,32%)" : "transparent"} />
          <rect x="32" y={112 + i * 54} width="80" height="12" rx="6" fill="white" opacity={i === 1 ? 1 : 0.3} />
        </g>
      ))}
      <rect x="200" y="0" width="600" height="56" fill="hsl(0,0%,100%)" />
      <rect x="220" y="18" width="180" height="20" rx="6" fill="hsl(210,18%,94%)" />
      {[
        { label: "Total Items", val: "1,248" },
        { label: "Low Stock", val: "23" },
        { label: "Categories", val: "16" },
      ].map((s, i) => (
        <g key={s.label} transform={`translate(${220 + i * 186}, 76)`}>
          <rect width="170" height="70" rx="10" fill="hsl(0,0%,100%)" stroke="hsl(210,18%,88%)" strokeWidth="1" />
          <rect x="12" y="12" width="60" height="10" rx="5" fill="hsl(210,18%,88%)" />
          <rect x="12" y="32" width="90" height="18" rx="5" fill="hsl(222,60%,25%)" opacity="0.12" />
        </g>
      ))}
      <rect x="220" y="164" width="560" height="260" rx="12" fill="white" stroke="hsl(210,18%,88%)" strokeWidth="1" />
      <rect x="220" y="164" width="560" height="40" rx="12" fill="hsl(210,18%,94%)" />
      {[0,1,2,3].map((h) => (
        <rect key={h} x={240 + h * 130} y="178" width="80" height="12" rx="6" fill="hsl(222,60%,25%)" opacity="0.2" />
      ))}
      {[0,1,2,3,4].map((row) => (
        <g key={row}>
          <line x1="220" y1={204 + row * 44} x2="780" y2={204 + row * 44} stroke="hsl(210,18%,92%)" strokeWidth="1" />
          {[0,1,2,3].map((col) => (
            <rect key={col} x={240 + col * 130} y={212 + row * 44} width={col === 3 ? 60 : 90} height="10" rx="5" fill={col === 3 ? "hsl(152,55%,32%)" : "hsl(210,18%,88%)"} opacity={col === 3 ? 0.4 : 1} />
          ))}
        </g>
      ))}
    </svg>
  );
}

export function ShoppingCartIllustration() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="450" fill="hsl(0,0%,98%)" />
      <rect x="0" y="0" width="800" height="52" fill="white" stroke="hsl(210,18%,88%)" strokeWidth="1" />
      <rect x="24" y="18" width="80" height="16" rx="8" fill="hsl(152,55%,32%)" opacity="0.8" />
      <rect x="640" y="16" width="40" height="20" rx="6" fill="hsl(210,18%,94%)" />
      {[0,1,2,3,4,5].map((i) => (
        <g key={i} transform={`translate(${24 + (i % 3) * 230}, ${70 + Math.floor(i / 2) * 168})`}>
          <rect width="210" height="150" rx="12" fill="white" stroke="hsl(210,18%,88%)" strokeWidth="1" />
          <rect x="10" y="10" width="190" height="90" rx="8" fill="hsl(150,25%,92%)" />
          <circle cx="105" cy="55" r="24" fill="hsl(152,55%,32%)" opacity="0.15" />
          <circle cx="105" cy="55" r="10" fill="hsl(152,55%,32%)" opacity="0.5" />
          <rect x="10" y="108" width="110" height="10" rx="5" fill="hsl(210,18%,88%)" />
          <rect x="10" y="126" width="60" height="10" rx="5" fill="hsl(222,60%,25%)" opacity="0.2" />
          <rect x="150" y="120" width="50" height="24" rx="12" fill="hsl(152,55%,32%)" opacity="0.7" />
        </g>
      ))}
      <rect x="706" y="52" width="94" height="398" fill="hsl(222,60%,25%)" opacity="0.05" />
      <rect x="714" y="70" width="78" height="12" rx="6" fill="hsl(222,60%,25%)" opacity="0.3" />
      {[0,1,2].map((i) => (
        <g key={i}>
          <rect x="714" y={96 + i * 54} width="78" height="40" rx="8" fill="white" stroke="hsl(210,18%,88%)" strokeWidth="1" />
          <rect x="722" y={104 + i * 54} width="40" height="8" rx="4" fill="hsl(210,18%,88%)" />
          <rect x="722" y={118 + i * 54} width="24" height="8" rx="4" fill="hsl(152,55%,32%)" opacity="0.5" />
        </g>
      ))}
      <rect x="714" y="268" width="78" height="28" rx="14" fill="hsl(152,55%,32%)" opacity="0.8" />
    </svg>
  );
}

export function ArchitectureIllustration() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="450" fill="hsl(222,40%,7%)" />
      <line x1="60" y1="380" x2="740" y2="380" stroke="hsl(152,60%,42%)" strokeWidth="1" opacity="0.6" />
      <rect x="80" y="200" width="120" height="180" fill="none" stroke="hsl(152,60%,42%)" strokeWidth="1.2" />
      {[0,1,2,3].map((r) => [0,1].map((c) => (
        <rect key={`${r}-${c}`} x={96 + c * 52} y={216 + r * 40} width="30" height="24" fill="none" stroke="hsl(152,60%,42%)" strokeWidth="0.8" opacity="0.6" />
      )))}
      <line x1="80" y1="200" x2="140" y2="140" stroke="hsl(152,60%,42%)" strokeWidth="1.2" />
      <line x1="200" y1="200" x2="140" y2="140" stroke="hsl(152,60%,42%)" strokeWidth="1.2" />
      <rect x="280" y="100" width="240" height="280" fill="none" stroke="hsl(210,15%,55%)" strokeWidth="1.2" />
      {[0,1,2,3,4,5].map((r) => [0,1,2].map((c) => (
        <rect key={`${r}-${c}`} x={298 + c * 72} y={116 + r * 44} width="46" height="28" fill="none" stroke="hsl(210,15%,55%)" strokeWidth="0.7" opacity="0.5" />
      )))}
      <rect x="360" y="320" width="80" height="60" fill="none" stroke="hsl(210,15%,55%)" strokeWidth="1" />
      <rect x="580" y="240" width="140" height="140" fill="none" stroke="hsl(222,55%,50%)" strokeWidth="1.2" />
      {[0,1].map((r) => [0,1,2].map((c) => (
        <rect key={`${r}-${c}`} x={596 + c * 42} y={256 + r * 56} width="28" height="36" fill="none" stroke="hsl(222,55%,50%)" strokeWidth="0.7" opacity="0.5" />
      )))}
      <line x1="80" y1="400" x2="200" y2="400" stroke="hsl(210,12%,40%)" strokeWidth="0.8" />
      <line x1="80" y1="396" x2="80" y2="404" stroke="hsl(210,12%,40%)" strokeWidth="0.8" />
      <line x1="200" y1="396" x2="200" y2="404" stroke="hsl(210,12%,40%)" strokeWidth="0.8" />
      <line x1="280" y1="400" x2="520" y2="400" stroke="hsl(210,12%,40%)" strokeWidth="0.8" />
      <line x1="280" y1="396" x2="280" y2="404" stroke="hsl(210,12%,40%)" strokeWidth="0.8" />
      <line x1="520" y1="396" x2="520" y2="404" stroke="hsl(210,12%,40%)" strokeWidth="0.8" />
      <text x="140" y="430" textAnchor="middle" fill="hsl(210,12%,40%)" fontSize="9" fontFamily="monospace">UNIT A</text>
      <text x="400" y="430" textAnchor="middle" fill="hsl(210,12%,40%)" fontSize="9" fontFamily="monospace">TOWER B</text>
      <text x="650" y="430" textAnchor="middle" fill="hsl(210,12%,40%)" fontSize="9" fontFamily="monospace">ANNEX C</text>
      {[0,1,2,3,4,5,6,7].map((i) => (
        <line key={i} x1={60 + i * 100} y1="60" x2={60 + i * 100} y2="380" stroke="hsl(210,12%,25%)" strokeWidth="0.4" opacity="0.4" />
      ))}
      {[0,1,2,3,4,5].map((i) => (
        <line key={i} x1="60" y1={80 + i * 60} x2="740" y2={80 + i * 60} stroke="hsl(210,12%,25%)" strokeWidth="0.4" opacity="0.4" />
      ))}
    </svg>
  );
}