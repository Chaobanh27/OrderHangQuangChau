import { Link, useNavigate } from 'react-router-dom'
import { FaTachometerAlt, FaShoppingCart, FaBus, FaSignInAlt, FaBell, FaUserPlus, FaHospital, FaCreditCard, FaStar, FaFile, FaArchive, FaMoneyBill, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
// import { logoutUserAPI, selectCurrentUser } from '../../redux/user/userSlice'
import { logout, selectCurrentUser } from '../../redux/user/userSlice'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'

const ExtraHeader = () => {
  const user = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const handleLogout = () => {
  //   // Gọi API đăng xuất người dùng
  //   dispatch(logoutUserAPI())
  //     .then(() => {
  //       navigate('login')
  //     })
  //     .catch((error) => {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     })
  // }

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('user')
    navigate('login')
  }
  const items = [
    {
      label: 'Không có thông báo nào mới',
      key: '0'
    }
  ]

  const headerStyles = {
    headerIconStyles : {
      WebkitTextSizeAdjust: '100%',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      boxSizing: 'border-box',
      display: 'inline-block',
      font: 'normal normal normal 14px/1 FontAwesome',
      textRendering: 'auto',
      WebkitFontSmoothing: 'antialiased',
      background: '#d75e29',
      color: '#fff',
      padding: '5px 6px',
      borderRadius: '50%',
      fontSize: '26px',
      marginRight: '2px'
    },
    headerLiStyles:{
      display: 'flex',
      alignItems: 'center',
      padding:'10px 0px'
    }
  }


  const navbarStyles = {
    navbarLiStyle : {
      display: 'flex',
      alignItems: 'center'
    },
    navbarIconStyles:{
      color: 'white',
      fontSize: '20px',
      marginRight: '2px'
    }
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
          <div style={ headerStyles.headerLiStyles }>
            <FaUser style={headerStyles.headerIconStyles}/>
            <Link to="member/profile" >
								Xin chào,
              <span className="red"><b>chaobanhnguyen</b></span>
            </Link>
            |
            <Link onClick={handleLogout}>Thoát</Link>
          </div>

        </div>

        <div className="pull-left">
          <div style={ headerStyles.headerLiStyles }>
            <FaCreditCard style={headerStyles.headerIconStyles}/>
            <Link to="member/wallet">
							Số dư khả dụng: <span className="num_icon">0</span> VNĐ
            </Link>
          </div>
        </div>
        <div className="pull-left" style={{ marginTop: '3px' }}>
          <p className="ty_gia">Tỷ giá: 1¥ = 3,625</p>
        </div>
        <div className="pull-right">
          <div className="pull-left">
          </div>
          <div className="pull-right" >
            <div style={{ display: 'flex', alignItems: 'center', padding:'10px' }}>
              <FaShoppingCart style={headerStyles.headerIconStyles}/>
              <Link to="cart" style={{ marginRight:'10px' }}> Giỏ hàng <span className="num_icon">0</span></Link>
              <FaBus style={headerStyles.headerIconStyles}/>
              <Link to="ship-orders" style={{ marginRight:'10px' }}> Giỏ hàng ký gửi</Link>
              <FaBell style={headerStyles.headerIconStyles}/>
              <Dropdown
                menu={{
                  items
                }}
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()} style={{ cursor: 'pointer' }}>
                  <Space>
                  Thông báo
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <span className="num_icon" >0</span>
            </div>
          </div>

        </div>
      </div>
    )
  }

  const links = {
    ordersArray : [
      { to: 'order/add-orders', label: 'Tạo đơn hàng' },
      { to: 'order/pending-orders', label: 'Đang chờ cọc' },
      { to: 'order/list-orders', label: 'Toàn bộ đơn hàng' },
      { to: 'ship-orders/list-ship-orders', label: 'Đơn hàng ký gửi' },
      { to: 'ship-orders/list-ship-ids', label: 'DS vận đơn ký gửi' },
      { to: 'storevn/delivery-note', label: 'DS phiếu giao hàng KG' },
      { to: 'complain/list-complains', label: 'Khiếu nại' },
      { to: 'member/reduces', label: 'Giảm trừ đơn hàng' }
    ],
    memberArray : [
      { to: 'member/profile', label: 'Thông tin cá nhân' },
      { to: 'member/change-password', label: 'Đổi mật khẩu' }
    ],
    shipArray: [
      { to: 'ship/transport', label: 'Danh sách kiện' },
      { to: 'ship/finship', label: 'Tra cứu kiện hàng' },
      { to: 'member/domestic-shipping', label: 'Phí VC nội địa' }
    ],
    financeArray: [
      { to: 'member/wallet', label: 'Xem giao dịch' },
      { to: 'member/deposit', label: 'Nạp tiền' }
    ]
  }

  const renderNavbar = () => {
    if (user == null) {
      return (
        <>
          <li style={ navbarStyles.navbarLiStyle }>
            <FaSignInAlt style={navbarStyles.navbarIconStyles} />
            <Link to='login' >Đăng nhập</Link>
          </li>
          <li style={ navbarStyles.navbarLiStyle }>
            <FaUserPlus style={navbarStyles.navbarIconStyles}/>
            <Link to='register' >Đăng ký</Link>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="dropdown" style={ navbarStyles.navbarLiStyle }>
            <FaFile style={navbarStyles.navbarIconStyles}/>
            <Link to="order/list-orders">Đơn hàng</Link>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              {
                Object.keys(links)?.length > 0 &&
                links.ordersArray?.length > 0 &&
                links.ordersArray.map((value, index) => (
                  <li key={index}>
                    <Link to={value?.to}>{value?.label}</Link>
                  </li>
                ))
              }
            </ul>
          </li>
          <li className="dropdown" style={ navbarStyles.navbarLiStyle }>
            <FaArchive style={navbarStyles.navbarIconStyles}/>
            <Link to="ship/transport">Kiện hàng</Link>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              {
                Object.keys(links).length > 0 &&
                links.shipArray?.length > 0 &&
                links.shipArray.map((value, index) => (
                  <li key={index}>
                    <Link to={value?.to}>{value?.label}</Link>
                  </li>
                ))
              }
            </ul>
          </li>
          <li className="dropdown" style={ navbarStyles.navbarLiStyle }>
            <FaMoneyBill style={navbarStyles.navbarIconStyles}/>
            <Link to="member/wallet">Tài chính</Link>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              {
                Object.keys(links).length > 0 &&
                links.financeArray?.length > 0 &&
                links.financeArray.map((value, index) => (
                  <li key={index}>
                    <Link to={value?.to}>{value?.label}</Link>
                  </li>
                ))
              }
            </ul>
          </li>
          <li className="dropdown" style={ navbarStyles.navbarLiStyle }>
            <FaUser style={navbarStyles.navbarIconStyles}/>
            <Link to="member/profile">Tài khoản</Link>
            <span className="caret"></span>
            <ul className="dropdown-menu">
              {
                Object.keys(links).length > 0 &&
                links.memberArray?.length > 0 &&
                links.memberArray.map((value, index) => (
                  <li key={index}>
                    <Link to={value?.to}>{value?.label}</Link>
                  </li>
                ))
              }
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
              <Link className="main_logo" target="_blank" rel="noreferrer" to="/">
                <img src="https://my.orderhangquangchau.com/static/images/logo_ex.png" alt="Orderhangquangchau.com" />
              </Link>
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
                  <FaHospital style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
                  <Link target="_blank" rel="noreferrer" to="/bang-gia">Bảng giá</Link>
                </li>


                <li className="dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                  <FaCreditCard style={{ color: 'white', fontSize: '20px', marginRight: '2px' }}/>
                  <Link target="_blank" rel="noreferrer" to="/dat-hang-taobao1688-tmall">Thông tin thanh toán</Link>
                </li>
                <li className="dropdown" style={{ display: 'flex', alignItems: 'center' }}>
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


