import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import HostPage from '../pages/HostPage';
import HowItWorksPage from '../pages/HowItWorksPage';
import PricingPage from '../pages/PricingPage';

// Placeholder components
const Login = () => <div className="p-10 text-center">Login Page</div>;
const DriverDashboard = () => <div className="p-10 text-center">Driver Dashboard</div>;
const OwnerDashboard = () => <div className="p-10 text-center">Owner Dashboard</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/host" element={<HostPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/driver" element={<DriverDashboard />} />
      <Route path="/owner" element={<OwnerDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
