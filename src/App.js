import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import { Content } from 'antd/es/layout/layout';
import HeaderSidebar from './components/Headers/HeaderSidebar';
import Sidebar from './components/Sidebar/Sidebar';
import HopDongNhanVien from './components/Contents/Contracts/HopDongNhanVien';
import HopDongCuaToi from './components/Contents/Contracts/HopDongCuaToi'
import PhongBan from './components/Contents/Employees/PhongBan';
import ToanBoNhanVien from './components/Contents/Employees/ToanBoNhanVien';
import TaoNhanVienMoi from './components/Contents/Employees/TaoNhanVienMoi'

function App() {

  return (
    // <Homepage/>
    <Layout style={{ height: '100vh' }}>
      <HeaderSidebar />
      <Sider style={{
        overflow: 'auto',
        height: 'auto',
        position: 'relative',
        marginTop: '7vh'
      }}
        theme='light' width={'20vw'}
      >
        <Sidebar />
      </Sider>
      <Content style={{ backgroundColor: '#ffff', position: 'relative' }} >
        <Routes>
          <Route path='/pb' element={<PhongBan />} />
          <Route path='/tbnv' element={<ToanBoNhanVien />} />
          <Route path='/tnvm' element={<TaoNhanVienMoi />} />
          <Route path='/hdnv' element={<HopDongNhanVien />} />
          <Route path='/hdct' element={<HopDongCuaToi />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
