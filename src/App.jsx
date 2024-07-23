import './index.css'
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-500">
        <Header />
        <div className="flex-grow">
          <main className="py-8 px-8">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}


export default App
