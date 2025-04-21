import WorkspaceDropdown from './WorkspaceDropdown';

const NavBar = () => {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-md dark:bg-gray-800'>
      <div className='flex items-center gap-4'>
        <WorkspaceDropdown />
      </div>

      <div className='hidden sm:flex items-center w-full max-w-xl mx-4 gap-3'>
        <div className='relative flex-1'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500'>
            🔍
          </div>
          <input
            type='text'
            placeholder='Search everything...'
            className='w-full py-2 pl-10 pr-4 text-sm border rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
          />
        </div>

        <button className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600'>
          <span className='flex items-center justify-center w-6 h-6 text-gray-800 bg-white rounded-full text-sm font-bold'>
            +
          </span>
          Task
        </button>
      </div>

      <div className='flex items-center space-x-4'>
        <button
          type='button'
          className='relative p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
        >
          🔔
          <span className='absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full'></span>
        </button>
        <button
          type='button'
          className='flex items-center p-2 text-sm text-gray-500 rounded-full hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
        >
          👤
        </button>
      </div>
    </header>
  );
};

export default NavBar;
