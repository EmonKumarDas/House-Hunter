import { Link, Outlet } from 'react-router-dom';

const OwnerDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Drawer */}

      <div className="drawer-side flex flex-col justify-between bg-indigo-800 text-white">
        <ul className="menu p-4">
          <li className="mb-4 text-white"><Link to='/dashboard'>Add New house</Link></li>
          {/* isAdmin */}
          <li className="mb-4 text-white"><Link to='/dashboard/houseList'>All Houses</Link></li>
          <li className="mb-4 text-white"><Link to='/dashboard/allseller'>All Sellers</Link></li>
          <li className="mb-4 text-white"><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
          {/* isSeller */}
          <li className="mb-4 text-white"><Link to='/dashboard/seller'>My Products(Seller)</Link></li>
          <li className="mb-4 text-white"><Link to='/dashboard/seller/input'>Add Product</Link></li>
          <li className="mb-4 text-white"><Link to='/dashboard/seller/ordered'>Ordered by buyer</Link></li>
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
