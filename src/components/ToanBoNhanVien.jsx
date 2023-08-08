import { BankOutlined, CalendarOutlined, CreditCardOutlined, DownOutlined, EllipsisOutlined, GlobalOutlined, HomeOutlined, LogoutOutlined, MailOutlined, PhoneOutlined, PlusOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Col, Dropdown, Input, Row, Space, Table, message } from "antd";

export default function ToanBoNhanVien() {
    function getRandomBgColor() {
        const colors = ['rgb(39, 128, 245)', 'lightgrey'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        const color = colors[randomIndex];
        return color;
    }
    function getRandomStatus() {
        const statuses = ['success', 'error', 'default', 'processing', 'warning'];
        const randomIndex = Math.floor(Math.random() * statuses.length);
        const status = statuses[randomIndex];
        return status;
    }
    function getFirstLetter(string) {
        const firstLet = string.charAt(0);
        return firstLet;
    }
    function setGender(gt){
        if(gt == 'Nam'){
            return (<Button disabled style={{ backgroundColor: 'lightblue', color:'blue' }}>Nam</Button>)
        } else if(gt == 'Nữ')  return <Button disabled style={{ backgroundColor: 'pink', color:'red' }}>Nữ</Button>
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
            dataIndex: 'more',
            key: 'more',
            render: (more) => (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <EllipsisOutlined />
                <Avatar style={{ backgroundColor: getRandomBgColor() }} icon={<UserOutlined />} />
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* <Avatar
                    style={{
                        backgroundColor: 'purple',
                    }}
                >{getFirstLetter({tnv})}</Avatar>{tnv} */}
                {tnv}
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
            render: (gt) => (<>{setGender(gt)}</>)
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

    const dataSource = [
        {
            id: 4,
            tnv: <div><Avatar
                style={{
                    backgroundColor: 'rgb(140, 9, 248)',
                }}
            >s</Avatar><span className="td-content">string string</span></div>,
            pb: 'Sales',
            sdt: 'string',
            gt: 'Nam',
            email: 'test1@gmail.com',
            nh: 'string',
            ns: '4 tháng 8 năm 2023',
            dc: 'string',
            qg: 'string',
            tknh: 'string',
        },
        {
            id: 3,
            tnv: <div><Avatar
                style={{
                    backgroundColor: 'rgb(140, 9, 248)',
                }}
            >{getFirstLetter('Nguyen Van Nhan Vien').toUpperCase()}</Avatar><span className="td-content">Nguyen Van Nhan Vien</span></div>,
            pb: 'Chăm sóc khách hàng',
            sdt: 'string',
            gt: 'Nam',
            email: 'staff@test.com',
            nh: 'string',
            ns: '6 tháng 7 năm 2005',
            dc: 'string',
            qg: 'string',
            tknh: 'string',
        },
        {
            id: 2,
            tnv: <div><Avatar
                style={{
                    backgroundColor: 'rgb(140, 9, 248)',
                }}
            >N</Avatar><span className="td-content">Nguyen Van Quan Ly</span></div>,
            pb: 'Sales',
            sdt: 'string',
            gt: 'Nam',
            email: 'hrstaff@test.com',
            nh: 'string',
            ns: '6 tháng 7 năm 2003',
            dc: 'string',
            qg: 'string',
            tknh: 'string',
        },
        {
            id: 1,
            tnv: <div><Avatar
                style={{
                    backgroundColor: 'rgb(140, 9, 248)',
                }}
            >V</Avatar><span className="td-content">Van Nguyen</span></div>,
            pb: 'Sales',
            sdt: 'string',
            gt: 'Nữ',
            email: 'hrmanager@test.com',
            nh: 'string',
            ns: '6 tháng 7 năm 2023',
            dc: 'string',
            qg: 'string',
            tknh: 'string',
        },
    ];
    return (
        <>
            <Card size="small" style={{ paddingLeft: '5%', fontSize: '150%' }}>
                Danh Sách Nhân Viên
                <Button style={{ float: 'right' }}><LogoutOutlined /></Button>
            </Card>
            <div style={{ marginTop: '3%', marginLeft: '2%' }}>
                <Card>
                    <Row justify="start">
                        <Col span={8}>
                            {/* <Search style={{ width: 200 }} placeholder="Tìm kiếm" enterButton /> */}
                            <Input placeholder="Tìm kiếm" style={{width: 200, border: 'none', boxShadow:'0 2px'}} />
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
                            <Button type="default" style={{ border: 'solid lightgreen', color: 'lightgreen' }}>Làm mới</Button>
                        </Col>

                        <Col span={6}>
                            <Button style={{ float: 'right' }} type='primary'><PlusOutlined />Thêm nhân viên</Button>
                        </Col>
                    </Row>

                </Card>

                <Table dataSource={dataSource} columns={columns}
                    pagination={false} scroll={{ x: '120vw', y: '80vh' }}
                    tableLayout="column.elipsis"/>
            </div>
        </>
    )
}