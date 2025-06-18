import { Routes, Route, useLocation } from 'react-router-dom';
import PreLoader from './components/PreLoader.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './pages/Home.jsx';
import Diseases from './pages/Diseases.jsx';
import DoctorsList from './pages/Doctors.jsx';
import ProductList from './pages/ProductList.jsx';
import ContactUs from './pages/ContactUs.jsx';
import NotFound from './pages/NotFound.jsx';
import PatientForm from './pages/PatientForm.jsx';
import ConfirmationPage from './pages/ConfirmationPage.jsx';
import AdminPanel from './pages/AdminPanel.jsx';

function App() {
  const location = useLocation();

  return (
    <>
      <PreLoader />
      {location.pathname === "/Patient_Form" || location.pathname === "/Confirmation_page" ? null : <Header />}
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Diseases" element={<Diseases />} /> 
        <Route path="/Doctors" element={<DoctorsList />} />
        <Route path="/ProductList" element={<ProductList />} /> 
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Patient_Form" element={<PatientForm />} />
        <Route path="/Confirmation_page" element={<ConfirmationPage />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
      </Routes>
      {location.pathname === "/Patient_Form" || location.pathname === "/Confirmation_page" ? null : <Footer />}
    </>
  )
}

export default App
