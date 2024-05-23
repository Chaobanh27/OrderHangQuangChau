/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import { DatePicker } from 'antd'


const Reduces = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <>
      <div class="col-sm-9">
        <div class="content-page">
          <div class="titles">
            <h2 class="page-title">
                Danh sách đơn hàng được giảm trừ
            </h2>
          </div>
          <div class="tab_container">
            <div class="tab_content">

              <div class="space20"></div>
              <p><strong>Đây là danh sách các lần giảm trừ trong đơn hàng, Số tiền giảm trừ sẽ được trừ trực tiếp vào tổng giá trị đơn hàng</strong>

              </p><div class="space10"></div>
              <p><strong>Tổng tiền đã giảm trừ : <span class="green">0</span><span class="small"> đ</span></strong>
              </p><div class="space20"></div>
              <hr/>
              <form class="form-horizontal" method="get">
				Mã giảm trừ : <input class="custom_input" type="text" name="filter_id" value="" fdprocessedid="bucrqp" />
				Mã đơn hàng : <input class="custom_input" type="text" name="filter_invoiceid" value="" fdprocessedid="xpy7xr" /><br/> <div class="space10"></div>
				Từ ngày :
                <DatePicker onChange={onChange} needConfirm />
				Đến ngày :
                <DatePicker onChange={onChange} needConfirm />

                <input class="button custom_flat_button" type="submit" value="Lọc" fdprocessedid="29t4le" />
              </form>
              <div class="space10"></div>
              <div class="table-responsive">
                <table class="table tbl-cart tbl-list-order">
                  <tbody id="abc">
                    <tr class="header-cart-table">
                      <td width="25%">Ngày giảm trừ</td>
                      <td width="25%">Mã giảm trừ</td>
                      <td width="25%">Đơn hàng</td>
                      <td width="25%">Số tiền</td>
                      <td width="45%">Nội dung</td>
                      <td width="25%">Trạng thái</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Total: <span class="green">0</span> (Giao dịch)</strong></p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Reduces