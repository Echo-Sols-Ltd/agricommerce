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
  Download,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Logo = () => (
  <div className="flex items-center px-6 py-4">
    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
      <Leaf className="w-5 h-5 text-green-600" />
    </div>
    <span className="font-bold text-xl text-white">UmuhinziLink</span>
  </div>
);

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

const orders = [
  {
    id: '00001',
    customer: 'Ange Kagame',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 May 2024',
    product: 'Maize Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00002',
    customer: 'Ange Kagame',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 May 2024',
    product: 'Maize Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00003',
    customer: 'David Gakwaya',
    address: 'KN 3 Av 15 Kicukiro',
    date: '22 May 2024',
    product: 'Milk Products',
    amount: '123',
    status: 'Shipped',
  },
  {
    id: '00004',
    customer: 'Gilbert Jomason',
    address: 'KG 2 Av 10 Gasabo 500',
    date: '01 Jun 2024',
    product: 'Maize Seeds',
    amount: '123',
    status: 'Completed',
  },
  {
    id: '00005',
    customer: 'Ange Kagame',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 May 2024',
    product: 'Tomato Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00006',
    customer: 'Ange Kagame',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 May 2024',
    product: 'Tomato Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00007',
    customer: 'Ange Kagame',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 May 2024',
    product: 'Tomato Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00008',
    customer: 'Ange Kagame',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 May 2024',
    product: 'Tomato Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00009',
    customer: 'John Kagiri',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 Jul 2024',
    product: 'Tomato Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00010',
    customer: 'John Kagiri',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 Jul 2024',
    product: 'Tomato Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00011',
    customer: 'Ange Kagame',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 Jul 2024',
    product: 'Tomato Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00012',
    customer: 'Ange Kagame',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 Jul 2024',
    product: 'Tomato Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00013',
    customer: 'Ange Kagame',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 Jul 2024',
    product: 'Tomato Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00014',
    customer: 'Ange Kagame',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 Jul 2024',
    product: 'Tomato Seeds',
    amount: '123',
    status: 'Processing',
  },
  {
    id: '00015',
    customer: 'Ange Kagame',
    address: 'KN 4 Av 20 Nyarugenge Kigali',
    date: '20 Jul 2024',
    product: 'Tomato Seeds',
    amount: '123',
    status: 'Processing',
  },
];

export default function OrdersPage() {
  const pathname = usePathname();

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
          <h1 className="text-xl font-semibold text-gray-900">Order</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-orange-600 transition">
            <Download className="w-4 h-4" />
            Export
          </button>
        </header>

        <div className="p-6">
          {/* Orders Table */}
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                      CUSTOMER
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                      ADDRESS
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">DATE</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                      Product
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                      AMOUNT
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                      STATUS
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={order.id}
                      className={index !== orders.length - 1 ? 'border-b border-gray-100' : ''}
                    >
                      <td className="py-4 px-4 font-medium text-gray-900 text-xs">#{order.id}</td>
                      <td className="py-4 px-4 text-gray-900 text-xs">{order.customer}</td>
                      <td className="py-4 px-4 text-gray-900 text-xs">{order.address}</td>
                      <td className="py-4 px-4 text-gray-900 text-xs">{order.date}</td>
                      <td className="py-4 px-4 text-gray-900 text-xs">{order.product}</td>
                      <td className="py-4 px-4 text-gray-900 text-xs">{order.amount}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Processing'
                              ? 'bg-purple-100 text-purple-700'
                              : order.status === 'Completed'
                                ? 'bg-green-100 text-green-700'
                                : order.status === 'Shipped'
                                  ? 'bg-orange-100 text-orange-700'
                                  : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-600">Showing 1 to 15 of 15 results</p>
            <div className="flex items-center gap-1">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                &lt;
              </button>
              <button className="bg-green-600 text-white w-8 h-8 rounded text-sm font-medium">
                1
              </button>
              <button className="w-8 h-8 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                2
              </button>
              <button className="w-8 h-8 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                3
              </button>
              <button className="w-8 h-8 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                4
              </button>
              <button className="w-8 h-8 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                5
              </button>
              <button className="w-8 h-8 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                6
              </button>
              <button className="w-8 h-8 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                7
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
