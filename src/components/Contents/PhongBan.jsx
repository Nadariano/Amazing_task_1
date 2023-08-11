import { ArrowUpOutlined, EllipsisOutlined, LogoutOutlined, MailOutlined, MoreOutlined, NumberOutlined, PhoneOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Table } from "antd";
import phongBan from "../../data/ListPhongBan";
import HeaderContent from "../Headers/HeaderContent";

export default function PhongBan() {

    function getRandomColor() {
        const colors = ['black', 'brown', 'red', 'orange', 'goldenrod', 'green', 'blue', 'purple', 'pink'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        const color = colors[randomIndex];
        return color;
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
            render: (more) => (<Button style={{ border: 'none', backgroundColor: 'inherit' }}><EllipsisOutlined /></Button>),
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
            render: (tpb) => (<Badge color={tpb[1]} text={<u>{tpb[0]}</u>} />)
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <UserOutlined className="circleIcon" />
                    <span className="th-content">Quản lý</span><Button style={{ border: 'none', backgroundColor: 'inherit' }}><ArrowUpOutlined /></Button>
                    <div style={{ width: '100%' }}><Button style={{ border: 'none', backgroundColor: 'inherit', float: 'right' }}><MoreOutlined /></Button></div>
                </div>
            ),
            dataIndex: 'ql',
            key: 'ql',
            render: (ql) => (ql != '' && <div>
                <Avatar
                    style={{
                        backgroundColor: getRandomColor(),
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
            <HeaderContent title='Danh Sách Phòng Ban' />
            <div style={{ marginTop: '3%', marginLeft: '2%', marginRight: '2%' }} >
                <Card style={{ marginBottom: '1%' }}>
                    <Button style={{ float: 'right' }} type='primary'><PlusOutlined />Thêm phòng ban</Button>
                </Card>
                <Table dataSource={phongBan} columns={columns}
                    pagination={true} scroll={{ x: "max-content" }}
                    size='middle'
                    tableLayout="column.elipsis"
                    style={{ height: '70vh', boxShadow: '1px 1px 2px grey' }} />
            </div>
        </>
    )
}