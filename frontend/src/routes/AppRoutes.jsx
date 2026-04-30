import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landing/LandingPage';
import HostPage from '../pages/landing/HostPage';
import HowItWorksPage from '../pages/landing/HowItWorksPage';
import PricingPage from '../pages/landing/PricingPage';
import SelectionPage from '../pages/auth/SelectionPage';
import DriverSignupPage from '../pages/auth/DriverSignupPage';
import OwnerSignupPage from '../pages/auth/OwnerSignupPage';
import LoginPage from '../pages/auth/LoginPage';
import DriverDashboard from '../pages/driver/DriverDashboard';
import ParkingDetailsPage from '../pages/driver/ParkingDetailsPage';
import CheckoutPage from '../pages/driver/CheckoutPage';
import BookingDetailsPage from '../pages/driver/BookingDetailsPage';
import ReportsPage from '../pages/common/ReportsPage';
import NotificationsPage from '../pages/common/NotificationsPage';
import MessagesPage from '../pages/common/MessagesPage';
import ProfilePage from '../pages/common/ProfilePage';
import OwnerDashboard from '../pages/owner/OwnerDashboard';
import MyParking from '../pages/owner/MyParking';
import AddParking from '../pages/owner/AddParking';
import OwnerBookings from '../pages/owner/OwnerBookings';

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
        <Route path="/owner/bookings" element={<OwnerBookings />} />
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
