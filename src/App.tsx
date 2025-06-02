import { Suspense, lazy } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy load page components
const Dashboard = lazy(() =>
  import("./pages/Dashboard").then((module) => ({ default: module.Dashboard }))
);

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-accent-orange font-mono">Loading...</div>
  </div>
);

export function App() {
  return (
    <div className="min-h-screen bg-primary-black flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Dashboard />
        </Suspense>
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
        toastClassName="font-sans border-accent-orange/60"
      />
    </div>
  );
}

export default App;