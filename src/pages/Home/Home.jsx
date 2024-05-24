/* eslint-disable quotes */
/* eslint-disable semi */
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://orderhangquangchau.com/xmlrpc.php" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />

        {/* <script id="facebook-jssdk" src="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js"></script><script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>
          Order hàng Quảng Châu - Order Hàng Quảng Châu - Đặt hàng nhanh chỉ 5-7
          ngày Uy tín Giá rẻ
        </title>
        <link rel="canonical" href="https://orderhangquangchau.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Order hàng Quảng Châu - Order Hàng Quảng Châu - Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ"
        />
        <meta property="og:url" content="https://orderhangquangchau.com/" />
        <meta
          property="og:site_name"
          content="Order Hàng Quảng Châu - Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ"
        />
        <meta
          property="article:modified_time"
          content="2024-04-01T02:02:49+00:00"
        />
        <meta
          property="og:image"
          content="https://orderhangquangchau.com/wp-content/uploads/2022/12/orderhangquangchau.com_.jpg"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="8 minutes" />
        {/* <script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://orderhangquangchau.com/","url":"https://orderhangquangchau.com/","name":"Order hàng Quảng Châu - Order Hàng Quảng Châu - Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ","isPartOf":{"@id":"https://orderhangquangchau.com/#website"},"about":{"@id":"https://orderhangquangchau.com/#organization"},"primaryImageOfPage":{"@id":"https://orderhangquangchau.com/#primaryimage"},"image":{"@id":"https://orderhangquangchau.com/#primaryimage"},"thumbnailUrl":"https://orderhangquangchau.com/wp-content/uploads/2022/12/orderhangquangchau.com_.jpg","datePublished":"2022-09-11T14:53:58+00:00","dateModified":"2024-04-01T02:02:49+00:00","breadcrumb":{"@id":"https://orderhangquangchau.com/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://orderhangquangchau.com/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://orderhangquangchau.com/#primaryimage","url":"https://orderhangquangchau.com/wp-content/uploads/2022/12/orderhangquangchau.com_.jpg","contentUrl":"https://orderhangquangchau.com/wp-content/uploads/2022/12/orderhangquangchau.com_.jpg","width":500,"height":500},{"@type":"BreadcrumbList","@id":"https://orderhangquangchau.com/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]},{"@type":"WebSite","@id":"https://orderhangquangchau.com/#website","url":"https://orderhangquangchau.com/","name":"Order Hàng Quảng Châu - Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ","description":"","publisher":{"@id":"https://orderhangquangchau.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://orderhangquangchau.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://orderhangquangchau.com/#organization","name":"Order Hàng Quảng Châu - Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ","url":"https://orderhangquangchau.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://orderhangquangchau.com/#/schema/logo/image/","url":"https://orderhangquangchau.com/wp-content/uploads/2022/12/orderhangquangchau.com_.jpg","contentUrl":"https://orderhangquangchau.com/wp-content/uploads/2022/12/orderhangquangchau.com_.jpg","width":500,"height":500,"caption":"Order Hàng Quảng Châu - Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ"},"image":{"@id":"https://orderhangquangchau.com/#/schema/logo/image/"}}]}</script> */}

        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Order Hàng Quảng Châu - Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ » Feed"
          href="https://orderhangquangchau.com/feed"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Order Hàng Quảng Châu - Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ » Comments Feed"
          href="https://orderhangquangchau.com/comments/feed"
        />
        <link
          rel="prefetch"
          href="https://orderhangquangchau.com/wp-content/themes/flatsome/assets/js/chunk.countup.fe2c1016.js"
        />
        <link
          rel="prefetch"
          href="https://orderhangquangchau.com/wp-content/themes/flatsome/assets/js/chunk.sticky-sidebar.a58a6557.js"
        />
        <link
          rel="prefetch"
          href="https://orderhangquangchau.com/wp-content/themes/flatsome/assets/js/chunk.tooltips.29144c1c.js"
        />
        <link
          rel="prefetch"
          href="https://orderhangquangchau.com/wp-content/themes/flatsome/assets/js/chunk.vendors-popups.947eca5c.js"
        />
        <link
          rel="prefetch"
          href="https://orderhangquangchau.com/wp-content/themes/flatsome/assets/js/chunk.vendors-slider.f0d2cbc9.js"
        />
        <link
          rel="stylesheet"
          id="flatsome-main-css"
          href="https://orderhangquangchau.com/wp-content/themes/flatsome/assets/css/flatsome.css?ver=3.15.5"
          type="text/css"
          media="all"
        />
        <style id="wp-emoji-styles-inline-css" type="text/css">
          {`
            img.wp-smiley, img.emoji {
                display: inline !important;
                border: none !important;
                box-shadow: none !important;
                height: 1em !important;
                width: 1em !important;
                margin: 0 0.07em !important;
                vertical-align: -0.1em !important;
                background: none !important;
                padding: 0 !important;
            }
            `}
        </style>
        <style id="wp-block-library-inline-css" type="text/css">
          {`
        :root{--wp-admin-theme-color:#007cba;--wp-admin-theme-color--rgb:0,124,186;--wp-admin-theme-color-darker-10:#006ba1;--wp-admin-theme-color-darker-10--rgb:0,107,161;--wp-admin-theme-color-darker-20:#005a87;--wp-admin-theme-color-darker-20--rgb:0,90,135;--wp-admin-border-width-focus:2px;--wp-block-synced-color:#7a00df;--wp-block-synced-color--rgb:122,0,223;--wp-bound-block-color:#9747ff}@media (min-resolution:192dpi){:root{--wp-admin-border-width-focus:1.5px}}.wp-element-button{cursor:pointer}:root{--wp--preset--font-size--normal:16px;--wp--preset--font-size--huge:42px}:root .has-very-light-gray-background-color{background-color:#eee}:root .has-very-dark-gray-background-color{background-color:#313131}:root .has-very-light-gray-color{color:#eee}:root .has-very-dark-gray-color{color:#313131}:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background{background:linear-gradient(135deg,#00d084,#0693e3)}:root .has-purple-crush-gradient-background{background:linear-gradient(135deg,#34e2e4,#4721fb 50%,#ab1dfe)}:root .has-hazy-dawn-gradient-background{background:linear-gradient(135deg,#faaca8,#dad0ec)}:root .has-subdued-olive-gradient-background{background:linear-gradient(135deg,#fafae1,#67a671)}:root .has-atomic-cream-gradient-background{background:linear-gradient(135deg,#fdd79a,#004a59)}:root .has-nightshade-gradient-background{background:linear-gradient(135deg,#330968,#31cdcf)}:root .has-midnight-gradient-background{background:linear-gradient(135deg,#020381,#2874fc)}.has-regular-font-size{font-size:1em}.has-larger-font-size{font-size:2.625em}.has-normal-font-size{font-size:var(--wp--preset--font-size--normal)}.has-huge-font-size{font-size:var(--wp--preset--font-size--huge)}.has-text-align-center{text-align:center}.has-text-align-left{text-align:left}.has-text-align-right{text-align:right}#end-resizable-editor-section{display:none}.aligncenter{clear:both}.items-justified-left{justify-content:flex-start}.items-justified-center{justify-content:center}.items-justified-right{justify-content:flex-end}.items-justified-space-between{justify-content:space-between}.screen-reader-text{border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;word-wrap:normal!important}.screen-reader-text:focus{background-color:#ddd;clip:auto!important;-webkit-clip-path:none;clip-path:none;color:#444;display:block;font-size:1em;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}html :where(.has-border-color){border-style:solid}html :where([style*=border-top-color]){border-top-style:solid}html :where([style*=border-right-color]){border-right-style:solid}html :where([style*=border-bottom-color]){border-bottom-style:solid}html :where([style*=border-left-color]){border-left-style:solid}html :where([style*=border-width]){border-style:solid}html :where([style*=border-top-width]){border-top-style:solid}html :where([style*=border-right-width]){border-right-style:solid}html :where([style*=border-bottom-width]){border-bottom-style:solid}html :where([style*=border-left-width]){border-left-style:solid}html :where(img[class*=wp-image-]){height:auto;max-width:100%}:where(figure){margin:0 0 1em}html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:var(--wp-admin--admin-bar--height,0px)}@media screen and (max-width:600px){html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:0px}}
                    
                `}
        </style>
        <style id="classic-theme-styles-inline-css" type="text/css">
          {`
                .wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}

                `}
        </style>

        <style id="flatsome-main-inline-css" type="text/css">
          {`
                @font-face {
                    font-family: "fl-icons";
                    font-display: block;
                    src: url(https://orderhangquangchau.com/wp-content/themes/flatsome/assets/css/icons/fl-icons.eot?v=3.15.5);
                    src:
                        url(https://orderhangquangchau.com/wp-content/themes/flatsome/assets/css/icons/fl-icons.eot#iefix?v=3.15.5) format("embedded-opentype"),
                        url(https://orderhangquangchau.com/wp-content/themes/flatsome/assets/css/icons/fl-icons.woff2?v=3.15.5) format("woff2"),
                        url(https://orderhangquangchau.com/wp-content/themes/flatsome/assets/css/icons/fl-icons.ttf?v=3.15.5) format("truetype"),
                        url(https://orderhangquangchau.com/wp-content/themes/flatsome/assets/css/icons/fl-icons.woff?v=3.15.5) format("woff"),
                        url(https://orderhangquangchau.com/wp-content/themes/flatsome/assets/css/icons/fl-icons.svg?v=3.15.5#fl-icons) format("svg");
                }
                `}
        </style>

        <link
          rel="stylesheet"
          id="flatsome-style-css"
          href="https://orderhangquangchau.com/wp-content/themes/flatsome-child/style.css?ver=3.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="flatsome-googlefonts-css"
          href="//fonts.googleapis.com/css?family=Roboto%3Aregular%2C700%2Cregular%2C500%2Cregular&amp;display=swap&amp;ver=3.9"
          type="text/css"
          media="all"
        />
        <link
          rel="https://api.w.org/"
          href="https://orderhangquangchau.com/wp-json/"
        />
        <link
          rel="alternate"
          type="application/json"
          href="https://orderhangquangchau.com/wp-json/wp/v2/pages/2"
        />
        <link
          rel="EditURI"
          type="application/rsd+xml"
          title="RSD"
          href="https://orderhangquangchau.com/xmlrpc.php?rsd"
        />
        <meta name="generator" content="WordPress 6.5.3" />
        <link rel="shortlink" href="https://orderhangquangchau.com/" />
        <link
          rel="alternate"
          type="application/json+oembed"
          href="https://orderhangquangchau.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Forderhangquangchau.com%2F"
        />
        <link
          rel="alternate"
          type="text/xml+oembed"
          href="https://orderhangquangchau.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Forderhangquangchau.com%2F&amp;format=xml"
        />
        <script
          type="text/javascript"
          src="https://orderhangquangchau.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"
          id="jquery-core-js"
        ></script>
        <script
          type="text/javascript"
          src="https://orderhangquangchau.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"
          id="jquery-migrate-js"
        ></script>
        <style>
          {`
                .bg{opacity: 0; transition: opacity 1s; -webkit-transition: opacity 1s;} .bg-loaded{opacity: 1;}</style><!--[if IE]><link rel="stylesheet" type="text/css" href="https://orderhangquangchau.com/wp-content/themes/flatsome/assets/css/ie-fallback.css"><script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.1/html5shiv.js"></script><script>var head = document.getElementsByTagName('head')[0],style = document.createElement('style');style.type = 'text/css';style.styleSheet.cssText = ':before,:after{content:none !important';head.appendChild(style);setTimeout(function(){head.removeChild(style);}, 0);</script><script src="https://orderhangquangchau.com/wp-content/themes/flatsome/assets/libs/ie-flexibility.js"></script><![endif]--><script>
                window.fbAsyncInit = function() {
                FB.init({
                    xfbml            : true,
                    version          : 'v5.0'
                });
                };

                (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script>

            <!-- Your customer chat code -->
            <script src="https://orderhangquangchau.com/wp-includes/js/wp-emoji-release.min.js?ver=6.5.3" defer=""></script><style type="text/css" data-fbcssmodules="css:fb.css.base css:fb.css.dialog css:fb.css.iframewidget css:fb.css.customer_chat_plugin_iframe">.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:'lucida grande', tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
        .fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:'lucida grande', tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
        .fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://connect.facebook.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://connect.facebook.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://connect.facebook.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://connect.facebook.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100%;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://connect.facebook.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100%;position:absolute;right:0;top:0;width:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://connect.facebook.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://connect.facebook.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50% 50%;background-repeat:no-repeat;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        .fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}
        .fb_mpn_mobile_landing_page_slide_out{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_out_from_left{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out_from_left;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_up{animation-duration:500ms;animation-name:fb_mpn_landing_page_slide_up;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_in{animation-duration:300ms;animation-name:fb_mpn_bounce_in;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out{animation-duration:300ms;animation-name:fb_mpn_bounce_out;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out_v2{animation-duration:300ms;animation-name:fb_mpn_fade_out;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_v2{animation-duration:300ms;animation-name:fb_bounce_in_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_from_left{animation-duration:300ms;animation-name:fb_bounce_in_from_left;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2{animation-duration:300ms;animation-name:fb_bounce_out_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_from_left{animation-duration:300ms;animation-name:fb_bounce_out_from_left;transition-timing-function:ease-in}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}@keyframes fb_mpn_landing_page_slide_out{0%{margin:0 12px;width:100% - 24px}60%{border-radius:18px}100%{border-radius:50%;margin:0 24px;width:60px}}@keyframes fb_mpn_landing_page_slide_out_from_left{0%{left:12px;width:100% - 24px}60%{border-radius:18px}100%{border-radius:50%;left:12px;width:60px}}@keyframes fb_mpn_landing_page_slide_up{0%{bottom:0;opacity:0}100%{bottom:24px;opacity:1}}@keyframes fb_mpn_bounce_in{0%{opacity:.5;top:100%}100%{opacity:1;top:0}}@keyframes fb_mpn_fade_out{0%{bottom:30px;opacity:1}100%{bottom:0;opacity:0}}@keyframes fb_mpn_bounce_out{0%{opacity:1;top:0}100%{opacity:.5;top:100%}}@keyframes fb_bounce_in_v2{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}50%{transform:scale(1.03, 1.03);transform-origin:bottom right}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}}@keyframes fb_bounce_in_from_left{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom left}50%{transform:scale(1.03, 1.03);transform-origin:bottom left}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom left}}@keyframes fb_bounce_out_v2{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}}@keyframes fb_bounce_out_from_left{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom left}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom left}}@keyframes slideInFromBottom{0%{opacity:.1;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}@keyframes slideInFromBottomDelay{0%{opacity:0;transform:translateY(100%)}97%{opacity:0;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}
                `}
        </style>
      </Helmet>
      <body
        className="home page-template page-template-page-blank page-template-page-blank-php page page-id-2 lightbox nav-dropdown-has-arrow nav-dropdown-has-shadow nav-dropdown-has-border body-scroll-lock--active"
      >
        <Header />
        <Outlet />

        <Footer />
      </body>
    </div>
  );
};

export default Home;
