import React from "react";
import style from "./style.module.scss";
import purple_ball from "../../images/purple ball.svg";
import purple_light from "../../images/purple light.svg";
import red_ball from "../../images/red ball.svg";
import red_ball2 from "../../images/red ball-1.svg";
import red_light from "../../images/red light.svg";
export const Background = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <img
          src={purple_ball}
          alt="purple_ball"
          className={style.purple_ball}
        />
        <img
          src={purple_light}
          alt="purple_light"
          className={style.purple_light}
        />
        <img src={red_ball} alt="red_ball" className={style.red_ball} />
        <img src={red_ball2} alt="red_ball" className={style.red_ball2} />
        <img src={red_light} alt="red_light" className={style.red_light} />
      </div>
    </div>
  );
};
