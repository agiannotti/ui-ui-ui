import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from './Main/Main';

export default function Dashboard() {
  return (
    <>
      <div className="h-full flex flex-col">
        <Header />
        <div className="min-h-0 flex-1 flex overflow-hidden">
          <Navigation />
          <Main />
        </div>
      </div>
    </>
  );
}
