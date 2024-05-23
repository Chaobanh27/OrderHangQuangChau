/* eslint-disable quotes */
import { useEffect } from "react";
import "../PriceList/index.css";
import { useLocation } from "react-router-dom";
const PriceList = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return (
    <main id="main" className="">
      <div id="content" className="content-area page-wrapper" role="main">
        <div className="row row-main">
          <div className="large-12 col">
            <div className="col-inner">
              <h2 className="title-category">
                <span style={{ color: "#555555", fontSize: "14.4px" }}>
                  Phí dịch vụ đặt hàng và vận chuyển hàng tại Order hàng Quảng
                  Châu
                </span>
              </h2>
              <div className="cate_cont">
                <h1>
                  <strong>
                    BẢNG GIÁ DỊCH VỤ &#8211; ORDER HÀNG QUẢNG CHÂU
                  </strong>
                </h1>
                <p>
                  <strong> (</strong>
                  <strong>
                    Áp dụng cho đơn hàng được tạo từ ngày 01 tháng 11 năm 2022
                  </strong>
                  <strong> ) </strong>
                </p>
                <p>
                  <span style={{ color: "#000000" }}>
                    <strong>1. Phí Order</strong>
                  </span>
                </p>
                <table className="pc-table">
                  <thead>
                    <tr>
                      <td style={{ textAlign: "left" }}>
                        <span>
                          <strong> Giá trị đơn hàng</strong>
                        </span>
                      </td>
                      <td>
                        <span>
                          <strong>Phí dịch vụ</strong>
                        </span>
                      </td>
                      <td>
                        <span>
                          <strong>Đặt cọc</strong>
                        </span>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong> Dưới 2 triệu</strong>
                      </td>
                      <td>
                        <strong>3%</strong>
                      </td>
                      <td>
                        <strong>70%</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong> Từ 2 đến 20 triệu</strong>
                      </td>
                      <td>
                        <strong>2.5%</strong>
                      </td>
                      <td>
                        <strong>70%</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong> Từ 20 đến 100 triệu</strong>
                      </td>
                      <td>
                        <strong>2%</strong>
                      </td>
                      <td>
                        <strong>70%</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong> Trên 100 triệu</strong>
                      </td>
                      <td>
                        <strong>1%</strong>
                      </td>
                      <td>
                        <strong>70%</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>&nbsp;</p>
                <p>
                  <strong>2. Phí vận chuyển Trung Quốc &#8211; Việt Nam</strong>
                </p>
                <p>
                  <em>
                    <strong>
                      a. Bảng giá vận chuyển hàng tạp, hàng order Taobao, 1688,
                      pinduoduo
                    </strong>
                  </em>
                </p>
                <table className="pc-table">
                  <thead>
                    <tr>
                      <td>
                        <strong> Cân nặng</strong>
                      </td>
                      <td>
                        <strong>Hà Nội</strong>
                      </td>
                      <td>
                        <strong>Sài Gòn</strong>
                      </td>
                      <td>
                        <strong>Đà Nẵng</strong>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong> Dưới 50kg</strong>
                      </td>
                      <td>
                        <strong>24.000 đ/kg</strong>
                      </td>
                      <td>
                        <strong>30.000 đ/kg</strong>
                      </td>
                      <td>
                        <strong>30.000 đ/kg</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong> 50-200 kg</strong>
                      </td>
                      <td>
                        <strong>23.000 đ/kg</strong>
                      </td>
                      <td>
                        <strong>29.000 đ/kg</strong>
                      </td>
                      <td>
                        <strong>29.000 đ/kg</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong> 200-500 kg</strong>
                      </td>
                      <td>
                        <strong>22.000 đ/kg</strong>
                      </td>
                      <td>
                        <strong>28.000 đ/kg</strong>
                      </td>
                      <td>
                        <strong>28.000 đ/kg</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong> Trên 500kg</strong>
                      </td>
                      <td>
                        <em>Thương lượng</em>
                      </td>
                      <td>
                        <em>Thương lượng</em>
                      </td>
                      <td>
                        <em>Thương lượng</em>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <em>
                    <strong>
                      b. Bảng giá vận chuyển hàng lô &gt; 100kg (Cùng 1 mặt
                      hàng)
                    </strong>
                  </em>
                </p>
                <table
                  className="pc-table"
                  style={{ width: "49,2489%", height: "105px" }}
                >
                  <thead>
                    <tr style={{ height: "21px" }}>
                      <td style={{ height: "21px", width: "29.3981%" }}>
                        <strong> Cân nặng</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.5775%" }}>
                        <strong>Hà Nội</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.8257%" }}>
                        <strong>Sài Gòn</strong>
                      </td>
                      <td style={{ height: "21px", width: "24.5414%" }}>
                        <strong>Đà Nẵng</strong>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ height: "21px" }}>
                      <td style={{ height: "21px", width: "29.3981%" }}>
                        <strong>Từ 100kg &#8211; 300kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.5775%" }}>
                        <strong>15.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.8257%" }}>
                        <strong>18.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "24.5414%" }}>
                        <strong>18.000 đ/kg</strong>
                      </td>
                    </tr>
                    <tr style={{ height: "21px" }}>
                      <td style={{ height: "21px", width: "29.3981%" }}>
                        <strong> Từ 300kg &#8211; 500kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.5775%" }}>
                        <strong>14.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.8257%" }}>
                        <strong>17.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "24.5414%" }}>
                        <strong>17.000 đ/kg</strong>
                      </td>
                    </tr>
                    <tr style={{ height: "21px" }}>
                      <td style={{ height: "21px", width: "29.3981%" }}>
                        <strong> Từ 500kg &#8211; 1 tấn</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.5775%" }}>
                        <strong>12.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.8257%" }}>
                        <strong>15.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "24.5414%" }}>
                        <strong>15.000 đ/kg</strong>
                      </td>
                    </tr>
                    <tr style={{ height: "21px" }}>
                      <td style={{ height: "21px", width: "29.3981%" }}>
                        <strong> Trên 1 tấn</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.5775%" }}>
                        <em>Thương lượng</em>
                      </td>
                      <td style={{ height: "21px", width: "23.8257%" }}>
                        <em>Thương lượng</em>
                      </td>
                      <td style={{ height: "21px", width: "24.5414%" }}>
                        <em>Thương lượng</em>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <em>
                    <strong>
                      c. Bảng giá vận chuyển hàng nặng &#8211; gọn ( &gt; 300kg)
                      như ốc vít, đầu khóa, máy khoan, máy bơm, tay nắm
                      cửa&#8230;
                    </strong>
                  </em>
                </p>
                <table
                  className="pc-table"
                  style={{ width: "49.2489%", height: "105px" }}
                >
                  <thead>
                    <tr style={{ height: "21px" }}>
                      <td style={{ height: "21px", width: "29.3981%" }}>
                        <strong> Cân nặng</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.5775%" }}>
                        <strong>Hà Nội</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.8257%" }}>
                        <strong>Sài Gòn</strong>
                      </td>
                      <td style={{ height: "21px", width: "24.5414%" }}>
                        <strong>Đà Nẵng</strong>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ height: "21px" }}>
                      <td style={{ height: "21px", width: "29.3981%" }}>
                        Từ 300kg &#8211; 500kg
                      </td>
                      <td style={{ height: "21px", width: "23.5775%" }}>
                        <strong>9.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.8257%" }}>
                        <strong>12.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "24.5414%" }}>
                        <strong>12.000 đ/kg</strong>
                      </td>
                    </tr>
                    <tr style={{ height: "21px" }}>
                      <td style={{ height: "21px", width: "29.3981%" }}>
                        Từ 500kg &#8211; 1 tấn
                      </td>
                      <td style={{ height: "21px", width: "23.5775%" }}>
                        <strong>8.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.8257%" }}>
                        <strong>11.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "24.5414%" }}>
                        <strong>11.000 đ/kg</strong>
                      </td>
                    </tr>
                    <tr style={{ height: "21px" }}>
                      <td style={{ height: "21px", width: "29.3981%" }}>
                        Từ 1 tấn &#8211; 3 tấn
                      </td>
                      <td style={{ height: "21px", width: "23.5775%" }}>
                        <strong>6.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.8257%" }}>
                        <strong>9.000 đ/kg</strong>
                      </td>
                      <td style={{ height: "21px", width: "24.5414%" }}>
                        <strong>10.000 đ/kg</strong>
                      </td>
                    </tr>
                    <tr style={{ height: "21px" }}>
                      <td style={{ height: "21px", width: "29.3981%" }}>
                        <strong> Trên 3 tấn</strong>
                      </td>
                      <td style={{ height: "21px", width: "23.5775%" }}>
                        <em>Thương lượng</em>
                      </td>
                      <td style={{ height: "21px", width: "23.8257%" }}>
                        <em>Thương lượng</em>
                      </td>
                      <td style={{ height: "21px", width: "24.5414%" }}>
                        <em>Thương lượng</em>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <strong>3. Phí kiểm đếm (Tuỳ chọn theo nhu cầu)</strong>
                </p>
              </div>
              <div className="table-info">
                <table className="mys-table">
                  <thead>
                    <tr>
                      <th>Số lượng SP/đơn lớn</th>
                      <th>Mức thu phí (nghìn/1 SP)</th>
                      <th>Mức thu phí SP phụ kiện (giá SP &lt;10 tệ)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>501 &#8211; 10000 sản phẩm</td>
                      <td>
                        1.000<sup>đ</sup>
                      </td>
                      <td>
                        800<sup>đ</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>101 &#8211; 500 sản phẩm</td>
                      <td>
                        1.500<sup>đ</sup>
                      </td>
                      <td>
                        1.000<sup>đ</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>21 &#8211; 100 sản phẩm</td>
                      <td>
                        2.000<sup>đ</sup>
                      </td>
                      <td>
                        1.500<sup>đ</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>6 &#8211; 20 sản phẩm</td>
                      <td>
                        3.000<sup>đ</sup>
                      </td>
                      <td>
                        2.000<sup>đ</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>1 &#8211; 5 sản phẩm</td>
                      <td>
                        5.000<sup>đ</sup>
                      </td>
                      <td>
                        2.500<sup>đ</sup>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="cate_cont">
                <p>
                  <b>Lưu ý:</b>
                </p>
                <ul>
                  <li>
                    1. Order hàng Quảng Châu sẽ kiểm tra hàng khi nhận được tại
                    kho Trung Quốc theo số lượng và các thuộc tính cơ bản phân
                    loại hàng hóa mà khách hàng đã thao tác chọn khi đưa vào giỏ
                    hàng (đối với hàng thời trang thường là thuộc tính size, màu
                    sắc nhưng loại trừ trường hợp màu sắc sản phẩm thực tế có
                    thể đậm/nhạt hơn so với màu sắc sản phẩm đăng bán trên
                    website)
                  </li>
                  <li>
                    2. Order hàng Quảng Châu không cam kết sẽ kiểm tra chất
                    liệu, thông số kỹ thuật, chất lượng sản phẩm, thương hiệu
                    sản phẩm. Ví dụ với mặt hàng thời trang: bộ phận kiểm hàng
                    không thể kiểm được từng đường may, mũi chỉ, hoặc chất lượng
                    vải&#8230; vấn đề đó thuộc về nhà bán, khách hàng tìm kiếm
                    và chọn lọc những nhà bán uy tín để nhập hàng. Tuy nhiên,
                    Order hàng Quảng Châu vẫn có trách nhiệm hỗ trợ khiếu nại
                    yêu cầu shop đền bù nếu hàng không được đảm bảo chất lượng
                    như khách mong muốn.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default PriceList;
