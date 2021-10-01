import React from "react";
import { NavButton } from "./NavButton";
import { Logo } from "./Logo";
import { Links } from "./Links";
import { Contact } from "./Contact";
import { IconLinks } from "./IconLinks";
import { Footer } from "./Footer";

function Menu(props) {
  return (
    <>
      <article className="menu-button">
        <NavButton onMenu={props.event} icon="fas fa-times" />
      </article>
      <Logo />
      <ul>
        <Links />
      </ul>
      <article className="menu-icon-set flex-column center">
        <Contact />
        <div>
          <IconLinks
            url="https://github.com/admiralpxl/"
            iconName="fab fa-github"
          />
          <IconLinks
            url="https://twitter.com/admiralpxl?s=08"
            iconName="fab fa-twitter"
          />
          <IconLinks
            url="https://www.linkedin.com/in/admiralpxl/"
            iconName="fab fa-linkedin-in"
          />
        </div>
      </article>
      <Footer />

      <style jsx>{`
        .menu-button {
          display: flex;
          padding-right: 12px;
          padding-top: 12px;
          justify-content: end;
        }
        .menu-icon-set {
          position: absolute;
          bottom: 60px;
          left: 50%;
          right: 50%;
          gap: 8px;
        }
        .menu-icon-set div {
          display: flex;
          gap: 8px;
        }
        @media (min-width: 768px) {
          .menu-icon-set {
            left: 20px;
            align-items: start;
            width: 200px;
          }
          .menu-icon-set div {
            flex-direction: column;
            align-self: start;
          }
          ul {
            margin-top: 48px;
          }
        }
      `}</style>
    </>
  );
}

export { Menu };
