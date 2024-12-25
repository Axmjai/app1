import React from 'react'
import Calender from './class-components';
import { Content, Footer, Header } from './fuc-components';

function App() {
  return (
    <>
    <Header/>
    <p><center><Calender/></center></p>
    <Content/>
    <Footer/>
    </>
  );
}

export default App;
