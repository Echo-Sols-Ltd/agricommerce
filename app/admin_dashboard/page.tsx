'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutGrid,
  Users,
  ArrowUpDown,
  Bell,
  User as UserIcon,
  Settings,
  Search,
  Wallet,
  LogOut,
  Menu,
  X,
  Eye,
  Trash2
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { User, getCurrentUser, logout } from '@/lib/auth';

interface AdminStats {
  totalUsers: number;
  totalFarmers: number;
  totalBuyers: number;
  totalSuppliers: number;
  totalOrders: number;
  totalRevenue: number;
  pendingApprovals: number;
  activeListings: number;
}

interface MenuItem {
  label: string;
  href: string;
  icon: any;
}

const MENU_ITEMS: MenuItem[] = [
  { label: 'Dashboard', href: '/admin_dashboard', icon: LayoutGrid },
  { label: 'Users', href: '/admin_dashboard/users', icon: Users },
  { label: 'Payments', href: '/admin_dashboard/orders', icon: ArrowUpDown },
  { label: 'Notifications', href: '/admin_dashboard/reports', icon: Bell },
];

const MENU_ITEMS_BOTTOM: MenuItem[] = [
  { label: 'Profile', href: '/admin_dashboard/settings', icon: UserIcon },
  { label: 'Settings', href: '/admin_dashboard/settings', icon: Settings },
];

interface TableUser {
  type: string;
  name: string;
  address: string;
  date: string;
  lastActivity: string;
  status: 'Active' | 'Processing' | 'Inactive';
}

const AdminGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Temporarily bypass authentication for admin dashboard access
        // const user = await getCurrentUser();
        // if (user?.role !== 'ADMIN') {
        //   window.location.href = '/unauthorized';
        //   return;
        // }
        // setCurrentUser(user);
      } catch (error) {
        // window.location.href = '/signin';
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return <>{children}</>;
};

function Dashboard() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    totalFarmers: 0,
    totalBuyers: 0,
    totalSuppliers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingApprovals: 0,
    activeListings: 0,
  });

  const [tableUsers, setTableUsers] = useState<TableUser[]>([
    {
      type: 'Farmer',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      lastActivity: '02 Nov 2025',
      status: 'Active',
    },
    {
      type: 'Farmer',
      name: 'Rosie Pearson',
      address: '979 Immanuel Ferry Suite 526',
      date: '28 May 2019',
      lastActivity: '02 Nov 2025',
      status: 'Processing',
    },
    {
      type: 'Buyer',
      name: 'Darrell Caldwell',
      address: '8587 Frida Ports',
      date: '23 Nov 2019',
      lastActivity: '02 Nov 2025',
      status: 'Inactive',
    },
    {
      type: 'Supplier',
      name: 'Gilbert Johnston',
      address: '768 Destiny Lake Suite 600',
      date: '05 Feb 2019',
      lastActivity: '02 Nov 2025',
      status: 'Active',
    },
    {
      type: 'Buyer',
      name: 'Alan Cain',
      address: '042 Mylene Throughway',
      date: '29 Jul 2019',
      lastActivity: '02 Nov 2025',
      status: 'Processing',
    },
  ]);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    
    // Mock stats data - replace with actual API calls
    setStats({
      totalUsers: 1500,
      totalFarmers: 12456,
      totalBuyers: 948,
      totalSuppliers: 1234567,
      totalOrders: 3421,
      totalRevenue: 95000,
      pendingApprovals: 23,
      activeListings: 892,
    });
  }, []);

  const handleLogout = async () => {
    await logout();
    router.push('/signin');
  };

  // Chart data for doughnut chart
  const chartData = [
    { name: 'Farmers', value: stats.totalFarmers, color: '#16a34a' },
    { name: 'Suppliers', value: stats.totalSuppliers, color: '#22c55e' },
    { name: 'Buyers', value: stats.totalBuyers, color: '#86efac' },
  ];

  // Total value for the chart center (matching the image)
  const totalValue = 5824213;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-purple-100 text-purple-800';
      case 'Inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar - Green */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-green-600 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center space-x-2">
            
            <span className="font-bold text-xl text-white">umuhinziLink</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {MENU_ITEMS.map((item) => {
            const isActive = item.label === 'Dashboard';
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white text-green-600'
                    : 'text-white hover:bg-green-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
          
          <div className="border-t border-green-500 my-4"></div>
          
          {MENU_ITEMS_BOTTOM.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-green-700"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header - White with Search */}
        <header className="bg-white border-b h-16 flex items-center px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mr-4"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 bg-white p-6">
          {/* Top Section - Data Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Active Users Card - Green Background */}
            <div className="bg-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 mb-2">Active Users</p>
                  <p className="text-4xl font-bold">{stats.totalUsers.toLocaleString()}</p>
                </div>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>

            {/* Active Payments Card - White Background */}
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Active Payments</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-4xl font-bold text-gray-900">95.000</p>
                    <span className="text-green-600 font-semibold">+55%</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>

            {/* Doughnut Chart */}
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <div className="flex items-center">
                <div className="relative flex-1 max-w-[200px]">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-gray-900">{totalValue.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">All Now</p>
                  </div>
                </div>
                <div className="ml-6 space-y-3 flex-1">
                  {chartData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-4 h-1 rounded`} style={{ backgroundColor: item.color }}></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.value.toLocaleString()}+</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Users</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ADDRESS</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableUsers.map((user, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.address}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.lastActivity}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-4">
                          <button className="text-green-600 hover:text-green-800">View</button>
                          <button className="text-red-600 hover:text-red-800">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <AdminGuard>
      <Dashboard />
    </AdminGuard>
  );
}
