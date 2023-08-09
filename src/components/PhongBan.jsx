import { ArrowUpOutlined, EllipsisOutlined, LogoutOutlined, MailOutlined, MoreOutlined, NumberOutlined, PhoneOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Table } from "antd";
import phongBan from "../data/ListPhongBan";

export default function PhongBan() {

    function getRandomStatus() {
        const statuses = ['success', 'error', 'default', 'processing', 'warning'];
        const randomIndex = Math.floor(Math.random() * statuses.length);
        const status = statuses[randomIndex];
        return status;
    }
    function getFirstLetter(string) {
        const convertedJSON = JSON.stringify(string);
        const firstLet = convertedJSON.charAt(1);
        return firstLet;
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
            render: (ql) => (ql != '' && <div>
                <Avatar
                    style={{
                        backgroundColor: 'purple',
                    }}
                >{getFirstLetter(ql)}</Avatar><span className="th-content">{ql}</span>
            </div>)
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
                <Table dataSource={phongBan} columns={columns}
                    pagination={true} scroll={{ x: "80vw" }}
                    tableLayout="column.elipsis">
                </Table>
            </div>

        </>
    )
}