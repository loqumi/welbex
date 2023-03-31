import style from "./style.module.scss";

export const MainWrapper = ({ children }) => (
  <div className={style.wrapper}>{children}</div>
);
