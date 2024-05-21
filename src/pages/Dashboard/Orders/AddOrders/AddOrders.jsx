/* eslint-disable react/no-unknown-property */

const AddOrders = () => {
  return (
    <>
      <div className="col-sm-12">
        <div className="cart-by-page">
          <div className="titles">
            <h2 className="page-title">
                Thêm đơn hàng
            </h2>
          </div>
          <div className="col-sm-12" style= {{ paddingLeft: '0px !important', paddingRight: '0px !important' }}>
            <div className="box box-chipo clearfix">
              <div className="list-order clearfix">
                <div className="table-responsive  size_medium">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="customer_address row gray_box padding20">
                        <h4><i className="fa fa-map-marker"></i> Địa chỉ nhận hàng</h4>
                        <div id="list_address">
                        </div>
                        <div className="">
                          <a onClick="openPopup('https://my.orderhangquangchau.com/member/addAddress',{},600,500)" className="btn bg_yellow popup_link">Thêm mới địa chỉ</a>
                        </div>
                      </div>

                    </div>
                  </div>
                  <table className="table table-striped table-bordered table-hover table_cart" id="shiporderTable">
                    <thead>
                      <tr className="header-cart-table">
                        <td style= {{ width: '5%' }}>All <br/><input type="checkbox" id="checkAllOrderShip" name="checkbox" /></td>
                        <td style= {{ width: '55%' }}>Sản phẩm</td>

                        <td className="center" style= {{ width: '15%' }}>Số lượng</td>
                        <td className="center" style= {{ width: '15%' }}>Đơn giá</td>
                        <td style= {{ width:'10%' }}></td>
                      </tr>
                    </thead>

                    <tbody>

                      <tr id="row_add_shiporder_item">
                        <td></td>
                        <td>
                          <div style= {{ marginBottom: '5px' }}><input name="itemlink" id="itemlink" value="" placeholder="Link sản phẩm" className="form-control" fdprocessedid="ehax98" /></div>
                          <div id="col_image" style= {{ width:'100%', float:'left', marginBottom: '5px' }}>
                            <img id="itemimage" width="50px" height="50px" />
                            <input id="txtitemimage" name="txtitemimage" type="hidden" />
                            <button className="link_ajax btn-link" onclick="openPopupNew('https://my.orderhangquangchau.com/order/uploadimagesitem',{orderid:1716220263},600,400)" fdprocessedid="xmkl7c">
                              <b>Tải ảnh</b>
                            </button>
                          </div>
                          <div style= {{ marginBottom: '5px' }}><input name="itemname" id="itemname" value="" placeholder="Tên sản phẩm" className="form-control" fdprocessedid="4cu1nt" /></div>

                          <div style= {{ marginBottom: '5px' }}><input name="itemquatity" id="itemquatity" type="number" value="" placeholder="Số lượng" className="form-control" fdprocessedid="wxs0d" /></div>
                          <div style= {{ marginBottom: '5px' }}><input name="itemprice" id="itemprice" value="" placeholder="Đơn giá" className="form-control" fdprocessedid="17yqj6" /></div>
                        </td>
                        <td valign="top"><input name="itemattr" id="itemattr" value="" placeholder="Thuộc tính" className="form-control" fdprocessedid="tlpijf" /></td>
                        <td valign="top"><input name="itemnote" id="itemnote" value="" placeholder="Ghi chú" className="form-control" fdprocessedid="y3s1mi" /></td>
                        <td valign="top"><button id="add_order_item" className="form-control btn-success" fdprocessedid="vf1b0ku">Thêm</button>

                        </td>
                        <input type="hidden" value="1" id="number_ship" />

                      </tr>


                      <tr id="btn_cart_submit">
                        <td className="center" colSpan="9"><input type="button" name="confirm_order" id="confirm_order" className="btn btn-warning right" value="Gửi đơn hàng" fdprocessedid="koub1s" /></td>
                      </tr>

                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="2">
                          <span className="col-md-12" style= {{ paddingLeft: '0px', width: '120px', display: 'inline-block' }}>
                            <label style= {{ float: 'left', lineHeight: '20px', marginBottom: '0px', paddingTop: '4px', marginRight: '4px' }} for="iswoodpack">Đóng gỗ</label>
                            <input style= {{ width: '20px', height:'20px' }} type="checkbox" id="iswoodpack" name="iswoodpack" value="0" />
                          </span>
                          <span className="col-md-12" style= {{ paddingLeft: '0px', width: '120px', display: 'inline-block' }}>
                            <label style= {{ float: 'left', lineHeight: '20px', marginBottom: '0px', paddingTop: '4px', marginRight: '4px' }} for="isordercheck">Kiểm hàng</label>
                            <input style= {{ width: '20px', height:'20px' }} type="checkbox" id="isordercheck" name="isordercheck" value="0" />
                          </span>
                        </td>
                        <td colSpan="3">
                          <span className="" style= {{ paddingLeft: '0px', width: '120px', display: 'inline-block' }}>
                            <label style={{ float: 'left', lineHeight: '20px', marginBottom: '0px', paddingTop: '4px', marginRight: '4px' }} for="ordernote">Ghi chú đơn hàng</label>
                            <textarea name="ordernote" id="ordernote" className="form-control" row="3" col="30" placeholder="Ghi chú đơn hàng"></textarea>
                          </span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddOrders