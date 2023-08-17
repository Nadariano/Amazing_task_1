import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";

export default function HeaderSidebar() {
    const userName = sessionStorage.getItem('user');
    return (
        <div style={{ height: '5vh', width: '20vw', position: 'fixed' }} >
            <Card
            >
                <Meta
                    avatar={<Avatar shape="square" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
                    title={userName}
                />
            </Card>
        </div>

    )
}