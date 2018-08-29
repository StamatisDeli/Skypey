import { createStore } from 'redux'

import reducer from '../reducers'
//import { contacts } from "../Static-Data"

const store = createStore(
    reducer,
    window.devToolsExtension && window.devToolsExtension()//DEV TOOLS!!!!
)

export default store;