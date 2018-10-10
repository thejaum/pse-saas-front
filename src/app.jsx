import React from "react";
import * as AppActions from "./appActions";
import { Form,Input,Button } from 'antd';

import AppStore from "./appStore"

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};


class App extends React.Component {

    constructor() {
        super();
        this.state = {
           fields: AppStore.getAll()
        }
    }

    componentWillMount(){
        AppStore.on("changeName", () => {
            this.setState({
                fields: AppStore.getAll()
            });
            this.handleFields();
        });
    }

    changeFields = () => {
        AppActions.appTeste();
    }

    handleFields = () => {
        console.log('setInitialValues');
        const { form } = this.props;
        form.setFieldsValue({
            name:this.state.fields.name,
            nickname:this.state.fields.nickname 
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="form-app">
                <FormItem {...formItemLayout} label="Nome">
                    {getFieldDecorator('name', {
                        rules: [{
                        required: true,
                        message: 'Por favor, preencha o nome.',
                        }],
                    })    
                    (
                        <Input placeholder="Nome"/>
                    )}    
                </FormItem>
                <FormItem {...formItemLayout} label="Sobrenome">
                    {getFieldDecorator('nickname', {
                        rules: [{
                        required: true,
                        message: 'Por favor, preencha o Sobrenome.',
                        }],
                    })
                    (
                        <Input  placeholder="Sobrenome"/>
                    )}
                </FormItem>
                <FormItem {...formTailLayout}>
                    <Button
                        type="primary"
                        onClick={() => {this.changeFields()}}
                        >teste
                    </Button>
                </FormItem> 
            </div>
        )
    }
}

const WrappedForm = Form.create()(App)
export default WrappedForm;