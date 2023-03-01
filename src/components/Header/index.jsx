import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";
import Container from "./styles";

export default function Header({ darkHeader, stickyHeader }) {
  const { pathname } = useRouter();

  return (
    <Container>
      <nav
        className={classNames(
          "navbar navbar-expand-lg navbar-dark",
          {
            "sticky-header": stickyHeader,
            "bg-transparent": !darkHeader,
            "bg-dark": darkHeader,
          }
        )}
      >
        <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-1">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item active">
              <Link
                href={'/about'}
                className={classNames({
                  'btn_inactive': pathname === '/about',
                  'btn': pathname !== '/about',
                })}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-collapse collapse w-40 dual-collapse2 order-1 order-md-1">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item active">
              <Link
                href={'/learn'}
                className={classNames({
                  'btn_inactive': pathname === '/learn',
                  'btn': pathname !== '/learn',
                })}
              >
                Learn
              </Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto my-0 order-0 order-md-1 position-relative">
          <Link href={'/'} className="mx-auto">
            <Image
              src="/images/w3wg_blacktext_300.png"
              className="logo-light"
              width={80}
              height={80}
              alt={"w3wg logo"}
              priority={true}
            />
            <Image
              src="/images/w3wg_lighttext_300.png"
              className="logo-dark"
              width={80}
              height={80}
              alt={"w3wg logo"}
              priority={true}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse w-40 dual-collapse2 order-1 order-md-1">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item active">
              <Link
                href={'/jobs'}
                className={classNames({
                  'btn_inactive': pathname === '/jobs',
                  'btn': pathname !== '/jobs',
                })}
              >
                Jobs
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
          <ul className="navbar-nav mr-auto text-center">
            <li className="nav-item active">
              <Link
                href={'/contact'}
                className={classNames({
                  'btn_inactive': pathname === '/contact',
                  'btn': pathname !== '/contact',
                })}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  )
}

