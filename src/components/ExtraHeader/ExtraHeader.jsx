import { Link, useNavigate } from 'react-router-dom'
import { FaTachometerAlt, FaShoppingCart, FaBus, FaSignInAlt, FaBell, FaUserPlus, FaHospital, FaCreditCard, FaStar, FaFile, FaArchive, FaMoneyBill, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserAPI, selectCurrentUser } from '../../redux/user/userSlice'


const ExtraHeader = () => {
  const user = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    // Gọi API đăng xuất người dùng
    dispatch(logoutUserAPI())
      .then(() => {
        navigate('login')
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }

  const renderHeader = () => {
    if (user == null) {
      return (
        <div className="container">
          <div className="pull-left">
            <p className="ty_gia">Tỷ giá: 1¥ = 3,620</p>
          </div>
          <div className="pull-right">
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="pull-left">
          <p>
            <Link to="member/profile">
              {/* <i className="fa fa-user"></i> */}
              <FaUser/>
								Xin chào,

              <span className="red"><b>chaobanhnguyen</b></span>
            </Link>

									| <Link to="">Thoát</Link>
          </p>

        </div>

        <div className="pull-left">
          <p className="ty_gia">
            <Link to="member/wallet">
              {/* <i className="fa fa-credit-card" aria-hidden="true"></i> */}
              <FaCreditCard/>
							Số dư khả dụng: <span className="num_icon">0</span> VNĐ
            </Link>
          </p>
        </div>
        <div className="pull-left">
          <p className="ty_gia">Tỷ giá: 1¥ = 3,625</p>
        </div>
        <div className="pull-right">
          <div className="pull-left">
          </div>
          <div className="pull-right">
            <p>
              <span className="text">
                {/* <i className="fa fa-shopping-cart " aria-hidden="true"></i> */}
                <FaShoppingCart/>
                <Link to="cart"> Giỏ hàng <span className="num_icon">0</span></Link>
              </span>  <span className="text">
                {/* <i className="fa fa-bus" aria-hidden="true"></i> */}
                <FaBus/>
                <Link to="ship-orders"> Giỏ hàng ký gửi</Link>
              </span>

              <a className="popup_link" onClick="showNotificationOverLay(this)"><span>
                {/* <i className="fa fa-bell-o" aria-hidden="true"></i> */}
                <FaBell/>
							Thông báo <span className="num_icon">0</span>
              </span></a>
            </p>
          </div>

        </div>
      </div>
    )
  }
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
            <Link to="order/list-orders">Đơn hàng</Link>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              <li><Link to="order/add-orders">Tạo đơn hàng</Link></li>
              <li><Link to="order/pending-orders">Đang chờ cọc</Link></li>
              <li><Link to="order/list-orders">Toàn bộ đơn hàng</Link></li>
              <li><Link to="ship-orders/list-ship-orders">Đơn hàng ký gửi</Link></li>
              <li><Link to="ship-orders/list-ship-ids">DS vận đơn ký gửi</Link></li>
              <li><Link to="storevn/delivery-note">DS phiếu giao hàng KG</Link></li>
              <li><Link to="complain/list-complains">Khiếu nại</Link></li>
              <li><Link to="member/reduces">Giảm trừ đơn hàng</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            {/* <i className="fa fa-archive" aria-hidden="true"></i> */}
            <FaArchive style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
            <Link to="ship/transport">Kiện hàng</Link>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              <li><Link to="ship/transport">Danh sách kiện</Link></li>
              <li><Link to="ship/finship">Tra cứu kiện hàng</Link></li>
              <li><Link to="member/domestic-shipping">Phí VC nội địa</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            {/* <i className="fa fa-money" aria-hidden="true"></i> */}
            <FaMoneyBill style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
            <Link to="member/wallet">Tài chính</Link>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              <li><Link to="member/wallet">Xem giao dịch</Link></li>
              <li><Link to="member/deposit">Nạp tiền</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            {/* <i className="fa fa-user" aria-hidden="true"></i> */}
            <FaUser style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
            <Link to="member/profile">Tài khoản</Link>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              <li><Link to="member/profile">Thông tin cá nhân</Link></li>
              <li><Link to="member/change-password">Đổi mật khẩu</Link></li>
              <li><Link onClick={handleLogout}>Đăng xuất</Link></li>
            </ul>
          </li>
        </>
      )
    }
  }
  return (
    <>
      <div className="top_header">
        {renderHeader()}
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


