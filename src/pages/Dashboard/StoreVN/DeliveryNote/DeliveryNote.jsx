import CustomerSupport from '../../../../components/CustomerSupport/CustomerSupport'

/* eslint-disable react/no-unknown-property */
const DeliveryNote = () => {
  return (
    <>
      <CustomerSupport/>
      <section className="content">
        <div className="row">
          <section className="content-header">
            <h1> Danh sách phiếu giao hàng</h1>
            <ol className="breadcrumb">
              <li><a href="/dashboard"><i className="fa fa-dashboard"></i> Trang chủ </a></li>
              <li><a>Quản lý nhập hàng</a></li>
              <li className="active">Danh sách phiếu hàng</li>
            </ol>
          </section>
          <section className="content">
            <div className="box box-chipo clearfix">
              <div className="list-order clearfix">
                <form>
                  <div className="top-order form-group clearfix">
                    <ul className="lp-header list-inline">
                      <div style= {{ clear:'both' }} className="row">
                        <li className="col-md-3 col-xs-12">
                          <div className="form-group">
                            <input type="text" className="form-control" number-only="" name="filter_dl_id" placeholder="Mã phiếu" value="" fdprocessedid="veabls" />
                          </div>
                        </li>
                        <li className="col-md-3 col-xs-12">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Số điện thoại người nhận" value="" name="filter_dl_receiver_phone" fdprocessedid="i7zas9" />

                          </div>
                        </li>
                        <li className="col-md-6 col-xs-12">
                          <div className="form-group">
                            <button type="submit" ng-click="self.search(dataSearch, 0)" className="btn btn-info btn-seach-package" fdprocessedid="16il59"><span className="glyphicon glyphicon-search"></span> Lọc
                            </button>
                            <a href="/storevn/delivery_note" className="btn btn-default"><i className="glyphicon glyphicon-refresh"></i> Làm lại</a>
                          </div>
                        </li>
                      </div>
                      <div style= {{ clear:'both' }} className="row">
                        <li className="col-md-3 col-xs-12">
                          <div className="form-group">
                            <div className="input-group date">
                              <div className="input-group-addon">
                                <i className="fa fa-calendar"></i>
                              </div>
                              <input className="pickdate_from form-control pull-right hasDatepicker" type="text" id="datepicker_from" value="2024-05-05 00:00:00" name="filter_startdate_create_date" fdprocessedid="tfa17g" />
                            </div>
                          </div>
                        </li>
                        <li className="col-md-3 col-xs-12">
                          <div className="form-group">
                            <div className="input-group date">
                              <div className="input-group-addon">
                                <i className="fa fa-calendar"></i>
                              </div>
                              <input className="pickdate_to form-control pull-right hasDatepicker" type="text" id="datepicker_to" value="2024-05-20 23:59:59" name="filter_enddate_create_date" fdprocessedid="lrw5sm" />

                            </div>
                          </div>
                        </li>
                        <li className="col-md-3 col-xs-12">
                          <div className="form-group">
                            <select className="form-control" name="filter_dl_hinhthuc" fdprocessedid="5xqre9">
                              <option value="0" selected="">--- Vui lòng chọn hình thức ---</option>
                              <option value="1">Giao hàng ra xe khách</option>
                              <option value="2">Gửi GHKT</option>
                              <option value="3">Gửi Viettel Post</option>
                              <option value="4">Giao nội thành</option>
                              <option value="5">Giao nhận tại Kho</option>
                            </select>
                          </div>
                        </li>
                        <li className="col-md-3 col-xs-12">
                          <div className="form-group">
                            <select className="form-control" name="filter_dl_type" fdprocessedid="aa4qy">
                              <option label="Tất cả" value="">Tất cả trạng thái</option>
                            </select>

                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </form>
                <div className="box-order-list">
                  <div className="panel panel-default panel-chipo">
                    <div className="panel-heading">
                      <div className="pn_top clearfix">
                        <div className="pn_top_left pull-left">
                          <ul className="list-inline">
                            <li>
                              <p>Số phiếu giao hàng: <strong className="text-red">0</strong></p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel-body">
                      <div className="pn_content">
                        <table className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th className="text-center vcenter" width="15%"> Thông tin phiếu</th>
                              <th>
                                <div className="col-md-12">Thông tin nhận hàng</div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="text-center text-red">
                              <td colspan="8">Hiện tại quý khách không có phiếu giao hàng nào.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row total-pagination">
                    <div className="pull-right">
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

export default DeliveryNote