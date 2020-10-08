import React, { useState } from 'react';
import { Button } from 'antd';
import { Table, Tag, Space } from 'antd';
import { connect } from 'react-redux';
import TodosModal from './TodosModal';
import { addTodos, deleteTodo, editTodo, selectTodo } from '../actions';



const data = [

];


const Todos =({todos,addTodos,deleteTodo,selectTodo,editTodo})=>{

    const columns = [
        { title: 'Action',
          dataIndex: 'action',
          key: 'action',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Date Added',
          dataIndex: 'dateadded',
          key: 'dateadded',
          render: text => <a>{text}</a>,
        }
        ,
        {
          title: 'Operation',
          key: 'operation',
          render: (text, record) => (
            <Space size="middle">
              <a onClick={()=>(selectTodo(record),showAndHide())}>Edit</a>
             |
              <a onClick={()=>deleteTodo(record)}>Delete</a>
            </Space>
          ),
        },
      ];

    const[todoModalVisible,setTodoModalVisible]=useState(false)
   
    const handleOk=(todo)=>{
        todos.selected_todo&&(todo.key=todos.selected_todo.key)
        todos.selected_todo?editTodo(todo):addTodos(todo);
        todos.selected_todo&& selectTodo(undefined)
        setTodoModalVisible(!todoModalVisible);
    }

    const showAndHide=()=>{
        setTodoModalVisible(!todoModalVisible)
    }
    


    return(
        <>
           <Button onClick={showAndHide} type={'primary'}>Add Todos</Button>
           <Table columns={columns} dataSource={todos.todos_list} />
           <TodosModal selectedTodo={todos.selected_todo} handleCancel={showAndHide} handleOk={handleOk} todoModalVisible={todoModalVisible} />
        </>
    )
}



const mapStateToProps=(state)=>{
    // localStorage.todos=JSON.stringify(state.todos)
    return {todos:state.todos}
}

const mapDispatchtoState={
   addTodos,deleteTodo,selectTodo,editTodo
}

export default connect(mapStateToProps,mapDispatchtoState)(Todos);