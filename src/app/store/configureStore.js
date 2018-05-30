import { createStore, applyMiddleware } from 'redux'
import rootReducers from '../reducers/rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const configureStore = (preLoadedState) => {
    const middlewares = [thunk]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const storeEnhancers = [middlewareEnhancer]

    const composedEnhancer = composeWithDevTools(...storeEnhancers)

    const store = createStore(
        rootReducers,
        preLoadedState,
        composedEnhancer
    )

    if(process.env.NODE_ENV !== "production"){
        if(module.hot){
            module.hot.accept("../reducers/rootReducers.js", ()=>{
                const newRootReducer = require("../reducers/rootReducers").default
                store.replaceReducer(newRootReducer)
            })
        }
    }

    return store

} 