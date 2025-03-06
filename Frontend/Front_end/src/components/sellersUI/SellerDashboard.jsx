import React, { useState } from 'react';
import {
  LayoutDashboard,
  BarChart3,
  Package,
  QrCode,
  TrendingUp,
  User,
  Settings,
  Badge,
  ChevronDown,
  Menu,
  Clock,
  AlertCircle,
  ShoppingBag,
  Users,
  DollarSign,
  Star
} from 'lucide-react';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');
  
  // Mock data - In real app, this would come from API/props
  const shopOwner = {
    name: "John Smith",
    shopName: "John's Electronics"
  };

  const recentOrders = [
    { id: '#ORD-789', customer: 'Alice Brown', amount: 299, status: 'Pending' },
    { id: '#ORD-788', customer: 'Bob Wilson', amount: 199, status: 'Delivered' },
    { id: '#ORD-787', customer: 'Carol Davis', amount: 499, status: 'Processing' },
  ];

  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Analytics', icon: BarChart3 },
    { label: 'Manage Inventory', icon: Package },
    { label: 'Generate QR', icon: QrCode },
    { label: 'Track Sales', icon: TrendingUp },
    { 
      label: 'Profile',
      icon: User,
      submenu: ['Business Settings', 'View UCI']
    }
  ];

  // Get current time of day for greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Keeping the original sidebar code */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-xl transition-all duration-300 relative`}>
        {/* Previous sidebar code remains the same */}
        <div className="h-16 flex items-center justify-between px-4 border-b">
          {isSidebarOpen ? (
            <span className="text-xl font-bold text-gray-800">Shop Manager</span>
          ) : (
            <span className="text-xl font-bold text-gray-800">SM</span>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            {isSidebarOpen ? <ChevronDown size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="mt-6 px-2">
          {menuItems.map((item) => (
            <div key={item.label} className="mb-2">
              <button
                onClick={() => setActiveItem(item.label)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                  activeItem === item.label
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <item.icon size={20} className="flex-shrink-0" />
                {isSidebarOpen && (
                  <span className="ml-3 font-medium">{item.label}</span>
                )}
              </button>
              
              {isSidebarOpen && item.submenu && activeItem === item.label && (
                <div className="ml-8 mt-2 space-y-2">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem}
                      className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation Bar */}
        <div className="h-16 bg-white border-b px-6 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-800">{activeItem}</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Settings size={20} className="text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <User size={20} className="text-blue-600" />
              </div>
              {isSidebarOpen && (
                <span className="font-medium text-gray-700">{shopOwner.name}</span>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Dashboard Content */}
        <div className="p-6">
          {/* Greeting Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {getGreeting()}, {shopOwner.name}!
            </h2>
            <p className="text-gray-600 mt-2">Here's what's happening at {shopOwner.shopName} today.</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Today's Sales</h3>
                <DollarSign className="text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-4">$2,580</p>
              <p className="text-sm text-gray-600 mt-2">+15% from yesterday</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">New Orders</h3>
                <ShoppingBag className="text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-4">24</p>
              <p className="text-sm text-gray-600 mt-2">8 pending fulfillment</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Low Stock Items</h3>
                <AlertCircle className="text-orange-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-4">12</p>
              <p className="text-sm text-gray-600 mt-2">Items need reordering</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Customer Rating</h3>
                <Star className="text-yellow-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-4">4.8</p>
              <p className="text-sm text-gray-600 mt-2">Based on 156 reviews</p>
            </div>
          </div>

          {/* Recent Orders and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
                <button className="text-blue-600 text-sm hover:text-blue-700">View All</button>
              </div>
              <div className="space-y-4">
                {recentOrders.map(order => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">${order.amount}</p>
                      <span className={`text-sm px-2 py-1 rounded ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-blue-50 rounded-lg text-left hover:bg-blue-100 transition-colors">
                  <Package className="text-blue-600 mb-2" />
                  <p className="font-medium text-gray-800">Add New Product</p>
                  <p className="text-sm text-gray-600">Create a new product listing</p>
                </button>
                <button className="p-4 bg-green-50 rounded-lg text-left hover:bg-green-100 transition-colors">
                  <QrCode className="text-green-600 mb-2" />
                  <p className="font-medium text-gray-800">Generate QR Code</p>
                  <p className="text-sm text-gray-600">Create product QR codes</p>
                </button>
                <button className="p-4 bg-purple-50 rounded-lg text-left hover:bg-purple-100 transition-colors">
                  <Users className="text-purple-600 mb-2" />
                  <p className="font-medium text-gray-800">Customer List</p>
                  <p className="text-sm text-gray-600">View customer database</p>
                </button>
                <button className="p-4 bg-orange-50 rounded-lg text-left hover:bg-orange-100 transition-colors">
                  <BarChart3 className="text-orange-600 mb-2" />
                  <p className="font-medium text-gray-800">Sales Report</p>
                  <p className="text-sm text-gray-600">Download latest report</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;