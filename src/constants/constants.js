import {
  ArchiveIcon,
  BanIcon,
  FlagIcon,
  InboxIcon,
  PencilAltIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';

const user = {
  name: 'Whitney Francis',
  email: 'whitneyfrancis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const userNavigation = [
  { name: 'Your Profile', href: '#!' },
  { name: 'Sign out', href: '#!' },
];

const navigation = [
  {
    name: 'Inboxes',
    href: '#!',
    children: [
      { name: 'Technical Support', href: '#!' },
      { name: 'Sales', href: '#!' },
      { name: 'General', href: '#!' },
    ],
  },
  { name: 'Reporting', href: '#!', children: [] },
  { name: 'Settings', href: '#!', children: [] },
];

const sidebarNavigation = [
  { name: 'Open', href: '#!', icon: InboxIcon, current: true },
  { name: 'Archive', href: '#!', icon: ArchiveIcon, current: false },
  { name: 'Customers', href: '#!', icon: UserCircleIcon, current: false },
  { name: 'Flagged', href: '#!', icon: FlagIcon, current: false },
  { name: 'Spam', href: '#!', icon: BanIcon, current: false },
  { name: 'Drafts', href: '#!', icon: PencilAltIcon, current: false },
];

export { userNavigation, navigation, sidebarNavigation, user };
