import { useEffect, useState } from 'react';

const bootLines = ['booting skillverse.exe', 'loading java.class c.bin cpp.o python.pyc', 'ready.'];

export default function Hero({ t, onExplore, onOpenAuth }) {
  const [line, setLine] = useState(bootLines[0]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % bootLines.length;
      setLine(bootLines[i]);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const parts = t.hero_title_plain.split(/(future|भविष्य)/);

  return (
    <section className="hero" style={{ borderTop: 'none' }}>
      <p className="eyebrow">{line}</p>
      <h1 className="headline">
        {parts.map((part, idx) =>
          part === 'future' || part === 'भविष्य'
            ? <span className="accent" key={idx}>{part}</span>
            : <span key={idx}>{part}</span>
        )}
      </h1>
      <p className="subhead">{t.hero_sub}</p>
      <div className="hero-ctas">
        <button className="btn btn-solid" onClick={onExplore}>{t.hero_cta}</button>
        <button className="btn" onClick={() => onOpenAuth('signup')}>{t.hero_cta2}</button>
      </div>

      <div className="board-map-wrap">
        <svg className="board" viewBox="0 0 1100 260" role="img" aria-label="Circuit map of the four language tracks">
          <path className="trace" d="M120,60 H320" />
          <path className="trace" d="M120,200 H320" />
          <path className="trace" d="M320,60 V130 H540" />
          <path className="trace" d="M320,200 V130" />
          <path className="trace" d="M540,130 H760" />
          <path className="trace" d="M760,130 V60 H960" />
          <path className="trace" d="M760,130 V200 H960" />
          <circle className="node-dot" cx="320" cy="130" r="4" />
          <circle className="node-dot" cx="760" cy="130" r="4" />

          <g><rect className="chip-rect" x="30" y="35" width="180" height="50" rx="8" /><text className="chip-label" x="50" y="56">JAVA</text><text className="chip-sub" x="50" y="72">Ch.1 · unlocked</text></g>
          <g><rect className="chip-rect" x="30" y="175" width="180" height="50" rx="8" /><text className="chip-label" x="50" y="196">C</text><text className="chip-sub" x="50" y="212">4 chapters</text></g>
          <g><rect className="chip-rect" x="540" y="105" width="220" height="50" rx="8" /><text className="chip-label" x="560" y="126">SKILLVERSE CORE</text><text className="chip-sub" x="560" y="142">syllabus engine</text></g>
          <g><rect className="chip-rect" x="960" y="35" width="110" height="50" rx="8" /><text className="chip-label" x="980" y="56">C++</text><text className="chip-sub" x="980" y="72">6 chapters</text></g>
          <g><rect className="chip-rect" x="960" y="175" width="110" height="50" rx="8" /><text className="chip-label" x="980" y="196">PY</text><text className="chip-sub" x="980" y="212">5 chapters</text></g>
        </svg>
      </div>
    </section>
  );
}
