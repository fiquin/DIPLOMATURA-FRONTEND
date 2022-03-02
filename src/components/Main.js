import { Layout, Input } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const Main = ({ userName }) => {
  return(
    <Layout>
      <Header>
        Encabezado
      </Header>
      <Content>
        <p style={{color: 'black'}}>{userName}</p>
      </Content>
      <Footer>
        Pie
      </Footer>
    </Layout>
  );
}

export default Main;