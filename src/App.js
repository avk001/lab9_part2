import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// import Menu from './components/Menu'
import {useState, useEffect} from 'react'
// import PostsProvider from  './components/PostsProvider';

import List from './components/List';
import NewPost from './components/NewPost';
import View from './components/View';
import Edit from './components/Edit'
import PostsProvider from './components/PostsProvider'

// const List = lazy(() => import('./components/List'));
// const NewPost = lazy(() => import('./components/NewPost'));
// const View = lazy(() => import('./components/View'));
// const Edit = lazy(() => import('./components/Edit'));

import API_POST from './components/api'

function Page404(){
    return (
        <article className="article">
            <h1 className="article__title">Error 404</h1>
            <p className="article__paragraph">
                Страница не найдена
            </p>
        </article>

    )
}


export default  function App() {
    const [posts, setPosts] = useState()
    useEffect(  () => {
        async function fetchMyAPI() {
            let d = await API_POST.POST_list()
            setPosts(d)
        }
        fetchMyAPI()
    }, [])

    return (
        <div className="App">
            <PostsProvider posts={posts}>
                <Router>
                    <Route exact path='/posts/new' component={NewPost} />
                    <Route exact path='/' component={List}/>
                    <Route exact path='/posts/:id([0-9]+)' component={View} />
                    <Route exact path='/edit/:id([0-9]+)' component={Edit} />
                    {/*<Route path="*" component={Page404} />*/}
                </Router>
            </PostsProvider>
        </div>
    );

    // return (
    //     <PostsProvider posts={posts}>
    //         <Router>
    //             <div>
    //                 {/*<Menu />*/}
    //                 <div className="page">
    //                     <Suspense fallback={<div>Загрузка...</div>}>
    //                         <Switch>
    //                             <Route exact path='/posts/new' component={NewPost} />
    //                             <Route exact path='/' component={List}/>
    //                             <Route exact path='/posts/:id([0-9]+)' component={View} />
    //                             <Route exact path='/edit/:id' component={Edit} />
    //
    //                             <Route path="*" component={Page404} />
    //
    //                         </Switch>
    //                     </Suspense>
    //                 </div>
    //             </div>
    //         </Router>
    //     </PostsProvider>
    // );
}