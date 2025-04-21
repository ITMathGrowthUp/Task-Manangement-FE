import SideBar from './SideBar';
import NavBar from './NavBar';
import * as React from 'react';

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className='flex flex-col h-screen'>
      <NavBar />

      <div className='flex flex-1'>
        <aside className='w-22 bg-gray-900 text-white p-1'>
          <SideBar />
        </aside>

        <main className='flex-1 bg-gray-100 p-6 pl-0 overflow-y-auto'>{children}</main>
      </div>
    </div>
  );
}
