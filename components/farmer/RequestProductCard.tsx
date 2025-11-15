'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export interface ProductData {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  stock: number;
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
}

interface ProductCardProps {
  product: ProductData;
  onBuyNow?: (productId: string) => void;
}

export function ProductCard({ product, onBuyNow }: ProductCardProps) {
  const getStockBadgeVariant = (status: string) => {
    switch (status) {
      case 'in-stock':
        return 'default';
      case 'low-stock':
        return 'secondary';
      case 'out-of-stock':
        return 'destructive';
      default:
        return 'default';
    }
  };

  const getStockBadgeText = (status: string) => {
    switch (status) {
      case 'in-stock':
        return 'In Stock';
      case 'low-stock':
        return 'Low Stock';
      case 'out-of-stock':
        return 'Out of Stock';
      default:
        return 'In Stock';
    }
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge
          variant={getStockBadgeVariant(product.stockStatus)}
          className="absolute top-2 left-2"
        >
          {getStockBadgeText(product.stockStatus)}
        </Badge>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-balance text-[#111827]">{product.name}</h3>
          <p className="text-sm text-[#4B5563] capitalize">{product.category}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
          <span className="text-sm text-[#4B5563]">Stock: {product.stock}</span>
        </div>

        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          onClick={() => onBuyNow?.(product.id)}
          disabled={product.stockStatus === 'out-of-stock'}
        >
          {product.stockStatus === 'out-of-stock' ? 'Out of Stock' : 'Buy now'}
        </Button>
      </CardContent>
    </Card>
  );
}
