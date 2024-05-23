/* eslint-disable quotes */
import { useEffect, useState } from "react"
import "../Header/index.css"
import { IoMailOpenOutline } from "react-icons/io5"
import { FaPhone } from "react-icons/fa6"
import { IoChevronDownOutline } from "react-icons/io5"
import { IoIosCart } from "react-icons/io"
import { IoSearch } from "react-icons/io5"

import { IoIosLock } from "react-icons/io"
import { ImUser } from "react-icons/im"
const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
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
                            marginRight: "4px"
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
                      <a
                        target="_blank"
                        href="http://localhost:5173/dashboard/register"
                        rel="noreferrer"
                      >
                        <ImUser /> Đăng ký
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="http://localhost:5173/dashboard/login"
                        rel="noreferrer"
                      >
                        <IoIosLock /> Đăng nhập
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="http://localhost:5173/dashboard/cart"
                        rel="noreferrer"
                      >
                        <IoIosCart /> Giỏ hàng
                      </a>
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
                      <a
                        target="_blank"
                        href="http://localhost:5173/dashboard/register"
                        rel="noreferrer"
                      >
                        <ImUser /> Đăng ký
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="http://localhost:5173/dashboard/login"
                        rel="noreferrer"
                      >
                        <IoIosLock /> Đăng nhập
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="http://localhost:5173/dashboard/cart"
                        rel="noreferrer"
                      >
                        <IoIosCart /> Giỏ hàng
                      </a>
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
              <a
                href="http://localhost:5173/"
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
              </a>
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
                    className="is-small"
                    aria-label="Menu"
                    aria-controls="main-menu"
                    aria-expanded="false"
                  >
                    <i className="icon-menu"></i>
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
                <form
                  action="/tracking"
                  method="post"
                  className="header_form_tracking"
                  id=""
                >
                  <input
                    type="text"
                    name="code"
                    value=""
                    placeholder="Nhập mã vận đơn cần tra cứu"
                  ></input>
                  <button type="submit" id="" className="">
                    <IoSearch />
                  </button>
                </form>
              </div>
            </div>

            {/* <!-- Right Elements --> */}
            <div className="flex-col hide-for-medium flex-right">
              <ul className="header-nav header-nav-main nav nav-right  nav-uppercase">
                <li
                  id="menu-item-1169"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-1169 active menu-item-design-default"
                >
                  <a
                    href="http://localhost:5173/"
                    aria-current="page"
                    className="nav-top-link"
                  >
                    Trang chủ
                  </a>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  id="menu-item-1159"
                  className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1159 menu-item-design-default ${isHovered ? "current-dropdown" : ""}`}
                >
                  <a
                    href="http://localhost:5173/bang-gia"
                    className="nav-top-link"
                  >
                    Bảng giá <IoChevronDownOutline />
                  </a>
                  <ul className="sub-menu nav-dropdown nav-dropdown-default">
                    <li
                      id="menu-item-1194"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1194"
                    >
                      <a href="http://localhost:5173/bang-gia">
                        Bảng giá dịch vụ đặt hàng Trung Quốc
                      </a>
                    </li>
                    <li
                      id="menu-item-1195"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1195"
                    >
                      <a href="http://localhost:5173/bang-gia-ky-gui-hang">
                        Bảng giá ký gửi vận chuyển
                      </a>
                    </li>
                    <li
                      id="menu-item-1196"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1196"
                    >
                      <a href="http://localhost:5173/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung">
                        Bảng giá dịch vụ chuyển tiền
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-1160"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1160 menu-item-design-default"
                >
                  <a
                    href="http://localhost:5173/chinh-sach-bao-mat"
                    className="nav-top-link"
                  >
                    Chính sách
                  </a>
                </li>
                <li
                  id="menu-item-1161"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1161 menu-item-design-default"
                >
                  <a
                    href="http://localhost:5173/huong-dan-mua-hang-tren-taobao-1688"
                    className="nav-top-link"
                  >
                    Hướng dẫn
                  </a>
                </li>
                <li
                  id="menu-item-12"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12 menu-item-design-default"
                >
                  <a
                    href="http://localhost:5173/category/tin-tuc"
                    className="nav-top-link"
                  >
                    Tin tức
                  </a>
                </li>
                <li
                  id="menu-item-1168"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1168 menu-item-design-default"
                >
                  <a
                    href="http://localhost:5173/tracking"
                    className="nav-top-link"
                  >
                    Vận đơn
                  </a>
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
                  <form
                    action="/tracking"
                    method="post"
                    className="header_form_tracking"
                    id=""
                  >
                    <input
                      type="text"
                      name="code"
                      value=""
                      placeholder="Nhập mã vận đơn cần tra cứu"
                    ></input>
                    <button type="submit" id="" className="">
                      <IoSearch />
                    </button>
                  </form>
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
  )
}

export default Header
