import { Helmet } from 'react-helmet'
import ExtraFooter from '../../components/ExtraFooter/ExtraFooter'
import ExtraHeader from '../../components/ExtraHeader/ExtraHeader'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/userSlice'
import CustomerSupport from '../../components/CustomerSupport/CustomerSupport'

const Dashboard = () => {
  const user = useSelector(selectCurrentUser)
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta httpEquiv="origin-trial" content="Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="author" content="Orderhangquangchau.com" />
        <meta name="description" content="OrderHQC application" />
        <link rel="shortcut icon" href="https://my.orderhangquangchau.com/static/images/favicon.ico" type="image/x-icon" />
        <link href="https://my.orderhangquangchau.com/static/css/w2ui-1.4.3.min.css?v=1716184682" rel="stylesheet" media="screen" />
        <link href="https://my.orderhangquangchau.com/static/css/bootstrap.min.css?v=1716184682" rel="stylesheet" media="screen" />
        <link href="https://my.orderhangquangchau.com/static/css/style1.css?v=1716184682" rel="stylesheet" media="screen" />
        <link href="https://my.orderhangquangchau.com/static/css/responsive.css?v=1716184682" rel="stylesheet" media="screen" />
        <link href="https://my.orderhangquangchau.com/static/css/doc.min.css?v=1716184682" rel="stylesheet" media="screen" />
        <link href="https://my.orderhangquangchau.com/static/css/font-awesome.min.css?v=1716184682" rel="stylesheet" media="screen" />
        {/* <link href="https://my.orderhangquangchau.com/static/css/uploadfile.css?v=1716184682" rel="stylesheet" media="screen" / > */}
        <link href="https://my.orderhangquangchau.com/static/css/tooltipster.bundle.min.css?v=1716184682" rel="stylesheet" media="screen" />
        <link href="https://my.orderhangquangchau.com/static/css/sideTip/themes/tooltipster-sideTip-noir.min.css?v=1716184682" rel="stylesheet" media="screen" />
        <link href="https://my.orderhangquangchau.com/static/css/sideTip/themes/tooltipster-sideTip-borderless.min.css?v=1716184682" rel="stylesheet" media="screen" />
        <link href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&amp;subset=vietnamese" rel="stylesheet" />

        <script src="https://connect.facebook.net/vi_VN/sdk.js?hash=4513f088475d4d4d23d1f84394c78326" async="" crossOrigin="anonymous"></script>
        <script id="facebook-jssdk" src="//connect.facebook.net/vi_VN/sdk.js#xfbml=1&amp;version=v2.9&amp;appId=1869996503282359"></script>
        <script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/8k85QBI-qzxmenDv318AZH30/recaptcha__vi.js" crossOrigin="anonymous" integrity="sha384-T5Umg8J2IBsY5JfJoIglx+RwNvl17fkmgevmRhc7dZxE2He7VqHKHV0BrOivBEet"></script>
        <script src="https://my.orderhangquangchau.com/static/js/jquery-1.9.1.min.js?v=2"></script>
        <script src="https://my.orderhangquangchau.com/static/js/w2ui-1.4.3.min.js?v=2"></script>
        <script src="https://my.orderhangquangchau.com/static/js/ajax_handle.js?v=2"></script>
        <script src="https://my.orderhangquangchau.com/static/js/jquery.uploadfile.js?v=2"></script>
        <script src="https://my.orderhangquangchau.com/static/js/custom.js?v=2"></script>
        <script src="https://my.orderhangquangchau.com/static/js/jqueryui.js?v=2"></script>
        <script src="https://my.orderhangquangchau.com/static/js/tooltipster.bundle.min.js?v=2"></script>
        <script src="https://my.orderhangquangchau.com/static/js/bootstrap.min.js?v=2"></script>
        <script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
      </Helmet>

      <ExtraHeader/>


      <div id="content">
        <div className="container">
          <main className="main" role="main">
            <div className="row main-row">
              {user ? <CustomerSupport/> : null}
              <Outlet/>
            </div>
          </main>
        </div>
      </div>
      <ExtraFooter/>
    </>
  )
}

export default Dashboard