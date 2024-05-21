/* eslint-disable react/no-unknown-property */

const ListShipIds = () => {
  return (
    <>
      <section class="content">
        <div class="row">
          <section class="content-header">
            <h1> Danh sách đơn hàng ký gửi</h1>
            <ol class="breadcrumb">
              <li><a href="/dashboard"><i class="fa fa-dashboard"></i> Trang chủ </a></li>
              <li><a>Quản lý nhập hàng</a></li>
              <li class="active">Danh sách đơn hàng ký gửi</li>
            </ol>
          </section>
          <section class="content">
            <div class="box box-chipo clearfix">
              <div class="list-order clearfix">
                <div class="table-responsive">
                  <div class="col-md-12">
                    <div class="row">
                      <form>
                        <div class="top-order form-group clearfix">
                          <ul class="lp-header list-inline">
                            <li class="col-md-3 col-xs-12">
                              <div class="form-group">
                                <input type="text" class="form-control" number-only="" name="filter_shipid" value="" placeholder="Mã vận đơn" fdprocessedid="4k08j" />
                              </div>
                            </li>

                            <li class="col-md-3 col-xs-12">
                              <div class="form-group">
                                <div class="input-group date">
                                  <div class="input-group-addon">
                                    <i class="fa fa-calendar"></i>
                                  </div>
                                  <input class="pickdate_from form-control pull-right hasDatepicker" type="text" id="datepicker_from" value="" name="filter_startdate_created_date" fdprocessedid="ec1l79" />
                                </div>
                              </div>
                            </li>
                            <li class="col-md-3 col-xs-12">
                              <div class="form-group">
                                <div class="input-group date">
                                  <div class="input-group-addon">
                                    <i class="fa fa-calendar"></i>
                                  </div>
                                  <input class="pickdate_to form-control pull-right hasDatepicker" type="text" id="datepicker_to" value="" name="filter_enddate_created_date" fdprocessedid="v02lp" />

                                </div>
                              </div>
                            </li>
                            <li class="col-md-3 col-xs-12">
                              <div class="form-group">
                                <button type="submit" ng-click="self.search(dataSearch, 0)" class="btn btn-info btn-seach-package" fdprocessedid="6b85s7"><span class="glyphicon glyphicon-search"></span> Lọc
                                </button>
                                <a href="/shiporder/lists" class="btn btn-default"><i class="glyphicon glyphicon-refresh"></i> Làm lại</a>
                              </div>
                            </li>

                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="cart-by-page">
                        <div class="titles">
                          <h2 class="page-title">
										Danh sách đơn hàng
                          </h2>
                        </div>

                        <div class="table-responsive">
                          <table class="table table table-striped table-bordered table-hover tbl-cart tbl-list-order">
                            <thead>
                              <tr class="header-cart-table">
                                <th width="5%">STT</th>
                                <th width="10%">Mã vận đơn</th>
                                <th width="5%">Cân nặng</th>
                                <th width="5%">Phí VC</th>
                                <th width="15%">Mã đơn</th>
                                <th width="20%">Tình trạng</th>
                              </tr>
                            </thead>
                            <tbody id="abc">

                            </tbody>
                          </table>
                        </div>
                        <div class="pag">
                        </div>
                        <p><strong>Total: <span class="green">0</span> (Items)</strong></p>
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

export default ListShipIds