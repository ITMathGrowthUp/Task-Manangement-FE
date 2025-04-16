import { useEffect, useState } from 'react';

interface Tasks {
  id: string;
  name: string;
  status: 'todo' | 'implementing' | 'done';
  description?: string;
  priority?: 'low' | 'medium' | 'high';
  createdAt?: Date;
  dueDate?: Date;
  updatedAt?: Date;
  assignee?: string;
}

const tempTasks = [
  {
    id: 1,
    name: 'Develop a UI Kit using in project'
  },
  {
    id: 2,
    name: 'Improve remember me feature'
  },
  {
    id: 3,
    name: 'Improve UX for home screen'
  },
  {
    id: 4,
    name: 'Convert all css style to tailwindcss'
  },
  {
    id: 5,
    name: 'Discuss more about task interface'
  }
];

function CardAllTasksDefault() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    // const fetchTasks = async () => {
    setTasks(tempTasks);
    //   try {
    //     const urlencoded = new URLSearchParams();
    //     // Call the getTaskApi with the access token
    //     const response = await fetch(getTaskApi, {
    //       method: 'POST',
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(urlencoded)
    //     });
    //
    //     const tasks = await response.json();
    //
    //     setTasks(tasks);
    //   } catch (err) {
    //     setError('Failed to fetch tasks. Please try again later.');
    //     console.error(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    //
    // fetchTasks();
  }, []);

  return (
    <div className='p-4 h-full flex flex-col'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>Recents</h2>
      <div>
        <ul className='space-y-2'>
          {tasks.map((task) => (
            <li
              key={task.id}
              className='flex items-center gap-2 text-base font-medium text-gray-700'
            >
              <img
                width='24'
                height='24'
                src='https://img.icons8.com/material-outlined/24/task.png'
                alt='task'
                className='flex-shrink-0'
              />
              {task.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardAllTasksDefault;
