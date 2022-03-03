import { Layout, Input, Row, Col, } from 'antd';
const { Header } = Layout;
const { Search } = Input;

const CustomHeader = ({ userName }) => (
  <>
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
  </>
);

export default CustomHeader;