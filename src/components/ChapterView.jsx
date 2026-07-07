import { useState, useEffect } from 'react';
import { syllabus } from '../data/tracks';

// Fixed screen positions for the 5 mind-map nodes (same layout for every language)
const positions = [
  { x: 40, y: 40 },   // topic 0 - top-left
  { x: 360, y: 40 },  // topic 1 - top-right
  { x: 40, y: 240 },  // topic 2 - bottom-left
  { x: 360, y: 240 }, // topic 3 - bottom-right
  { x: 200, y: 10 }   // topic 4 - top-center
];

export default function ChapterView({ trackKey, trackName }) {
  const data = syllabus[trackKey];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => { setActiveIndex(0); }, [trackKey]);

  if (!data) return null;
  const topic = data.topics[activeIndex];

  return (
    <section id="chapter-sect">
      <h2 className="sect-title">{trackName} · {data.chapterTitle}</h2>
      <p className="sect-sub">Tap a node on the map to open its theory. The video below covers the whole chapter.</p>
      <div className="chapter-grid">
        <div>
          <div className="mindmap-box">
            <svg className="mindmap" viewBox="0 0 560 320">
              <g>
                {positions.map((p, i) => (
                  <path key={i} className="mm-link" d={`M280,160 L${p.x + 80},${p.y + 20}`} />
                ))}
              </g>
              <g className="mm-node mm-root">
                <rect x="220" y="140" width="120" height="40" rx="8" />
                <text x="280" y="164" textAnchor="middle">{trackName} Ch.1</text>
              </g>
              {data.topics.map((t, i) => (
                <g className="mm-node" key={t.key} onClick={() => setActiveIndex(i)}>
                  <rect x={positions[i].x} y={positions[i].y} width="160" height="40" rx="8" />
                  <text x={positions[i].x + 80} y={positions[i].y + 24} textAnchor="middle">{t.label}</text>
                </g>
              ))}
            </svg>
          </div>
          <div className="theory-panel">
            <h3>{topic.heading}</h3>
            <p>{topic.body}</p>
            {topic.steps && (
              <ol style={{ margin: '10px 0 0', paddingLeft: 20, color: 'var(--paper-dim)', fontSize: 14, lineHeight: 1.7 }}>
                {topic.steps.map((s, i) => <li key={i} style={{ marginBottom: 8 }}>{s}</li>)}
              </ol>
            )}
            {topic.code && <pre>{topic.code}</pre>}
          </div>
        </div>
        <div>
          <div className="video-box">
            {data.videoUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={data.videoUrl}
                frameBorder="0"
                allowFullScreen
                style={{ border: 'none', aspectRatio: '16/9', display: 'block' }}
                title={`${trackName} chapter 1 video`}
              />
            ) : (
              <>
                <div className="video-frame">
                  <div className="play-btn"></div>
                  <span>Chapter 1 video</span>
                </div>
                <div className="video-caption">
                  No video linked yet - add a "videoUrl" for "{trackKey}" in client/src/data/tracks.js.
                </div>
              </>
            )}
          </div>
{data.recommendedVideos && data.recommendedVideos.length > 0 && (
        <div className="theory-panel" style={{ marginTop: 20 }}>
          <h3>Recommended videos</h3>
          <p style={{ marginBottom: 12 }}>Trusted channels to go deeper on {trackName}:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {data.recommendedVideos.map((v, i) => (
              <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" className="btn" style={{ textAlign: 'left', textDecoration: 'none' }}>▶ {v.label}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
  </section>
  );
}