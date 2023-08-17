import { UploadOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";

export default function HeaderContent({ title }) {
    function logout() {
        sessionStorage.clear();
        console.log('logged out');
        window.location.reload();
    }
    return (
        <Card size="small" style={{ paddingLeft: '5%', fontSize: '150%', fontWeight: '400', marginRight: '2%' }}>
            {title}
            <Button style={{ float: 'right', display: 'flex', alignItems: 'center', padding: '1%' }}
                onClick={logout}><UploadOutlined rotate={90} style={{ fontSize: '200%', color: 'blue' }} /></Button>
        </Card>
    )
}