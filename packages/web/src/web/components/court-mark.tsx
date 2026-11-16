export function CourtMark({ small = false }: { small?: boolean }) {
  return (
    <svg viewBox="0 0 320 440" fill="none" aria-hidden="true" className={small ? "court-mark small" : "court-mark"}>
      <path className="court-boundary" d="M160 24H294V416H26V24H132" />
      <path className="court-inner" d="M26 112H294M26 328H294M160 112V216M160 244V328" />
      <path className="court-net" d="M12 230H308" />
      {!small && <path className="court-net-ticks" d="M26 223V237M294 223V237" />}
    </svg>
  );
}