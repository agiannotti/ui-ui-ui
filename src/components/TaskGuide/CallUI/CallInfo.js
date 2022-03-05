import { UserIcon } from '@heroicons/react/outline';
const CallInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col bg-gray-50 h-20 w-20 m-2 justify-center items-center rounded-lg border border-indigo-200">
        <UserIcon className="h-8 text-indigo-700 bg-indigo-50 rounded-lg p-2" />
      </div>
      <div className="ml-4 mb-4 text-gray-500  text-sm leading-3">
        +1 (440) 271-5891
      </div>
    </div>
  );
};

export default CallInfo;
