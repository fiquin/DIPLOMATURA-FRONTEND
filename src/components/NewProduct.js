import { Layout, Row, Col, } from 'antd';
const { Content } = Layout;

const NewProduct = ({ setScreen }) => (
  <>
    <Content className='content'>
      <button className='button' onClick={() => setScreen(0)}>Volver</button>
      <p>Ingresá tu producto</p>
      <Row className="products-container">
        
      </Row>
    </Content>
  </>
);

export default NewProduct;
