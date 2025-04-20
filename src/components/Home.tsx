import GridLayout from './layout/GridLayout.tsx';

export function Home() {
  return (
    <div className='home-container'>
      <div className='home-page'>
        <div className='header-container'>
          <div className='left-header'>
            <div className='left-header-workspace gray-hover'>
              <div className='box-letter'>I</div>
              <span>IMath Workspace</span>
              <img src='chevron-down.svg' alt='' />
            </div>
            <div className='left-header-icon'>
              <div></div>
              <div className='gray-hover'>
                <img src='home.svg' alt='' />
              </div>
            </div>
          </div>

          <div className='center-header'>
            <div className='center-header-searchbar gray-hover'>
              <img src='home.svg' alt='' />
              <div className='searchbar-text'>
                <p>Search everything...</p>
                <p>Ctrl + K</p>
              </div>
            </div>
            <div className='center-header-task gray-hover'>
              <div className='box-letter'>
                <img src='plus.svg' alt='' />
              </div>
              <span>Task</span>
            </div>
          </div>

          <div className='right-header'>
            <div className='right-header-icons'>
              <div className='gray-hover'>
                <img src='home.svg' alt='' />
              </div>
              <div className='gray-hover'>
                <img src='home.svg' alt='' />
              </div>
              <div className='gray-hover'>
                <img src='home.svg' alt='' />
              </div>
              <div className='gray-hover'>
                <img src='home.svg' alt='' />
              </div>
            </div>
            <div className='right-header-options gray-hover'>
              <div className='box-letter'>
                B<div className='right-header-status'></div>
              </div>
              <img src='chevron-down.svg' alt='' />
            </div>
          </div>
        </div>
        <div className='home-content'>
          <div className='sidebar-container'>
            <div className='sidebar-top'>
              <div className='sidebar-navigate'>
                <div className='white-active'>
                  <img src='home.svg' alt='' />
                </div>
                <p>Home</p>
              </div>
              <div className='sidebar-navigate sidebar-hover-child'>
                <div>
                  <img src='home.svg' alt='' />
                </div>
                <p>My Tasks</p>
              </div>
              <div className='sidebar-navigate sidebar-hover-child'>
                <div>
                  <img src='home.svg' alt='' />
                </div>
                <p>My Tasks</p>
              </div>
            </div>

            <div className='sidebar-bottom'>
              <div className='sidebar-invite sidebar-hover-child'>
                <div className='sidebar-invite-image'>
                  <img src='home.svg' alt='' />
                  <img src='plus.svg' alt='' />
                </div>
                <p>Invite</p>
              </div>
              <div className='sidebar-settings'>
                <div className='sidebar-hover'>
                  <img src='home.svg' alt='' />
                </div>
                <div className='sidebar-hover'>
                  <img src='home.svg' alt='' />
                </div>
              </div>
            </div>
          </div>

          <div className='side-container'>
            <div className='side-header'>
              <p>My Task</p>
              <div className='side-header-icon'>
                <div className='side-header-close'>
                  <img src='home.svg' alt='' />
                </div>
                <div className='box-letter'>
                  <img src='plus.svg' alt='' />
                </div>
              </div>
            </div>
            <div className='side-contents'>
              <div className='side-content side-content-active'>
                <img src='home.svg' alt='' />
                <p>Overview</p>
              </div>
              <div className='side-content'>
                <img src='home.svg' alt='' />
                <p>Today & Overdue</p>
              </div>
              <div className='side-content'>
                <img src='home.svg' alt='' />
                <p>Tasks assgined to me</p>
              </div>
              <div className='side-content'>
                <img src='home.svg' alt='' />
                <p>Personal list</p>
              </div>
            </div>
          </div>

          <GridLayout />
        </div>
      </div>
    </div>
  );
}

export default Home;
