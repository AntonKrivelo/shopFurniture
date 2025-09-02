import './Loader.css';

export default function Loader({
  text = 'Пожалуйста подождите...',
  size = 80, // диаметр спиннера в px
  fullScreen = true, // затемняет весь экран
}) {
  return (
    <div
      className={fullScreen ? 'loader-overlay' : 'loader-wrap'}
      aria-busy="true"
      aria-live="polite"
    >
      <div
        className="loader-spinner"
        style={{ width: size, height: size, borderWidth: Math.max(2, Math.round(size / 10)) }}
        aria-label={text}
        role="status"
      />
      {text && <span className="loader-text">{text}</span>}
    </div>
  );
}
