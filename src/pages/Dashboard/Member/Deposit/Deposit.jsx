/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import { DatePicker } from 'antd'
import { FaMoneyBill, FaCreditCard, FaFile } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Deposit = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <>
      <div className="col-sm-9">
        <div className="content-page">
          <div className="titles">
            <h2 className="page-title">
                Quản lý ví điện tử
            </h2>
          </div>
          <div className="wallet_info">
            <div className="row">
              <div className="col-md-2">
                <FaMoneyBill style= {{ color:'#87cf82', fontSize: '90px' }}/>
              </div>
              <div className="col-md-10">
                <h3>Số dư trong ví : <span className="green">0</span> <span className="small">VNĐ</span>   - Mã nạp tiền : <span className="green big">HQC6709CK</span></h3>
                <div className="customer_credit_owe owe_6709" data-id="6709">
                  <p className="black">Tổng tiền hàng đã về chờ tất toán : <span className="red">0</span> đ </p>
                  <p className="black">Tổng tiền hàng chưa về : <span className="red">0</span> đ </p>
                  <p><a className="blue" target="_blank" rel="noreferrer" href="https://my.orderhangquangchau.com/member/reportowe">Xem chi tiết</a></p></div>
                <Link className="custom_bt" to="/dashboard/member/wallet">
                  <FaFile/>
                  Chi tiết giao dịch
                </Link>
                <Link className="custom_bt active" href="#">
                  <FaCreditCard/>
                  Nạp tiền
                </Link>
              </div>
            </div>
          </div>
          <hr/>
          <div className="form_deposit">
            <h3>Nạp tiền vào ví điện tử</h3>
            <div className="space10"></div>
            <p className="note red">Để duyệt tiền nhanh và không cần gửi giao dịch. Vui lòng nhập nội dung chuyển tiền : <span className="green big">HQC6709CK</span> . Chỉ dành cho khách hàng sử dụng Internet - Banking</p>
            <div className="space10"></div>
            <form className="form-horizontal" method="POST">
              <div className="form_upload ajax_response alert dismissable"></div>
              <div className="form-group">
                <label className="control-label col-sm-2">Số tiền đã chuyển khoản</label>
                <div className="col-sm-6">
                  <input placeholder="Chỉ nhập số" className="form-control" onkeyup="javascript:document.getElementById('numFormatResult').innerHTML = format_curency( this.value);" type="text" name="amount" value="" required="" id="amount" fdprocessedid="3zdla" />
                  <span id="numFormatResult" className="red"></span> <b>VNĐ</b>
                </div>
              </div>
              <div className="form-group" id="bank">
                <label for="bank" className="control-label col-sm-2">Ngân hàng đã chuyển</label>
                <div className="col-sm-6">
                  <select name="bank" className="form-control" fdprocessedid="16tzu">
                    <option value="MB Bank">MB Bank</option>
                    <option value="VietcomBank">VietcomBank</option>
                    <option value="Techcombank">Techcombank</option>
                    <option value="Agribank">Agribank</option>
                    <option value="BIDV">BIDV</option>
                    <option value="Viettinbank">Viettinbank</option>
                  </select>
                </div>
              </div>

              <div className="form-group" id="billpayment">
                <label htmlFor="billpayment" className="control-label col-sm-2">Mã phiếu thu</label>

                <div className="col-sm-6">
                  <input placeholder="Số bút toán sau khi bạn chuyển khoản" className="inputAccount form-control" value="" type="text" name="billpayment" fdprocessedid="hn5x7k" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="comment" className="control-label col-sm-2">Ghi chú</label>
                <div className="col-sm-6">
                  <textarea rows="5" placeholder="Gợi ý: Quý khách nên nhập nội dung chuyển khoản (khi chuyển khoản online hoặc nộp tiền tại Ngân Hàng) chính xác." name="payment_note" className="inputAccount form-control"></textarea>
                </div>
              </div>


              <input type="hidden" name="controller" value="member" />
              <input type="hidden" name="task" value="sendDeposit" />
              <input type="hidden" name="is_reload" value="1" />
              <div className="form-group text-center">
                <div className="col-sm-3 col-md-offset-2">
                  <a target="_blank" className="btn btn-danger" onClick="submitAjax1(this)" title="Gửi giao dịch">Gửi giao dịch</a>
                </div>
              </div>


            </form>
          </div>
          <hr/>
          <div className="tab_container">
            <div className="tab_content">
              <h3>Danh sách nạp tiền chờ phê duyệt</h3>
              <div className="space20"></div>
              <p><strong>Tổng tiền đã duyệt : <span className="green">0</span><span className="small"> đ</span></strong> -
                <strong>Tổng tiền chờ duyệt :  <span className="green">0</span><span className="small"> đ</span></strong></p>
              <div className="space10"></div>
              <form className="form-horizontal" method="get">
				Từ ngày :
                <DatePicker onChange={onChange} needConfirm />
				Đến ngày :
                <DatePicker onChange={onChange} needConfirm />
				Trạng thái :
                <select name="filter_status" className="custom_input" fdprocessedid="0y2aai">
                  <option value="">Tất cả</option>
                  <option value="1">Đã duyệt</option>
                  <option value="0">Chờ duyệt</option>
                  <option value="-1">Đã hủy</option>
                </select>
                <input className="button custom_flat_button" type="submit" value="Lọc" fdprocessedid="slhii" />
              </form>
              <div className="space10"></div>
              <div className="table-responsive">
                <table className="table tbl-cart tbl-list-order">
                  <tbody id="abc">
                    <tr className="header-cart-table">
                      <td width="25%">Ngày giao dịch</td>
                      <td width="25%">Mã hóa đơn</td>
                      <td width="25%">Số tiền nạp</td>
                      <td width="25%">Ngân hàng</td>
                      <td width="25%">Ghi chú</td>
                      <td width="25%">Trạng thái</td>
                    </tr>
                  </tbody>

                </table>
                <p><strong>Total: <span className="green">0</span> (Giao dịch)</strong></p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Deposit