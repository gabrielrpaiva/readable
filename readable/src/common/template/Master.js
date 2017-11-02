import React from 'react';
import Header from './header'

/**
 * Application Main layout
 */
const Master = ({children}) => {
  return (
    <section>
      <Header/>
      <div className="container">
        {children}
      </div>
    </section>
  )
} 

export default Master;
