import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";

export default function HeaderSidebar() {
    return (
        <div  style={{ height: '5vh', width:'20vw', position: 'fixed' }} >
          <Card
        >
            <Meta
                avatar={<Avatar shape="square" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
                title="Nguyen Van Quan Ly"
            />
        </Card>  
        </div>
        
    )
}