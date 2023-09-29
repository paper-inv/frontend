import SignUp from "../pages/signUp/signUp";
import SignIn from "../pages/signIn/SignIn";
import Dashboard from "../pages/dashboard/Dashboard";
import Invoices from "../pages/invoices/Invoices";
import Profiles from "../pages/profiles/profiles";
import Customers from "../pages/profiles/customers";
import CreateInvoice from "../pages/invoices/createInvoice";

export const authRoutes = [
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
];

export const appRoutes = [
  {
    path: "/accounts/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/accounts/invoices",
    element: <Invoices />,
  },
  {
    path: "/accounts/invoices/new",
    element: <CreateInvoice />,
  },
  {
    path: "/accounts/profiles",
    element: <Profiles />,
  },
  {
    path: "/accounts/customers",
    element: <Customers />,
  },
];
