'use client';

import React from 'react';
import {
  LayoutGrid,
  FilePlus,
  MessageSquare,
  BarChart2,
  ShoppingCart,
  User,
  Settings,
  Mail,
  Bell,
  Package,
  Leaf,
  ChevronDown,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Dashboard = () => {
  const pathname = usePathname();

  const requests = [
    {
      id: '00001',
      name: 'Christina Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      formInput: 'NPK Fertilizer',
      status: 'Completed',
    },
    {
      id: '00002',
      name: 'Rosie Pearson',
      address: '979 Immanuel Ferry Suite 526',
      date: '28 May 2019',
      formInput: 'Maize Seeds',
      status: 'Processing',
    },
    {
      id: '00003',
      name: 'Darrell Caldwell',
      address: '8587 Frida Ports',
      date: '23 Nov 2019',
      formInput: 'NPK Fertilizer',
      status: 'Rejected',
    },
    {
      id: '00004',
      name: 'Gilbert Johnston',
      address: '768 Destiny Lake Suite 600',
      date: '05 Feb 2019',
      formInput: 'Maize Seeds',
      status: 'Completed',
    },
    {
      id: '00005',
      name: 'Alan Cain',
      address: '042 Mylene Throughway',
      date: '29 Jul 2019',
      formInput: 'Tomato Seeds',
      status: 'Processing',
    },
  ];

  const menuItems = [
    { label: 'Dashboard', href: '/farmer_dashboard', icon: LayoutGrid },
    { label: 'Products', href: '/farmer_dashboard/products', icon: Package },
    { label: 'Input Request', href: '/farmer_dashboard/requests', icon: FilePlus },
    { label: 'AI Tips', href: '/farmer_dashboard/ai', icon: MessageSquare },
    { label: 'Market Analytics', href: '/farmer_dashboard/market_analysis', icon: BarChart2 },
    { label: 'Messages', href: '/farmer_dashboard/message', icon: Mail },
    { label: 'Notifications', href: '/farmer_dashboard/notifications', icon: Bell },
    { label: 'Profile', href: '/farmer_dashboard/profile', icon: User },
    { label: 'Orders', href: '/farmer_dashboard/orders', icon: ShoppingCart },
    { label: 'Settings', href: '/farmer_dashboard/settings', icon: Settings },
  ];

  const products = [
    {
      id: 1,
      name: 'NPK Fertilizer',
      price: '$320.4',
      stock: 'Stock 321',
      image: '/npk-fertilizer.png',
    },
    {
      id: 2,
      name: 'NPK Fertilizer',
      price: '$320.4',
      stock: 'Stock 321',
      image: '/npk-fertilizer.png',
    },
    {
      id: 3,
      name: 'NPK Fertilizer',
      price: '$320.4',
      stock: 'Stock 321',
      image: '/npk-fertilizer.png',
    },
    {
      id: 4,
      name: 'NPK Fertilizer',
      price: '$320.4',
      stock: 'Stock 321',
      image: '/npk-fertilizer.png',
    },
    {
      id: 5,
      name: 'NPK Fertilizer',
      price: '$320.4',
      stock: 'Stock 321',
      image: '/npk-fertilizer.png',
    },
    {
      id: 6,
      name: 'NPK Fertilizer',
      price: '$320.4',
      stock: 'Stock 321',
      image: '/npk-fertilizer.png',
    },
    {
      id: 7,
      name: 'NPK Fertilizer',
      price: '$320.4',
      stock: 'Stock 321',
      image: '/npk-fertilizer.png',
    },
    {
      id: 8,
      name: 'NPK Fertilizer',
      price: '$320.4',
      stock: 'Stock 321',
      image: '/npk-fertilizer.png',
    },
  ];

  const statusStyles = {
    Completed: 'text-green-700 bg-green-100',
    Processing: 'text-blue-700 bg-blue-100',
    Rejected: 'text-red-700 bg-red-100',
  };

  const Logo = () => (
    <div className="flex items-center px-6 py-4">
      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
        <Leaf className="w-5 h-5 text-green-600" />
      </div>
      <span className="font-bold text-xl text-white">UmuhinziLink</span>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#00A63E] flex flex-col fixed left-0 top-0 h-screen overflow-y-auto">
        <Logo />
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            const showDivider = index === 4 || index === 8;
            return (
              <div key={item.label}>
                <Link href={item.href} className="block">
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all text-sm font-medium
                      ${isActive ? 'bg-white text-green-600 shadow-sm rounded-lg' : 'text-white'}`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-green-600' : 'text-white'}`} />
                    <span>{item.label}</span>
                  </div>
                </Link>
                {showDivider && <div className="border-t border-gray-200 my-2 mx-4"></div>}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b h-16 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-900">Input Request</h1>
          <Link href="/farmer_dashboard/add_produce">
            <button className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-green-600 transition">
              + Add New Product
            </button>
          </Link>
        </header>

        <div className="p-6">
          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Show</span>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>12</option>
                  <option>24</option>
                  <option>48</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort</span>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>A</option>
                  <option>Z</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Request type</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Request status</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <button className="text-red-500 text-sm flex items-center space-x-1">
                <X className="w-4 h-4" />
                <span>Clear Filter</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Filter</span>
              <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">Filter</button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {products.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-500">{product.stock}</span>
                  </div>
                  <button className="w-full bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition">
                    Add Product
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Request Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Recent Request</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left bg-gray-50">
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">ID</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">NAME</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                      ADDRESS
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">DATE</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                      Form Input
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                      STATUS
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {requests.map(request => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{request.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{request.address}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{request.date}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.formInput}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            statusStyles[request.status as keyof typeof statusStyles]
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-green-600 hover:text-green-900 text-sm font-medium">
                          View Control
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
