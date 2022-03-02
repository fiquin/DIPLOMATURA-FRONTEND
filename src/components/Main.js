import { Layout, Input, Row, Col, } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const Main = ({ userName }) => {
  return(
    <Layout>
      <Header className="header">
        <Row>
          <Col xs={{ span: 5}} lg={{ span: 3 }}>Logo</Col>
          <Col xs={{ span: 19}} lg={{ span: 16 }}>Buscador</Col>
          <Col xs={{ span: 0}} lg={{ span: 5 }}>Bienvenido {userName}</Col>
        </Row>
      </Header>
      <Content className='content'>
        <p style={{color: 'black'}}>Contenido</p>
      </Content>
      <Footer className='footer'>
        Pie
      </Footer>
    </Layout>
  );
}

export default Main;