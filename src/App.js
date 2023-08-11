import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Content } from 'antd/es/layout/layout';
import HeaderSidebar from './components/Headers/HeaderSidebar';
import Sidebar from './components/Sidebar/Sidebar';
import PhongBan from './components/Contents/PhongBan';
import ToanBoNhanVien from './components/Contents/ToanBoNhanVien';

function App() {

  return (
    <Layout style={{ height: '100vh' }}>
      <HeaderSidebar />
      <Sider style={{
        overflow: 'auto',
        height: '93%',
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
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
