/* eslint-disable react/no-unknown-property */
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../redux/user/userSlice'

const GeneralBoard = () => {
  const user = useSelector(selectCurrentUser)
  const renderCustomerSuppor = () => {
    if (user == null) {
      return (
        <div className="col-sm-9">
          <div className="cart-by-page">
            <div className="titles">
              <h2 className="page-title">
                        Bảng tin chung
              </h2>
            </div>

          </div>
        </div>
      )
    }
    return (
      <>
        <div className="col-sm-9">
          <div className="cart-by-page">
            <div className="titles">
              <h2 className="page-title">
                  Bảng tin chung
              </h2>
            </div>
            <div className="message_text" style= {{
              textAlign: 'center',
              background: '#87cf82',
              color: '#fff',
              padding: '14px', marginBottom: '10px'
            }}
            >
					Để nâng cao chất lượng dịch vụ, chúng tôi cung cấp tiện ích duyệt tiền nhanh cho quý khách hàng sử dụng chuyển khoản qua Internet - Banking và không cần gửi thông tin giao dịch nạp tiền. Quý khách hàng chỉ cần nhập nội dung chuyển tiền như sau : <span className="red big" style= {{ fontSize: '26px' }}><strong>HQC6709CK</strong></span> . Trong đó <span className="black">6709</span> là mã số riêng của khách hàng, <span className="black">HQC xxxx CK</span> là cú pháp nạp tiền. Mọi thắc mắc vui lòng liên hệ tư vấn
            </div>

            <div className="tab_container">
              <br/>
              <br/>
              <h2 className="page-title">
					Thông báo đơn hàng , giao dịch của bạn
              </h2>
              <div className="tab_content">

                <div className="space20"></div>
                <form className="form-horizontal" method="get">
					Từ ngày : <input className="pickdate_from custom_input hasDatepicker" type="text" id="datepicker_from" name="filter_startdate_create_date" value="" fdprocessedid="fvkwn6" />
					Đến ngày : <input className="pickdate_to custom_input hasDatepicker" type="text" id="datepicker_to" name="filter_enddate_create_date" value="" fdprocessedid="65c517" />
                  <br/>
                  <div className="space10"></div>
					Loại thông báo :
                  <select name="filter_notice_type" className="custom_input" fdprocessedid="x4dvgk">
                    <option value="">Tất cả</option>
                    <option value="1">Ví điện tử</option>
                    <option value="2">Đơn hàng</option>
                    <option value="3">Khiếu nại</option>
                    <option value="4">Vận đơn</option>
                  </select>
					Trạng thái :
                  <select name="filter_is_read" className="custom_input" fdprocessedid="hy4s76">
                    <option value="">Tất cả</option>
                    <option value="0">Chưa xem</option>
                    <option value="1">Đã xem</option>
                  </select>
                  <input className="button custom_flat_button" type="submit" value="Lọc" fdprocessedid="3sx0ji" />
                </form>
                <div className="space20"></div>
                <div className="table-responsive">
                  <form id="formData" action="member/updateread" method="POST">
                    <table className="table tbl-cart tbl-list-order">
                      <tbody id="abc">
                        <tr className="header-cart-table">
                          <td width="5%">#</td>
                          <td width="20%">Thời gian</td>
                          <td width="20%">Loại thông báo</td>
                          <td width="55%">Nội dung</td>
                          <td width="15%">
                            <input type="checkbox" name="checkall" onClick="checkAll(this)" className="isCheckBox" style= {{ float: 'left' }} />
                            <button className="button custom_flat_button" onClick="submitForm('#formData')" fdprocessedid="i1ob2c">Đã xem</button>
                          </td>
                        </tr>
                      </tbody>

                    </table>
                  </form>
                  <p><strong>Total: <span className="green">0</span> (Thông báo)</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    )
  }

  return (
    <>
      {renderCustomerSuppor()}
    </>
  )
}

export default GeneralBoard