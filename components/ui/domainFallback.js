import s from "./styles/fallback.module.scss";

export default function Fallback() {
  return (
    <div className={s.fallback}>
      <img
        className={s.background}
        src="https://images.unsplash.com/photo-1659716407610-5107f001c982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&h=750&q=80"
      />
      <div className={s.content}>
        <h1>404</h1>
      </div>
    </div>
  );
}
