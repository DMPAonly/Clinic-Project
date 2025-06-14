import { Routes, Route } from 'react-router-dom';
import PreLoader from './components/PreLoader.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './pages/Home.jsx';
import Diseases from './pages/Diseases.jsx';
import DoctorsList from './pages/Doctors.jsx';
import ProductList from './pages/ProductList.jsx';
import ContactUs from './pages/ContactUs.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {

  return (
    <>
      <PreLoader />
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Diseases" element={<Diseases />} /> 
        <Route path="/Doctors" element={<DoctorsList />} />
        <Route path="/ProductList" element={<ProductList />} /> 
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
