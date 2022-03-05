import React from "react";
import { MicrophoneIcon, PhoneOutgoingIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/solid";
import { Dialpad } from "@mui/icons-material";

const CallControl = () => {
  return (
    <div className="flex m-auto my-4 items-center">
      <div className="flex h-14 w-14 border rounded-full items-center justify-center p-4 m-2">
        <MicrophoneIcon className="h-6 text-gray-500" />
      </div>
      <div className="flex h-14 w-14 border rounded-full items-center justify-center p-4 m-2">
        <Dialpad className="h-6 text-gray-500" />
      </div>
      <div className="flex h-14 w-14 border rounded-full items-center justify-center p-4 m-2">
        <PhoneOutgoingIcon className="h-6 text-gray-500" />
      </div>
      <div className="flex h-14 w-14 border rounded-full items-center justify-center p-4 m-2 bg-red-500">
        <PhoneIcon className="h-7 text-white rotate-135" />
      </div>
    </div>
  );
};

export default CallControl;
