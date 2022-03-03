import { Layout, Input, Row, Col, } from 'antd';
import ProductCard from './ProductCard';
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const Main = ({ userName, products }) => {
  return(
    <Layout>
      <Header className="header">
        <Row>
          <Col xs={{ span: 5}} lg={{ span: 6 }}>
            <img className="logo" src="https://www.vhv.rs/dpng/d/509-5094883_retail-store-icon-pictures-to-pin-on-pinterest.png" alt="logo" />
          </Col>
          <Col xs={{ span: 19}} lg={{ span: 10 }}>
            <div className="header-search">
              <Search
                placeholder='¿Que estás buscando?'
                onSearch={value => console.log(value)}
                enterButton
              />
            </div>
          </Col>
          <Col xs={{ span: 0}} lg={{ span: 5 }}>Bienvenido {userName}</Col>
        </Row>
      </Header>
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
      <Footer className='footer'>
        Pie
      </Footer>
    </Layout>
  );
}

export default Main;