'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Check } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    image: '/tomatoes.jpg',
    quantity: '50 kg',
    price: '50 RWF/kg',
    location: 'Kigali',
    status: 'Available',
  },
  {
    id: 2,
    name: 'Green Beans',
    image: '/green-beans.jpg',
    quantity: '30 kg',
    price: '35 RWF/kg',
    location: 'Musanze',
    status: 'Available',
  },
  {
    id: 3,
    name: 'Sweet Corn',
    image: '/fresh-yellow-corn.png',
    quantity: '100 pieces',
    price: '50 RWF/piece',
    location: 'Huye',
    status: 'Available',
  },
  {
    id: 4,
    name: 'Fresh Carrots',
    image: '/fresh-orange-carrots.png',
    quantity: '25 kg',
    price: '60 RWF/kg',
    location: 'Nyagatare',
    status: 'Available',
  },
  {
    id: 5,
    name: 'Fresh Cabbage',
    image: '/fresh-cabbage.png',
    quantity: '40 heads',
    price: '25 RWF/head',
    location: 'Rubavu',
    status: 'Available',
  },
  {
    id: 6,
    name: 'Irish Potatoes',
    image: '/irish-potatoes.png',
    quantity: '80 kg',
    price: '50 RWF/kg',
    location: 'Ruhengeri',
    status: 'Available',
  },
];

export default function MyProducts() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard-farmer: my produce</h1>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white">+ Add New Product</Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input placeholder="Search your produce..." className="max-w-sm" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Crops" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Crops</SelectItem>
            <SelectItem value="vegetables">Vegetables</SelectItem>
            <SelectItem value="fruits">Fruits</SelectItem>
            <SelectItem value="grains">Grains</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="sold">Sold</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-green-600 text-white">Available</Badge>
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Quantity:</span>
                  <span className="font-medium text-foreground">{product.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span className="font-medium text-foreground">{product.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-medium text-foreground">{product.location}</span>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-950 dark:text-green-300"
                >
                  <Check className="h-4 w-4 mr-1" />
                  Sold
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:bg-red-50 dark:hover:bg-red-950 bg-transparent"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-4">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}
