import { Row, Col } from 'antd';
import { ShipmentTracksHeader } from './ShipmentTracksHeader';
import { ShipmentCard } from './ShipmentCard';
import { shipmentData } from './data/shipmentData';

export const ShipmentTracks = () => {
  return (
    <div className="shipment-tracks">
      <ShipmentTracksHeader />
      <Row gutter={[24, 24]}>
        {shipmentData.map((shipment) => (
          <Col xs={24} sm={12} lg={6} key={shipment.id}>
            <ShipmentCard {...shipment} />
          </Col>
        ))}
      </Row>
    </div>
  );
};