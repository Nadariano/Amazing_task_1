import { Button, Col, Form, Radio, Row, Select, Steps, message } from "antd";
import Input from "antd/es/input/Input";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import phongBan from "../../../data/ListPhongBan";
import HeaderContent from "../../Headers/HeaderContent";

import { useDispatch } from "react-redux";
import { addEmp } from "../../../redux/Employees";

export default function TaoNhanVienMoi() {
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const [cccd, setCCCD] = useState('');
    const [bankAccountName, setBankAccountName] = useState('');
    const [bankAccountID, setBankAccountID] = useState('');
    const [bankName, setBankName] = useState('');

    const [errMsg, setErrMsg] = useState();
    const options = phongBan.map((item) => (
        <Select.Option key={item.id} value={item.tpb[0]}>
            {item.tpb[0]}
        </Select.Option>
    ));

    function checkPass(newPass1, newPass2) {
        if ((newPass1 != null && newPass2 != null) && (newPass1 != newPass2)) {
            setErrMsg("Mật khẩu không trùng khớp!");
            return false;
        } else {
            setErrMsg();
            return true;
        };
    }
    const onFinish = (values) => {
        if (checkPass(values.newPassword, values.reEnteredNewPass)) {
            console.log('Success:', values);
            message.success('Đã lưu thông tin!');
            if (current <= steps.length - 2) next();
            if (current === steps.length - 1) {
                dispatch(addEmp({
                    status: 'active',
                    id: 0,
                    tnv: firstName,
                    pb: department,
                    sdt: phone,
                    gt: gender,
                    email: email,
                    nh: bankName,
                    ns: dob,
                    dc: location,
                    qg: nationality,
                    tknh: bankAccountName,
                }));
                message.success('Khởi tạo thông tin thành công!');
            }
        } else onFinishFailed(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Lưu thất bại do có sai sót trong quá trình nhập dữ liệu');
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
                <Input type='string' value={userName} placeholder="Nhập tên đăng nhập" style={{ padding: '1%' }} />
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

                <Input type='email' value={email} placeholder="Nhập email" style={{ padding: '1%' }}
                    onChange={(e) => setEmail(e.target.value)} />
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

                <Input type='string' value={password} placeholder="Nhập mật khẩu" style={{ padding: '1%' }} />
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

                <Input type='string' placeholder="Nhập lại mật khẩu" style={{ padding: '1%' }} />
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
                        <Input type='string' value={lastName} placeholder="Nhập họ" style={{ padding: '2%' }}
                            onChange={(e) => setLastName(e.target.value)} />
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
                        <Input type='string' value={firstName} placeholder="Nhập tên" style={{ padding: '2%' }}
                            onChange={(e) => setFirstName(e.target.value)} />
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
                        <Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
                            <Radio value={'Nữ'}>Nữ</Radio>
                            <Radio value={'Nam'}>Nam</Radio>
                        </Radio.Group>
                    </Form.Item>

                </Col>
                <Col span={12}>
                    <Form.Item
                        name="nationality"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng không bỏ trống!',
                            },
                        ]}>
                        <Input type='string' value={nationality} placeholder="Nhập quốc tịch" style={{ padding: '2%' }}
                            onChange={(e) => setNationality(e.target.value)} />
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
                        <Input type='string' value={phone} placeholder="Nhập số điện thoại" style={{ padding: '2%' }}
                            onChange={(e) => setPhone(e.target.value)} />
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
                        <Input type='date' value={dob} max='2005-01-01' style={{ padding: '2%', width: '50%' }}
                            onChange={(e) => setDob(e.target.value)} />
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
                <Input type='string' value={location} placeholder="Nhập địa chỉ" style={{ padding: '1%' }}
                    onChange={(e) => setLocation(e.target.value)} />
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
                        <Select defaultValue="Chọn phòng ban"
                            onChange={(e) => setDepartment(e)}>{options}</Select>
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
                        <Input type='string' value={cccd} placeholder="Nhập CCCD|CMND" style={{ padding: '2%' }}
                            onChange={(e) => setCCCD(e.target.value)} />
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
                        <Input type='string' value={bankAccountName} placeholder="Nhập tên tài khoản ngân hàng" style={{ padding: '2%' }}
                            onChange={(e) => setBankAccountName(e.target.value)} />
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
                        <Input type='string' value={bankAccountID} placeholder="Nhập số tài khoản ngân hàng" style={{ padding: '2%' }}
                            onChange={(e) => setBankAccountID(e.target.value)} />
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
                <Input type='string' value={bankName} placeholder="Nhập ngân hàng" style={{ padding: '1%' }}
                    onChange={(e) => setBankName(e.target.value)} />
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
                    <h3 style={{ color: 'red' }}>{errMsg}</h3>
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
                                <Button type='primary' size="large" style={{ float: 'right', backgroundColor: 'lightgrey', color: 'grey' }}
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