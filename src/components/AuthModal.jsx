import { useState } from 'react';
import { API_BASE } from '../config';

export default function AuthModal({ open, initialTab, onClose, t, onLoggedIn }) {
  const [tab, setTab] = useState(initialTab || 'login');
  const [signup, setSignup] = useState({ name: '', email: '', password: '', preferredLanguage: 'en' });
  const [login, setLogin] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState({ text: '', ok: false });

  if (!open) return null;

  const submitSignup = async () => {
    setMsg({ text: '', ok: false });
    try {
      const res = await fetch(`${API_BASE}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signup)
      });
      const data = await res.json();
      if (!res.ok) { setMsg({ text: data.message, ok: false }); return; }
      setMsg({ text: 'Account created — you can log in now.', ok: true });
      setLogin({ email: signup.email, password: '' });
      setTimeout(() => setTab('login'), 700);
    } catch (err) {
      setMsg({ text: 'Could not reach the server. Is the backend running?', ok: false });
    }
  };

  const submitLogin = async () => {
    setMsg({ text: '', ok: false });
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login)
      });
      const data = await res.json();
      if (!res.ok) { setMsg({ text: data.message, ok: false }); return; }
      setMsg({ text: `Welcome back, ${data.student.name}.`, ok: true });
      localStorage.setItem('skillverse_token', data.token);
      setTimeout(() => { onLoggedIn(data.student, data.token); onClose(); }, 500);
    } catch (err) {
      setMsg({ text: 'Could not reach the server. Is the backend running?', ok: false });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="tab-row">
          <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>{t.tab_login}</button>
          <button className={tab === 'signup' ? 'active' : ''} onClick={() => setTab('signup')}>{t.tab_signup}</button>
        </div>

        {tab === 'signup' ? (
          <div>
            <h3>{t.signup_title}</h3>
            <p className="modal-sub">{t.signup_sub}</p>
            <div className="field"><label>{t.label_name}</label>
              <input value={signup.name} onChange={e => setSignup({ ...signup, name: e.target.value })} placeholder="Aarav Sharma" />
            </div>
            <div className="field"><label>{t.label_email}</label>
              <input type="email" value={signup.email} onChange={e => setSignup({ ...signup, email: e.target.value })} placeholder="you@example.com" />
            </div>
            <div className="field"><label>{t.label_password}</label>
              <input type="password" value={signup.password} onChange={e => setSignup({ ...signup, password: e.target.value })} placeholder="••••••••" />
            </div>
            <div className="field"><label>{t.label_lang_pref}</label>
              <select value={signup.preferredLanguage} onChange={e => setSignup({ ...signup, preferredLanguage: e.target.value })}>
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="mr">मराठी</option>
              </select>
            </div>
            <button className="btn btn-solid" style={{ width: '100%' }} onClick={submitSignup}>{t.submit_signup}</button>
          </div>
        ) : (
          <div>
            <h3>{t.login_title}</h3>
            <p className="modal-sub">{t.login_sub}</p>
            <div className="field"><label>{t.label_email}</label>
              <input type="email" value={login.email} onChange={e => setLogin({ ...login, email: e.target.value })} placeholder="you@example.com" />
            </div>
            <div className="field"><label>{t.label_password}</label>
              <input type="password" value={login.password} onChange={e => setLogin({ ...login, password: e.target.value })} placeholder="••••••••" />
            </div>
            <button className="btn btn-solid" style={{ width: '100%' }} onClick={submitLogin}>{t.submit_login}</button>
          </div>
        )}
        {msg.text && <p className={`form-msg ${msg.ok ? 'ok' : 'err'}`}>{msg.text}</p>}
      </div>
    </div>
  );
}
