import React from "react";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import {
  navLinks,
  socialLinks,
  companyLinks,
  contactsLinks,
  menuLinksFirstPart,
  menuLinksSecondPart,
} from "./constants/links";
import { NavLink } from "./components/NavLink";
import "./styles/reset.scss";
import style from "./styles/style.module.scss";
import logo from "./images/logo.svg";
import { Button } from "./components/Button";
import { Main } from "./layouts/Main";
import { Section } from "./layouts/Section";
import { intl } from "./utils";
import { INTL } from "./constants/intl";
import { Row } from "./components/Row";
import { Background } from "./components/Background";
import { offerBlocks, offerBlocksMobile } from "./constants/info";
import { LinksGroupTitle } from "./components/LinksGroupTitle";
import { MainWrapper } from "./components/MainWrapper";
import { NavWrapper } from "./components/NavWrapper";
import { BodyInfo } from "./components/BodyInfo";
import { FooterNav } from "./components/FooterNav";

export default function App() {
  return (
    <div className={style.App}>
      <div className={style.wrapper}>
        <Background />

        <Header>
          <Row direction={"column"}>
            <Logo />
            <p className={style.logo}>{intl(INTL.LOGO.MAIN)}</p>
          </Row>

          <NavWrapper>
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </NavWrapper>

          <Row direction={"row"}>
            <a className={style.phone} href={"tel:+7 555 555-55-55"}>
              +7 555 555-55-55
            </a>
            <LinkList items={socialLinks} />
          </Row>
        </Header>

        <Main>
          <Section id="main">
            <Row direction={"column"}>
              <h1>{intl(INTL.TITLES.MAIN)}</h1>

              <h2 className={style.title}>{intl(INTL.TITLES.SUB_MAIN)}</h2>

              <h3 className={style.description}>
                {intl(INTL.TITLES.DESCRIPTION)}
              </h3>
            </Row>
            <BodyInfo>
              <h2 className={style.sub_title}>
                Вместе с<span>{intl(INTL.TITLES.SUB_TITLE)}</span>
                мы дарим:
              </h2>
              <MainWrapper>
                {offerBlocks.map((block) => (
                  <div key={block.text} className={style.section_text}>
                    <h6>{block.title}</h6>
                    <p>{block.text}</p>
                  </div>
                ))}
                {offerBlocksMobile.map((block) => (
                  <div key={block.text} className={style.section_text}>
                    <span className={style.line}></span>
                    <p>{block.text}</p>
                  </div>
                ))}
              </MainWrapper>
              <SignUpButton />
            </BodyInfo>
          </Section>
        </Main>

        <Footer>
          <LinkList
            direction="column"
            items={companyLinks}
            title={intl(INTL.ABOUT.COMPANY)}
          />
          <Row>
            <LinkList
              direction="column"
              items={menuLinksFirstPart}
              title={intl(INTL.MENU.TITLE_FIRST_PART)}
            />

            <LinkList
              direction="column"
              items={menuLinksSecondPart}
              title={intl(INTL.MENU.TITLE_SECOND_PART)}
            />
          </Row>

          <FooterNav>
            <h6 className={style.contact}>{intl(INTL.CONTACTS.TITLE)}</h6>
            <a href={"tel: +7 555 555-55-55"} className={style.contact_phone}>
              {intl(INTL.CONTACTS.PHONE)}
            </a>

            <LinkList items={socialLinks} />

            <p className={style.address}>{intl(INTL.CONTACTS.ADDRESS)}</p>

            <span className={style.about}>
              <p>{intl(INTL.COPYRIGHT.COMPANY)}</p>
              <a href={"/politics"}>{intl(INTL.COPYRIGHT.POLITICS)}</a>
            </span>
          </FooterNav>
        </Footer>
      </div>
    </div>
  );
}
const LinkList = ({ items, direction, title }) => {
  return (
    <Row direction={direction}>
      <LinksGroupTitle>{title}</LinksGroupTitle>
      {items.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </Row>
  );
};
const Logo = () => {
  return <img src={logo} alt="logo" width="140" />;
};

const SignUpButton = () => <Button title={intl(INTL.HEADER.SIGN_UP)} />;
