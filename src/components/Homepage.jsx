import { Button, Card } from "antd";
import Layout from "antd/es/layout/layout";
import { useState } from "react";

export default function Homepage() {
    const [user, setUser] = useState();
    sessionStorage.setItem("user", user);
    function login(e) {
        e.preventDefault();
        setUser('Nguyen Van Quan Ly');
        console.log('logged in');
        window.location.reload();
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'gold', fontSize: '500%', fontFamily: 'sans-serif' }}>HITOHUB</h1>
            <Card style={{ marginTop: '15vh', display: 'flex', justifyContent: 'center', textAlign: 'center', height: '30vh', border: '10px solid black' }}>
                <h1> Chào mừng bạn đến với HitoHub !</h1>
                <p>Vui lòng đăng nhập để bắt đầu phiên làm việc nha</p>
                <Button size='large' type='primary' onClick={login}>Đăng nhập</Button>
            </Card>
        </div>
    )

}