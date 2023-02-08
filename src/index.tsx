import ReactCMSComp from 'react-cms-components/index'
import './styles/index.scss'
import * as serviceWorker from './serviceWorker'
import { renderDynamicReactComponent } from './helpers/cms.helper'
import { iComponent } from './models/global.type'

const componentArray = ReactCMSComp.return({
    componentList: document.querySelectorAll('[data-component]'),
})

if (componentArray.length > 0) {
    componentArray.forEach((component: iComponent) => {
        renderDynamicReactComponent(component)
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
