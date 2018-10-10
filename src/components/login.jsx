import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Avatar} from 'antd';
import { Row, Col } from 'antd';

const FormItem = Form.Item;

class Login extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
                <Row justify="center" >
                    <Col>
                        <Form onSubmit={this.handleSubmit} className="form-login">
                            <Avatar shape="square" size={120} src={require("./../img/pse.jpg")} alt="Avatar" style={{'padding-bottom':'10px'}}/>
                            <FormItem >
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Por favor, preencha o email!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} style={{'width': '30%'}} placeholder="Email" />
                                )}
                            </FormItem>
                            <FormItem >
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Por favor, preencha a senha!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" style={{'width': '30%'}} placeholder="Senha" />
                                )}
                            </FormItem>
                            <FormItem >
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Manter conectado</Checkbox>
                                )}
                                <Button type="primary" htmlType="submit" className="form-login-button">
                                    Log in
                                </Button>
                            </FormItem>
                        </Form>
                    </Col>              
                </Row>                      
        );
    }
}

const WrappedLogin = Form.create()(Login);
export default WrappedLogin;
