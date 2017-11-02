
import Master from '../src/common/template/Master'
import StartPage from '../src/common/template/StartPage'



const myRoutes = [
    {
      path: '/',
      exact: true,
      params: false,
      Component: StartPage,
      Layout: Master
    }
  ]
  
  export default myRoutes;
  