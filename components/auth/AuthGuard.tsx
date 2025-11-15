'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, getUserRole, type User } from '@/lib/auth';

interface AuthGuardProps {
  children: React.ReactNode;
  requiredRoles?: User['role'][];
  redirectTo?: string;
  fallback?: React.ReactNode;
}

export default function AuthGuard({
  children,
  requiredRoles,
  redirectTo = '/signin',
  fallback,
}: AuthGuardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      // Check if user is authenticated
      if (!isAuthenticated()) {
        console.log('User not authenticated, redirecting to signin');
        router.push(redirectTo);
        return;
      }

      // If specific roles are required, check user role
      if (requiredRoles && requiredRoles.length > 0) {
        const userRole = getUserRole();

        if (!userRole || !requiredRoles.includes(userRole)) {
          console.log(`User role ${userRole} not authorized for required roles:`, requiredRoles);
          router.push('/unauthorized');
          return;
        }
      }

      setIsAuthorized(true);
      setIsLoading(false);
    };

    checkAuth();
  }, [router, requiredRoles, redirectTo]);

  // Show loading state
  if (isLoading) {
    return (
      fallback || (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Verifying access...</p>
          </div>
        </div>
      )
    );
  }

  // Show children if authorized
  if (isAuthorized) {
    return <>{children}</>;
  }

  // This shouldn't render as we redirect, but just in case
  return null;
}

// Convenience components for specific roles
export function FarmerGuard({ children, ...props }: Omit<AuthGuardProps, 'requiredRoles'>) {
  return (
    <AuthGuard requiredRoles={['FARMER']} {...props}>
      {children}
    </AuthGuard>
  );
}

export function SupplierGuard({ children, ...props }: Omit<AuthGuardProps, 'requiredRoles'>) {
  return (
    <AuthGuard requiredRoles={['SUPPLIER']} {...props}>
      {children}
    </AuthGuard>
  );
}

export function BuyerGuard({ children, ...props }: Omit<AuthGuardProps, 'requiredRoles'>) {
  return (
    <AuthGuard requiredRoles={['BUYER']} {...props}>
      {children}
    </AuthGuard>
  );
}

export function AdminGuard({ children, ...props }: Omit<AuthGuardProps, 'requiredRoles'>) {
  return (
    <AuthGuard requiredRoles={['FARMER', 'SUPPLIER', 'BUYER']} {...props}>
      {children}
    </AuthGuard>
  );
}
