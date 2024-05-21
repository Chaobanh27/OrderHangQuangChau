/* eslint-disable react/no-unknown-property */

const ShipOrder = () => {
  return (
    <section className="content">
      <div className="row">
        <section className="content-header">
          <h1> Thêm đơn ký gửi</h1>
          <ol className="breadcrumb">
            <li><a href="/dashboard"><i className="fa fa-dashboard"></i> Trang chủ </a></li>
            <li><a>Quản lý nhập hàng</a></li>
            <li className="active">Thêm đơn hàng ký gửi</li>
          </ol>
        </section>
        <section className="content">
          <div className="box box-chipo clearfix">
            <div className="list-order clearfix">
              <div className="table-responsive">
                <form action="https://my.orderhangquangchau.com/ShipOrder/addOrderShipOnly" method="POST" id="myformID">
                  <table className="table table-striped table-bordered table-hover table_cart" id="shiporderTable">
                    <thead>
                      <tr className="header-cart-table">
                        <td style= {{ width: '5%' }}><input type="checkbox" id="checkAllOrderShip" name="checkbox" /></td>
                        <td style= {{ width: '5%' }}>STT</td>
                        <td style= {{ width: '20%' }}>Vận đơn(*)</td>
                        <td className="left" style= {{ width: '30%' }}>Tên người nhận(*)</td>
                        <td className="center" style= {{ width: '16%' }}>Chú ý, mô tả mặt hàng</td>
                        <td className="center" style= {{ width: '18%' }}>Đóng gỗ(nếu có)</td>
                        <td className="center" style= {{ width: '10%' }}></td>

                      </tr>
                    </thead>

                    <tbody>

                      <tr id="row_add_shiporder_item">
                        <td></td>
                        <td></td>
                        <td><input name="ship_id" id="shiporder_shipid" value="" placeholder="Mã vận đơn" className="form-control" fdprocessedid="o5v0kh" /></td>
                        <td><input name="rec_name" id="shiporder_rec_name" value="" placeholder="Tên người nhận" className="form-control" fdprocessedid="ri97w6" /></td>
                        <td><textarea name="desc" id="shiporder_desc" className="form-control"></textarea></td>
                        <td id="col_image">
                          <input style= {{ width: '20px', height: '20px' }} type="checkbox" id="iswoodpack" name="rec_iswoodpack" />
                        </td>
                        <td><button id="add_shiporder_item" className="form-control btn-success" style= {{ backgroundColor: '#5cb85c !important', borderColor: '#4cae4c !important' }} fdprocessedid="0hheyd">Thêm</button>

                        </td>
                        <input type="hidden" value="1" id="number_ship" />

                      </tr>


                      <tr id="btn_cart_submit">
                        <td className="center" colSpan="7"><input type="submit" name="confirm_order" id="confirm_order" className="btn btn-warning right" value="Gửi đơn hàng" fdprocessedid="c1cnzd" /></td>
                      </tr>

                    </tbody>
                  </table>
                </form></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ShipOrder