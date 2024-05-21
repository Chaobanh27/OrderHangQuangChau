/* eslint-disable react/no-unknown-property */

const NotFound = () => {
  return (
    <>
      <section className="error-404 not-found mt mb">
        <div className="row">
          <div className="col medium-3"><span className="header-font" style= {{ fontSize: '6em', fontWeight: 'bold', opacity: '.3' }}>404</span></div>
          <div className="col medium-9">
            <header className="page-title">
              <h1 className="page-title">Oops! That page can not be found.</h1>
            </header>
            <div className="page-content">
              <p>It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
              <form method="get" className="searchform" action="https://orderhangquangchau.com/" role="search">
                <div className="flex-row relative">
                  <div className="flex-col flex-grow">
                    <input type="search" className="search-field mb-0" name="s" value="" id="s" placeholder="Search…" />
                  </div>
                  <div className="flex-col">
                    <button type="submit" className="ux-search-submit submit-button secondary button icon mb-0" aria-label="Submit" fdprocessedid="dgk69q">
                      <i className="icon-search"></i>				</button>
                  </div>
                </div>
                <div className="live-search-results text-left z-top"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound