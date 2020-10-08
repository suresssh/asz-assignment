
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

const UserModal = ({selectedUser, userModalVisible: umv, handleOk, handleCancel }) => {

    const [userModalVisible, setuserModalVisible] = useState(umv);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        if (userModalVisible !== umv) {
            setuserModalVisible(umv)
        }
        if(selectedUser){
            form.setFieldsValue({personname:selectedUser.personname,emaild:selectedUser.emaild})
           }
    })

    const onFinish = values => {
      setLoader(true)
      setTimeout(()=>{
        handleOk(values);
        setLoader(false)
        form.resetFields();
      },2500)
  };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const [form] = Form.useForm();

    return (
        <Form
        form={form}
        {...layout}
        name="usermodal"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Modal
        title="Create New User"
        visible={userModalVisible}
        onCancel={()=>(handleCancel(),form.resetFields())}
        onOk={form.submit}
        okButtonProps={{loading:loader}}
        >
    
        <Form.Item
          label="Name"
          name="personname"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Email Id"
          name="emaild"
          rules={[{ required: true, message: 'Please input your email id!' }]}
        >
          <Input />
        </Form.Item>
        </Modal>
      </Form>
    )
}

export default UserModal;