import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TracksGrid from './components/TracksGrid.jsx';
import ChapterView from './components/ChapterView.jsx';
import AuthModal from './components/AuthModal.jsx';
import PaymentModal from './components/PaymentModal.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import { translations } from './i18n.js';
import { initialTracks } from './data/tracks.js';

export default function App() {
  const [lang, setLang] = useState('en');
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [payOpen, setPayOpen] = useState(false);
  const [payTrack, setPayTrack] = useState(null);
  const [adminOpen, setAdminOpen] = useState(false);
  const [openChapterTrack, setOpenChapterTrack] = useState(null);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('skillverse_token') || null);

  const t = translations[lang];

  const openAuth = (tab) => { setAuthTab(tab); setAuthOpen(true); };

  const handleLoggedIn = (student, tok) => {
    setCurrentStudent(student);
    setToken(tok);
  };

  const handleLogout = () => {
    setCurrentStudent(null);
    setToken(null);
    localStorage.removeItem('skillverse_token');
  };

  const openTrack = (track) => {
    const unlocked = currentStudent && currentStudent.enrolledTracks.includes(track.key);
    if (unlocked && track.hasContent) {
      setOpenChapterTrack(track);
      setTimeout(() => document.getElementById('chapter-sect')?.scrollIntoView({ behavior: 'smooth' }), 50);
    } else if (unlocked && !track.hasContent) {
      alert('This track is unlocked. Its chapters are coming soon in this demo.');
    } else {
      setPayTrack(track);
      setPayOpen(true);
    }
  };

  const openPayment = (track) => { setPayTrack(track); setPayOpen(true); };

  const handleEnrolled = (enrolledTracks) => {
    setCurrentStudent(prev => prev ? { ...prev, enrolledTracks } : prev);
  };

  return (
    <>
      <Navbar
        lang={lang} setLang={setLang} t={t}
        onOpenAuth={openAuth}
        onToggleAdmin={() => setAdminOpen(o => !o)}
        currentStudent={currentStudent}
        onLogout={handleLogout}
      />
      <main className="wrap">
        <Hero t={t} onExplore={() => document.getElementById('tracks-sect')?.scrollIntoView({ behavior: 'smooth' })} onOpenAuth={openAuth} />
        <TracksGrid
          tracks={initialTracks}
          t={t}
          currentStudent={currentStudent}
          onOpenTrack={openTrack}
          onOpenPayment={openPayment}
        />
        {openChapterTrack && <ChapterView trackKey={openChapterTrack.key} trackName={openChapterTrack.name} />}
        <AdminPanel open={adminOpen} t={t} />
      </main>
      <footer>{t.footer}</footer>

      <AuthModal
        open={authOpen}
        initialTab={authTab}
        onClose={() => setAuthOpen(false)}
        t={t}
        onLoggedIn={handleLoggedIn}
      />
      <PaymentModal
        open={payOpen}
        track={payTrack}
        onClose={() => setPayOpen(false)}
        t={t}
        currentStudent={currentStudent}
        token={token}
        onEnrolled={handleEnrolled}
      />
    </>
  );
}