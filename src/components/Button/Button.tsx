import React from 'react'
import '../../styles/components/Button/Button.scss'
import PropTypes from 'prop-types'
import { ButtonProps } from './Button.types'

/**
 * Button component
 * @return {JSX.Element} returns Button component
 */
const Button: React.FC<ButtonProps> = ({ ...props }) => {
    const label = props.label
    const clickFn = props.onClick
    return (
        <button className="button__primary" onClick={clickFn}>
            {label}
        </button>
    )
}

Button.defaultProps = {
    label: 'Default Label',
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button
