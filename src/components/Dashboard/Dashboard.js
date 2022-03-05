import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import TaskGuide from '../TaskGuide/TaskGuide';
import TaskQueue from '../TaskQueue/TaskQueue';
import Widgets from '../Widgets';

export default function Dashboard() {
  return (
    <>
      <div className="h-full flex flex-col max-h-screen">
        <Header />
        <div className="min-h-0 flex-1 flex overflow-hidden">
          <Navigation />
          <main className="min-w-0 flex-1 border-t border-gray-200 flex">
            <TaskQueue />
            <TaskGuide />
            <Widgets />
          </main>
        </div>
      </div>
    </>
  );
}
