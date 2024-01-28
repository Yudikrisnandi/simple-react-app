import Home from '../assets/Home';
import Logout from '../assets/Logout';

function SideMenu() {
  return (
    <div className="h-screen w-20 bg-indigo-950 text-white p-4 flex flex-col items-center justify-between">
      <nav>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-indigo-500 rounded flex justify-center items-center">
            <Home/>
          </div>
        </div>
      </nav>
      <Logout style={{ color:'white' }}/>
    </div>
  );
}

export default SideMenu;
