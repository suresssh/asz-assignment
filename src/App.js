import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tabs } from 'antd';
import Todos from './todos/Todos';
import Users from './users/users';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import { RootReducer } from "./reducers";
import ReduxThunk from 'redux-thunk'
const { TabPane } = Tabs;
const Store = createStore(RootReducer,applyMiddleware(ReduxThunk))

const App = () => (
  <Provider store={Store} >
    <div className={'appContainer'}>
    <Tabs defaultActiveKey="1" >
      <TabPane tab="Todos" key="1">
        <Todos />
      </TabPane>
      <TabPane tab="Users" key="2">
        <Users />
      </TabPane>
    </Tabs>
  </div>
  </Provider>
);

export default App;
