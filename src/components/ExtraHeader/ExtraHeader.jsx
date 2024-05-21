import { Link } from 'react-router-dom'
import { FaTachometerAlt, FaSignInAlt, FaUserPlus, FaHospital, FaCreditCard, FaStar, FaFile, FaArchive, FaMoneyBill, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/userSlice'


const ExtraHeader = () => {
  const user = useSelector(selectCurrentUser)

  const renderNavbar = () => {
    if (user == null) {
      return (
        <>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            {/* <i className="fa fa-sign-in" aria-hidden="true"></i> */}
            <FaSignInAlt style={{ color: 'white', fontSize: '20px', marginRight: '2px' }} />
            <Link to='login' >Đăng nhập</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            {/* <i className="fa fa-user-plus" aria-hidden="true"></i> */}
            <FaUserPlus style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
            <Link to='register' >Đăng ký</Link>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="dropdown">
            {/* <i className="fa fa-file-text"></i> */}
            <FaFile style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
            <a href="https://my.orderhangquangchau.com/order/lists">Đơn hàng</a>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              <li><a href="https://my.orderhangquangchau.com/order/addorders">Tạo đơn hàng</a></li>
              <li><a href="https://my.orderhangquangchau.com/order/pending">Đang chờ cọc</a></li>
              <li><a href="https://my.orderhangquangchau.com/order/lists">Toàn bộ đơn hàng</a></li>
              <li><a href="https://my.orderhangquangchau.com/shipOrder/lists">Đơn hàng ký gửi</a></li>
              <li><a href="/ShipOrder/listshipids">DS vận đơn ký gửi</a></li>
              <li><a href="/storevn/delivery_note">DS phiếu giao hàng KG</a></li>
              <li><a href="https://my.orderhangquangchau.com/complain/lists">Khiếu nại</a></li>
              <li><a href="https://my.orderhangquangchau.com/member/reduces">Giảm trừ đơn hàng</a></li>
            </ul>
          </li>
          <li className="dropdown">
            {/* <i className="fa fa-archive" aria-hidden="true"></i> */}
            <FaArchive style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
            <a href="https://my.orderhangquangchau.com/ship/transport">Kiện hàng</a>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              <li><a href="https://my.orderhangquangchau.com/ship/transport">Danh sách kiện</a></li>
              <li><a href="https://my.orderhangquangchau.com/ship/finship">Tra cứu kiện hàng</a></li>
              <li><a href="https://my.orderhangquangchau.com/member/shipndvn">Phí VC nội địa</a></li>
            </ul>
          </li>
          <li className="dropdown">
            {/* <i className="fa fa-money" aria-hidden="true"></i> */}
            <FaMoneyBill style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
            <a href="https://my.orderhangquangchau.com/member/wallet">Tài chính</a>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              <li><a href="https://my.orderhangquangchau.com/member/wallet">Xem giao dịch</a></li>
              <li><a href="https://my.orderhangquangchau.com/member/deposit">Nạp tiền</a></li>
            </ul>
          </li>
          <li className="dropdown">
            {/* <i className="fa fa-user" aria-hidden="true"></i> */}
            <FaUser style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
            <a href="https://my.orderhangquangchau.com/member/profile">Tài khoản</a>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              <li><a href="https://my.orderhangquangchau.com/member/profile">Thông tin cá nhân</a></li>
              <li><a href="https://my.orderhangquangchau.com/member/changepass">Đổi mật khẩu</a></li>
              <li><a href="https://my.orderhangquangchau.com/member/loggout">Đăng xuất</a></li>
            </ul>
          </li>
        </>
      )
    }
  }
  return (
    <>
      <div className="top_header">
        <div className="container">
          <div className="pull-left">
            <p className="ty_gia">Tỷ giá: 1¥ = 3,620</p>
          </div>
          <div className="pull-right">
          </div>
        </div>
      </div>

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

                <li className="dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                  {/* <i className="fa fa-tachometer" aria-hidden="true"></i> */}
                  <FaTachometerAlt style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
                  <Link to='general-board' >Bảng tin</Link>
                </li>

                {renderNavbar()}


                <li className="dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                  {/* <i className="fa fa-hospital-o"></i> */}
                  <FaHospital style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
                  <a target="_blank" rel="noreferrer" href="http://orderhangquangchau.com/order-hang-taobao-gia-re/">Bảng giá</a>
                </li>


                <li className="dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                  {/* <i className="fa fa-credit-card"></i> */}
                  <FaCreditCard style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
                  <a target="_blank" rel="noreferrer" href="http://orderhangquangchau.com/dat-hang-taobao.html">Thông tin thanh toán</a>
                </li>
                <li className="dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                  {/* <i className="fa fa-star"></i> */}
                  <FaStar style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
                  <Link to='shop' >Shop uy tín</Link>
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
