import { QRCodeSVG } from 'qrcode.react';
import { API_BASE, UPI_ID } from '../config';

export default function PaymentModal({ open, track, onClose, t, currentStudent, token, onEnrolled }) {
  if (!open || !track) return null;

  const uri = `upi://pay?pa=${UPI_ID}&pn=Skillverse&am=${track.fee}.00&cu=INR&tn=${encodeURIComponent('Skillverse ' + track.name + ' course')}`;

  const markPaid = async () => {
    if (!currentStudent) {
      alert('Log in first, then come back to enrol.');
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/api/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ trackKey: track.key })
      });
      const data = await res.json();
      if (!res.ok) { alert(data.message); return; }
      onEnrolled(data.enrolledTracks);
      onClose();
    } catch (err) {
      alert('Could not reach the server. Is the backend running?');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h3>{t.pay_title}</h3>
        <p className="modal-sub">{t.pay_sub}</p>
        <div className="pay-summary">
          <span className="pay-course">{track.name} track</span>
          <span className="pay-amount">₹{track.fee.toLocaleString('en-IN')}</span>
        </div>
        <div className="qr-holder">
          <QRCodeSVG value={uri} size={180} />
        </div>
        <div className="upi-id-row">UPI ID: <b>{UPI_ID}</b></div>
        <a className="btn btn-solid" style={{ width: '100%', display: 'block', textAlign: 'center', boxSizing: 'border-box' }} href={uri}>{t.pay_open_app}</a>
        <button className="btn" style={{ width: '100%', marginTop: 10 }} onClick={markPaid}>{t.pay_confirm}</button>
        <p className="pay-note">{t.pay_note}</p>
      </div>
    </div>
  );
}
