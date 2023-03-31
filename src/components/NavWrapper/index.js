import style from "./style.module.scss";
import { Row } from "../Row";

export const NavWrapper = ({ children }) => (
  <Row className={style.wrapper} direction={"row"}>
    {children}
  </Row>
);
