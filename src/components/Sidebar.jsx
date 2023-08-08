import { ClockCircleOutlined, DollarOutlined, HomeOutlined, MailOutlined, PayCircleOutlined, SolutionOutlined, TeamOutlined, UserAddOutlined } from "@ant-design/icons";
import { Avatar, Card, Menu } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
export default function Sidebar() {
    const items = [
        getItem('Dashboard', <HomeOutlined />, 'dashboard',),
        getItem(<strong>NHÂN VIÊN</strong>, '', 'nv', [
            getItem(<Link to='/pb'>Phòng Ban</Link>, <TeamOutlined />, 'pb'),
            getItem('Phòng Ban Của Tôi', <TeamOutlined />, 'pbct'),
            getItem(<Link to='/tbnv'>Toàn Bộ Nhân Viên</Link>, <TeamOutlined />, 'tbnv'),
            getItem('Tạo Nhân Viên Mới', <UserAddOutlined />, 'tnvm'),
        ]),
        getItem(<strong>TĂNG CA</strong>, '', 'tc', [
            getItem('Đơn Tăng Ca Nhân Viên', <ClockCircleOutlined />, 'dtcnv'),
            getItem('Đơn Tăng Ca Của Tôi', <ClockCircleOutlined />, 'dtcct'),
        ]),
        getItem(<strong>NGHỈ PHÉP</strong>, '', 'np', [
            getItem('Đơn Xin Nghỉ Phép Nhân Viên', <MailOutlined />, 'dxnpnv'),
            getItem('Đơn Xin Nghỉ Phép Của Tôi', <MailOutlined />, 'dxnpct'),
        ]),
        getItem(<strong>ĐƠN KHÁC</strong>, '', 'dk', [
            getItem('Danh Sách Đơn Khác', <MailOutlined />, 'dsdk'),
            getItem('Đơn Khác Của Tôi', <MailOutlined />, 'dkct'),
        ]),
        getItem(<strong>QUẢN LÍ LƯƠNG</strong>, '', 'qll', [
            getItem('Lương Nhân Viên', <DollarOutlined />, 'lnv'),
            getItem('Lương Của Tôi', <DollarOutlined />, 'lct'),
        ]),
        getItem(<strong>HỢP ĐỒNG</strong>, '', 'hd', [
            getItem('Hợp Đồng Nhân Viên', <SolutionOutlined />, 'hdnv'),
            getItem('Hợp Đồng Của Tôi', <SolutionOutlined />, 'hdct'),
        ]),
        getItem(<strong>TUYỂN DỤNG</strong>, '', 'td', [
            getItem('Danh sách ứng viên', <TeamOutlined />, 'dsuv'),
        ]),
    ];
    function getItem(label, icon, key, children) {
        return {
            label,
            icon,
            key,
            children,
        };
    }
    return (
        <>
            <Card
            >
                <Meta
                    avatar={<Avatar shape="square" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
                    title="Nguyen Van Quan Ly"
                />
            </Card>

            <Menu height="300" overflow="hidden"
                theme="light" mode="inline" items={items} />

        </>
    )
}