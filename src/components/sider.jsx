import React from 'react'
import { Layout, Menu, Icon} from 'antd';
const {  Sider } = Layout;

const SubMenu = Menu.SubMenu;

class SiderForm extends React.Component{
    constructor(){
        super();
        this.state = {
            collapsed: true,
        };
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render (){
        return(
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>Home</span>
                    </Menu.Item>
                    <SubMenu
                        key="2"
                        title={<span><Icon type="user" /><span>Acessos</span></span>}
                    >
                        <Menu.Item key="2a">Grupos</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="3"
                        title={<span><Icon type="save" /><span>Cadastros</span></span>}
                    >
                        <Menu.Item key="3a">Usuario</Menu.Item>
                        <Menu.Item key="3b">Escola</Menu.Item>
                        <Menu.Item key="3c">Matéria</Menu.Item>
                        <Menu.Item key="3d">Turma</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="4"
                        title={<span><Icon type="printer" /><span>Relatorios</span></span>}
                    >
                        <Menu.Item key="4a">Escola</Menu.Item>
                        <Menu.Item key="4b">Professor</Menu.Item>
                        <Menu.Item key="4c">Turma</Menu.Item>
                    </SubMenu>
                    
                </Menu>
            </Sider>
        )
    }
}

export default SiderForm;