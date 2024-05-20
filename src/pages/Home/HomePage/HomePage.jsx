/* eslint-disable quotes */
import { useState } from "react";
import "../HomePage/index.css";
import { useEffect } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);

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
    <div>
      {/* class="home page-template page-template-page-blank
      page-template-page-blank-php page page-id-2 lightbox
      nav-dropdown-has-arrow nav-dropdown-has-shadow nav-dropdown-has-border"> */}
      <a className="skip-link screen-reader-text" href="#main">
        Skip to content
      </a>
      <div id="wrapper">
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
                        src="/wp-content/uploads/tien-te.png"
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
                            <i
                              className="icon-envelop"
                              style={{ fontSize: "16px" }}
                            ></i>{" "}
                            <span>orderhang89@gmail.com </span>
                          </a>
                        </li>

                        <li className="">
                          <a
                            href="tel:0971.243.666"
                            className="tooltip"
                            title="0971.243.666"
                          >
                            <i
                              className="icon-phone"
                              style={{ fontSize: "16px" }}
                            ></i>
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
                            href="http://my.orderhangquangchau.com/register"
                            rel="noreferrer"
                          >
                            <i className="icon-user"></i> Đăng ký
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="http://my.orderhangquangchau.com/login"
                            rel="noreferrer"
                          >
                            <i className="icon-lock"></i> Đăng nhập
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://my.orderhangquangchau.com/cart"
                            rel="noreferrer"
                          >
                            <i className="icon-shopping-cart"></i> Giỏ hàng
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
                            href="http://my.orderhangquangchau.com/register"
                            rel="noreferrer"
                          >
                            <i className="icon-user"></i> Đăng ký
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="http://my.orderhangquangchau.com/login"
                            rel="noreferrer"
                          >
                            <i className="icon-lock"></i> Đăng nhập
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://my.orderhangquangchau.com/cart"
                            rel="noreferrer"
                          >
                            <i className="icon-shopping-cart"></i> Giỏ hàng
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
                    href="https://orderhangquangchau.com/"
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
                        <i className="icon-search"></i>
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
                        href="https://orderhangquangchau.com/"
                        aria-current="page"
                        className="nav-top-link"
                      >
                        Trang chủ
                      </a>
                    </li>
                    <li
                      id="menu-item-1159"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1159 menu-item-design-default has-dropdown"
                    >
                      <a
                        href="https://orderhangquangchau.com/bang-gia"
                        className="nav-top-link"
                      >
                        Bảng giá<i className="icon-angle-down"></i>
                      </a>
                      <ul className="sub-menu nav-dropdown nav-dropdown-default">
                        <li
                          id="menu-item-1194"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1194"
                        >
                          <a href="https://orderhangquangchau.com/bang-gia">
                            Bảng giá dịch vụ đặt hàng Trung Quốc
                          </a>
                        </li>
                        <li
                          id="menu-item-1195"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1195"
                        >
                          <a href="https://orderhangquangchau.com/bang-gia-ky-gui-hang.html">
                            Bảng giá ký gửi vận chuyển
                          </a>
                        </li>
                        <li
                          id="menu-item-1196"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1196"
                        >
                          <a href="https://orderhangquangchau.com/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung.html">
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
                        href="https://orderhangquangchau.com/chinh-sach-bao-mat"
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
                        href="https://orderhangquangchau.com/huong-dan-mua-hang-tren-taobao-1688"
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
                        href="https://orderhangquangchau.com/category/tin-tuc"
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
                        href="https://orderhangquangchau.com/tracking"
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
            <div
              id="wide-nav"
              className="header-bottom wide-nav show-for-medium"
            >
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
                          <i className="icon-search"></i>
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

        <main id="main" className="">
          <div id="content" role="main" className="content-area">
            <div
              className="banner has-hover is-full-height hide-for-small"
              id="banner-1079099535"
            >
              <div className="banner-inner fill">
                <div className="banner-bg fill">
                  <div className="bg fill bg-fill bg-loaded"></div>
                </div>

                <div className="banner-layers container">
                  <div className="fill banner-link"></div>
                  <div
                    id="text-box-1571724355"
                    className="text-box banner-layer x50 md-x50 lg-x50 y100 md-y90 lg-y90 res-text"
                  >
                    <div className="text-box-content text dark">
                      <div className="text-inner text-center">
                        <div className="app-install-block app-install-block2">
                          <div className="app-install-item app-install-right">
                            <strong>Cài đặt công cụ đặt hàng</strong>
                            <a
                              className="addon google animated bounceInUp go"
                              href="https://chrome.google.com/webstore/detail/tool-order-h%C3%A0ng-qu%E1%BA%A3ng-ch%C3%A2/hgiaoallflpjbfaheamijjllodfacmlb?authuser=4&amp;fbclid=IwAR2i1KlcQh5scVfTFKx1ZwAu_iNDtUe0qzJqyKKfu4jutXH1fszwBk3NF-8"
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                            >
                              <span className="icon"></span>
                              <span className="text">
                                Tải về cho trình duyệt
                                <b>Google chrome</b>
                              </span>
                            </a>
                            <a
                              className="addon cococ animated bounceInUp go"
                              href="https://chrome.google.com/webstore/detail/tool-order-h%C3%A0ng-qu%E1%BA%A3ng-ch%C3%A2/hgiaoallflpjbfaheamijjllodfacmlb?authuser=4&amp;fbclid=IwAR2i1KlcQh5scVfTFKx1ZwAu_iNDtUe0qzJqyKKfu4jutXH1fszwBk3NF-8"
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                            >
                              <span className="icon"></span>
                              <span className="text">
                                Tải về cho trình duyệt
                                <b>Coccoc</b>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row row-collapse row-full-width show-for-small"
              id="row-1580471725"
            >
              <div id="col-281541545" className="col small-12 large-12">
                <div className="col-inner">
                  <div
                    className="img has-hover x md-x lg-x y md-y lg-y"
                    id="image_1963509944"
                  >
                    <div className="img-inner dark">
                      <img
                        fetchPriority="high"
                        decoding="async"
                        width="1020"
                        height="496"
                        src="https://orderhangquangchau.com/wp-content/uploads/2022/09/logistic-1024x498.jpg"
                        className="attachment-large size-large"
                        alt=""
                        srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/logistic-1024x498.jpg 1024w, https://orderhangquangchau.com/wp-content/uploads/2022/09/logistic-300x146.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/logistic-768x373.jpg 768w, https://orderhangquangchau.com/wp-content/uploads/2022/09/logistic-1536x747.jpg 1536w, https://orderhangquangchau.com/wp-content/uploads/2022/09/logistic.jpg 1900w"
                        sizes="(max-width: 1020px) 100vw, 1020px"
                      />
                    </div>
                  </div>

                  <div className="app-install-block show-for-small">
                    <div className="app-install-item app-install-right">
                      <strong>Cài đặt công cụ đặt hàng</strong>
                      <a
                        className="addon google animated bounceInUp go"
                        href="https://chrome.google.com/webstore/detail/tool-order-h%C3%A0ng-qu%E1%BA%A3ng-ch%C3%A2/hgiaoallflpjbfaheamijjllodfacmlb?authuser=4&amp;fbclid=IwAR2i1KlcQh5scVfTFKx1ZwAu_iNDtUe0qzJqyKKfu4jutXH1fszwBk3NF-8"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <span className="icon"></span>
                        <span className="text">
                          Tải về cho trình duyệt <b>Google chrome</b>
                        </span>
                      </a>
                      <a
                        className="addon cococ animated bounceInUp go"
                        href="https://chrome.google.com/webstore/detail/tool-order-h%C3%A0ng-qu%E1%BA%A3ng-ch%C3%A2/hgiaoallflpjbfaheamijjllodfacmlb?authuser=4&amp;fbclid=IwAR2i1KlcQh5scVfTFKx1ZwAu_iNDtUe0qzJqyKKfu4jutXH1fszwBk3NF-8"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <span className="icon"></span>
                        <span className="text">
                          Tải về cho trình duyệt <b>Coccoc</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" id="row-1455290900">
              <div id="col-1653383755" className="col small-12 large-12">
                <div className="col-inner">
                  <div className="container section-title-container">
                    <h3 className="section-title section-title-center">
                      <b></b>
                      <span
                        className="section-title-main"
                        style={{ fontSize: "145%" }}
                      >
                        QUY TRÌNH ĐẶT HÀNG
                      </span>
                      <b></b>
                    </h3>
                  </div>
                  <div className="row quy_trinh_dat_hang" id="row-1961573278">
                    <div
                      id="col-818778135"
                      className="col medium-2 small-4 large-2"
                    >
                      <div className="col-inner text-center">
                        <div className="icon-box featured-box icon-box-left text-left">
                          <div
                            className="icon-box-img"
                            style={{ width: "60px" }}
                          >
                            <div className="icon">
                              <div className="icon-inner">
                                <img
                                  decoding="async"
                                  width="128"
                                  height="128"
                                  src="https://orderhangquangchau.com/wp-content/uploads/2022/10/search.png"
                                  className="attachment-medium size-medium"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="icon-box-text last-reset">
                            <div id="text-1707636178" className="text">
                              <h3>
                                TÌM KIẾM
                                <br />
                                SẢN PHẨM
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="col-1761741102"
                      className="col medium-2 small-4 large-2"
                    >
                      <div className="col-inner text-center">
                        <div className="icon-box featured-box icon-box-left text-left">
                          <div
                            className="icon-box-img"
                            style={{ width: "60px" }}
                          >
                            <div className="icon">
                              <div className="icon-inner">
                                <img
                                  decoding="async"
                                  width="300"
                                  height="300"
                                  src="https://orderhangquangchau.com/wp-content/uploads/2022/10/cargo-300x300.png"
                                  className="attachment-medium size-medium"
                                  alt=""
                                  srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/10/cargo-300x300.png 300w, https://orderhangquangchau.com/wp-content/uploads/2022/10/cargo-150x150.png 150w, https://orderhangquangchau.com/wp-content/uploads/2022/10/cargo.png 512w"
                                  sizes="(max-width: 300px) 100vw, 300px"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="icon-box-text last-reset">
                            <div id="text-4285712716" className="text">
                              <h3>
                                TẠO
                                <br />
                                ĐƠN HÀNG
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="col-1949307653"
                      className="col medium-2 small-4 large-2"
                    >
                      <div className="col-inner text-center">
                        <div className="icon-box featured-box icon-box-left text-left">
                          <div
                            className="icon-box-img"
                            style={{ width: "60px" }}
                          >
                            <div className="icon">
                              <div className="icon-inner">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="300"
                                  height="300"
                                  src="https://orderhangquangchau.com/wp-content/uploads/2022/10/salary-300x300.png"
                                  className="attachment-medium size-medium"
                                  alt=""
                                  srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/10/salary-300x300.png 300w, https://orderhangquangchau.com/wp-content/uploads/2022/10/salary-150x150.png 150w, https://orderhangquangchau.com/wp-content/uploads/2022/10/salary.png 512w"
                                  sizes="(max-width: 300px) 100vw, 300px"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="icon-box-text last-reset">
                            <div id="text-3972050263" className="text">
                              <h3>
                                ĐẶT CỌC
                                <br />
                                TIỀN HÀNG
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="col-595459306"
                      className="col medium-2 small-4 large-2"
                    >
                      <div className="col-inner text-center">
                        <div className="icon-box featured-box icon-box-left text-left">
                          <div
                            className="icon-box-img"
                            style={{ width: "60px" }}
                          >
                            <div className="icon">
                              <div className="icon-inner">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="256"
                                  height="256"
                                  src="https://orderhangquangchau.com/wp-content/uploads/2022/10/delivery.png"
                                  className="attachment-medium size-medium"
                                  alt=""
                                  srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/10/delivery.png 256w, https://orderhangquangchau.com/wp-content/uploads/2022/10/delivery-150x150.png 150w"
                                  sizes="(max-width: 256px) 100vw, 256px"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="icon-box-text last-reset">
                            <div id="text-1166180467" className="text">
                              <h3>THEO DÕI ĐƠN HÀNG</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="col-973850935"
                      className="col medium-2 small-4 large-2"
                    >
                      <div className="col-inner text-center">
                        <div className="icon-box featured-box icon-box-left text-left">
                          <div
                            className="icon-box-img"
                            style={{ width: "60px" }}
                          >
                            <div className="icon">
                              <div className="icon-inner">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="300"
                                  height="300"
                                  src="https://orderhangquangchau.com/wp-content/uploads/2022/10/siparis_yonetimi-300x300.png"
                                  className="attachment-medium size-medium"
                                  alt=""
                                  srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/10/siparis_yonetimi-300x300.png 300w, https://orderhangquangchau.com/wp-content/uploads/2022/10/siparis_yonetimi-150x150.png 150w, https://orderhangquangchau.com/wp-content/uploads/2022/10/siparis_yonetimi.png 512w"
                                  sizes="(max-width: 300px) 100vw, 300px"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="icon-box-text last-reset">
                            <div id="text-3579594028" className="text">
                              <h3>THANH TOÁN &amp; NHẬN HÀNG</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="section" id="section_1772018185">
              <div className="bg section-bg fill bg-fill  bg-loaded"></div>

              <div className="section-content relative">
                <div className="row" id="row-72814284">
                  <div id="col-1450658045" className="col small-12 large-12">
                    <div className="col-inner">
                      <div className="container section-title-container">
                        <h3 className="section-title section-title-center">
                          <b></b>
                          <span
                            className="section-title-main"
                            style={{ fontSize: "116%" }}
                          >
                            DỊCH VỤ ĐẶT HÀNG TRUNG QUỐC CỦA CHÚNG TÔI
                          </span>
                          <b></b>
                        </h3>
                      </div>
                      <div id="text-3378223356" className="text">
                        <p>
                          Chọn ngay hệ thống website chất lượng, uy tín, đa dạng
                          mặt hàng với nhiều mẫu mã và giá cả hợp lí, vận chuyển
                          nhanh chóng, thanh toán tiện lợi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" id="row-1170957006">
                  <div
                    id="col-676419356"
                    className="col medium-6 small-12 large-6"
                  >
                    <div className="col-inner">
                      <div
                        className="icon-box featured-box item_service icon-box-left text-left"
                        style={{ margin: "0px 0px 20px 0px" }}
                      >
                        <div
                          className="icon-box-img has-icon-bg"
                          style={{ width: "107px" }}
                        >
                          <div className="icon">
                            <div
                              className="icon-inner"
                              style={{
                                borderWidth: "1px",
                                color: "rgb(2, 44, 190)",
                              }}
                            >
                              <img
                                loading="lazy"
                                decoding="async"
                                width="300"
                                height="300"
                                src="https://orderhangquangchau.com/wp-content/uploads/2022/09/cargo.jpg"
                                className="attachment-medium size-medium"
                                alt=""
                                srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/cargo.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/cargo-150x150.jpg 150w"
                                sizes="(max-width: 300px) 100vw, 300px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="icon-box-text last-reset">
                          <h3>Dịch vụ đặt hàng Quốc tế</h3>
                          <p>
                            Đó là những trở ngại mà bất cứ chủ cửa hàng, chủ
                            shop, doanh nhân nào muốn đặt hàng Quảng Châu hay
                            bạn nào yêu thích mua sắm đều có lúc gặp phải.
                          </p>
                        </div>
                      </div>

                      <div
                        className="icon-box featured-box item_service icon-box-left text-left"
                        style={{ margin: "0px 0px 20px 0px" }}
                      >
                        <div
                          className="icon-box-img has-icon-bg"
                          style={{ width: "107px" }}
                        >
                          <div className="icon">
                            <div
                              className="icon-inner"
                              style={{
                                borderWidth: "1px",
                                color: "rgb(2, 44, 190)",
                              }}
                            >
                              <img
                                loading="lazy"
                                decoding="async"
                                width="300"
                                height="300"
                                src="https://orderhangquangchau.com/wp-content/uploads/2022/09/group.jpg"
                                className="attachment-medium size-medium"
                                alt=""
                                srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/group.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/group-150x150.jpg 150w"
                                sizes="(max-width: 300px) 100vw, 300px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="icon-box-text last-reset">
                          <h3>Dịch vụ ký gửi hàng hóa</h3>
                          <p>
                            Order hàng Quảng Châu với hệ thống hoàn thiện, có
                            thể track lịch sử vận chuyển hàng hóa thuận tiện.
                            Chúng tôi cam kết và đảm bảo hàng hóa của quý khách
                            sẽ về Việt Nam trong thời gian nhanh nhất.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="col-1608018574"
                    className="col medium-6 small-12 large-6"
                  >
                    <div className="col-inner">
                      <div
                        className="icon-box featured-box item_service icon-box-left text-left"
                        style={{ margin: "0px 0px 20px 0px" }}
                      >
                        <div
                          className="icon-box-img has-icon-bg"
                          style={{ width: "107px" }}
                        >
                          <div className="icon">
                            <div
                              className="icon-inner"
                              style={{
                                borderWidth: "1px",
                                color: "rgb(2, 44, 190)",
                              }}
                            >
                              <img
                                loading="lazy"
                                decoding="async"
                                width="300"
                                height="300"
                                src="https://orderhangquangchau.com/wp-content/uploads/2022/09/transportation.jpg"
                                className="attachment-medium size-medium"
                                alt=""
                                srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/transportation.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/transportation-150x150.jpg 150w"
                                sizes="(max-width: 300px) 100vw, 300px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="icon-box-text last-reset">
                          <h3>Vận chuyển hàng Trong nước và Quốc tế</h3>
                          <p>
                            Hãy để chúng tôi <strong>GIẢI QUYẾT</strong> những
                            lo lắng này của bạn, bằng dịch vụ nhận order vận
                            chuyển hàng từ Trung Quốc về Việt Nam.
                          </p>
                        </div>
                      </div>

                      <div
                        className="icon-box featured-box item_service icon-box-left text-left"
                        style={{ margin: "0px 0px 20px 0px" }}
                      >
                        <div
                          className="icon-box-img has-icon-bg"
                          style={{ width: "107px" }}
                        >
                          <div className="icon">
                            <div
                              className="icon-inner"
                              style={{
                                borderWidth: "1px",
                                color: "rgb(2, 44, 190)",
                              }}
                            >
                              <img
                                loading="lazy"
                                decoding="async"
                                width="300"
                                height="300"
                                src="https://orderhangquangchau.com/wp-content/uploads/2022/09/cash-back.jpg"
                                className="attachment-medium size-medium"
                                alt=""
                                srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/cash-back.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/cash-back-150x150.jpg 150w"
                                sizes="(max-width: 300px) 100vw, 300px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="icon-box-text last-reset">
                          <h3>Chuyển tiền Trung Quốc</h3>
                          <p>
                            Dịch vụ đổi tiền, chuyển tiền Trung Quốc &#8211;
                            Việt Nam &#8211; Tỷ giá nhân dân tệ (CNY-RMB) an
                            toàn, uy tín, nhanh chóng hàng đầu Việt Nam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section" id="section_1649609469">
              <div className="bg section-bg fill bg-fill  bg-loaded"></div>

              <div className="section-content relative">
                <div className="container section-title-container uppercase">
                  <h3 className="section-title section-title-center">
                    <b></b>
                    <span
                      className="section-title-main"
                      style={{ fontSize: "140%" }}
                    >
                      Công cụ đặt hàng taobao, 1688 trên Chrome
                    </span>
                    <b></b>
                  </h3>
                </div>
                <div id="text-4023273859" className="text">
                  <p>
                    Chúng tôi tạo ra những công cụ hỗ trợ giúp cho việc đặt
                    hàng, quản lý đơn hàng trở nên vô cùng tiện lợi và nhanh
                    chóng
                  </p>
                </div>

                <div className="row" id="row-951202037">
                  <div
                    id="col-208445568"
                    className="col medium-7 small-12 large-7"
                  >
                    <div className="col-inner">
                      <div className="app-install-block">
                        <div className="app-install-item app-install-right">
                          <strong>Cài đặt công cụ đặt hàng</strong>
                          <a
                            className="addon google animated bounceInUp go"
                            href="https://chrome.google.com/webstore/detail/tool-order-h%C3%A0ng-qu%E1%BA%A3ng-ch%C3%A2/hgiaoallflpjbfaheamijjllodfacmlb?authuser=4&amp;fbclid=IwAR2i1KlcQh5scVfTFKx1ZwAu_iNDtUe0qzJqyKKfu4jutXH1fszwBk3NF-8"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                          >
                            <span className="icon"></span>
                            <span className="text">
                              Tải về cho trình duyệt <b>Google chrome</b>
                            </span>
                          </a>
                          <a
                            className="addon cococ animated bounceInUp go"
                            href="https://chrome.google.com/webstore/detail/tool-order-h%C3%A0ng-qu%E1%BA%A3ng-ch%C3%A2/hgiaoallflpjbfaheamijjllodfacmlb?authuser=4&amp;fbclid=IwAR2i1KlcQh5scVfTFKx1ZwAu_iNDtUe0qzJqyKKfu4jutXH1fszwBk3NF-8"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                          >
                            <span className="icon"></span>
                            <span className="text">
                              Tải về cho trình duyệt
                              <br />
                              <b>Cốc cốc</b>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="col-1759922342"
                    className="col hide-for-small medium-5 small-12 large-5"
                  >
                    <div className="col-inner">
                      <div
                        className="img has-hover x md-x lg-x y md-y lg-y"
                        id="image_1637346913"
                      >
                        <div className="img-inner dark">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="500"
                            height="500"
                            src="https://orderhangquangchau.com/wp-content/uploads/2022/09/2822505.png"
                            className="attachment-large size-large"
                            alt=""
                            srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/2822505.png 500w, https://orderhangquangchau.com/wp-content/uploads/2022/09/2822505-300x300.png 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/2822505-150x150.png 150w"
                            sizes="(max-width: 500px) 100vw, 500px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section" id="section_1642116112">
              <div className="bg section-bg fill bg-fill  bg-loaded"></div>

              <div className="section-content relative">
                <div className="row" id="row-500391805">
                  <div
                    id="col-1335590632"
                    className="col medium-5 small-12 large-5"
                  >
                    <div className="col-inner">
                      <div
                        className="img has-hover x md-x lg-x y md-y lg-y"
                        id="image_1176441297"
                      >
                        <div className="img-inner dark">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="700"
                            height="575"
                            src="https://orderhangquangchau.com/wp-content/uploads/2022/09/2108.i039.023.F.m004.c9.png"
                            className="attachment-original size-original"
                            alt=""
                            srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/2108.i039.023.F.m004.c9.png 700w, https://orderhangquangchau.com/wp-content/uploads/2022/09/2108.i039.023.F.m004.c9-300x246.png 300w"
                            sizes="(max-width: 700px) 100vw, 700px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="col-1803960027"
                    className="col medium-7 small-12 large-7"
                  >
                    <div className="col-inner">
                      <div className="container section-title-container">
                        <h3 className="section-title section-title-bold">
                          <b></b>
                          <span className="section-title-main">
                            BẢNG GIÁ NHẬP HÀNG QUỐC TẾ
                          </span>
                          <b></b>
                        </h3>
                      </div>
                      <p>
                        <i>
                          Order Hàng Quảng Châu vận chuyển thông qua đường chính
                          ngạch, vận chuyển nhanh nhất và giá rẻ nhất thị trường
                        </i>
                      </p>
                      <div className="ux-menu stack stack-col justify-start ux-menu--divider-solid">
                        <div className="ux-menu-link flex menu-item">
                          <a
                            className="ux-menu-link__link flex"
                            href="https://orderhangquangchau.com/bang-gia"
                          >
                            <i className="ux-menu-link__icon text-center icon-star-o"></i>
                            <span className="ux-menu-link__text">
                              Bảng giá đặt hàng
                            </span>
                          </a>
                        </div>

                        <div className="ux-menu-link flex menu-item">
                          <a
                            className="ux-menu-link__link flex"
                            href="https://orderhangquangchau.com/bang-gia-ky-gui-hang.html"
                          >
                            <i className="ux-menu-link__icon text-center icon-star-o"></i>
                            <span className="ux-menu-link__text">
                              Bảng giá ký gửi vận chuyển
                            </span>
                          </a>
                        </div>

                        <div className="ux-menu-link flex menu-item">
                          <a
                            className="ux-menu-link__link flex"
                            href="https://orderhangquangchau.com/bang-gia-ky-gui-hang.html"
                          >
                            <i className="ux-menu-link__icon text-center icon-star-o"></i>
                            <span className="ux-menu-link__text">
                              Bảng giá vận chuyển hàng lô, hàng nặng
                            </span>
                          </a>
                        </div>

                        <div className="ux-menu-link flex menu-item">
                          <a
                            className="ux-menu-link__link flex"
                            href="https://orderhangquangchau.com/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung.html"
                          >
                            <i className="ux-menu-link__icon text-center icon-star-o"></i>
                            <span className="ux-menu-link__text">
                              Bảng giá dịch vụ chuyển tiền
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section" id="section_1830649247">
              <div className="bg section-bg fill bg-fill  ">
                <div className="section-bg-overlay absolute fill"></div>
              </div>

              <div className="section-content relative">
                <div className="row" id="row-651700250">
                  <div id="col-1867579880" className="col small-12 large-12">
                    <div className="col-inner">
                      <div className="container section-title-container">
                        <h3 className="section-title section-title-center">
                          <b></b>
                          <span
                            className="section-title-main"
                            style={{
                              fontSize: "145%",
                              color: "rgb(255, 255, 255)",
                            }}
                          >
                            CHÚNG TÔI MANG ĐẾN DỊCH VỤ HOÀN HẢO
                          </span>
                          <b></b>
                        </h3>
                      </div>
                      <div id="text-3856796213" className="text mb-10">
                        <p style={{ textAlign: "center" }}>
                          <em>
                            Nhằm mang đến cho quý khách hàng dịch vụ nhập hàng
                            tốt nhất, chúng tôi luôn nỗ lực cải tiền không ngừng
                            nhằm nâng cao chất lượng phục vụ , đem đến sự hài
                            lòng cho khách hàng sử dụng dịch vụ của chúng tôi !
                          </em>
                        </p>
                      </div>

                      <div className="row" id="row-921310836">
                        <div
                          id="col-291873013"
                          className="col medium-6 small-12 large-6"
                        >
                          <div className="col-inner">
                            <div id="text-364852867" className="text">
                              <h3>CAM KẾT ĐẶT HÀNG</h3>
                              <p>
                                Đền bù 100% tiền hàng nếu Order Hàng Quảng Châu
                                đặt sai link của quý khách. Cam kết mua hàng
                                trong vòng 24h kể từ lúc đơn hàng được đặt cọc.
                              </p>
                            </div>

                            <div id="text-1243076793" className="text mb-10">
                              <h3>CAM KẾT ĐÚNG GIÁ</h3>
                              <p>
                                Order Hàng Quảng Châu cam kết mua đúng giá sản
                                phẩm trên website và đúng phí nội địa trên web
                                không gian dối.
                              </p>
                            </div>

                            <div id="text-106027912" className="text mb-10">
                              <h3>TỶ GIÁ NHÂN DÂN TỆ</h3>
                              <p>
                                Tỷ giá công khai minh bạch khớp với hệ thống đặt
                                hàng. Luôn luôn ưu tiên để tỷ giá thấp nhất nhằm
                                mang lại lợi ích tối đa cho khách hàng.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div
                          id="col-803516683"
                          className="col medium-6 small-12 large-6"
                        >
                          <div className="col-inner">
                            <div id="text-1823006879" className="text">
                              <h3>CAM KẾT BỒI THƯỜNG</h3>
                              <p>
                                Chúng tôi cam kết đền bù 100% tiền hàng nếu
                                trong quá trình vận chuyển hàng hóa bị thất lạc.
                              </p>
                            </div>

                            <div id="text-857278749" className="text mb-10">
                              <h3>THỜI GIAN VẬN CHUYỂN</h3>
                              <p>
                                Order Hàng Quảng Châu luôn luôn cố gắng tối ưu
                                từng công đoạn để hàng hóa của quý khách về
                                nhanh nhất, an toàn nhất có thể.
                              </p>
                            </div>

                            <div id="text-4026335512" className="text mb-10">
                              <h3>CAM KẾT HỖ TRỢ</h3>
                              <p>
                                Order Hàng Quảng Châu luôn luôn cố gắng phục vụ
                                24/7 nhằm mang lại dịch vụ tốt nhất tới quý
                                khách hàng.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section" id="section_1099088007">
              <div className="bg section-bg fill bg-fill  bg-loaded"></div>

              <div className="section-content relative">
                <div className="container section-title-container">
                  <h3 className="section-title section-title-center">
                    <b></b>
                    <span
                      className="section-title-main"
                      style={{ fontSize: "145%", color: "rgb(0, 0, 0)" }}
                    >
                      TIN TỨC
                    </span>
                    <b></b>
                  </h3>
                </div>
                <div className="row" id="row-2142690644">
                  <div id="col-1872879143" className="col small-12 large-12">
                    <div className="col-inner">
                      <div
                        className="customHoverPreview row large-columns-3 medium-columns-1 small-columns-1 slider row-slider slider-nav-simple slider-nav-outside slider-nav-push"
                        data-flickity-options='{"imagesLoaded": true, "groupCells": "100%", "dragThreshold" : 5, "cellAlign": "left","wrapAround": true,"prevNextButtons": true,"percentPosition": true,"pageDots": false, "rightToLeft": false, "autoPlay" : false}'
                      >
                        <div className="col post-item">
                          <div className="col-inner">
                            <a
                              href="https://orderhangquangchau.com/thong-bao-lich-nghi-tet-am-lich-2024.html"
                              className="plain"
                            >
                              <div className="box box-default box-text-bottom box-blog-post has-hover">
                                <div className="box-image">
                                  <div
                                    className="image-cover"
                                    style={{ paddingTop: "56.25%" }}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="300"
                                      height="200"
                                      src="https://orderhangquangchau.com/wp-content/uploads/2024/01/tet-giap-thin-300x200.jpg"
                                      className="attachment-medium size-medium wp-post-image"
                                      alt=""
                                      srcSet="https://orderhangquangchau.com/wp-content/uploads/2024/01/tet-giap-thin-300x200.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2024/01/tet-giap-thin.jpg 600w"
                                      sizes="(max-width: 300px) 100vw, 300px"
                                    />
                                  </div>
                                </div>
                                <div className="box-text text-center">
                                  <div className="box-text-inner blog-post-inner">
                                    <h5 className="post-title is-large ">
                                      Thông báo lịch nghỉ Tết Âm Lịch 2024
                                    </h5>
                                    <div className="is-divider"></div>
                                    <p className="from_the_blog_excerpt ">
                                      Kính gửi Quý Khách hàng! Order hàng Quảng
                                      Châu xin thông báo lịch nghỉ tết [...]{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col post-item">
                          <div className="col-inner">
                            <a
                              href="https://orderhangquangchau.com/uu-dai-giam-100-phi-dich-vu-nhan-dip-super-sales-11-11.html"
                              className="plain"
                            >
                              <div className="box box-default box-text-bottom box-blog-post has-hover">
                                <div className="box-image">
                                  <div
                                    className="image-cover"
                                    style={{ paddingTop: "56.25%" }}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="300"
                                      height="200"
                                      src="https://orderhangquangchau.com/wp-content/uploads/2023/11/Image-1-300x200.jpeg"
                                      className="attachment-medium size-medium wp-post-image"
                                      alt=""
                                      srcSet="https://orderhangquangchau.com/wp-content/uploads/2023/11/Image-1-300x200.jpeg 300w, https://orderhangquangchau.com/wp-content/uploads/2023/11/Image-1-1024x683.jpeg 1024w, https://orderhangquangchau.com/wp-content/uploads/2023/11/Image-1-768x512.jpeg 768w, https://orderhangquangchau.com/wp-content/uploads/2023/11/Image-1.jpeg 1200w"
                                      sizes="(max-width: 300px) 100vw, 300px"
                                    />
                                  </div>
                                </div>
                                <div className="box-text text-center">
                                  <div className="box-text-inner blog-post-inner">
                                    <h5 className="post-title is-large ">
                                      ƯU ĐÃI GIẢM 100% PHÍ DỊCH VỤ NHÂN DỊP
                                      SUPER SALES 11/11
                                    </h5>
                                    <div className="is-divider"></div>
                                    <p className="from_the_blog_excerpt ">
                                      Một năm chỉ có duy nhất 1 ngày toàn thể
                                      người dân Trung Quốc đều [...]
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col post-item">
                          <div className="col-inner">
                            <a
                              href="https://orderhangquangchau.com/1344.html"
                              className="plain"
                            >
                              <div className="box box-default box-text-bottom box-blog-post has-hover">
                                <div className="box-image">
                                  <div
                                    className="image-cover"
                                    style={{ paddingTop: "56.25%" }}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="300"
                                      height="169"
                                      src="https://orderhangquangchau.com/wp-content/uploads/2023/09/109035418_reutersshot-300x169.jpg"
                                      className="attachment-medium size-medium wp-post-image"
                                      alt=""
                                      srcSet="https://orderhangquangchau.com/wp-content/uploads/2023/09/109035418_reutersshot-300x169.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2023/09/109035418_reutersshot.jpg 640w"
                                      sizes="(max-width: 300px) 100vw, 300px"
                                    />
                                  </div>
                                </div>
                                <div className="box-text text-center">
                                  <div className="box-text-inner blog-post-inner">
                                    <h5 className="post-title is-large "></h5>
                                    <div className="is-divider"></div>
                                    <p className="from_the_blog_excerpt ">
                                      Kính gửi Quý khách hàng! Order hàng Quảng
                                      Châu xin thông báo tới quý khách [...]{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col post-item">
                          <div className="col-inner">
                            <a
                              href="https://orderhangquangchau.com/thong-bao-nghi-le-30-4-va-1-5.html"
                              className="plain"
                            >
                              <div className="box box-default box-text-bottom box-blog-post has-hover">
                                <div className="box-image">
                                  <div
                                    className="image-cover"
                                    style={{ paddingTop: "56.25%" }}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="300"
                                      height="163"
                                      src="https://orderhangquangchau.com/wp-content/uploads/2023/04/lich-nghi-le1-30-4-06-300x163.jpg"
                                      className="attachment-medium size-medium wp-post-image"
                                      alt=""
                                      srcSet="https://orderhangquangchau.com/wp-content/uploads/2023/04/lich-nghi-le1-30-4-06-300x163.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2023/04/lich-nghi-le1-30-4-06-768x419.jpg 768w, https://orderhangquangchau.com/wp-content/uploads/2023/04/lich-nghi-le1-30-4-06.jpg 1024w"
                                      sizes="(max-width: 300px) 100vw, 300px"
                                    />
                                  </div>
                                </div>
                                <div className="box-text text-center">
                                  <div className="box-text-inner blog-post-inner">
                                    <h5 className="post-title is-large ">
                                      Thông báo nghỉ lễ 30/4 và 1/5
                                    </h5>
                                    <div className="is-divider"></div>
                                    <p className="from_the_blog_excerpt ">
                                      Kính gửi Quý khách hàng! Order hàng Quảng
                                      Châu xin thông báo lịch nghỉ lễ [...]{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col post-item">
                          <div className="col-inner">
                            <a
                              href="https://orderhangquangchau.com/thong-bao-lich-nghi-tet-2023.html"
                              className="plain"
                            >
                              <div className="box box-default box-text-bottom box-blog-post has-hover">
                                <div className="box-image">
                                  <div
                                    className="image-cover"
                                    style={{ paddingTop: "56.25%" }}
                                  >
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="300"
                                      height="158"
                                      src="https://orderhangquangchau.com/wp-content/uploads/2022/12/tt-nguyen-dan-2023-vao-ngay-nao-duong-lch_d559e3ef-300x158.jpg"
                                      className="attachment-medium size-medium wp-post-image"
                                      alt=""
                                      srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/12/tt-nguyen-dan-2023-vao-ngay-nao-duong-lch_d559e3ef-300x158.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2022/12/tt-nguyen-dan-2023-vao-ngay-nao-duong-lch_d559e3ef-1024x538.jpg 1024w, https://orderhangquangchau.com/wp-content/uploads/2022/12/tt-nguyen-dan-2023-vao-ngay-nao-duong-lch_d559e3ef-768x403.jpg 768w, https://orderhangquangchau.com/wp-content/uploads/2022/12/tt-nguyen-dan-2023-vao-ngay-nao-duong-lch_d559e3ef.jpg 1200w"
                                      sizes="(max-width: 300px) 100vw, 300px"
                                    />
                                  </div>
                                </div>
                                <div className="box-text text-center">
                                  <div className="box-text-inner blog-post-inner">
                                    <h5 className="post-title is-large ">
                                      Thông báo lịch nghỉ tết 2023
                                    </h5>
                                    <div className="is-divider"></div>
                                    <p className="from_the_blog_excerpt ">
                                      &nbsp; Kính thưa Quý khách hàng : Order
                                      hàng Quảng Châu xin thông báo lịch [...]{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col post-item">
                          <div className="col-inner">
                            <a
                              href="https://orderhangquangchau.com/bang-gia-ky-gui-hang.html"
                              className="plain"
                            >
                              <div className="box box-default box-text-bottom box-blog-post has-hover">
                                <div className="box-text text-center">
                                  <div className="box-text-inner blog-post-inner">
                                    <h5 className="post-title is-large ">
                                      Bảng giá ký gửi hàng
                                    </h5>
                                    <div className="is-divider"></div>
                                    <p className="from_the_blog_excerpt ">
                                      BẢNG GIÁ KÝ GỬI VẬN CHUYỂN TRUNG QUỐC
                                      &#8211; VIỆT NAM &nbsp; 1.Giá vận chuyển
                                      [...]{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <button
                          className="flickity-button flickity-prev-next-button previous"
                          type="button"
                          aria-label="Previous"
                        >
                          <svg
                            className="flickity-button-icon"
                            viewBox="0 0 100 100"
                          >
                            <path
                              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                              className="arrow"
                            ></path>
                          </svg>
                        </button>
                        <button
                          className="flickity-button flickity-prev-next-button next"
                          type="button"
                          aria-label="Next"
                        >
                          <svg
                            className="flickity-button-icon"
                            viewBox="0 0 100 100"
                          >
                            <path
                              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                              className="arrow"
                              transform="translate(100, 100) rotate(180) "
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div id="text-471112429" className="text hidden"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
