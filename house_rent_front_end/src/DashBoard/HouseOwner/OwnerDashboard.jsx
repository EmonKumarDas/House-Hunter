import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ApiContext } from '../../Provider/AuthProvider';

const OwnerDashboard = () => {
  const { isOwner, isRenter } = useContext(ApiContext);
  return (
    <div className="flex h-screen">
      {/* Drawer */}

      <div className="drawer-side flex flex-col justify-between bg-indigo-800 text-white">
        <ul className="menu p-4">
          {
            isOwner? 
            <>
            <li className="mb-4 text-white"><Link to='/dashboard'>Add New house</Link></li>
            {/* isAdmin */}
            <li className="mb-4 text-white"><Link to='/dashboard/houseList'>All Houses</Link></li>
            </>
          :""
          } 
          {
           isRenter? <li className="mb-4 text-white"><Link to='/dashboard/mybooked'>My Booking</Link></li>:""
          }       
         

        </ul>

      </div>

      {/* Main content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}

        {/* Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
