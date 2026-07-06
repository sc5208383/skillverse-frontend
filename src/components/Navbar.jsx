export default function Navbar({ lang, setLang, t, onOpenAuth, onToggleAdmin, currentStudent, onLogout }) {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <div className="logo"><span className="dot"></span><span className="logo-text">SKILLVERSE</span></div>
        <div className="nav-right">
          <div className="lang-switch" role="group" aria-label="Language">
            {['en', 'hi', 'mr'].map(code => (
              <button key={code} className={lang === code ? 'active' : ''} onClick={() => setLang(code)}>
                {code === 'en' ? 'EN' : code === 'hi' ? 'हिं' : 'मर'}
              </button>
            ))}
          </div>
          <button className="btn-ghost-admin" onClick={onToggleAdmin}>Admin</button>
          {currentStudent ? (
            <>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--paper-dim)' }}>{currentStudent.name}</span>
              <button className="btn" onClick={onLogout}>Log out</button>
            </>
          ) : (
            <>
              <button className="btn" onClick={() => onOpenAuth('login')}>{t.nav_login}</button>
              <button className="btn btn-solid" onClick={() => onOpenAuth('signup')}>{t.nav_signup}</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
