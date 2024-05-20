/* eslint-disable react/no-unknown-property */

const LoginForm = () => {
  return (
    <div id="content">
      <div className="container">
        <main className="main" role="main">
          <div className="row main-row">
            <div id="content" className="container">
              <main className="main" role="main">
                <div className="row main-row">
                  <div className="col-md-12">
                    <div className="dangkytaikhoan dangnhap">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="item_1">
                            <h3 className="title">
                                    Đăng ký thành viên mới
                            </h3>
                            <p className="desc">
                                    Đăng ký thành viên mới chỉ trong vòng 1 phút để có thể đặt hàng.
                            </p>
                            <div className="button">
                              <a href="https://my.orderhangquangchau.com/register" className="btn btn-success">Đăng ký tài khoản</a>
                              {' '}
                              <a className="btn btn-danger" href="https://my.orderhangquangchau.com/resetpass">Khôi phục tài khoản</a>
                            </div>

                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="item_2">
                            <h3 className="title">
                                    Bạn đã có tài khoản
                            </h3>
                            <p style= {{ color: 'red' }}>Notice: Nếu không thể đăng nhập hệ thống, Nhấn khôi phục tài khoản để lấy lại thông tin<br/>hoặc Liện hệ với chúng tôi để nhận mật khẩu mới</p>
                            <form action="" method="post" className="form_dangnhap">
                              <div className="form-group"><label htmlFor="username">Tài khoản Hoặc Email</label>
                                <input type="text" name="username" value="" className="form-control" fdprocessedid="9awy6r" />
                              </div>
                              <div className="form-group"><label htmlFor="password">Mật khẩu</label>
                                <input type="password" name="password" value="" className="form-control" fdprocessedid="lxsmtq" />
                              </div>
                              <input type="submit" className="btn btn-danger" name="login" value="Đăng nhập" fdprocessedid="dx2u06" />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LoginForm