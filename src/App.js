// import logo from './logo.svg';
import './App.css';
import Compfive from './Component/Compfive';
import Compfour from './Component/Compfour';
import Compthird from './Component/Compthird';
import DataMoveRou from './Component/DataAxious/DataMoveRou';
import Datamovie from './Component/DataAxious/Datamovie';
import DataFlowEvent from './Component/Dataflowevent/DataFlowEvent';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Homeapi from './Component/Home/Homeapi';
import Innercon from './Component/Inner/Innercon';
import Moviesshow from './Component/Inner/Moviesshow';
import Login from './Component/Login';
import Searchfun from './Component/SearchFunctionlity/Searchfun';
import Compsix from './Component/Third/Compsix';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Home/>
<Homeapi/>
<Compthird/>
<Compfour/>
<Compfive/> */}
{/* <Compsix/> */}
{/* <Footer/> */}
{/* <Login/> */}
{/* <Innercon/>
<Moviesshow/> */}
{/* <Routes>
<Route path="/" element={<Datamovie/>} />
<Route path="data/:id" element={<DataMoveRou/>}/>
</Routes> */}


{/* <DataFlowEvent/> */}

<Searchfun/>

    </>
  );
}

export default App;
