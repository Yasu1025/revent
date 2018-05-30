import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
// redux
import { Provider } from 'react-redux'
import { configureStore } from './app/store/configureStore'
import ScrollToTop from '../src/app/common/util/ScrollToTop'
import { loadEvents } from './features/event/eventActions'

const store = configureStore()
store.dispatch(loadEvents())


ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
              <ScrollToTop>
                <App />
              </ScrollToTop>
            </BrowserRouter>
        </Provider>, document.getElementById('root'));
registerServiceWorker();
