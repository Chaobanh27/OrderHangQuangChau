/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import { DatePicker } from 'antd'

const Trasnport = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <>
      <div class="col-sm-12">
        <div class="cart-by-page">
          <div class="titles">
            <h2 class="page-title">
                Danh sách kiện hàng
            </h2>
          </div>
          <div class="filter">
            <form class="form-horizontal" method="get">
				Mã đơn hàng : <input class="custom_input" type="text" name="filter_invoiceid" value="" fdprocessedid="hsjmq8" />
				Mã vận đơn : <input class="custom_input" type="text" name="filter_shipid" value="" fdprocessedid="vtt6te" />
				Trạng thái :
              <select name="filter_cur_status" class="custom_input" fdprocessedid="hzpzwg">
                <option value="">Tất cả</option>
                <option value="nbph">NB Phát hàng</option>
                <option value="nktq">Nhập Kho TQ</option>
                <option value="dk">Đã Kiểm</option>
                <option value="nkvn">Nhập Kho VN</option>
                <option value="dg">Đã Giao</option>
              </select>
              <div class="space10"></div>
				Từ ngày :
              <DatePicker onChange={onChange} needConfirm />
				Đến ngày :
              <DatePicker onChange={onChange} needConfirm />
				Tìm ngày tháng của trạng thái
              <select name="date_status" fdprocessedid="0t86ij">
                <option value="nbph">NB Phát hàng</option>
                <option value="nktq">Nhập Kho TQ</option>
                <option value="dk">Đã Kiểm</option>
                <option value="nkvn">Nhập Kho VN</option>
                <option value="dg">Đã Giao</option>
              </select>


              <input class="button custom_flat_button" type="submit" value="Lọc" fdprocessedid="jqmeew" />
            </form>
            <div class="space10"></div>
          </div>
          <div class="table-responsive">
            <table class="table tbl-cart tbl-history">
              <tbody>
                <tr class="header-cart-table">
                  <td style= {{ width: '5%' }} class="text-center">#</td>
                  <td class="text-center">Mã kiện</td>
                  <td class="text-center">Mã đơn</td>
                  <td class="text-center">Vận đơn TQ</td>
                  <td class="text-center">Cân nặng / Thể tích / SL</td>
                  <td style= {{ width: '255px' }} class="text-center">Lịch sử</td>
                </tr>

              </tbody>
            </table>
          </div>
          <div class="pag">
          </div>
          <p><strong>Total: <span class="green">0</span> (Items)</strong></p>

        </div>
      </div>
    </>
  )
}

export default Trasnport