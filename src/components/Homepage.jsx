import Layout from "antd/es/layout/layout";
import { Link, Route, Routes } from "react-router-dom";
import Layouts from "./Layouts";

export default function Homepage() {
    return (
        <Layout>
            <h1> Chào mừng bạn đến với Bình Nguyên Vô Tận !</h1>
            <p>Vui lòng đăng nhập để được trải nghiệm các chức năng của web nha</p>
            <Link to='/'>Login</Link>
            <Routes>
                <Route path='/' element={<Layouts />} />
            </Routes>
        </Layout>
    )

}