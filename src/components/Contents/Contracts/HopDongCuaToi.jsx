import { Content } from "antd/es/layout/layout";
import HeaderContent from "../../Headers/HeaderContent";
import { Card, Col, Row } from "antd";

export default function HopDongCuaToi() {
    return (
        <>
            <HeaderContent title='Hợp Đồng Của Tôi' />
            <Card style={{ margin: '3% 8%' }}>
                <h1 style={{ textAlign: 'center' }}>THÔNG TIN HỢP ĐỒNG</h1>
                <Content style={{ margin: '3% 5% 0% 15%' }}>
                    <h2 style={{ color: 'rgb(0, 102, 255)' }}>Thông tin người lao động</h2>
                    <Row style={{ margin: '0 5%' }}>
                        <Col span={12}>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col span={6}>
                                    <b>Họ và tên:</b>
                                </Col>
                                <Col span={18}>Nguyen Van Quan Ly
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col span={6}>
                                    <b>Sinh ngày:</b>
                                </Col>
                                <Col span={18}>06-07-2003
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col span={6}>
                                    <b>CMND|CCCD:</b>
                                </Col>
                                <Col span={18}>AAAA000002
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col span={6}>
                                    <b>Địa chỉ:</b>
                                </Col>
                                <Col span={18}>string
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col span={6}>
                                    <b>Số điện thoại:</b>
                                </Col>
                                <Col span={18}>string
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Col span={8}>
                                    <b>Giới tính:</b>
                                </Col>
                                <Col span={16}>Nam
                                </Col>
                            </Row>
                        </Col>

                    </Row>

                    <h2 style={{ color: 'rgb(0, 102, 255)', marginTop: '3%' }}>Hợp đồng lao động</h2>
                    <div style={{ marginLeft: '2%' }}>
                        <h3 style={{ color: 'rgb(0, 102, 255)' }}>1. Công việc, phòng ban và thời hạn hợp đồng</h3>
                        <Row style={{ margin: '0 3%' }}>
                            <Col span={24}>
                                <Row style={{ display: 'flex', alignItems: 'center' }}>
                                    <Col span={4}>
                                        <b>Phòng ban công tác:</b>
                                    </Col>
                                    <Col span={20}>Sales
                                    </Col>
                                </Row>
                                <Row style={{ display: 'flex', alignItems: 'center' }}>
                                    <Col span={4}>
                                        <b>Loại hợp đồng:</b>
                                    </Col>
                                    <Col span={20}>Hợp đồng xác định hạn
                                    </Col>
                                </Row>
                                <Row style={{ display: 'flex', alignItems: 'center' }}>
                                    <Col span={4}>
                                        <b>Từ ngày:</b>
                                    </Col>
                                    <Col span={4}>05-08-2023
                                    </Col>
                                    <Col span={2}>-
                                    </Col>
                                    <Col span={4}>
                                        <b>Đến ngày:</b>
                                    </Col>
                                    <Col span={10}>30-11-2023
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <h3 style={{ color: 'rgb(0, 102, 255)' }}>2. Lương, phụ cấp và các khoản bổ sung khác</h3>
                        <Row style={{ margin: '0 3%' }}>
                            <Col span={12}>
                                <Row style={{ display: 'flex', alignItems: 'center' }}>
                                    <Col span={8}>
                                        <b>Lương căn bản:</b>
                                    </Col>
                                    <Col span={16}>90.000.000
                                    </Col>
                                </Row>
                                <Row style={{ display: 'flex', alignItems: 'center' }}><b>Các phụ cấp (mỗi tháng): </b></Row>
                                <Row style={{ display: 'flex', alignItems: 'center' }}>
                                    <Col span={8}>
                                        <b>Hình thức trả lương:</b>
                                    </Col>
                                    <Col span={8}>Chuyển khoản
                                    </Col>
                                </Row>
                                <div style={{ margin: '0 5%' }}>
                                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                                        <Col span={8} style={{ fontSize: '120%' }}>
                                            Số TK ngân hàng:
                                        </Col>
                                        <Col span={8}>string
                                        </Col>
                                    </Row>
                                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                                        <Col span={8} style={{ fontSize: '120%' }}>
                                            Chủ tài khoản:
                                        </Col>
                                        <Col span={8}>string
                                        </Col>
                                    </Row>
                                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                                        <Col span={8} style={{ fontSize: '120%' }}>
                                            Ngân hàng:
                                        </Col>
                                        <Col span={8}>string
                                        </Col>
                                    </Row>
                                </div>

                            </Col>
                            <Col span={12}>
                                <Row style={{ display: 'flex', alignItems: 'center' }}>
                                    <Col span={8}>
                                        <b>Lương tính thuế:</b>
                                    </Col>
                                    <Col span={16}>80.000.000
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <h3 style={{ color: 'rgb(0, 102, 255)' }}>3. Thời gian làm việc và ghi chú</h3>
                        <Row style={{ margin: '0 3%' }}>
                            <Col span={24}>
                                <Row style={{ display: 'flex', alignItems: 'center' }}>
                                    <Col span={5}>
                                        <b>Số ngày làm việc một tuần:</b>
                                    </Col>
                                    <Col span={19}>5
                                    </Col>
                                </Row>
                                <Row style={{ display: 'flex', alignItems: 'center' }}>
                                    <Col span={5}>
                                        <b>Số người phụ thuộc:</b>
                                    </Col>
                                    <Col span={19}>1
                                    </Col>
                                </Row>
                                <Row style={{ display: 'flex', alignItems: 'center' }}>
                                    <Col span={5}>
                                        <b>Ghi chú:</b>
                                    </Col>
                                    <Col span={19}>abc
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Card>
        </>
    )
}