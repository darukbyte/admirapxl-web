import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex-around">
          <li>
            <Link href="/about">
              <a>ABOUT ME</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <figure>
                <img src="isotipo-vector.svg" alt="logo" />
              </figure>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>PORTFOLIO</a>
            </Link>
          </li>
        </ul>
        <style jsx>{`
          nav {
            width: 100%;
            height: 80px;
            font-family: var(--quick);
          }
          ul {
            margin: 0 auto;
          }
          figure {
            width: 70px;
            height: 70px;
          }
          a {
            font-size: var(--nav);
            font-weight: var(--bold);
            color: var(--white);
          }
        `}</style>
      </nav>
    </>
  );
}

export { Navbar };
