import { Link } from 'react-router-dom'

const ExtraHeader = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row1">
            <div className="pull-left">
              <a className="main_logo" target="_blank" rel="noreferrer" href="http://orderhangquangchau.com">
                <img src="https://my.orderhangquangchau.com/static/images/logo_ex.png" alt="Orderhangquangchau.com" />
              </a>
            </div>

            <div className="pull-right">
              <div id="topsearch">
                <div className="frame">
                  <span className="store storehn">Kho hàng HN:</span>


                  <div id="SkypeButton_Call_HN" className="skype_frame">
                    <p id="SkypeButton_Call_HN_paraElement" style= {{ fontSize:'14px', color:'#444444' }}><a href="skype:orderhangquangchau02?chat"><img src="http://my.orderhangquangchau.com/static/images/chatbutton_16px.png" alt="Skype chat, instant message" role="Button" style= {{ border:0, margin:'16px', verticalAlign:'-20px' }} /></a></p>
                  </div>
                  <b>0393.241.666</b><br/><br/>
                  <span className="store storesg">Kho hàng SG:</span>
                  <div id="SkypeButton_Call_HCM" className="skype_frame">
                    <p id="SkypeButton_Call_HN_paraElement" style= {{ fontSize:'14px', color:'#444444' }}><a href="skype:orderhangquangchau03?chat"><img src="http://my.orderhangquangchau.com/static/images/chatbutton_16px.png" alt="Skype chat, instant message" role="Button" style= {{ border:0, margin:'16px', verticalAlign:'-20px' }} /></a></p>
                  </div>

                  <b>0345.412.491</b>
                </div>
                <div className="hotline">
                  <div>
                    <span className="store">Kho hàng ĐN:</span> <b style= {{ color:'#4053b2' }}>0905.671.000</b><br/><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="main_menu">
        <nav className="navbar navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
              <ul className="nav navbar-nav">

                <li className="dropdown">
                  <i className="fa fa-tachometer" aria-hidden="true"></i>
                  <a href="https://my.orderhangquangchau.com/dashboard">Bảng tin</a>
                </li>
                <li>
                  <i className="fa fa-sign-in" aria-hidden="true"></i>
                  <Link to='login' >Đăng nhập</Link>
                </li>
                <li>
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                  <Link to='register' >Đăng ký</Link>
                </li>

                <li className="dropdown">
                  <i className="fa fa-hospital-o"></i>
                  <a target="_blank" rel="noreferrer" href="http://orderhangquangchau.com/order-hang-taobao-gia-re/">Bảng giá</a>
                </li>

                <li className="dropdown">
                  <i className="fa fa-credit-card"></i>
                  <a target="_blank" rel="noreferrer" href="http://orderhangquangchau.com/dat-hang-taobao.html">Thông tin thanh toán</a>
                </li>
                <li className="dropdown">
                  <i className="fa fa-star"></i>
                  <a href="https://my.orderhangquangchau.com/shop">Shop uy tín</a>
                </li>


              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default ExtraHeader