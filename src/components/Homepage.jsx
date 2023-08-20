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
                            name="login"
                            initialValues={{
                                remember: false,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Tên đăng nhập"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập tên đăng nhập của bạn!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Mật khẩu"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập mật khẩu của bạn!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                            >
                                <Checkbox>Nhớ mặt tôi</Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button size='large' type='primary' style={{ float: 'right' }} htmlType="submit">
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </Card>
            </Card>
        </div>
    )

}