import { combineReducers } from 'redux'
import { routerReducer } from 'redux-react-router'

import posts from './posts'
import comments from './comments'

const rootReducer = combineReducers({posts, comments, router: routerReducer})