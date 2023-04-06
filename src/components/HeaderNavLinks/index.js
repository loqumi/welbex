import style from "./style.module.scss";
import { Row } from "../Row";

export const HeaderNavLinks = ({ children }) => (
  <Row className={style.wrapper} direction={"row"}>
    {children}
  </Row>
);
