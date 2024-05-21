/* eslint-disable react/no-unknown-property */

const Profile = () => {
  return (
    <>
      <div className="col-sm-9">
        <div className="cart-by-page">
          <div className="titles">
            <h2 className="page-title">
                Thông tin tài khoản
            </h2>
          </div>
          <form className="form-horizontal" method="post" action="">

            <div className="form-group">
              <label className="control-label col-sm-2">Tài khoản</label>
              <div className="col-sm-6">
                <input className="input form-control" name="username" type="text" value="chaobanhnguyen" readOnly="" fdprocessedid="z5e5lm" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">E-mail</label>
              <div className="col-sm-6">
                <input className="input form-control" name="email" type="text" id="email" value="chaobanhnguyen@gmail.com" readOnly="" fdprocessedid="5kcx1l" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2">Họ và tên</label>
              <div className="col-sm-6">
                <input className="input form-control" name="fullname" type="text" value="chaobanhnguyen" fdprocessedid="ul46z" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="phone">Điện thoại</label>
              <div className="col-sm-6">
                <input className="input form-control" name="phone" type="text" id="phone" value="0917823999" fdprocessedid="d0818p" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="address">Địa chỉ</label>
              <div className="col-sm-6">
                <textarea name="address" className="input form-control" id="address"></textarea>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="address">Địa đểm nhận hàng</label>
              <div className="col-sm-6">
                <select id="store" name="store" className="form-control" onChange="loadSubStore(this.value)" required="" fdprocessedid="7hlsrk">
                  <option value="0">Hà Nội</option>
                  <option value="1">Sài Gòn</option>
                  <option value="2" selected="">Đà Nẵng</option>
                  <option value="3">Quảng Nam</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-6">
                <input type="submit" className="btn btn-danger" name="update" value="Lưu thông tin" fdprocessedid="thmlf9" />
              </div>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default Profile