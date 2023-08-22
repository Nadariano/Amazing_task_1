import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import Layout from "antd/es/layout/layout";
import { useState } from "react";

export default function Homepage() {
    const [user, setUser] = useState();
    sessionStorage.setItem("user", user);
    function login(username) {
        setUser(username);
        console.log('logged in');
        window.location.reload();
    }
    const onFinish = (values) => {
        login(values.username);
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'gold', fontSize: '500%', fontFamily: 'sans-serif' }}>HITOHUB</h1>
            <Card style={{ marginTop: '15vh', display: 'flex', justifyContent: 'center', textAlign: 'center', height: '30vh', border: '10px solid black' }}>
                <h1> Chào mừng bạn đến với HitoHub !</h1>
                <p>Vui lòng đăng nhập để bắt đầu phiên làm việc nha</p>
                <Button size='large' type='primary' >
                    <a href='#popup1' id='openPopUp'>Đăng nhập</a>
                </Button>
            </Card>

            <Card id='popup1' className='overlay'>
                <Card className='popup'>
                    <h2>Đăng nhập</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: false,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng không bỏ trống!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng không bỏ trống!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Mật khẩu"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Nhớ mặt tôi</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Quên mật khẩu
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Đăng nhập
                                </Button>
                                Hoặc <a href="">Đăng ký tại đây</a>
                            </Form.Item>
                        </Form>

                    </div>
                </Card>
            </Card>
        </div>
    )

}