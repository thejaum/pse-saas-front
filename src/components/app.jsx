import React from 'react';
import { Layout, Row, Col} from 'antd';
import ContentEngine from '../engines/contentEngine'
import SiderForm from './sider'



const { Header, Footer, Content} = Layout;

class App extends React.Component{
    
    render(){
        return(
        <div className="main">
                <Row>
                    <Col>
                        <Layout style={{ minHeight: '100vh' }}>
                            <SiderForm />
                            <Layout>
                                <Header style={{'background':'#fff'}}/>

                                <Content style={{'background':'#fff'}}>
                                    <div className="main-content" >
                                        <ContentEngine />
                                    </div>
                                </Content>

                                <Footer style={{ background: '#fff'}}>
                                    <div className="main-footer">
                                        
                                    </div>
                                </Footer>
                                
                            </Layout>
                        </Layout>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default App;