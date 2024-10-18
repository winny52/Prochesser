import { useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValueLoadable } from "recoil";
import "./App.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollTop";
import SignIn from "./classes/Signin";
import Dashboard from "./Dashboard/Dashboard";
import LearningPackages from "./classes/LearningPackages";
import Register from "./classes/Register";
import Header from "./Dashboard/Header";
import WelcomePage from "./classes/WelcomePage";
import Profile from "./Dashboard/Profile";
import {  PublicRoute, SubscriptionPrivateRoutes } from "./routes";
import { userState, fetchUserState, isLoadingState } from "./state/userState";
import Payment from "./payment";
import Spinner from "./components/spinner";
import TawkTo from "./components/Tawkto";
import SubscriptionPrompt from "./classes/Subscriptionpage";
import ForgotPassword from "./components/forgotpassword";
import ResetPassword from "./components/resetpassword";

function App() {
  const location = useLocation();
  const [user, setUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const isDashboardOrProfileRoute =
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/profile";
  const userLoadable = useRecoilValueLoadable(fetchUserState);

  useEffect(() => {
    setIsLoading(true);

    if (userLoadable.state === "hasValue") {
      setUser(userLoadable.contents);
      setIsLoading(false);
    } else if (userLoadable.state === "hasError") {
      setUser(null);
      setIsLoading(false);
    }
  }, [userLoadable, setUser, setIsLoading]);

  if (isLoading) {
      console.log(user);
    return <Spinner />;
  }
  return (
    <div className="w-screen">
      <TawkTo />
      {/* Conditionally render Navbar or Header based on the route */}
      {isDashboardOrProfileRoute ? <Header /> : <Navbar />}

      <ScrollToTop />
      <Routes>

        <Route path="/signin" element={<PublicRoute element={SignIn} />} />
        <Route path="/register" element={<PublicRoute element={Register} />} />
        
        <Route
          path="/forgotpassword"
          element={<PublicRoute element={ForgotPassword} />}
        />
        <Route
          path="/reset-password/:id"
          element={<PublicRoute element={ResetPassword} />}
        />
        <Route path="/" element={<LearningPackages />} />
        <Route path="/prompt/:type" element={<SubscriptionPrompt />} />
        {/* Protected Routes wrapped in Route */}
        <Route
          path="/dashboard"
          element={<SubscriptionPrivateRoutes element={Dashboard} />}
        />
        <Route
          path="/welcome"
          element={<SubscriptionPrivateRoutes element={WelcomePage} />}
        />
        <Route
          path="/profile"
          element={<SubscriptionPrivateRoutes element={Profile} />}
        />
        <Route
          path="/payment/:secret_token/:api_ref/:mode"
          element={<PublicRoute element={Payment} />}
        />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Router>
  );
}
