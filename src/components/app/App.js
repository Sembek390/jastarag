import React from 'react';
import ReactDom from 'react-dom'


import './App.css';
import Header from '../header';
import Saidbar2 from '../saidbar2';
import Saidbar from '../saidbar';
import Content from '../content';
import Footer from '../footer';

const App = () =>  {
      return(
      <div className="app">
       <Header className="header" />
       <Saidbar className="saidbar" />
       <Content className="content" />
       <Saidbar2 className="saidbar2" />
       <Footer className="panel-footer" />
       </div>
  )
  }      


export default App;
