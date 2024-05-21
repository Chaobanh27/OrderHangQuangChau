/* eslint-disable react/no-unknown-property */


const RegisterForm = () => {
  return (

    <>
      <div className="col-sm-7">
        <div className="header-login-frm">
          <h2 className="page-title">Đăng ký thành viên</h2>
        </div>

        <div className="dangkytaikhoan">
          <form className="form-horizontal" action="https://my.orderhangquangchau.com/register" method="post" role="form">
            <div className="full">
              <div className="form-group">

                <input type="text" className="form-control" name="email" placeholder="Email" value="" required="" fdprocessedid="omw47m"/>

              </div>
              <div className="form-group">

                <input type="password" className="form-control" name="password" placeholder="Mật khẩu" value="" required="" fdprocessedid="e13kk7"/>

              </div>
              <div className="form-group">

                <input type="password" className="form-control" name="passconf" placeholder="Nhập lại mật khẩu" value="" required="" fdprocessedid="m6w2j"/>

              </div>
              <div className="form-group">

                <input type="text" className="form-control" name="phone" placeholder="Số điện thoại" value="" required="" fdprocessedid="s2w6is"/>

              </div>
              <div className="form-group">

                <select name="store" className="form-control" required="" onchange="loadSubStore(this.value)" fdprocessedid="zddyf">
                  <option value="">Địa đểm nhận hàng</option>
                  <option value="0">Hà Nội</option>
                  <option value="2">Đà Nẵng</option>
                  <option value="1">Sài Gòn</option>
                  <option value="3">Quảng Nam</option>
                </select>

              </div>
              <div className="form-group pull-left">
                <input type="submit" className="btn btn-danger" name="save" value="Đăng ký" fdprocessedid="2whfz" />
              </div>
              <div className="form-group pull-right">
                <div className="tml-action-links">
                  <a href="https://my.orderhangquangchau.com/login" rel="nofollow">Đăng nhập</a> <span style= {{ marginLeft: '5px' }}>nếu bạn đã có tài khoản</span>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="networks clearfix" style= {{ display: 'none' }}>
              <div className="pull-left">
                <a href=""><img src="https://my.orderhangquangchau.com/static/images/register-facebook.png" /></a>
              </div>
              <div className="pull-right">
                <a href=""><img src="https://my.orderhangquangchau.com/static/images/register-google.png" /></a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-sm-5">
        <div className="introduce">
          <h4 className="uppercase">Tại sao bạn lựa chọn chúng tôi:</h4>
          <p className="text-success">
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Giao dịch an toàn bảo mật tuyệt đối.
          </p>
          <p className="text-success">
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Vận chuyển nhanh toàn quốc, giá tốt nhất.
          </p>
          <p className="text-success">
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Phong cách phục vụ chuyên nghiệp, tư vấn nhiệt tình, chu đáo.
          </p>
          <p className="text-success">
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Không vì lợi ích bán hàng mà bỏ qua lợi ích khách hàng.
          </p>
          <p className="text-success">
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Giải quyết mọi khúc mắc, khiếu nại nhanh chóng.
          </p>
        </div>
      </div>
    </>


  )
}

export default RegisterForm