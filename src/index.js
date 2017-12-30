import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

//import App from './components/app';
import reducers from './reducers';

import  PostsIndex  from './components/posts_index';
import  PostsNew  from './components/posts_new';
import  PostsShow  from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

/*
class Hi extends React.Component {
  render () { return <div>Hi</div> }
}

class Bye extends React.Component {
  render () { return <div>Bye</div> }
}
*/

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component = {PostsNew} />
                <Route path="/posts/:id" component = {PostsShow} />
                <Route path="/" component = {PostsIndex} />
            </Switch>

        </div>
    </BrowserRouter>
    </Provider>
    , document.querySelector('.container')
/* switch => most specific on top of the routes
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            Header
            <Route path="/hi" component = {Hi} />
            <Route path="/bye" component = {Bye} />
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
*/
);
