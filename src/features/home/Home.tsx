import AppLayout from '../../components/layout/AppLayout.tsx';
import GridLayout from '../../components/layout/GridLayout.tsx';
// Specific style imports for each component
// import styles from './Home.module.scss';

export function Home() {
  return (
    <AppLayout>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-xl font-semibold'>My Task</h1>
        <div className='flex gap-2'>
          <button className='w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100'>
            <img src='home.svg' alt='close' className='w-4 h-4' />
          </button>
          <button className='w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center'>
            <img src='plus.svg' alt='add' className='w-4 h-4' />
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {['Overview', 'Today & Overdue', 'Tasks assigned to me', 'Personal list'].map((title) => (
          <div
            key={title}
            className='bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-50'
          >
            <div className='flex items-center gap-2'>
              <img src='home.svg' alt='icon' className='w-5 h-5' />
              <p>{title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-6'>
        <GridLayout />
      </div>
    </AppLayout>
  );
}

export default Home;
