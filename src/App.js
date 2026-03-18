import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MpesaPayment from './components/MpesaPayment';
import GetProducts from './components/GetProducts';
import AddProducts from './components/AddProducts';


function App() {
 
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Sokogarden-Buy and sell online</h1>

      </header>

      <nav>
     <Link to="/signup" className='btn btn-dark m-2'>Sign Up</Link>
     <Link to="/signin"className='btn btn-dark m-2' >Sign In</Link>
     <Link to="/"className='btn btn-dark m-2' >Get Products</Link>
     <Link to="/addproducts" className='btn btn-dark m-2'>Add Products</Link>
     </nav>
     
     <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path='/signin'element={<SignIn/>}/>    
      <Route path='/'element={<GetProducts/>}/>
      <Route path='/addproducts' element={<AddProducts/>}/>
      <Route path='/mpesa' element={<MpesaPayment/>}/>
     </Routes>
     


    </div>
      </Router>
  ); 
 
}

export default App;
