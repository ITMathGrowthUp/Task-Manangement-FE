

export function Home() {
  return (
    <div className="home-container">
        <div className="home-content">
            <div className="header-container">
                <div className="left-header">
                    <div className="left-header-workspace gray-hover">
                        <div className="box-letter">
                            I
                        </div>
                        <span>IMath Workspace</span>
                        <img src="chevron-down.svg" alt="" />
                    </div>
                    <div className="left-header-icon">
                        <div></div>
                        <div className="gray-hover">
                            <img src="home.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="center-header">
                    <div className="center-header-searchbar gray-hover">
                        <img src="home.svg" alt="" />
                        <div className="searchbar-text">
                            <p>Search everything...</p>
                            <p>Ctrl + K</p>
                        </div>
                    </div>
                    <div className="center-header-task gray-hover">
                        <div className="box-letter">
                            <img src="plus.svg" alt="" />
                        </div>
                        <span>Task</span>
                    </div>
                </div>

                <div className="right-header">
                    <div className="right-header-icons">
                        <div className="gray-hover">
                            <img src="home.svg" alt="" />
                        </div>
                        <div className="gray-hover">
                            <img src="home.svg" alt="" />
                        </div>
                        <div className="gray-hover">
                            <img src="home.svg" alt="" />
                        </div>
                        <div className="gray-hover">
                            <img src="home.svg" alt="" />
                        </div>
                    </div>
                    <div className="right-header-options gray-hover">
                        <div className="box-letter">
                            B
                            <div className="right-header-status"></div>
                        </div>
                        <img src="chevron-down.svg" alt="" />
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Home