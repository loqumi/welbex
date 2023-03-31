import style from "./style.module.scss";

export const BodyInfo = ({ children }) => (
  <div className={style.body}>{children}</div>
);
