import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layouts from "./components/Layouts";
import Homepage from "./components/Homepage";
import PhongBan from './components/Contents/Employees/PhongBan';
import ToanBoNhanVien from './components/Contents/Employees/ToanBoNhanVien';
import TaoNhanVienMoi from './components/Contents/Employees/TaoNhanVienMoi';
import HopDongNhanVien from './components/Contents/Contracts/HopDongNhanVien';
import HopDongCuaToi from './components/Contents/Contracts/HopDongCuaToi';
function App() {

  return (
    <div>
      {/* <Homepage /> */}

      {/* <Routes>
        <Route path='/' element={<Layouts />} />
        <Route path='/pb' element={<PhongBan />} />
      </Routes> */}

      <Layouts />

    </div>
  );
}

export default App;
