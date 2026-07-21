import { useState, useEffect } from 'react';
import { syllabus } from '../data/tracks';

// Fixed screen positions for up to 5 mind-map nodes (same layout for every part)
const positions = [
  { x: 40, y: 40 },   // topic 0 - top-left
  { x: 360, y: 40 },  // topic 1 - top-right
  { x: 40, y: 240 },  // topic 2 - bottom-left
  { x: 360, y: 240 }, // topic 3 - bottom-right
  { x: 200, y: 10 }   // topic 4 - top-center
];

// Splits a label into up to 2 lines so long text doesn't overflow its box
function wrapLabel(text, maxLen = 19) {
  if (text.length <= maxLen) return [text];
  const words = text.split(' ');
  let line1 = '';
  let line2 = '';
  for (const w of words) {
    if ((line1 + ' ' + w).trim().length <= maxLen) {
      line1 = (line1 + ' ' + w).trim();
    } else {
      line2 = (line2 + ' ' + w).trim();
    }
  }
  return line2 ? [line1, line2] : [line1];
}

export default function ChapterView({ trackKey, trackName }) {
  const data = syllabus[trackKey];
  const [partIndex, setPartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // reset back to the first part and first topic whenever the student switches language
  useEffect(() => { setPartIndex(0); setActiveIndex(0); }, [trackKey]);
  // reset to the first topic whenever the student switches part (e.g. Python-I -> Python-II)
  useEffect(() => { setActiveIndex(0); }, [partIndex]);

  if (!data || !data.parts || data.parts.length === 0) return null;
  const part = data.parts[partIndex];
  const topic = part.topics[activeIndex];

  return (
    <section id="chapter-sect">
      <h2 className="sect-title">{trackName} · {part.title}</h2>
      <p className="sect-sub">Tap a node on the map to open its theory. Each topic has its own recommended videos below.</p>

      {data.parts.length > 1 && (
        <div className="tab-row" style={{ maxWidth: 480, marginBottom: 24 }}>
          {data.parts.map((p, i) => (
            <button key={p.key} className={i === partIndex ? 'active' : ''} onClick={() => setPartIndex(i)}>
              {p.title.split('(')[0].trim()}
            </button>
          ))}
        </div>
      )}

      <div className="chapter-grid">
        <div>
          <div className="mindmap-box">
            <svg className="mindmap" viewBox="0 0 560 320">
              <g>
                {part.topics.map((t, i) => {
                  const lines = wrapLabel(t.label);
                  const halfHeight = lines.length > 1 ? 24 : 20;
                  return <path key={i} className="mm-link" d={`M280,160 L${positions[i].x + 80},${positions[i].y + halfHeight}`} />;
                })}
              </g>
              <g className="mm-node mm-root">
                <rect x="220" y="140" width="120" height="40" rx="8" />
                <text x="280" y="164" textAnchor="middle">{trackName}</text>
              </g>
              {part.topics.map((t, i) => {
                const lines = wrapLabel(t.label);
                const boxHeight = lines.length > 1 ? 48 : 40;
                return (
                  <g className="mm-node" key={t.key} onClick={() => setActiveIndex(i)}>
                    <rect x={positions[i].x} y={positions[i].y} width="160" height={boxHeight} rx="8" />
                    {lines.length === 1 ? (
                      <text x={positions[i].x + 80} y={positions[i].y + 24} textAnchor="middle">{lines[0]}</text>
                    ) : (
                      <>
                        <text x={positions[i].x + 80} y={positions[i].y + 20} textAnchor="middle">{lines[0]}</text>
                        <text x={positions[i].x + 80} y={positions[i].y + 34} textAnchor="middle">{lines[1]}</text>
                      </>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
        <div>
          <div className="video-box">
            <div className="video-frame">
              <div className="play-btn"></div>
              <span>{topic.label}</span>
            </div>
            <div className="video-caption">
              This topic doesn't have an embedded lecture yet - use the recommended videos below to study it.
            </div>
          </div>
        </div>
      </div>

      <div className="theory-panel" style={{ marginTop: 20 }}>
        <h3>{topic.heading}</h3>
        <p>{topic.body}</p>
        {topic.steps && (
          <ol style={{ margin: '10px 0 0', paddingLeft: 20, color: 'var(--paper-dim)', fontSize: 14, lineHeight: 1.7 }}>
            {topic.steps.map((s, i) => (
              <li key={i} style={{ marginBottom: 14 }}>
                {s.point}
                {s.example && (
                  <div style={{ marginTop: 4, fontStyle: 'italic', color: 'var(--mint)', fontSize: 13 }}>
                    {s.example}
                  </div>
                )}
              </li>
            ))}
          </ol>
        )}
        {topic.code && <pre>{topic.code}</pre>}

        {topic.videos && topic.videos.length > 0 && (
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
            <h3 style={{ marginBottom: 8 }}>Recommended videos for this topic</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {topic.videos.map((v, i) => (
                <a
                  key={i}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ textAlign: 'left', textDecoration: 'none' }}
                >
                  ▶ {v.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
