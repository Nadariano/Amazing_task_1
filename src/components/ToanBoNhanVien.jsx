import { BankOutlined, CalendarOutlined, CreditCardOutlined, DownOutlined, EllipsisOutlined, GlobalOutlined, HomeOutlined, LogoutOutlined, MailOutlined, PhoneOutlined, PlusOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Col, Dropdown, Input, Row, Space, Table, message } from "antd";
import nhanVien from '../data/ListNhanVien';

export default function ToanBoNhanVien() {
    function setStatus(status) {
        if (status === 'active') return (<Avatar style={{ backgroundColor: 'rgb(39, 128, 245)' }} icon={<UserOutlined />} />);
        if (status === 'inactive') return (<Avatar style={{ backgroundColor: 'lightgrey' }} icon={<UserOutlined />} />);
    }
    function getRandomStatus() {
        const statuses = ['success', 'error', 'default', 'processing', 'warning'];
        const randomIndex = Math.floor(Math.random() * statuses.length);
        const status = statuses[randomIndex];
        return status;
    }
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
    function setGender(gt) {
        if (gt == 'Nam') {
            return (<Button disabled style={{ backgroundColor: 'lightblue', color: 'blue', width: '100%', textAlign: 'center' }}>Nam</Button>)
        } else if (gt == 'Nữ') return <Button disabled style={{ backgroundColor: 'pink', color: 'red', width: '100%', textAlign: 'center' }}>Nữ</Button>
    }
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const items = [
        {
            label: 'Toàn bộ phòng ban',
            key: '1',
        },
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    const columns = [
        {
            title: '',
            dataIndex: 'status',
            key: 'more',
            render: (status) => (<div>
                <Button style={{ border: 'none', backgroundColor: 'inherit' }}><EllipsisOutlined /></Button>
                <span className="td-content">{setStatus(status)}</span>
            </div>)
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: <><UnorderedListOutlined /><span className="th-content">Tên Nhân Viên</span></>,
            dataIndex: 'tnv',
            key: 'tnv',
            render: (tnv) => (
                <div>
                    <Avatar
                        style={{
                            backgroundColor: getRandomColor(),
                        }}
                    >{getFirstLetter(tnv)}</Avatar><span className="td-content">{tnv}</span>
                    {/* {tnv} */}
                </div>
            ),
        },
        {
            title: <><UnorderedListOutlined /><span className="th-content">Phòng ban</span></>,
            dataIndex: 'pb',
            key: 'pb',
            render: (pb) => (<Badge status={getRandomStatus()} text={<u>{pb}</u>} />)
        },
        {
            title: <><PhoneOutlined />
                <span className="th-content">Số điện thoại</span></>,
            dataIndex: 'sdt',
            key: 'sdt',
        },
        {
            title: <><UserOutlined /><span className="th-content">Giới tính</span></>,
            dataIndex: 'gt',
            key: 'gt',
            render: (gt) => (<div>{setGender(gt)}</div>)
        },
        {
            title: <><MailOutlined /><span className="th-content">Email</span></>,
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: <><BankOutlined /><span className="th-content">Ngân Hàng</span></>,
            dataIndex: 'nh',
            key: 'nh',
        },
        {
            title: <><CalendarOutlined /><span className="th-content">Ngày Sinh</span></>,
            dataIndex: 'ns',
            key: 'ns',
        },
        {
            title: <><HomeOutlined /><span className="th-content">Địa chỉ</span></>,
            dataIndex: 'dc',
            key: 'dc',
        },
        {
            title: <><GlobalOutlined /><span className="th-content">Quốc gia</span></>,
            dataIndex: 'qg',
            key: 'qg',
        },
        {
            title: <><CreditCardOutlined /><span className="th-content">TK Ngân Hàng</span></>,
            dataIndex: 'tknh',
            key: 'tknh',
        },
    ];

    return (
        <>
            <Card size="small" style={{ paddingLeft: '5%', fontSize: '150%', fontWeight: '400' }}>
                Danh Sách Nhân Viên
                <Button style={{ float: 'right', border: 'solid 2px blue' }}><LogoutOutlined /></Button>
            </Card>
            <div style={{ marginTop: '3%', marginLeft: '2%' }}>
                <Card style={{ marginBottom: '1%' }}>
                    <Row justify="start">
                        <Col span={8}>
                            {/* <Search style={{ width: 200 }} placeholder="Tìm kiếm" enterButton /> */}
                            <Input placeholder="Tìm kiếm" style={{ width: 200, border: 'none', boxShadow: '0 2px' }} />
                        </Col>

                        <Col span={10}>
                            <Dropdown menu={menuProps}>
                                <Button>
                                    <Space>
                                        Toàn bộ phòng ban
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                            <Button type="default" style={{ border: 'solid lightgreen', color: 'lightgreen', marginLeft: '3%' }}>Làm mới</Button>
                        </Col>

                        <Col span={6}>
                            <Button style={{ float: 'right' }} type='primary'><PlusOutlined />Thêm nhân viên</Button>
                        </Col>
                    </Row>

                </Card>
                <Card>
                    <Table dataSource={nhanVien} columns={columns}
                        pagination={true} scroll={{ x: 'max-content' }}
                        tableLayout="column.elipsis"
                        style={{ height: '70vh' }} />
                </Card>
            </div>
        </>
    )
}