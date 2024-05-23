/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import { FaCalendar } from 'react-icons/fa'
import { DatePicker } from 'antd'
import { AiFillDashboard } from 'react-icons/ai'
import { LuRefreshCw } from 'react-icons/lu'
import { FaSearch } from 'react-icons/fa'

const ListShipOrders = () => {

  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <>
      <section className="content">
        <div className="row">
          <section className="content-header">
            <h1> Danh sách đơn hàng ký gửi</h1>
            <ol className="breadcrumb">
              <li><a href="/dashboard">
                <AiFillDashboard/>
                Trang chủ </a></li>
              <li><a>Quản lý nhập hàng</a></li>
              <li className="active">Danh sách đơn hàng ký gửi</li>
            </ol>
          </section>
          <section className="content">
            <div className="box box-chipo clearfix">
              <div className="list-order clearfix">
                <div className="table-responsive">
                  <div className="col-md-12">
                    <div className="row">
                      <form>
                        <div className="top-order form-group clearfix">
                          <ul className="lp-header list-inline">
                            <li className="col-md-2 col-xs-12">
                              <div className="form-group">
                                <input type="text" className="form-control" name="filter_id" placeholder="Đơn hàng" value="" fdprocessedid="kf3ip" />
                              </div>
                            </li>
                            <li className="col-md-3 col-xs-12">
                              <div className="form-group">
                                <input type="text" className="form-control" number-only="" name="filter_invoiceid" value="" placeholder="Mã hóa đơn" fdprocessedid="9udwh" />
                              </div>
                            </li>
                            <li className="col-md-2 col-xs-12">
                              <div className="form-group">
                                <div className="input-group date">
                                  <div className="input-group-addon">
                                    <FaCalendar/>
                                  </div>
                                  <DatePicker onChange={onChange} needConfirm />
                                </div>
                              </div>
                            </li>
                            <li className="col-md-2 col-xs-12">
                              <div className="form-group">
                                <div className="input-group date">
                                  <div className="input-group-addon">
                                    <FaCalendar/>
                                  </div>
                                  <DatePicker onChange={onChange} needConfirm />
                                </div>
                              </div>
                            </li>
                            <li className="col-md-3 col-xs-12">
                              <div className="form-group">
                                <button type="submit" ng-click="self.search(dataSearch, 0)" className="btn btn-info btn-seach-package" fdprocessedid="mziih9"><FaSearch/> Lọc
                                </button>
                                <a href="/shiporder/lists" className="btn btn-default"><LuRefreshCw /> Làm lại</a>
                              </div>
                            </li>

                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="cart-by-page">
                        <div className="titles">
                          <h2 className="page-title">
									Danh sách đơn hàng
                          </h2>
                        </div>
                        <div className="list_status clearfix">
                          <ul className="ls-tags list-inline hidden-xs">
                            <li>
                              <a href="https://my.orderhangquangchau.com/shipOrder/lists" className="black">
													Toàn bộ : <span>(0)</span>
                              </a>

                            </li>
                            <li>

                              <a href="https://my.orderhangquangchau.com/shipOrder/lists?filter_status=0" className="blue">
													Chưa duyệt : <span>(0)</span>
                              </a>

                            </li>
                            <li>

                              <a href="https://my.orderhangquangchau.com/shipOrder/lists?filter_status=1" className="green">
													Đã duyệt : <span>(0)</span>
                              </a>

                            </li>
                            <li>

                              <a href="https://my.orderhangquangchau.com/shipOrder/lists?filter_status=2" className="hangdave">
													Hàng đã về - chờ giao hàng : <span>(0)</span>
                              </a>

                            </li>
                            <li>

                              <a href="https://my.orderhangquangchau.com/shipOrder/lists?filter_status=3" className="black">
													Đã kết thúc : <span>(0)</span>
                              </a>

                            </li>
                            <li>

                              <a href="https://my.orderhangquangchau.com/shipOrder/lists?filter_status=-1" className="red">
													Đã hủy : <span>(0)</span>
                              </a>

                            </li>
                          </ul>
                        </div>
                        <div className="table-responsive">
                          <table className="table table table-striped table-bordered table-hover tbl-cart tbl-list-order">
                            <thead>
                              <tr className="header-cart-table">
                                <th width="5%">STT</th>
                                <th width="10%">Đơn hàng</th>
                                <th width="25%">Mã hóa đơn/Ngày mua hàng</th>
                                <th width="10%">Kho nhận hàng</th>
                                <th width="16%">Số vận đơn</th>
                                <th width="10%">Tổng cân nặng</th>
                                <th width="10%">Tổng tiền vc</th>
                                <th width="10%">Phí bảo hiểm</th>
                                <th width="10%">Tình trạng</th>
                              </tr>
                            </thead>
                            <tbody id="abc">

                            </tbody>
                          </table>
                        </div>
                        <div className="pag">
                        </div>
                        <p><strong>Total: <span className="green">0</span> (Items)</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default ListShipOrders