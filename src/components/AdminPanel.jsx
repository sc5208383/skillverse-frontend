import { useEffect, useState } from 'react';
import { API_BASE } from '../config';

const ADMIN_PASSWORD = '1234';

export default function AdminPanel({ open, t }) {
  const [unlocked, setUnlocked] = useState(false);
  const [pwInput, setPwInput] = useState('');
  const [pwError, setPwError] = useState('');
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open || !unlocked) return;
    const load = () => {
      fetch(`${API_BASE}/api/admin/students`)
        .then(res => res.json())
        .then(data => setStudents(Array.isArray(data) ? data : []))
        .catch(() => setError('Could not reach the server. Is the backend running?'));
    };
    load();
    const id = setInterval(load, 5000);
    return () => clearInterval(id);
  }, [open, unlocked]);

  if (!open) return null;

  if (!unlocked) {
    const tryUnlock = () => {
      if (pwInput === ADMIN_PASSWORD) {
        setUnlocked(true);
        setPwError('');
      } else {
        setPwError('Wrong password.');
      }
    };
    return (
      <section id="admin-sect">
        <h2 className="sect-title">{t.admin_title}</h2>
        <p className="sect-sub">Enter the admin password to continue.</p>
        <div className="field" style={{ maxWidth: 260 }}>
          <label>Admin password</label>
          <input
            type="password"
            value={pwInput}
            onChange={e => setPwInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && tryUnlock()}
            placeholder="••••"
          />
        </div>
        <button className="btn btn-solid" onClick={tryUnlock}>Unlock</button>
        {pwError && <p className="form-msg err">{pwError}</p>}
      </section>
    );
  }

  return (
    <section id="admin-sect">
      <h2 className="sect-title">{t.admin_title}</h2>
      <p className="sect-sub">{t.admin_sub} Refreshes automatically every 5 seconds.</p>
      {error && <p className="empty-note">{error}</p>}
      {!error && students.length === 0 && <p className="empty-note">{t.empty_note}</p>}
      {!error && students.length > 0 && (
        <table className="admin-table">
          <thead><tr><th>Name</th><th>Email</th><th>Language</th><th>Enrolled tracks</th></tr></thead>
          <tbody>
            {students.map(s => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.preferredLanguage.toUpperCase()}</td>
                <td>{s.enrolledTracks.length ? s.enrolledTracks.join(', ') : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}