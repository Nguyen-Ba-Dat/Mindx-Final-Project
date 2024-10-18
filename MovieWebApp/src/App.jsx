import 'swiper/css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/footer/Footer';
import AppRoutes from './config/Routes';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <AppRoutes />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
