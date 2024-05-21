/* eslint-disable react/no-unknown-property */

const ResetPassword = () => {
  return (
    <>
      <div className="col-sm-12">
        <div className="header-login-frm">
          <h2 className="page-title">Lấy lại mật khẩu</h2>
        </div>
        <div className="dangkytaikhoan">

          <form className="form-horizontal" action="https://my.orderhangquangchau.com/resetpass" method="post" role="form">
            <div className="reset_password">
              <div className="form-group">
                <input type="text" id="username" className="form-control" name="username" placeholder="Username hoặc email ..." fdprocessedid="8b64azi" />
              </div>

              <div className="form-group pull-left">
                <input type="submit" className="btn btn-danger" name="save" value="Gửi" fdprocessedid="9p9q9a" />
              </div>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default ResetPassword