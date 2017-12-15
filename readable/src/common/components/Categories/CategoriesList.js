import React from 'react';
import {NavLink} from 'react-router-dom'

const CategoriesList = ({ categories }) => {
    return (
        <div className="container">
            <h1>All Categories</h1>
            <p className='lead'>
                {categories.map((category) => (
                    <NavLink
                        key={category.name}
                        to={`/${category.name}`}
                        className='btn btn-outline-primary'
                        title={category.name}>{category.name}</NavLink>
                ))}
            </p>
      </div>
    )
}

export default CategoriesList; 