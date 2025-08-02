import "./app.css";

export function App() {
  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          src="https://avatar.iran.liara.run/public/44"
          alt="avatar"
          className="tw-follow-card-img"
        />
        <div className="tw-follow-card-div">
          <strong className="tw-follow-card-strong">Avatar</strong>
          <span className="tw-follow-card-span">@avatar</span>
        </div>
      </header>
      <aside className="tw-follow-card-aside">
        <button className="tw-follow-card-btn">Seguir</button>
      </aside>
    </article>
  );
}
