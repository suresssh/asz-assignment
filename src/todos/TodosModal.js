
import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { Form, Input, Button } from 'antd';
const layout = {
    labelCol: { span:6},
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const TodosModal = ({ selectedTodo,todoModalVisible: tmv, handleOk, handleCancel }) => {
    const [form] = Form.useForm();
    const [todoModalVisible, setTodoModalVisible] = useState(tmv);
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        if (todoModalVisible !== tmv) {
            setTodoModalVisible(tmv)
        }
        if(selectedTodo){
         form.setFieldsValue({action:selectedTodo.action,dateadded:selectedTodo.dateadded})
        }
    })

    const onFinish = values => {
        setLoader(true)
        setTimeout(()=>{
          handleOk(values);
          setLoader(false)
          form.resetFields();
        },3000)
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    

    return (
        <Form
        form={form}
        {...layout}
        name="todos"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        on
      >
        <Modal
        visible={todoModalVisible}
        onCancel={()=>(handleCancel(),form.resetFields())}
        onOk={form.submit}
        okButtonProps={{loading:loader}}
        >
    
        <Form.Item
          label="Action"
          name="action"
          rules={[{ required: true, message: 'Please input your action!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Date Added"
          name="dateadded"
          rules={[{ required: true, message: 'Select date!' }]}
        >
          <Input type={'date'} />
        </Form.Item>
        </Modal>
      </Form>
    )
}

export default TodosModal;