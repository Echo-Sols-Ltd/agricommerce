import { FC, JSX } from 'react';
import {
  Home,
  ShoppingCart,
  Lightbulb,
  BarChart,
  Leaf,
  Search,
  Heart,
  MessageSquare,
  Package,
} from 'lucide-react';

interface DashboardItem {
  icon: JSX.Element;
  label: string;
}

interface Dashboard {
  title: string;
  color: string;
  items: DashboardItem[];
}

const dashboards: Dashboard[] = [
  {
    title: 'Farmer Dashboard',
    color: 'bg-green-50',
    items: [
      { icon: <Home className="text-green-600 w-5 h-5" />, label: 'Dashboard' },
      { icon: <Leaf className="text-green-600 w-5 h-5" />, label: 'My Produce' },
      {
        icon: <ShoppingCart className="text-green-600 w-5 h-5" />,
        label: 'Input Credit',
      },
      { icon: <Lightbulb className="text-green-600 w-5 h-5" />, label: 'AI Tips' },
      {
        icon: <BarChart className="text-green-600 w-5 h-5" />,
        label: 'Market Insights',
      },
    ],
  },
  {
    title: 'Supplier Dashboard',
    color: 'bg-blue-50',
    items: [
      { icon: <Home className="text-blue-600 w-5 h-5" />, label: 'Dashboard' },
      {
        icon: <Package className="text-blue-600 w-5 h-5" />,
        label: 'My Inputs',
      },
      {
        icon: <BarChart className="text-blue-600 w-5 h-5" />,
        label: 'Farmer Requests',
      },
      { icon: <ShoppingCart className="text-blue-600 w-5 h-5" />, label: 'Orders' },
      {
        icon: <MessageSquare className="text-blue-600 w-5 h-5" />,
        label: 'Messages',
      },
    ],
  },
  {
    title: 'Buyer Dashboard',
    color: 'bg-yellow-50',
    items: [
      { icon: <Home className="text-orange-500 w-5 h-5" />, label: 'Dashboard' },
      {
        icon: <Search className="text-orange-500 w-5 h-5" />,
        label: 'Browse Produce',
      },
      {
        icon: <Heart className="text-orange-500 w-5 h-5" />,
        label: 'Saved Items',
      },
      { icon: <ShoppingCart className="text-orange-500 w-5 h-5" />, label: 'Orders' },
      {
        icon: <MessageSquare className="text-orange-500 w-5 h-5" />,
        label: 'Messages',
      },
    ],
  },
];

const IntuitiveDashboards: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900">Intuitive Dashboards</h2>
        <p className="text-center text-gray-600 mt-2">Tailored interfaces for each user type</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {dashboards.map(dashboard => (
            <div key={dashboard.title} className={`${dashboard.color} rounded-xl p-6 shadow-sm`}>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">{dashboard.title}</h3>
              <div className="space-y-3">
                {dashboard.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm"
                  >
                    {item.icon}
                    <span className="text-gray-800 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntuitiveDashboards;
