/* eslint-disable react/no-unknown-property */
import { FaLocationDot } from 'react-icons/fa6'
import { Button, Modal } from 'antd'
import { useState } from 'react'

const AddOrders = () => {
  const [isAddAddressOpen, setIsAddAddressOpen] = useState(false)
  const [isUploadImageOpen, setIsUploadImageOpen] = useState(false)

  const showAddAddressModal = () => {
    setIsAddAddressOpen(true)
  }
  const handleAddAddressCancel = () => {
    setIsAddAddressOpen(false)
  }

  const showUploadImageModal = () => {
    setIsUploadImageOpen(true)
  }
  const handleUploadImageCancel = () => {
    setIsUploadImageOpen(false)
  }


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
                        <h4><FaLocationDot/> Địa chỉ nhận hàng</h4>
                        <div id="list_address">
                        </div>
                        <div className="">
                          <Button onClick={showAddAddressModal} className="btn bg_yellow popup_link">Thêm mới địa chỉ</Button>
                          <Modal open={isAddAddressOpen} onCancel={handleAddAddressCancel} footer={null}>
                            <div class="w2ui-box1" style= {{ bottom: '0px !important' }}>
                              <div class="w2ui-msg-body w2ui-msg-no-buttons">
                                <div rel="title" class="title">
                                Thêm mới địa chỉ nhận hàng
                                </div>
                                <div rel="body" class="contentPopup" style= {{ padding: '20px' }}>
                                  <div id="response_ajax"></div>
                                  <form name="changesupport" action="" class="align-center ajaxForm Support" method="POST">
                                    <div class="form-group">
                                      <input type="text" class="form-control" name="receiver_name" placeholder="Tên người nhận" value="" required="" fdprocessedid="6q8if5" />
                                    </div>
                                    <div class="form-group">
                                      <input type="text" class="form-control" name="receiver_phone" placeholder="Số ĐT người nhận" value="" required="" fdprocessedid="dovypg" />
                                    </div>
                                    <div class="form-group">
                                      <input type="text" class="form-control" name="fulladdress" placeholder="Địa chỉ người nhận" value="" required="" fdprocessedid="shhts" />
                                    </div>
                                    <div class="form-group">
                                      <select name="store" class="form-control" required="" onchange="loadSubStore(this.value)" fdprocessedid="appi9n">
                                        <option value="">Vị trí kho hàng việt nam</option>
                                        <option value="0">Hà Nội</option>
                                        <option value="1">Sài Gòn</option>
                                        <option value="2">Đà Nẵng</option>
                                        <option value="3">Quảng Nam</option>
                                      </select>
                                    </div>

                                    <div class="form-group">
                                      <select id="sub_store" name="sub_store" class="form-control" required="" fdprocessedid="4pb219">
                                        <option value="">Bạn cần chọn Vị trí kho hàng</option>
                                      </select>
                                    </div>

                                    <div class="form-group">
                                      <input type="submit" class="btn btn-danger" name="save" value="Lưu" fdprocessedid="42r2z8" />
                                    </div>
                                    {/* <input type="hidden" name="address_id" value="0">
                                        <input type="hidden" name="is_reload" value="1">
                                        <input type="hidden" name="cid" value="">
                                        <input type="hidden" name="controller" value="member">
                                        <input type="hidden" name="task" value="addNewAddress"> */}
                                  </form>
                                </div>
                              </div>
                            </div>
                          </Modal>
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
                            <Button onClick={showUploadImageModal} className="btn bg_yellow popup_link">Tải ảnh</Button>
                            <Modal open={isUploadImageOpen} onCancel={handleUploadImageCancel} footer={null}>
                              <form action="https://my.orderhangquangchau.com/S3uploadfile/addImagesOrders" method="POST" enctype="multipart/form-data" class="direct-upload">
                                <center><h1>Upload ảnh</h1></center>
                                <input type="hidden" value="6709" name="cid" />
                                <input type="hidden" value="6709_1716490081" name="idupload" />

                                <input type="file" name="files" accept="image/png, image/jpeg" id="imgInp" />

                                <input type="hidden" name="Content-Type" />
                                <div class="progress-bar-area"></div>
                              </form>
                            </Modal>
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