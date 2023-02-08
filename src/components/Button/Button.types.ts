import { MouseEventHandler } from 'react'

/**
 * @typedef {Object} ButtonProps
 * @property {string} ButtonProps.label
 *
 */
export interface ButtonProps {
    // children?: React.ReactNode
    label: string
    onClick?: MouseEventHandler
}
