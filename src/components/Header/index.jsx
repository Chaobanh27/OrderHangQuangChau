/* eslint-disable react/no-unknown-property */
/* eslint-disable quotes */
import { useEffect, useState } from "react";
import "../Header/index.css";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

import { IoIosLock } from "react-icons/io";
import { ImUser } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { Col, Flex, Row } from "antd";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  // nút scrollTo
  const [isHovered, setIsHovered] = useState(false);
  const [code, SetCode] = useState("");

  // nút navbar menu mobile
  const [menu, SetMenu] = useState(false);
  // nút dropdown trong navbar menu mobile
  const [dropdownMenu, SetDropDownMenu] = useState(false);

  const handleMenuClose = () => {
    SetMenu(false);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const navigation = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ display: `${menu ? "block" : "none"}` }}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={0}>
            <div
              class="mfp-bg off-canvas off-canvas-left main-menu-overlay mfp-ready"
              style={{ height: "6294px", position: "absolute" }}
            ></div>
            <div
              className="mfp-wrap mfp-auto-cursor off-canvas off-canvas-left mfp-ready"
              tabindex="-1"
              style={{ top: "0px", position: "absolute", height: "667px" }}
            >
              <div className="mfp-container mfp-s-ready mfp-inline-holder">
                <div className="mfp-content">
                  <div id="main-menu" className="mobile-sidebar no-scrollbar">
                    <div className="sidebar-menu no-scrollbar ">
                      <ul
                        className="nav nav-sidebar nav-vertical nav-uppercase"
                        data-tab="1"
                      >
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-1169">
                          <Link
                            onClick={handleMenuClose}
                            to={"/"}
                            aria-current="page"
                          >
                            Trang chủ
                          </Link>
                        </li>
                        <li
                          onClick={() => SetDropDownMenu(!dropdownMenu)}
                          className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1159 has-child ${dropdownMenu ? "active " : ""}`}
                          aria-expanded="false"
                        >
                          <Link to={"/bang-gia"}>Bảng giá</Link>
                          <button
                            className="toggle"
                            aria-label="Toggle"
                            fdprocessedid="cmn95k"
                          >
                            <IoChevronDownOutline
                              style={{ fontSize: "20px" }}
                            />
                          </button>
                          <ul className="sub-menu nav-sidebar-ul children">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1194">
                              <Link onClick={handleMenuClose} to={"/bang-gia"}>
                                Bảng giá dịch vụ đặt hàng Trung Quốc
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1195">
                              <Link
                                onClick={handleMenuClose}
                                to={"/bang-gia-ky-gui-hang"}
                              >
                                Bảng giá ký gửi vận chuyển
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1196">
                              <Link
                                onClick={handleMenuClose}
                                to={
                                  "/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung"
                                }
                              >
                                Bảng giá dịch vụ chuyển tiền
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1160">
                          <Link
                            onClick={handleMenuClose}
                            to={"/chinh-sach-bao-mat"}
                          >
                            Chính sách
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1161">
                          <Link
                            to={"/huong-dan-mua-hang-tren-taobao-1688"}
                            onClick={handleMenuClose}
                          >
                            Hướng dẫn
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12">
                          <Link
                            to={"/category/tin-tuc"}
                            onClick={handleMenuClose}
                          >
                            Tin tức
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1168">
                          <Link to={"/tracking"} onClick={handleMenuClose}>
                            Vận đơn
                          </Link>
                        </li>
                        <li className="header-contact-wrapper">
                          <ul
                            id="header-contact"
                            className="nav nav-divided nav-uppercase header-contact"
                          >
                            <li className="">
                              <a
                                href="mailto:orderhang89@gmail.com"
                                className="tooltip"
                                title="orderhang89@gmail.com"
                              >
                                <IoMailOpenOutline
                                  style={{
                                    fontSize: "16px",
                                    marginRight: "4px",
                                  }}
                                />
                                <span>orderhang89@gmail.com </span>
                              </a>
                            </li>
                            <li className="">
                              <a
                                href="tel:0971.243.666"
                                className="tooltip"
                                title="0971.243.666"
                              >
                                <FaPhone
                                  style={{
                                    marginRight: "8px",
                                    fontSize: "12px",
                                  }}
                                />
                                <span>0971.243.666</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="html custom html_topbar_left">
                          <ul className="account-menu">
                            <li>
                              <Link
                                to={"/dashboard/register"}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <ImUser
                                  style={{
                                    fontSize: "16px",
                                    marginRight: "4px",
                                  }}
                                />{" "}
                                Đăng ký
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/dashboard/login"}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <IoIosLock
                                  style={{
                                    fontSize: "16px",
                                    marginRight: "4px",
                                  }}
                                />{" "}
                                Đăng nhập
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/dashboard/cart"}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <IoIosCart
                                  style={{
                                    fontSize: "16px",
                                    marginRight: "4px",
                                  }}
                                />{" "}
                                Giỏ hàng
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="html custom html_topbar_right">
                          <img
                            width="30"
                            src="https://orderhangquangchau.com/wp-content/uploads/tien-te.png"
                          />
                          Tỉ giá: : 3625
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mfp-preloader">Loading...</div>
              </div>
              <button
                onClick={() => SetMenu(!menu)}
                title="Close (Esc)"
                type="button"
                className="mfp-close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </Col>
        </Row>
      </div>

      <header
        id="header"
        className={`header has-sticky sticky-jump ${showNav ? "show" : ""}`}
      >
        <div className={`header-wrapper ${showNav ? "stuck" : ""}`}>
          <div id="top-bar" className="header-top hide-for-sticky nav-dark">
            <div className="flex-row container">
              <div className="flex-col hide-for-medium flex-left">
                <ul className="nav nav-left medium-nav-center nav-small  nav-divided">
                  <li className="html custom html_topbar_right">
                    <img
                      width="30"
                      style={{ marginRight: "4px" }}
                      src="https://orderhangquangchau.com/wp-content/uploads/tien-te.png"
                    ></img>
                    Tỉ giá: : 3620
                  </li>
                  <li className="header-contact-wrapper">
                    <ul
                      id="header-contact"
                      className="nav nav-divided nav-uppercase header-contact"
                    >
                      <li className="">
                        <a
                          href="mailto:orderhang89@gmail.com"
                          className="tooltip"
                          title="orderhang89@gmail.com"
                        >
                          <IoMailOpenOutline
                            style={{
                              fontSize: "16px",
                              color: "#fff",
                              marginRight: "4px",
                            }}
                          />
                          <span>orderhang89@gmail.com </span>
                        </a>
                      </li>

                      <li className="">
                        <a
                          href="tel:0971.243.666"
                          className="tooltip"
                          title="0971.243.666"
                        >
                          <FaPhone style={{ marginRight: "4px" }} />
                          <span>0971.243.666</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="flex-col hide-for-medium flex-center">
                <ul className="nav nav-center nav-small  nav-divided"></ul>
              </div>

              <div className="flex-col hide-for-medium flex-right">
                <ul className="nav top-bar-nav nav-right nav-small  nav-divided">
                  <li className="html custom html_topbar_left">
                    <ul className="account-menu">
                      <li>
                        <Link
                          to={"/dashboard/register"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ImUser /> Đăng ký
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/dashboard/login"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <IoIosLock /> Đăng nhập
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/dashboard/cart"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <IoIosCart /> Giỏ hàng
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="flex-col show-for-medium flex-grow">
                <ul className="nav nav-center nav-small mobile-nav  nav-divided">
                  <li className="html custom html_topbar_left">
                    <ul className="account-menu">
                      <li>
                        <Link
                          to={"/dashboard/register"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ImUser /> Đăng ký
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/dashboard/login"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <IoIosLock /> Đăng nhập
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/dashboard/cart"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <IoIosCart /> Giỏ hàng
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="masthead" className="header-main nav-dark">
            <div
              className="header-inner flex-row container logo-left medium-logo-center"
              role="navigation"
            >
              {/* <!-- Logo --> */}
              <div id="logo" className="flex-col logo">
                {/* <!-- Header logo --> */}
                <Link
                  to={"/"}
                  title="Order Hàng Quảng Châu &#8211; Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ"
                  rel="home"
                >
                  <img
                    width="188"
                    height="54"
                    src="https://orderhangquangchau.com/wp-content/uploads/2022/09/logo.png"
                    className="header_logo header-logo"
                    alt="Order Hàng Quảng Châu &#8211; Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ"
                  />
                  <img
                    width="188"
                    height="54"
                    src="https://orderhangquangchau.com/wp-content/uploads/2022/09/logo.png"
                    className="header-logo-dark"
                    alt="Order Hàng Quảng Châu &#8211; Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ"
                  />
                </Link>
              </div>

              {/* <!-- Mobile Left Elements --> */}
              <div className="flex-col show-for-medium flex-left">
                <ul className="mobile-nav nav nav-left ">
                  <li className="nav-icon has-icon">
                    <a
                      href="#"
                      data-open="#main-menu"
                      data-pos="left"
                      data-bg="main-menu-overlay"
                      data-color=""
                      className="is-small current-lightbox-clicked"
                      aria-label="Menu"
                      aria-controls="main-menu"
                      aria-expanded="false"
                    >
                      <FaBars
                        onClick={() => SetMenu(!menu)}
                        style={{ fontSize: "20px" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Left Elements --> */}
              <div
                className="flex-col hide-for-medium flex-left
          flex-grow"
              >
                <div className="search_auto ">
                  <Flex>
                    <input
                      type="text"
                      name="code"
                      value={code}
                      placeholder="Nhập mã vận đơn cần tra cứu"
                      onChange={(e) => SetCode(e.target.value)}
                    ></input>
                    <button
                      style={{ background: "#284386" }}
                      type="submit"
                      id=""
                      className=""
                      onClick={() => navigation("/tracking")}
                    >
                      <IoSearch style={{ color: "#fff" }} />
                    </button>
                  </Flex>
                </div>
              </div>

              {/* <!-- Right Elements --> */}
              <div className="flex-col hide-for-medium flex-right">
                <ul className="header-nav header-nav-main nav nav-right  nav-uppercase">
                  <li
                    id="menu-item-1169"
                    className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-1169 ${location.pathname == "/" ? "active" : ""} menu-item-design-default`}
                  >
                    <Link to={"/"} aria-current="page" className="nav-top-link">
                      Trang chủ
                    </Link>
                  </li>
                  <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    id="menu-item-1159"
                    className={`     ${location.pathname == "/bang-gia" || location.pathname === "/bang-gia-ky-gui-hang" || location.pathname === "/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung" ? "active" : ""} menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1159 menu-item-design-default ${isHovered ? "current-dropdown" : ""}`}
                  >
                    <Link to={"/bang-gia"} className="nav-top-link">
                      Bảng giá <IoChevronDownOutline />
                    </Link>
                    <ul className="sub-menu nav-dropdown nav-dropdown-default">
                      <li
                        id="menu-item-1194"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1194"
                      >
                        <Link to={"/bang-gia"}>
                          Bảng giá dịch vụ đặt hàng Trung Quốc
                        </Link>
                      </li>
                      <li
                        id="menu-item-1195"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1195"
                      >
                        <Link to={"/bang-gia-ky-gui-hang"}>
                          Bảng giá ký gửi vận chuyển
                        </Link>
                      </li>
                      <li
                        id="menu-item-1196"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1196"
                      >
                        <Link
                          to={
                            "/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung"
                          }
                        >
                          Bảng giá dịch vụ chuyển tiền
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1160"
                    className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1160 ${location.pathname === "/chinh-sach-bao-mat" ? "active" : ""} menu-item-design-default`}
                  >
                    <Link to={"/chinh-sach-bao-mat"} className="nav-top-link">
                      Chính sách
                    </Link>
                  </li>
                  <li
                    id="menu-item-1161"
                    className={`  ${location.pathname === "/huong-dan-mua-hang-tren-taobao-1688" ? "active" : ""} menu-item menu-item-type-post_type menu-item-object-page menu-item-1161 menu-item-design-default`}
                  >
                    <Link
                      to={"/huong-dan-mua-hang-tren-taobao-1688"}
                      className="nav-top-link"
                    >
                      Hướng dẫn
                    </Link>
                  </li>
                  <li
                    id="menu-item-12"
                    className={`menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12 menu-item-design-default
                    ${location.pathname === "/category/tin-tuc" ? "active" : ""}
                    `}
                  >
                    <Link to={"/category/tin-tuc"} className="nav-top-link">
                      Tin tức
                    </Link>
                  </li>
                  <li
                    id="menu-item-1168"
                    className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1168 menu-item-design-default
                    ${location.pathname === "/tracking" ? "active" : ""}
                    `}
                  >
                    <Link to={"/tracking"} className="nav-top-link">
                      Vận đơn
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Mobile Right Elements --> */}
              <div className="flex-col show-for-medium flex-right">
                <ul className="mobile-nav nav nav-right "></ul>
              </div>
            </div>

            <div className="container">
              <div className="top-divider full-width"></div>
            </div>
          </div>
          <div id="wide-nav" className="header-bottom wide-nav show-for-medium">
            <div className="flex-row container">
              <div className="flex-col show-for-medium flex-grow">
                <ul className="nav header-bottom-nav nav-center mobile-nav  nav-uppercase">
                  <div className="search_auto ">
                    <Flex>
                      <input
                        type="text"
                        name="code"
                        value={code}
                        placeholder="Nhập mã vận đơn cần tra cứu"
                        onChange={(e) => SetCode(e.target.value)}
                      ></input>
                      <button
                        style={{ background: "#284386" }}
                        type="submit"
                        id=""
                        className=""
                        onClick={() => navigation("/tracking")}
                      >
                        <IoSearch style={{ color: "#fff" }} />
                      </button>
                    </Flex>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className="header-bg-container fill">
            <div className="header-bg-image fill"></div>
            <div className="header-bg-color fill"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
