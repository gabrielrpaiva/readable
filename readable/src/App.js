import React from 'react';
import {Route, Switch} from 'react-router-dom'  
import './App.css';

import MyRoutes from './MyRoutes' 

const App = () => {
  return (
    <Switch>
       {MyRoutes.map(({path, exact, params, Layout, Component}) => (
         <Route
           key={0}
           exact={exact}
           params={params}
           path={path}
           render={(props) => (
           <Layout {...props}>
             <Component {...props}/>
           </Layout>
         )}/>
       ))}
       
     </Switch>
  )
}


export default App;
