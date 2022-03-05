import { ChevronDownIcon } from '@heroicons/react/outline';
import { sidebarNavigation } from '../../constants/constants';

export default function Picker() {
  return (
    <div className="mx-auto md:hidden">
      <div className="relative">
        <label htmlFor="inbox-select" className="sr-only">
          Choose inbox
        </label>
        <select
          id="inbox-select"
          className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600"
          defaultValue={sidebarNavigation.find((item) => item.current).name}
        >
          {sidebarNavigation.map((item) => (
            <option key={item.name}>{item.name}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
          <ChevronDownIcon
            className="h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
