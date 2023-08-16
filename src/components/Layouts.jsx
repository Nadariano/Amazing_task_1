import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import {
    Routes,
    Route,
} from "react-router-dom";
import { Content } from 'antd/es/layout/layout';
import HeaderSidebar from './Headers/HeaderSidebar';
import Sidebar from './Sidebar/Sidebar';
import HopDongNhanVien from './Contents/Contracts/HopDongNhanVien';
import HopDongCuaToi from './Contents/Contracts/HopDongCuaToi'
import PhongBan from './Contents/Employees/PhongBan';
import ToanBoNhanVien from './Contents/Employees/ToanBoNhanVien';
import TaoNhanVienMoi from './Contents/Employees/TaoNhanVienMoi'

export default function Layouts() {
    return (
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
    )
}
