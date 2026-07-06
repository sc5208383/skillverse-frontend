export default function TracksGrid({ tracks, t, currentStudent, onOpenTrack, onOpenPayment }) {
  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -10;
    const ry = ((x / rect.width) - 0.5) * 10;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(4px)`;
  };
  const handleLeave = (e) => { e.currentTarget.style.transform = 'none'; };

  const isUnlocked = (trackKey) =>
    currentStudent ? currentStudent.enrolledTracks.includes(trackKey) : false;

  return (
    <section id="tracks-sect">
      <h2 className="sect-title">{t.tracks_title}</h2>
      <p className="sect-sub">{t.tracks_sub}</p>
      <div className="tracks">
        {tracks.map(tr => {
          const unlocked = isUnlocked(tr.key);
          return (
            <div className="chip-card" key={tr.key} onMouseMove={handleMove} onMouseLeave={handleLeave}>
              <span className={`track-pill ${tr.pillClass}`}>{tr.key.toUpperCase()}</span>
              <h3 className="track-name">{tr.name}</h3>
              <p className="track-desc">{t.track_desc[tr.key]}</p>
              <div className="status-row">
                <span className={`led ${unlocked ? 'led-unlocked' : 'led-locked'}`}></span>
                {unlocked ? t.unlocked : t.locked} · {tr.chapters} {t.chapters}
              </div>
              <div className="track-fee-row">
                <span className="track-fee">₹{tr.fee.toLocaleString('en-IN')}<span> /course</span></span>
              </div>
              <div className="track-actions">
                <button className="btn" onClick={() => onOpenTrack(tr)}>
                  {unlocked && tr.hasContent ? t.open_course : t.enrol}
                </button>
                {!unlocked && (
                  <button className="btn btn-solid" onClick={() => onOpenPayment(tr)}>{t.enrol}</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
