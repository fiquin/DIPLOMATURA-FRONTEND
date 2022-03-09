import { Layout, Row, Col, } from 'antd';
import ProductCard from './ProductCard';
const { Content } = Layout;

const CustomContent = ({ products }) => (
  <>
    <Content className='content'>
      <p>Basado en tu ultima visita:</p>
      <Row className="products-container">
        {
          products.map(prod => {
            return(
              <Col key={prod.id} xs={{ span: 24 }} lg={{ span: 4 }}>
                <ProductCard product={prod} />
              </Col>
            )
          })
        }
      </Row>
    </Content>
  </>
);

export default CustomContent;
