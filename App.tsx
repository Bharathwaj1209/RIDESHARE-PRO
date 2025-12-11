import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { AuthView } from './views/AuthView';
import { UserView } from './views/UserView';
import { DriverView } from './views/DriverView';
import { AdminView } from './views/AdminView';
import { UserRole } from './types';

const MainLayout: React.FC = () => {
  const { currentUser } = useStore();

  if (!currentUser) {
    return <AuthView />;
  }

  switch (currentUser.role) {
    case UserRole.DRIVER:
      return <DriverView />;
    case UserRole.ADMIN:
      return <AdminView />;
    case UserRole.USER:
    default:
      return <UserView />;
  }
};

const App: React.FC = () => {
  return (
    <StoreProvider>
      <MainLayout />
    </StoreProvider>
  );
};

export default App;