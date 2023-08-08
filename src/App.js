import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import './App.css';
import Sidebar from './components/Sidebar';
import PhongBan from './components/PhongBan';
import ToanBoNhanVien from './components/ToanBoNhanVien';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Content } from 'antd/es/layout/layout';

function App() {

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider style={{
          overflow: 'auto',
          height: '100vh',
        }}
        theme='light' width={'20vw'}
      >
        <Sidebar />
      </Sider>
      <Content style={{backgroundColor:'#ffff'}} >
        <Routes>
          <Route path='/pb' element={<PhongBan />} />
          <Route path='/tbnv' element={<ToanBoNhanVien />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
