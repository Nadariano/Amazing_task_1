import { ArrowUpOutlined, EllipsisOutlined, LogoutOutlined, MailOutlined, MoreOutlined, NumberOutlined, PhoneOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Table } from "antd";
import phongBan from "../shared/ListPhongBan";

export default function PhongBan() {

    function getRandomStatus() {
        const statuses = ['success', 'error', 'default', 'processing', 'warning'];
        const randomIndex = Math.floor(Math.random() * statuses.length);
        const status = statuses[randomIndex];
        return status;
    }

    const columns = [
        {
            title: '',
            dataIndex: 'more',
            key: 'more',
            render: (more) => (<EllipsisOutlined />),
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <UserOutlined className="circleIcon" />
                    <span className="th-content">Tên phòng ban</span>
                </div>
            ),
            dataIndex: 'tpb',
            key: 'tpb',
            render: (tpb) => (<Badge status={getRandomStatus()} text={<u>{tpb}</u>} />)
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <UserOutlined className="circleIcon" />
                    <span className="th-content">Quản lý</span><Button style={{ border: 'none' }}><ArrowUpOutlined /></Button>
                    <MoreOutlined style={{ marginLeft: '55%' }} />
                </div>
            ),
            dataIndex: 'ql',
            key: 'ql',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <NumberOutlined />
                    <span className="th-content">Số nhân viên</span>
                </div>
            ),
            dataIndex: 'snv',
            key: 'snv',
        },
        {
            title: <div><MailOutlined /><span className="th-content">Email quản lý</span></div>,
            dataIndex: 'eql',
            key: 'eql',
        },
        {
            title:
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneOutlined />
                    <span className="th-content">Số điện thoại</span>
                </div>,
            dataIndex: 'sdt',
            key: 'sdt',
        },
    ];

    // const dataSource = phongBan;
    const dataSource = [
        {
            id: 1,
            tpb: 'Sales',
            ql: <div>
                <Avatar
                    style={{
                        backgroundColor: 'purple',
                    }}
                >N</Avatar>Nguyen Van Quan Ly
            </div>,
            snv: 3,
            eql: 'hrstaff@test.com',
            sdt: 'string',
        },
        {
            id: 2,
            tpb: 'Marketing',
            ql: '',
            snv: 0,
            eql: '',
            sdt: '',
        },
        {
            id: 3,
            tpb: 'Finance',
            ql: '',
            snv: 0,
            eql: '',
            sdt: '',
        },
        {
            id: 4,
            tpb: 'Human Resource',
            ql: '',
            snv: 0,
            eql: '',
            sdt: '',
        },
        {
            id: 5,
            tpb: 'Operations',
            ql: '',
            snv: 0,
            eql: '',
            sdt: '',
        },
        {
            id: 6,
            tpb: 'Engineering',
            ql: '',
            snv: 0,
            eql: '',
            sdt: '',
        },
        {
            id: 7,
            tpb: 'Customer Support',
            ql: '',
            snv: 0,
            eql: '',
            sdt: '',
        },
        {
            id: 8,
            tpb: 'Research & Development',
            ql: '',
            snv: 0,
            eql: '',
            sdt: '',
        },
        {
            id: 9,
            tpb: 'Quality Assurance',
            ql: '',
            snv: 0,
            eql: '',
            sdt: '',
        },
        {
            id: 10,
            tpb: 'Design',
            ql: '',
            snv: 0,
            eql: '',
            sdt: '',
        },
        {
            id: 11,
            tpb: 'Chăm sóc khách hàng',
            ql: '',
            snv: 0,
            eql: '',
            sdt: '',
        },
    ];

    return (
        <>
            <Card size="small" style={{ paddingLeft: '5%', fontSize: '150%' }}>
                Danh Sách Phòng Ban
                <Button style={{ float: 'right' }}><LogoutOutlined /></Button>
            </Card>
            <div style={{ marginLeft: '2%' }}>
                <Card style={{ marginTop: '2%' }}>
                    <Button style={{ marginTop: '2%', float: 'right' }} type='primary'><PlusOutlined />Thêm phòng ban</Button>
                </Card>
                <Table dataSource={dataSource} columns={columns}
                    pagination={false}
                    tableLayout="column.elipsis">
                </Table>
            </div>

        </>
    )
}