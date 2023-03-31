import style from "./style.module.scss";

export const LinksGroupTitle = ({ children }) =>
  children ? <h6 className={style.title}>{children}</h6> : null;
