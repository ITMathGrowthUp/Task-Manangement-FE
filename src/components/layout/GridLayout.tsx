import CardAllTasksDefault from '../home/cards/CardAllTasksDefault.tsx';

const GridLayout = () => {
  const gridStyle = 'grid grid-cols-2 gap-4 w-full h-full';
  const boxStyle = 'border-1 border-gray-200 rounded-xl w-full h-full bg-white';

  return (
    <div className='w-full h-[80vh] p-4 text-lg font-semibold font-sans text-gray-800'>
      <h2 className='pl-6 text-2xl pb-6'>Hello, Truong</h2>
      <div className={`${gridStyle}`}>
        <div className={`${boxStyle}`}>
          <CardAllTasksDefault />
        </div>
        <div className={`${boxStyle}`}>
          <CardAllTasksDefault />
        </div>
        <div className={`${boxStyle}`}>
          <CardAllTasksDefault />
        </div>
        <div className={`${boxStyle}`}>
          <CardAllTasksDefault />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
