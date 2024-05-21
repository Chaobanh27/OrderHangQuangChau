/* eslint-disable react/no-unknown-property */

const Finship = () => {
  return (
    <>
      <div className="col-sm-9">
        <div className="cart-by-page">
          <div className="titles">
            <h2 className="page-title">
                Tra cứu mã vận đơn
            </h2>
          </div>
          <div rel="body" className="contentPopup" style= {{ padding: '20px' }}>
            <form name="findShip" action="" method="get" className="form-horizontal" enctype="multipart/form-data">
              <div className="input col-sm-6">
                <input type="text" className="form-control " value="" name="shipid" placeholder="Nhập mã vận đơn cần tra cứu" fdprocessedid="9qcvkn" />
              </div>
              <div className="button">
                <input type="submit" value="Tra cứu" className="btn bg_yellow" fdprocessedid="4lmsie" />
              </div>
            </form>
            <div className="clearfix"></div>
            <p className="note">Nhập mã vận đơn và nhấn tra cứu để biết tình trạng vận chuyển của gói hàng.</p>
          </div>


        </div>


      </div>
    </>
  )
}

export default Finship