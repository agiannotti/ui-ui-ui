import { WifiIcon } from '@heroicons/react/solid';
import DialpadIcon from '@mui/icons-material/Dialpad';
import HeadphonesIcon from '@mui/icons-material/Headphones';

export default function HeaderNav() {
  return (
    <nav aria-label="Global" className="flex space-x-2">
      <a href="#!" className="text-sm font-medium text-gray-900">
        <HeadphonesIcon className="h-5" />
      </a>
      <a href="#!" className="text-sm font-medium text-gray-900">
        <DialpadIcon className="h-4" />
      </a>
      <a href="#!" className="text-sm font-medium text-gray-900">
        <WifiIcon className="h-6" />
      </a>
    </nav>
  );
}
