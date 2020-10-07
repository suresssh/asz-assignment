import React, { useState } from 'react';
import { Button } from 'antd';
import { Table, Tag, Space } from 'antd';
import UserModal from './UserModal';
import { createUser, deleteUser,editUser, selectUser } from '../actions';
import {connect} from 'react-redux';



const data = [
];


const Users =({createUser,users,deleteUser,editUser,selectUser})=>{
    const columns = [
        {
          title: 'Name',
          dataIndex: 'personname',
          key: 'personname',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Email Id',
          dataIndex: 'emaild',
          key: 'emaild',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a onClick={()=>(selectUser(record),showAndHide())}>Edit</a>
             |
              <a onClick={()=>deleteUser(record)}>Delete</a>
            </Space>
          ),
        },
      ];
      
    const[userModalVisible,setUserModalVisible]=useState(false)
    
    const handleOk=(user)=>{
        users.selected_user&&(user.key=users.selected_user.key)
        users.selected_user?editUser(user):createUser(user);
        users.selected_user&&selectUser(undefined);
        setUserModalVisible(!userModalVisible)
    }

    const showAndHide=()=>{
        setUserModalVisible(!userModalVisible)
    }
    
    return(
        <>
           <Button type={'default'} onClick={showAndHide} >Create User</Button>
           <Table columns={columns} dataSource={users.users_list} />
           <UserModal selectedUser={users.selected_user} handleCancel={showAndHide} handleOk={handleOk} userModalVisible={userModalVisible} />        </>
    )
}

const mapStateToProps=(state)=>{
    return {users:state.users}
}

const mapDispatchtoState={
    createUser,deleteUser,editUser,selectUser
}

export default connect(mapStateToProps,mapDispatchtoState)(Users);