import React from 'react';

import { AuthProvider } from './auth';
import { SupplierProvider } from './suppliers';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <SupplierProvider>{children}</SupplierProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
