/* eslint-disable react/no-unknown-property */

const ListOrders = () => {
  return (
    <div className="col-sm-9">
      <div className="cart-by-page">
        <div className="titles">
          <h2 className="page-title">
                Danh sách đơn hàng
          </h2>
        </div>

        <div className="filter">
          <form className="form-horizontal" method="get">
				Mã đơn hàng : <input className="custom_input" type="text" name="filter_id" value="" fdprocessedid="v6luf" />
				Chú thích : <input className="custom_input" type="text" name="filter_note_item" value="" fdprocessedid="168w66" />
			Từ ngày : <input className="pickdate_from custom_input hasDatepicker" type="text" id="datepicker_from" name="filter_startdate_create_date" value="" fdprocessedid="cngyu6" />
				Đến ngày : <input className="pickdate_to custom_input hasDatepicker" type="text" id="datepicker_to" name="filter_enddate_create_date" value="" fdprocessedid="hm84bi" />
            <br/>
            <div className="space10"></div>
				Kho nhận hàng :
            <select name="filter_store" className="custom_input" fdprocessedid="u7hhf">
              <option value="">Chọn kho</option>
              <option value="0">Hà Nội</option>
              <option value="2">Đà Nẵng</option>
              <option value="1">Sài gòn</option>
              <option value="3">Quảng Nam</option>
            </select>
			Trạng thái đơn hàng :
            <select name="filter_status" className="custom_input" fdprocessedid="d3177ri">
              <option value="">Tất cả</option>
              <option value="1">Chờ đặt cọc</option>
              <option value="2">Đã đặt cọc</option>
              <option value="3">Đã mua hàng</option>
              <option value="3.1">Hàng đã về kho TQ</option>
              <option value="4">Sẵn sàng giao</option>
              <option value="5">Đã kết thúc</option>
              <option value="-1">Đã hủy</option>
            </select>

            <input className="button custom_flat_button" type="submit" value="Lọc" fdprocessedid="ngst8" />
          </form>
          <div className="space10"></div>
        </div>
        <div>
          <div className="table-responsive size_medium">
            <div className="order_row row_header">
              <div className="col-md-4">
                <p>Thông tin đơn hàng</p>
              </div>
              <div className="col-md-4">
                <p>Chi tiết</p>
              </div>
              <div className="col-md-4">
                <p>Thanh toán</p>
              </div>
            </div>
          </div>

          <div className="pag">
          </div>
          <p><strong>Total: <span className="green">0</span> (Đơn hàng)</strong></p>
        </div>
      </div>
    </div>
  )
}

export default ListOrders