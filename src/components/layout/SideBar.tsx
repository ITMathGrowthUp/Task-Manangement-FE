//TODO: Get from API
const menuItems = [
  { icon: '🏠', label: 'Home', tooltip: 'Home' },
  { icon: '✅', label: 'Tasks', tooltip: 'My Tasks', notificationCount: 5 },
  { icon: '📅', label: 'Calendar', tooltip: 'Calendar' },
  { icon: '👥', label: 'Teams' },
  { icon: '📄', label: 'Docs', tooltip: 'Documentations' },
  { icon: '🖊️', label: 'Whiteboard', tooltip: 'Whiteboard' },
  { icon: '⋯', label: 'More', tooltip: 'Documents' },
  { icon: '➕', label: 'Invite', tooltip: 'Invite your friends' },
  { icon: '💎', label: 'Upgrade', tooltip: 'Upgrade your plan' },
  { icon: '❓', tooltip: 'Help' },
  { icon: '⚙️', tooltip: 'Settings' }
];

export default function Sidebar() {
  return (
    <aside className='flex flex-col items-center w-20 bg-[#0d1117] py-4 space-y-4 flex-shrink-0'>
      {menuItems.map((item, index) => {
        const hasLabel = !!item.label;
        const showBadge = item.notificationCount != null && item.notificationCount > 0;
        const badgeText =
          item.notificationCount != null && item.notificationCount > 9
            ? '9+'
            : item.notificationCount;

        return (
          <div key={index} className='relative group'>
            <div className='flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#151a25] hover:bg-[#1f2937] cursor-pointer'>
              <span className='text-xl relative'>
                {item.icon}
                {showBadge && (
                  <span className='absolute -top-1 -right-2.5 bg-red-600 text-white text-[10px] px-1.5 py-[1px] rounded-full leading-none'>
                    {badgeText}
                  </span>
                )}
              </span>
              {hasLabel && <span className='text-[10px] text-white mt-1'>{item.label}</span>}
            </div>
            <div className='absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap'>
              {item.tooltip || item.label}
            </div>
          </div>
        );
      })}
    </aside>
  );
}
