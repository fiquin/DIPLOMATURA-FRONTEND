import { Layout, Row, Col, } from 'antd';
import ProductCard from './ProductCard';
const { Content } = Layout;

const CustomContent = ({ products, setScreen }) => (
  <>
    <Content className='content'>
      <button className='button' onClick={() => setScreen(0)}>Nuevo producto</button>
      <p>Basado en tu ultima visita</p>
      <Row className="products-container">
        {
          products.map(prod => {
            return(
              <Col key={prod.imageUrl} xs={{ span: 24 }} lg={{ span: 4 }}>
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
