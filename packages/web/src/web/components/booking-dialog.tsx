import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";

export function BookingDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const node = dialog.current;
    if (!node || !open) return;
    const previous = document.activeElement as HTMLElement | null;
    node.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      node.close();
      document.body.style.overflow = oldOverflow;
      previous?.focus();
    };
  }, [open]);

  return (
    <dialog ref={dialog} className="booking-dialog" aria-labelledby="booking-title" aria-describedby="booking-description" onCancel={onClose} onKeyDown={(event) => {
      if (event.key !== "Tab") return;
      const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex="0"]'));
      const current = controls.indexOf(document.activeElement as HTMLElement);
      const next = (current + (event.shiftKey ? -1 : 1) + controls.length) % controls.length;
      if (controls[next]) { event.preventDefault(); controls[next].focus(); }
    }}>
      <div className="dialog-content">
        <div className="dialog-top"><span className="eyebrow">Court booking</span><button className="icon-button" onClick={onClose} aria-label="Close booking dialog"><X size={20} /></button></div>
        <span className="status-label">Website preview · Not live</span>
        <h2 id="booking-title">Your next game<br />starts here.</h2>
        <p id="booking-description">Online booking isn’t connected yet. Court availability, prices and reservations will appear here once the club’s booking service is added.</p>
        <p className="dialog-note">No reservation can be made through this preview.</p>
        <button className="button light-button" onClick={onClose}>Back to the club <ArrowUpRight size={16} /></button>
      </div>
    </dialog>
  );
}