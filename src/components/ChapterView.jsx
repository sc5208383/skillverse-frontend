import { useState } from 'react';
import { theoryContent } from '../data/tracks';

export default function ChapterView({ t }) {
  const [active, setActive] = useState('history');
  const c = theoryContent[active];

  return (
    <section id="chapter-sect">
      <h2 className="sect-title">Java · Chapter 1 — Introduction to Java</h2>
      <p className="sect-sub">{t.chapter_sub}</p>
      <div className="chapter-grid">
        <div>
          <div className="mindmap-box">
            <svg className="mindmap" viewBox="0 0 560 320">
              <g>
                <path className="mm-link" d="M280,160 L120,60" />
                <path className="mm-link" d="M280,160 L440,60" />
                <path className="mm-link" d="M280,160 L120,260" />
                <path className="mm-link" d="M280,160 L440,260" />
                <path className="mm-link" d="M280,160 L280,40" />
              </g>
              <g className="mm-node mm-root"><rect x="220" y="140" width="120" height="40" rx="8" /><text x="280" y="164" textAnchor="middle">Java Ch.1</text></g>
              <g className="mm-node" onClick={() => setActive('history')}><rect x="40" y="40" width="160" height="40" rx="8" /><text x="120" y="64" textAnchor="middle">History of Java</text></g>
              <g className="mm-node" onClick={() => setActive('jvm')}><rect x="360" y="40" width="160" height="40" rx="8" /><text x="440" y="64" textAnchor="middle">JVM · JRE · JDK</text></g>
              <g className="mm-node" onClick={() => setActive('features')}><rect x="40" y="240" width="160" height="40" rx="8" /><text x="120" y="264" textAnchor="middle">Key features</text></g>
              <g className="mm-node" onClick={() => setActive('first')}><rect x="360" y="240" width="160" height="40" rx="8" /><text x="440" y="264" textAnchor="middle">First Java program</text></g>
              <g className="mm-node" onClick={() => setActive('compile')}><rect x="200" y="10" width="160" height="40" rx="8" /><text x="280" y="34" textAnchor="middle">Compilation flow</text></g>
            </svg>
          </div>
          <div className="theory-panel">
            <h3>{c.h}</h3>
            <p>{c.p}</p>
            {c.code && <pre>{c.code}</pre>}
          </div>
        </div>
        <div>
          <div className="video-box">
            <div className="video-frame">
              <div className="play-btn"></div>
              <span>Chapter 1 video</span>
            </div>
            <div className="video-caption">Replace this frame in ChapterView.jsx with an iframe pointing to your uploaded lecture.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
