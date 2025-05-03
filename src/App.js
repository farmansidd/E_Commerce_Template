import './App.css';
import './assets/Next.css';
import Layout from './Components/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Heropage from './Components/HeroSection/Heropage';
import MidSec from './Components/HeroSection/MidSec';
import HeroLast from './Components/HeroSection/HeroLast';
import ProductsPage from './Components/Product/ProductsPage';
import AboutUs from './Components/AboutUS/AboutUs';
import Contact from './Components/Contact';
import MensSection from './Components/Product/MensSection';
import WomenSection from './Components/Product/WomenSection';
import KidsSection from './Components/Product/KidSection';
import { KidsContextProvider } from './Context/KidsContext';
import Cart from './Components/AddToCart/Cart'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <><Heropage /><MidSec /><HeroLast /></>,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/men",
        element: <MensSection />,
      },
      {
        path: "products/women",
        element: <WomenSection />,
      },
      {
        path: "products/kids",
        element: (
          <KidsContextProvider>
            <KidsSection />
          </KidsContextProvider>
        ),
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
