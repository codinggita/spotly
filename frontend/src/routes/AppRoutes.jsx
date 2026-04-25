import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import HostPage from '../pages/HostPage';
import HowItWorksPage from '../pages/HowItWorksPage';
import PricingPage from '../pages/PricingPage';
import SelectionPage from '../pages/SelectionPage';
import DriverSignupPage from '../pages/DriverSignupPage';
import OwnerSignupPage from '../pages/OwnerSignupPage';
import LoginPage from '../pages/LoginPage';
import DriverDashboard from '../pages/DriverDashboard';
import ParkingDetailsPage from '../pages/ParkingDetailsPage';
import CheckoutPage from '../pages/CheckoutPage';
import BookingDetailsPage from '../pages/BookingDetailsPage';
import ReportsPage from '../pages/ReportsPage';


// Placeholder components
const OwnerDashboard = () => <div className="p-10 text-center">Owner Dashboard</div>;

const AppRoutes = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/host" element={<HostPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/register" element={<SelectionPage />} />
        <Route path="/register/driver" element={<DriverSignupPage />} />
        <Route path="/register/owner" element={<OwnerSignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/driver" element={<DriverDashboard />} />
        <Route path="/owner" element={<OwnerDashboard />} />
        <Route path="/parking/:id" element={<ParkingDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/bookings" element={<BookingDetailsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>

    </div>
  );
};

export default AppRoutes;
