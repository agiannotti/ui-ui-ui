import React from 'react';
import CallControl from './CallControl';
import CallInfo from './CallInfo';
import Timer from './Timer';

const CallContainer = () => {
  return (
    <div className="flex flex-col justify-center bg-white border-b h-1/2">
      <CallInfo />
      <Timer />
      <CallControl />
    </div>
  );
};

export default CallContainer;
