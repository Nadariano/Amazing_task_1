import { ClockCircleOutlined, DollarOutlined, HomeOutlined, MailOutlined, SolutionOutlined, TeamOutlined, UserAddOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
    const items = [
        getItem('Dashboard', <HomeOutlined />, 'dashboard',),
        getItem(<strong>NHÂN VIÊN</strong>, '', 'nv', [
            getItem(<Link to='/pb'>Phòng Ban</Link>, <TeamOutlined />, 'pb'),
            getItem('Phòng Ban Của Tôi', <TeamOutlined />, 'pbct'),
            getItem(<Link to='/tbnv'>Toàn Bộ Nhân Viên</Link>, <TeamOutlined />, 'tbnv'),
            getItem(<Link to='/tnvm'>Tạo Nhân Viên Mới</Link>, <UserAddOutlined />, 'tnvm'),
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
            getItem(<Link to='/hdnv'>Hợp Đồng Nhân Viên</Link>, <SolutionOutlined />, 'hdnv'),
            getItem(<Link to='/hdct'>Hợp Đồng Của Tôi</Link>, <SolutionOutlined />, 'hdct'),
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
    const rootSubmenuKeys = ['dashboard', 'nv', 'tc', 'np', 'dk', 'qll', 'hd', 'td']
    const [openKeys, setOpenKeys] = useState(rootSubmenuKeys);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const initialSelectedKey = sessionStorage.getItem("selectedKey") || "dashboard";
    const [selectedKey, setSelectedKey] = useState(initialSelectedKey);
    const handleSelect = ({ key }) => {
        // Set the selected key in state
        setSelectedKey(key);
        // Store the selected key in sessionStorage
        sessionStorage.setItem("selectedKey", key);
    };

    // Register a listener for the storage event
    useEffect(() => {
        const handleStorage = (event) => {
            // Check if the event key matches the sessionStorage key
            if (event.key === "selectedKey") {
                // Get the updated selected key from sessionStorage
                const updatedSelectedKey = sessionStorage.getItem("selectedKey");
                // Set the selected key in state
                setSelectedKey(updatedSelectedKey);
            }
        };
        // Add the listener to the window object
        window.addEventListener("storage", handleStorage);
        // Remove the listener when the component unmounts
        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, []);


    return (
        <>
            <Menu height="300" overflow="hidden"
                theme="light" mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                selectedKeys={[selectedKey]}
                onSelect={handleSelect}
                items={items}
            />

        </>
    )
}