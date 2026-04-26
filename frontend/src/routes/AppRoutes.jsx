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
import NotificationsPage from '../pages/NotificationsPage';
import MessagesPage from '../pages/MessagesPage';
import ProfilePage from '../pages/ProfilePage';
import OwnerDashboard from '../pages/owner/OwnerDashboard';
import MyParking from '../pages/owner/MyParking';
import AddParking from '../pages/owner/AddParking';

// Placeholder components

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
        <Route path="/owner/parking" element={<MyParking />} />
        <Route path="/owner/add-parking" element={<AddParking />} />
        <Route path="/parking/:id" element={<ParkingDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/bookings" element={<BookingDetailsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

    </div>
  );
};

export default AppRoutes;
