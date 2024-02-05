import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CustomerPage from './pages/CustomerPage';
import ProgresPage from './pages/ProgresPage';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/Sidebar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full h-screen font-sans text-grey-900 flex">
                <Sidebar />
                <main className="flex-1">
                  {/* Use nested routes for CustomerPage */}
                  <Routes>
                    <Route path="/" element={<CustomerPage />} />
                    {/* Add more nested routes for CustomerPage if needed */}
                  </Routes>
                </main>
              </div>
            }
          />
          <Route path="/progres" element={<ProgresPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
