/* eslint-disable quotes */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import "../Footer/Footer.css";
import { IoChevronUp } from "react-icons/io5";

const Footer = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  console.log("««««« window.scrollY »»»»»", window.scrollY);
  return (
    <footer id="footer" className="footer-wrapper">
      <section className="section" id="section_970361642">
        <div className="bg section-bg fill bg-fill bg-loaded"></div>

        <div className="section-content relative">
          <div className="row" id="row-1637039547">
            <div id="col-1113480162" className="col medium-4 small-12 large-4">
              <div className="col-inner">
                <div
                  className="img has-hover x md-x lg-x y md-y lg-y"
                  id="image_432968465"
                >
                  <div className="img-inner dark">
                    <img
                      width="188"
                      height="54"
                      src="https://orderhangquangchau.com/wp-content/uploads/2022/09/logo.png"
                      className="attachment-original size-original"
                      alt=""
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div id="text-2914060950" className="text">
                  <p>
                    Order hàng Quảng Châu là đơn vị cung cấp dịch vụ mua hàng và
                    vận chuyển hàng từ Trung Quốc về Việt Nam.
                    <br />
                    Với 8 năm kinh nghiệm, chúng tôi cam kết mang tới khách hàng
                    một dịch vụ chuyên nghiệp, hỗ trợ hết mình, luôn đặt chữ tín
                    lên hàng đầu là phương châm làm việc.
                  </p>
                  <div className="item info-detail last">&nbsp;</div>
                </div>

                <div className="icon-box featured-box icon-box-left text-left">
                  <div className="icon-box-img" style={{ width: "46px" }}>
                    <div className="icon">
                      <div className="icon-inner">
                        <img
                          width="300"
                          height="300"
                          src="https://orderhangquangchau.com/wp-content/uploads/2022/09/91610474808mj8u1hoaak-300x300.png"
                          className="attachment-medium size-medium"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/91610474808mj8u1hoaak-300x300.png 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/91610474808mj8u1hoaak-150x150.png 150w, https://orderhangquangchau.com/wp-content/uploads/2022/09/91610474808mj8u1hoaak.png 422w"
                          sizes="(max-width: 300px) 100vw, 300px"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="icon-box-text last-reset">
                    <div id="text-3789645461" className="text">
                      <h3>
                        <strong>0971.243.666</strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="col-355116485" className="col medium-4 small-12 large-4">
              <div className="col-inner">
                <div className="container section-title-container">
                  <h3 className="section-title section-title-normal">
                    <b></b>
                    <span
                      className="section-title-main"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Hỗ trợ khách hàng
                    </span>
                    <b></b>
                  </h3>
                </div>

                <div className="icon-box featured-box icon-box-top text-left">
                  <div className="icon-box-text last-reset">
                    <div id="text-4233017610" className="text">
                      <h3>Chi nhánh Hà Nội</h3>
                      <p>
                        <i className="icon-map-pin-fill"> </i> Số 117 Trần Cung
                        - Cầu Giấy - Hà Nội
                      </p>
                      <p>
                        <i className="icon-phone"> </i>0971.243.666
                      </p>
                      <h3>
                        <i className="icon-map-pin-fill"> </i> Chi nhánh Đà Nẵng
                      </h3>
                      <p>Nguyễn Chích - Đà Nẵng</p>
                      <p>
                        <i className="icon-phone"></i> 070.591.7777
                      </p>
                      <h3>Chi nhánh TP.HCM</h3>
                      <p>
                        <i className="icon-map-pin-fill"> </i> Ba Vân, P14, Quận
                        Tân Bình - TP.HCM
                      </p>
                      <p>
                        <i className="icon-phone"></i> 0902.632.512
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="col-295313652" className="col medium-4 small-12 large-4">
              <div className="col-inner text-center">
                <div className="container section-title-container">
                  <h3 className="section-title section-title-normal">
                    <b></b>
                    <span
                      className="section-title-main"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Facebook
                    </span>
                    <b></b>
                  </h3>
                </div>

                <div
                  className="fb-page fb_iframe_widget"
                  data-href="https://www.facebook.com/orderhangquangchaudanang/"
                  data-tabs="timeline"
                  data-width=""
                  data-height="70"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=353&amp;height=70&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Forderhangquangchaudanang%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width="
                >
                  <span
                    style={{
                      verticalAlign: "bottom",
                      width: "340px",
                      height: "130px",
                    }}
                  >
                    <iframe
                      name="f79bb1bdb1056cf03"
                      width="1000px"
                      height="70px"
                      data-testid="fb:page Facebook Social Plugin"
                      title="fb:page Facebook Social Plugin"
                      frameBorder="0"
                      allowtransparency="true"
                      allowFullScreen="true"
                      scrolling="no"
                      allow="encrypted-media"
                      src="https://www.facebook.com/v5.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1ed683f0a0abc8dd%26domain%3Dorderhangquangchau.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Forderhangquangchau.com%252Ff95730b65fdce4545%26relation%3Dparent.parent&amp;container_width=353&amp;height=70&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Forderhangquangchaudanang%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width="
                      style={{
                        border: "none",
                        visibility: "visible",
                        width: "340px",
                        height: "130px",
                      }}
                      className=""
                    ></iframe>
                  </span>
                </div>

                <div
                  className="zalo-container right"
                  style={{ bottom: "70px" }}
                >
                  <a
                    id="zalo-btn"
                    href="https://zalo.me/0393241666"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <div className="animated_zalo infinite zoomIn_zalo cmoz-alo-circle"></div>
                    <div className="animated_zalo infinite pulse_zalo cmoz-alo-circle-fill"></div>
                    <span>
                      <img
                        src="https://vetranhtuongpro.net/wp-content/plugins/contact-me-on-zalo/assets/images/zalo-2.png"
                        alt="Contact Me on Zalo"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="absolute-footer dark medium-text-center text-center">
        <div className="container clearfix">
          <div className="footer-primary pull-left">
            <div className="copyright-footer">
              Copyright by Order hang quang chau @ 2014{" "}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#top"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`back-to-top button icon invert plain fixed bottom z-1 is-outline hide-for-medium circle ${show ? "active" : ""} `}
        id="top-link"
        aria-label="Go to top"
      >
        <IoChevronUp />
      </a>
    </footer>
  );
};

export default Footer;
