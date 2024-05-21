
const ListComplains = () => {
  return (
    <>
      <div className="wrapper">
        <div className="site_container">


          <div id="content" className="container fullwidth">
            <h3 className="page-title"> Danh sách khiếu nại Shop</h3>
            <div className="list_status clearfix">
              <ul>
                <li>
                  <a href="https://my.orderhangquangchau.com/complain/lists" className="green">
                                 Tòan bộ : <span>(0)</span>
                  </a>

                </li>
                <li>

                  <a href="https://my.orderhangquangchau.com/complain/lists?filter_is_complain=1" className="yellow">
                                 Chờ khiếu nại : <span>(0)</span>
                  </a>

                </li>
                <li>

                  <a href="https://my.orderhangquangchau.com/complain/lists?filter_is_complain=2" className="orange">
                                 Đang khiếu nại : <span>(0)</span>
                  </a>

                </li>
                <li>

                  <a href="https://my.orderhangquangchau.com/complain/lists?filter_is_complain=3" className="blue">
                                 Khiếu nại thành công : <span>(0)</span>
                  </a>

                </li>
                <li>

                  <a href="https://my.orderhangquangchau.com/complain/lists?filter_is_complain=4" className="red">
                                 Khiếu nại thất bại : <span>(0)</span>
                  </a>

                </li>
                <li>

                  <a href="https://my.orderhangquangchau.com/complain/lists?filter_is_complain=5" className="green">
                                 Đã xử lý đơn hàng : <span>(0)</span>
                  </a>

                </li>
                <li>

                  <a href="https://my.orderhangquangchau.com/complain/lists?filter_is_complain=-1" className="black">
                                 Đã hủy : <span>(0)</span>
                  </a>

                </li>
              </ul>
            </div>
            <div className="clearfix"></div>
            <div className="filter_box">
            </div>
            <div className="clearfix"></div>
            <div className="gridtable ships">
              <table>
                <tbody>
                  <tr>
                    <td width="3%">
                        STT
                    </td>

                    <td width="14%">
                        Đơn hàng
                    </td>
                    <td width="30%">
                        Sản phẩm khiếu nại
                    </td>
                    <td width="10%">
                        Giá/Số lượng
                    </td>
                    <td width="30%">
                        Ghi chú
                    </td>
                    <td width="10%">
                        Trạng thái
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            <p><strong>Total: <span className="green">0</span> (Items)</strong></p>
          </div>			</div>
      </div>
    </>
  )
}

export default ListComplains