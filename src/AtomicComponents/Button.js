import React from 'react'
import cx from 'classnames'

const Button = ({ classes, text, type, handleClick }) => {
    return (
        <button className={cx('button', classes)} type={type} onClick={handleClick}>{text}</button>
    )
}

export default Button