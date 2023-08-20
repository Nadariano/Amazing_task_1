import { Button, Col, Dropdown, Form, Menu, Radio, Row, Steps, message, theme } from "antd";
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

    const onFinish = (values) => {
        console.log('Success:', values);
        next();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const createAccount = (
        // <Form
        //     onFinish={onFinish}
        //     onFinishFailed={onFinishFailed}
        //     autoComplete="off"
        // >
        <>
            <h3>Tên đăng nhập</h3>
            <Form.Item
                name="newUsername"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng không bỏ trống!',
                    },
                ]}>
                <Input placeholder="Nhập tên đăng nhập" style={{ padding: '1%' }} />
            </Form.Item>

            <h3>Email</h3>
            <Form.Item
                name="newEmail"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng không bỏ trống!',
                    },
                ]}>

                <Input placeholder="Nhập email" style={{ padding: '1%' }} />
            </Form.Item>

            <h3>Mật khẩu</h3>
            <Form.Item
                name="newPassword"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng không bỏ trống!',
                    },
                ]}>

                <Input placeholder="Nhập mật khẩu" style={{ padding: '1%' }} />
            </Form.Item>

            <h3>Xác nhận mật khẩu</h3>
            <Form.Item
                name="reEnteredNewPass"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng không bỏ trống!',
                    },
                ]}>

                <Input placeholder="Nhập lại mật khẩu" style={{ padding: '1%' }} />
            </Form.Item>
        </>

        // </Form>
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
                    <Form.Item
                        name="lastName"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}>
                        <Input placeholder="Nhập họ" style={{ padding: '2%' }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="firstName"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}>
                        <Input placeholder="Nhập tên" style={{ padding: '2%' }} />
                    </Form.Item>
                </Col>
            </Row>

            {/* Giới tính & Quốc tịch */}
            <Row>
                <Col span={12}><h3>Giới tính</h3></Col>
                <Col span={12}><h3>Quốc tịch</h3></Col>
            </Row>
            <Row>
                <Col span={12} style={{ paddingRight: '2%' }}>
                    <Form.Item
                        name="gender"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}>
                        <Radio.Group onChange={onChange} value={gender}>
                            <Radio value={'Nữ'}>Nữ</Radio>
                            <Radio value={'Nam'}>Nam</Radio>
                        </Radio.Group>
                    </Form.Item>

                </Col>
                <Col span={12}>
                    <Form.Item
                        name="nation"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}>
                        <Input placeholder="Nhập quốc tịch" style={{ padding: '2%' }} />
                    </Form.Item>
                </Col>
            </Row>

            {/* Sdt & Ngày sinh */}
            <Row>
                <Col span={12}><h3>Số điện thoại</h3></Col>
                <Col span={12}><h3>Ngày sinh</h3></Col>
            </Row>
            <Row>
                <Col span={12} style={{ paddingRight: '2%' }}>
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}>
                        <Input placeholder="Nhập số điện thoại" style={{ padding: '2%' }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="dateOfBirth"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}>
                        <Input type='date' style={{ padding: '2%', width: '50%' }} />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <h3>Địa chỉ</h3>
            </Row>
            <Form.Item
                name="location"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng không bỏ trống!',
                    },
                ]}>
                <Input placeholder="Nhập địa chỉ" style={{ padding: '1%' }} />
            </Form.Item>

            {/* Phòng ban & CCCD */}
            <Row>
                <Col span={12}><h3>Phòng ban</h3></Col>
                <Col span={12}><h3>CCCD|CMND</h3></Col>
            </Row>
            <Row>
                <Col span={12} style={{ paddingRight: '2%' }}>
                    <Form.Item
                        name="department"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}>
                        <Dropdown overlay={menu}>
                            <Button type="default" style={{ width: '100%', height: '100%', textAlign: 'left' }}>
                                {selected}<CaretDownOutlined style={{ float: 'right' }} />
                            </Button>
                        </Dropdown>
                    </Form.Item>

                </Col>
                <Col span={12}>
                    <Form.Item
                        name="CCCD"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}>
                        <Input placeholder="Nhập CCCD|CMND" style={{ padding: '2%' }} />
                    </Form.Item>
                </Col>
            </Row>

            {/* Ngân hàng */}
            <Row>
                <Col span={12}><h3>Tên tài khoản ngân hàng</h3></Col>
                <Col span={12}><h3>Số tài khoản ngân hàng</h3></Col>
            </Row>
            <Row>
                <Col span={12} style={{ paddingRight: '2%' }}>
                    <Form.Item
                        name="bankAccountName"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}>
                        <Input placeholder="Nhập tên tài khoản ngân hàng" style={{ padding: '2%' }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="bankAccountID"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}>
                        <Input placeholder="Nhập số tài khoản ngân hàng" style={{ padding: '2%' }} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <h3>Ngân hàng</h3>
            </Row>
            <Form.Item
                name="bankName"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng không bỏ trống!',
                    },
                ]}>
                <Input placeholder="Nhập ngân hàng" style={{ padding: '1%' }} />
            </Form.Item>
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
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Steps current={current} items={items} />
                    <div style={{ marginTop: '2%' }}>{steps[current].content}</div>
                    <Form.Item>
                        <div
                            style={{
                                marginTop: '5%'
                            }}
                        >
                            {current < steps.length - 1 && (
                                <Button type="primary" size="large" style={{ float: 'right' }}
                                    htmlType="submit"
                                // onClick={() => next()}
                                >
                                    Tiếp tục
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button type='primary' size="large" style={{ float: 'right', backgroundColor: 'lightgrey', color: 'grey' }} onClick={() => message.success('Processing complete!')}
                                    htmlType="submit">
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
                    </Form.Item>
                </Form>

            </Content>

        </>
    )
}