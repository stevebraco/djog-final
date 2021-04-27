import React from 'react'

export default function WrapperHeading({title, children}) {
    return (
        <div className='wrapper-heading'>
            <h2 className='wrapper-heading__title' >{title}</h2>
            <p className='wrapper-heading__text'> {children} </p>
        </div>
    )
}
