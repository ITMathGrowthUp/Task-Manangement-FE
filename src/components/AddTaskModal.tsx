import { useState } from 'react';

interface FormData {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  timeEstimate?: number;
  status?: {
    id: number;
  };
  assignee?: {
    id: number;
  };
  priority?: {
    id: number;
  };
}

const AddTaskModal = ({ isOpen, onClose, onSubmit }) => {
  const defaultFormData: FormData = {
    name: '',
    description: '',
    startDate: '',
    endDate: ''
  };

  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(defaultFormData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/[.5] flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>Add new task</h2>
          <button onClick={onClose} className='text-gray-500 hover:text-gray-700'>
            ✕
          </button>
        </div>
        <div>
          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                Task name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                required
              />
            </div>
            <div>
              <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
                Description
              </label>
              <input
                type='text'
                id='description'
                name='description'
                value={formData.description}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                required
              />
            </div>
            <div>
              <label htmlFor='startDate' className='block text-sm font-medium text-gray-700'>
                Start Date
              </label>
              <input
                type='date'
                id='startDate'
                name='startDate'
                value={formData.startDate}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                required
              />
            </div>
            <div>
              <label htmlFor='endDate' className='block text-sm font-medium text-gray-700'>
                End Date
              </label>
              <input
                type='date'
                id='endDate'
                name='endDate'
                value={formData.endDate}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                required
              />
            </div>
            <div>
              <label htmlFor='timeEstimate' className='block text-sm font-medium text-gray-700'>
                Estimate time (hours)
              </label>
              <input
                type='text'
                pattern='[0-9]*'
                id='timeEstimate'
                name='timeEstimate'
                value={formData.timeEstimate || ''}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                required
              />
            </div>
            <div className='flex justify-end space-x-2'>
              <button
                type='button'
                onClick={onClose}
                className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300'
              >
                Cancel
              </button>
              <button
                type='submit'
                onClick={handleSubmit}
                className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
