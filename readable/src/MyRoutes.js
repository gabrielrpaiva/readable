
import Master from '../src/common/template/Master'
import StartPage from '../src/common/template/StartPage'
import ConfigPosts from '../src/common/template/ConfigPosts'



const myRoutes = [
    {
      path: '/',
      exact: true,
      params: false,
      Component: StartPage,
      Layout: Master
    },
    {
      path: '/posts/new',
      exact: true,
      params: false,
      Component: ConfigPosts,
      Layout: Master
    }, {
      path: '/:category',
      exact: true,
      params: true,
      Component: StartPage,
      Layout: Master
    }, {
      path: '/posts/edit/:postId',
      exact: false,
      Component: ConfigPosts,
      Layout: Master
    }
  ]
  
  export default myRoutes;
  