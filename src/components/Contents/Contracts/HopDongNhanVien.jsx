import { AlignLeftOutlined, CalendarOutlined, EllipsisOutlined, NumberOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Input, Row, Table, message } from "antd";
import { Content } from "antd/es/layout/layout";
import hopDong from '../../../data/ListHopDong';
import HeaderContent from "../../Headers/HeaderContent";

export default function HopDongNhanVien() {
    function getFirstLetter(string) {
        const convertedJSON = JSON.stringify(string);
        const firstLet = convertedJSON.charAt(1);
        return firstLet;
    }
    function getRandomColor() {
        const colors = ['black', 'brown', 'red', 'orange', 'goldenrod', 'green', 'blue', 'purple', 'pink'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        const color = colors[randomIndex];
        return color;
    }
    function setContractStatus(tt) {
        if (tt == 'Hiệu Lực') {
            return (<Button disabled style={{ backgroundColor: 'rgb(234,230,254)', color: 'rgb(139,130,194)', width: '100%', textAlign: 'center' }}>{tt}</Button>)
        };
    }
    function setSalaryType(ll) {
        if (ll == 'Gross To Net') {
            return (<Button disabled style={{ backgroundColor: 'rgb(211,245,254)', color: 'rgb(72,153,190)', width: '100%', textAlign: 'center' }}>{ll}</Button>)
        };
    }
    function setNote(gc) {
        if (gc == '') return (<>Chưa có ghi chú</>)
        else return (<>{gc}</>)
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
            render: (more) => (<Button style={{ border: 'none', backgroundColor: 'inherit' }}><EllipsisOutlined /></Button>),
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: <div style={{ display: 'flex', alignItems: 'center' }}>
                <UserOutlined className="circleIcon" />
                <span className="th-content">Tạo bởi</span>
            </div>,
            dataIndex: 'tb',
            key: 'tb',
            render: (tb) => (
                <>
                    <Avatar
                        style={{
                            backgroundColor: getRandomColor(),
                        }}
                    >{getFirstLetter(tb)}</Avatar><span className="td-content">{tb}</span>
                    {/* {tnv} */}
                </>
            ),
        },
        {
            title: <><UnorderedListOutlined /><span className="th-content">Loại hợp đồng</span></>,
            dataIndex: 'lhd',
            key: 'lhd',
            render: (lhd) => (<Badge color={getRandomColor()} text={<u>{lhd}</u>} />)
        },
        {
            title: <><UnorderedListOutlined /><span className="th-content">Trạng thái</span></>,
            dataIndex: 'tt',
            key: 'tt',
            render: (tt) => (<div>{setContractStatus(tt)}</div>)
        },
        {
            title: <><UnorderedListOutlined /><span className="th-content">Loại lương</span></>,
            dataIndex: 'll',
            key: 'll',
            render: (ll) => (<div>{setSalaryType(ll)}</div>)
        },
        {
            title: <>
                <NumberOutlined />
                <span className="th-content">Người phụ thuộc</span>
            </>,
            dataIndex: 'npt',
            key: 'npt',
        },
        {
            title: <><CalendarOutlined /><span className="th-content">Ngày bắt đầu</span></>,
            dataIndex: 'nbd',
            key: 'nbd',
        },
        {
            title: <><CalendarOutlined /><span className="th-content">Ngày kết thúc</span></>,
            dataIndex: 'nkt',
            key: 'nkt',
        },
        {
            title: <>
                <NumberOutlined />
                <span className="th-content">Lương thỏa thuận</span>
            </>,
            dataIndex: 'ltt',
            key: 'ltt',
        },
        {
            title: <>
                <NumberOutlined />
                <span className="th-content">Lương đóng thuế</span>
            </>,
            dataIndex: 'ldt',
            key: 'ldt',
        },
        {
            title: <>
                <NumberOutlined />
                <span className="th-content">Tổng phụ cấp</span>
            </>,
            dataIndex: 'tpc',
            key: 'tpc',
        },
        {
            title: <>
                <AlignLeftOutlined />
                <span className="th-content">Ghi chú</span>
            </>,
            dataIndex: 'gc',
            key: 'gc',
            render: (gc) => (
                setNote(gc)
            )
        },
        {
            title: <><CalendarOutlined /><span className="th-content">Thời gian tạo</span></>,
            dataIndex: 'tgt',
            key: 'tgt',
        },
        {
            title: <><CalendarOutlined /><span className="th-content">Thời gian thay đổi</span></>,
            dataIndex: 'tgtd',
            key: 'tgtd',
        },
    ];

    return (
        <>
            <HeaderContent title='Hợp Đồng Nhân Viên' />
            <Content className="content">
                <Card style={{ marginBottom: '1%' }}>
                    <Row justify="start">
                        <Input placeholder="Tìm kiếm" style={{ width: 200, border: 'none', boxShadow: '0 2px' }} />
                    </Row>

                </Card>
                <Table dataSource={hopDong} columns={columns}
                    pagination={true} scroll={{ x: 'max-content' }}
                    tableLayout="column.elipsis"
                    style={{ height: '70vh', boxShadow: '1px 1px 2px grey' }} />
            </Content>
        </>
    )
}