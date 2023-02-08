// React eco system
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { iComponent } from '../models/global.type'
import { cmsComponentMap } from '../globalConstants/cmsComponentMap.constant'

import { store } from '../redux'

const initReactComponent = (component: iComponent, Comp: React.FC<any>) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Comp {...component.props}>{component.element.innerHTML}</Comp>
            </Provider>
        </React.StrictMode>,
        component.element,
    )
}

/**
 * Render the authored elements
 * @param {iComponent} component
 */
export const renderDynamicReactComponent = (component: iComponent): void => {
    const Comp = cmsComponentMap[component.name] as React.FC
    if (Comp) initReactComponent(component, Comp)
    // component definition is not found in the static component list, throwing an error on console
    else console.error(`Element name didn't match *** ${component.name} *** `)
}
