/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import { DatePicker } from 'antd'

const DomesticShipping = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <>
      <div class="col-sm-9">
        <div class="content-page">
          <div class="titles">
            <h2 class="page-title">
				Danh sách tiền ship nội địa việt nam
            </h2>
          </div>
          <div class="tab_container">
            <div class="tab_content">
              <div class="space10"></div>
              <form class="form-horizontal" method="get">
				Từ ngày :
                <DatePicker onChange={onChange} needConfirm />
				Đến ngày :
                <DatePicker onChange={onChange} needConfirm />
				Trạng thái
                <select name="filter_status" class="custom_input" fdprocessedid="u5w7c9">
                  <option value="">Tất cả</option>
                  <option value="1">Đã duyệt</option>
                  <option value="0">Chờ duyệt</option>
                  <option value="-1">Đã hủy</option>
                </select>
                <input class="button custom_flat_button" type="submit" value="Lọc" fdprocessedid="k82icl" />
              </form>
              <div class="space10"></div>
              <div class="table-responsive">
                <table class="table tbl-cart tbl-list-order">
                  <tbody id="abc">
                    <tr class="header-cart-table">
                      <td width="25%">Ngày tạo</td>
                      <td width="25%">Mã hóa đơn</td>
                      <td width="25%">Số tiền</td>
                      <td width="45%">Ghi chú</td>
                      <td width="25%">Trạng thái</td>
                    </tr>
                  </tbody>

                </table>
                <p><strong>Total: <span class="green">0</span> (Yêu cầu)</strong></p>

              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default DomesticShipping