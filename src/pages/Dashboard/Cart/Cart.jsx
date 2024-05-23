
const Cart = () => {
  return (
    <>
      <div className="shoping_cart">
        <div className="col-md-12">
          <h2 className="page-title">Giỏ hàng</h2>
          <div className="container">
            <ul className="progressbar">
              <li className="active">Chọn shop</li>
              <li>Chọn địa chỉ nhận hàng</li>
              <li>Lên đơn</li>
            </ul>
          </div>
          <br/>
          <div className="empty_cart text-center">
            <span className="green">Hiện tại không có sản phẩm nào trong giỏ hàng</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cart