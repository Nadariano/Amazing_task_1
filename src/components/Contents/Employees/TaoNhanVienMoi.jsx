import { Button, Col, Dropdown, Menu, Radio, Row, Steps, message, theme } from "antd";
import Input from "antd/es/input/Input";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import phongBan from "../../../data/ListPhongBan";
import HeaderContent from "../../Headers/HeaderContent";
import { CaretDownOutlined } from "@ant-design/icons";
export default function TaoNhanVienMoi() {
    const [gender, setGender] = useState('');
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setGender(e.target.value);
    };
    const menu = (
        <Menu>
            {phongBan.map((item) => (
                <Menu.Item key={item.id} onClick={() => handleSelect(item.tpb[0])}>
                    {item.tpb[0]}
                </Menu.Item>
            ))}
        </Menu>
    );
    const [selected, setSelected] = useState('Chọn phòng ban');

    const handleSelect = (name) => {
        setSelected(name);
    };

    const createAccount = (
        <>
            <Row>
                <h3>Tên đăng nhập</h3>
            </Row>
            <Row>
                <Input placeholder="Nhập tên đăng nhập" style={{ padding: '1%' }} />
            </Row>

            <Row>
                <h3>Email</h3>
            </Row>
            <Row>
                <Input placeholder="Nhập email" style={{ padding: '1%' }} />
            </Row>

            <Row>
                <h3>Mật khẩu</h3>
            </Row>
            <Row>
                <Input placeholder="Nhập mật khẩu" style={{ padding: '1%' }} />
            </Row>

            <Row>
                <h3>Xác nhận mật khẩu</h3>
            </Row>
            <Row>
                <Input placeholder="Nhập lại mật khẩu" style={{ padding: '1%' }} />
            </Row></>
    );
    const addInfo = (
        <>
            {/* Họ và tên */}
            <Row>
                <Col span={12}><h3>Họ</h3></Col>
                <Col span={12}><h3>Tên</h3></Col>
            </Row>
            <Row>
                <Col span={12} style={{ paddingRight: '2%' }}>
                    <Input placeholder="Nhập họ" style={{ padding: '2%' }} />
                </Col>
                <Col span={12}>
                    <Input placeholder="Nhập tên" style={{ padding: '2%' }} />
                </Col>
            </Row>

            {/* Giới tính & Quốc tịch */}
            <Row>
                <Col span={12}><h3>Giới tính</h3></Col>
                <Col span={12}><h3>Quốc tịch</h3></Col>
            </Row>
            <Row>
                <Col span={12} style={{ paddingRight: '2%' }}>
                    <Radio.Group onChange={onChange} value={gender}>
                        <Radio value={'Nữ'}>Nữ</Radio>
                        <Radio value={'Nan'}>Nam</Radio>
                    </Radio.Group>
                </Col>
                <Col span={12}>
                    <Input placeholder="Nhập quốc tịch" style={{ padding: '2%' }} />
                </Col>
            </Row>

            {/* Sdt & Ngày sinh */}
            <Row>
                <Col span={12}><h3>Số điện thoại</h3></Col>
                <Col span={12}><h3>Ngày sinh</h3></Col>
            </Row>
            <Row>
                <Col span={12} style={{ paddingRight: '2%' }}>
                    <Input placeholder="Nhập số điện thoại" style={{ padding: '2%' }} />
                </Col>
                <Col span={12}>
                    <Input type='date' style={{ padding: '2%', width: '50%' }} />
                </Col>
            </Row>

            <Row>
                <h3>Địa chỉ</h3>
            </Row>
            <Row>
                <Input placeholder="Nhập địa chỉ" style={{ padding: '1%' }} />
            </Row>

            {/* Phòng ban & CCCD */}
            <Row>
                <Col span={12}><h3>Phòng ban</h3></Col>
                <Col span={12}><h3>CCCD|CMND</h3></Col>
            </Row>
            <Row>
                <Col span={12} style={{ paddingRight: '2%' }}>
                    <Dropdown overlay={menu}>
                        <Button type="default" style={{ width: '100%', height: '100%', textAlign: 'left' }}>
                            {selected}<CaretDownOutlined style={{ float: 'right' }} />
                        </Button>
                    </Dropdown>
                </Col>
                <Col span={12}>
                    <Input placeholder="Nhập CCCD|CMND" style={{ padding: '2%' }} />
                </Col>
            </Row>

            {/* Ngân hàng */}
            <Row>
                <Col span={12}><h3>Tên tài khoản ngân hàng</h3></Col>
                <Col span={12}><h3>Số tài khoản ngân hàng</h3></Col>
            </Row>
            <Row>
                <Col span={12} style={{ paddingRight: '2%' }}>
                    <Input placeholder="Nhập tên tài khoản ngân hàng" style={{ padding: '2%' }} />
                </Col>
                <Col span={12}>
                    <Input placeholder="Nhập số tài khoản ngân hàng" style={{ padding: '2%' }} />
                </Col>
            </Row>
            <Row>
                <h3>Ngân hàng</h3>
            </Row>
            <Row>
                <Input placeholder="Nhập ngân hàng" style={{ padding: '1%' }} />
            </Row>
        </>
    );
    const steps = [
        {
            title: 'Tạo tài khoản',
            content: createAccount,
        },
        {
            title: 'Thông tin cá nhân',
            content: addInfo,
        },
    ];

    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return (
        <>

            <HeaderContent title='Thêm Nhân Viên' />

            <Content style={{ margin: '3% 10%' }}>
                <Steps current={current} items={items} />
                <div style={{ marginTop: '2%' }}>{steps[current].content}</div>
                <div
                    style={{
                        marginTop: '5%'
                    }}
                >
                    {current < steps.length - 1 && (
                        <Button type="primary" size="large" style={{ float: 'right' }} onClick={() => next()}>
                            Tiếp tục
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type='primary' size="large" style={{ float: 'right', backgroundColor: 'lightgrey', color: 'grey' }} onClick={() => message.success('Processing complete!')}>
                            Hoàn thành
                        </Button>
                    )}
                    {current > 0 && (
                        <Button type='default' size="large" style={{ border: '1px solid blue', color: 'blue', float: 'left' }}
                            onClick={() => prev()}
                        >
                            Quay về
                        </Button>
                    )}
                </div>

            </Content>

        </>
    )
}