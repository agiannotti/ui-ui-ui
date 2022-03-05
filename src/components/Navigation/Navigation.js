import { sidebarNavigation } from '../../constants/constants';
import { classNames } from '../../utils/common';

export default function Navigation() {
  return (
    <nav
      aria-label="Sidebar"
      className="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto"
    >
      <div className="relative w-20 h-screen flex flex-col p-3 space-y-3">
        {sidebarNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-400 hover:bg-gray-700',
              'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
            )}
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
    </nav>
  );
}
