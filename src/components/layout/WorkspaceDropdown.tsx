import { useEffect, useRef, useState } from 'react';

const WorkspaceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex items-center gap-2 px-3 py-1 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
      >
        <div className='flex items-center justify-center w-6 h-6 rounded bg-teal-500 text-white text-sm font-bold'>
          I
        </div>

        <span className='text-sm font-medium text-gray-800 dark:text-white'>ITMath Workspace</span>
        <svg
          className='w-4 h-4 text-gray-500'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute z-50 mt-2 w-52 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg'>
          <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
            <li className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer'>
              Workspace 1
            </li>
            <li className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer'>
              Workspace 2
            </li>
            <li className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer'>
              Create new workspace
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default WorkspaceDropdown;
