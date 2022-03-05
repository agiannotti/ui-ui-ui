import {
  AcademicCapIcon,
  AnnotationIcon,
  BellIcon,
  CashIcon,
  ChatIcon,
  CogIcon,
  PhoneIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { ChatBubble, MessageOutlined } from '@mui/icons-material';

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
  { name: 'Open', href: '#!', icon: PhoneIcon, current: true },
  { name: 'Archive', href: '#!', icon: UsersIcon, current: false },
  {
    name: 'Customers',
    href: '#!',
    icon: AnnotationIcon,
    current: false,
  },
  { name: 'Flagged', href: '#!', icon: CogIcon, current: false },
];

const actions = [
  {
    title: 'Voice',
    href: '#',
    icon: PhoneIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'SMS',
    href: '#',
    icon: ChatIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
  {
    title: 'Chat',
    href: '#',
    icon: MessageOutlined,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'Notification',
    href: '#',
    icon: BellIcon,
    iconForeground: 'text-amber-700',
    iconBackground: 'bg-amber-50',
  },
  {
    title: 'Immediate Outbound',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    title: 'Coaching Session',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-emerald-700',
    iconBackground: 'bg-emerald-50',
  },
];

export { userNavigation, navigation, sidebarNavigation, user, actions };
