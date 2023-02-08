/**
 * Interface for FED Components
 * @interface
 */
export interface iComponent {
    dynamic: boolean
    name: string
    props: unknown
    element: HTMLElement
}

/**
 * Interface for reactCMSComp; library is only JS
 * @interface
 */
export interface iReactCMSComp {}
