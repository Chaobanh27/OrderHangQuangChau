/* eslint-disable react/no-unknown-property */

const Wallet = () => {
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
                <i className="fa fa-money fa-5x" style= {{ color:'#87cf82', fontSize: '90px' }} aria-hidden="true"></i>
              </div>
              <div className="col-md-10">
                <h3>Số dư trong ví : <span className="green">0</span> <span className="small">VNĐ</span> - Mã nạp tiền : <span className="green big">HQC6709CK</span></h3>
                <div className="customer_credit_owe owe_6709" data-id="6709">
                  <p className="black">Tổng tiền hàng đã về chờ tất toán : <span className="red">0</span> đ </p>
                  <p className="black">Tổng tiền hàng chưa về : <span className="red">0</span> đ </p>
                  <p><a className="blue" target="_blank" rel="noreferrer" href="https://my.orderhangquangchau.com/member/reportowe">Xem chi tiết</a></p></div>

                {/* <script>
						$(document).ready(function(){
							showCustomerOwe();
						});
					</script> */}
                <span className="custom_bt active"><i className="fa fa-file-text fa-2x" aria-hidden="true"></i> Chi tiết giao dịch</span>
                <a className="custom_bt" href="https://my.orderhangquangchau.com/member/deposit"><i className="fa fa-credit-card fa-2x" aria-hidden="true"></i> Nạp tiền</a>
              </div>
            </div>
          </div>
          <hr/>
          <div className="tab_container">
            <div className="tab_content">
              <h3>Chi tiết giao dịch</h3>
              <div className="space20"></div>
              <form className="form-horizontal" method="get">
				Mã đơn hàng : <input className="custom_input" type="text" name="filter_invoiceid" value="" fdprocessedid="tmwr8" />
				Từ ngày : <input className="pickdate_from custom_input hasDatepicker" type="text" id="datepicker_from" name="filter_startdate_create_date" value="" fdprocessedid="vnf8dc" />
				Đến ngày : <input className="pickdate_to custom_input hasDatepicker" type="text" id="datepicker_to" name="filter_enddate_create_date" value="" fdprocessedid="9ez7n8" />
                <br/>
                <div className="space10"></div>
				Loại giao dịch :
                <select name="filter_transaction_type" className="custom_input" fdprocessedid="54en09">
                  <option value="">Tất cả</option>
                  <option value="1">Nạp tiền</option>
                  <option value="2">Rút tiền</option>
                  <option value="3">Đặt cọc đơn hàng</option>
                  <option value="4">Tất toán đơn hàng</option>
                  <option value="5">Hoàn tiền đơn hàng</option>
                  <option value="6">Thanh toán vận đơn</option>
                </select>

                <input className="button custom_flat_button" type="submit" value="Lọc" fdprocessedid="wnfkhb" />
              </form>
              <div className="space10"></div>
              <p className="note small">Bạn có thể nhấn vào mã đơn hàng để xem lịch sử giao dịch tài chính của đơn hàng</p>
              <div className="space10"></div>
              <div className="table-responsive">
                <table className="table tbl-cart tbl-list-order">
                  <tbody id="abc">
                    <tr className="header-cart-table">
                      <td width="25%">Ngày giao dịch</td>
                      <td width="25%">Mã giao dịch</td>
                      <td width="25%">Loại giao dịch</td>
                      <td width="25%">Nội dung</td>
                      <td width="25%">Phát sinh($)</td>
                      <td width="25%">Trước giao dịch($)</td>
                      <td width="25%">Sau giao dịch($)</td>
                    </tr>
                  </tbody>
                </table>
                <p className="note small">Bạn có thể nhấn vào mã đơn hàng để xem lịch sử giao dịch tài chính của đơn hàng</p>
                <p><strong>Total: <span className="green">0</span> (Giao dịch)</strong></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Wallet