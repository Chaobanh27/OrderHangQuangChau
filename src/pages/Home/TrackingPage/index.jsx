/* eslint-disable quotes */
// eslint-disable-next-line semi
import { useLocation } from "react-router-dom";
import "../TrackingPage/index.css";
import { useEffect } from "react";
const TrackingPage = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return (
    <main id="main" className="">
      <div id="content" role="main" className="content-area">
        <div id="page-header-1241053983" className="page-header-wrapper">
          <div className="page-title dark featured-title">
            <div className="page-title-bg">
              <div
                className="title-bg fill bg-fill"
                data-parallax-container=".page-title"
                data-parallax-background
                data-parallax="-"
              ></div>
              <div className="title-overlay fill"></div>
            </div>

            <div className="page-title-inner container align-center flex-row medium-flex-wrap">
              <div className="title-wrapper flex-col text-left medium-text-center">
                <h1 className="entry-title mb-0">
                  Kiểm tra tình trạng đơn hàng
                </h1>
              </div>
              <div className="title-content flex-col flex-right text-right medium-text-center">
                <div className="title-breadcrumbs pb-half pt-half"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-main tracking-page">
          <div className="large-7 col">
            <div className="col-inner">
              <p>
                <strong>
                  Bạn cần nhập vào mã vận đơn để tra cứu trạng thái của vận đơn.
                </strong>
              </p>
              <form action="/tracking" method="post" id="tracking-form">
                <input
                  type="text"
                  name="code"
                  value=""
                  placeholder="Nhập vào mã đơn hàng"
                ></input>
                <button type="submit" id="btn_tracking" className="">
                  Tra cứu đơn hàng
                  <img src="https://orderhangquangchau.com/wp-content/themes/flatsome-child/images/ic1-1.png"></img>
                </button>
              </form>
            </div>
          </div>
          <div className="large-5 col">
            <div className="col-inner">
              <img src="https://orderhangquangchau.com/wp-content/themes/flatsome-child/images/tracking-order.png"></img>
            </div>
          </div>
          <div className="large-12 col">
            <div className="list-actions"></div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default TrackingPage;
