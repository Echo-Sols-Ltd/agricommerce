'use client';

import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  MessageSquare,
  Settings,
  FilePlus,
  BarChart2,
  ShoppingCart,
  User,
  Mail,
  Bell,
  Package,
  ChevronLeft,
  ChevronRight,
  Star,
  Leaf,
} from 'lucide-react';
import Link from 'next/link';

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
    name: 'Fresh Spinach',
    category: 'Fresh Vegetables',
    price: '2.50',
    rating: 4.5,
    image: '/spinach.png',
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.8,
    image: '/tomatoes.png',
  },
  {
    id: 3,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.6,
    image: '/tomatoes.png',
  },
  {
    id: 4,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.7,
    image: '/tomatoes.png',
  },
  {
    id: 5,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.9,
    image: '/tomatoes.png',
  },
  {
    id: 6,
    name: 'Fresh Spinach',
    category: 'Fresh Vegetables',
    price: '2.50',
    rating: 4.5,
    image: '/spinach.png',
  },
  {
    id: 7,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.8,
    image: '/tomatoes.png',
  },
  {
    id: 8,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.6,
    image: '/tomatoes.png',
  },
  {
    id: 9,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.7,
    image: '/tomatoes.png',
  },
  {
    id: 10,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.9,
    image: '/tomatoes.png',
  },
  {
    id: 11,
    name: 'Fresh Spinach',
    category: 'Fresh Vegetables',
    price: '2.50',
    rating: 4.5,
    image: '/spinach.png',
  },
  {
    id: 12,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.8,
    image: '/tomatoes.png',
  },
  {
    id: 13,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.6,
    image: '/tomatoes.png',
  },
  {
    id: 14,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.7,
    image: '/tomatoes.png',
  },
  {
    id: 15,
    name: 'Fresh Tomatoes',
    category: 'Fresh Vegetables',
    price: '3.00',
    rating: 4.9,
    image: '/tomatoes.png',
  },
];

export default function Products() {
  const pathname = usePathname();

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
      <main className="flex-1 ml-64 bg-[#F9FAFB">
        {/* Header */}
        <header className="bg-white border-b h-16 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-900">Products</h1>
          <Link href="/farmer_dashboard/add_produce">
            <button className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-green-600 transition">
              + Add New Product
            </button>
          </Link>
        </header>

        <div className="p-6">
          {/* Banner Section */}
          <div className="relative bg-gradient-to-r from-teal-500 to-green-500 p-8 mb-8 overflow-hidden">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              <div className="text-white">
                <p className="text-sm opacity-90 mb-2">Tuesday, 16 July 2024</p>
                <h2 className="text-2xl font-bold mb-2">Enjoy new produce</h2>
                <h3 className="text-xl mb-1">in this summer</h3>
                <p className="text-sm opacity-90">Tomatoes • 2-4kg Qty</p>
              </div>
              <div className="relative">
                <img src="/produve.png" alt="Tomatoes" className="w-48 h-48 object-contain" />
              </div>
            </div>
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition">
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-5 gap-6">
            {products.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
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
                  <p className="text-sm text-[#4880FF] mb-2">${product.price}</p>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                  </div>
                  <button className="bg-[#D0EDDB] text-black px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-600 transition">
                    Edit Produce
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
