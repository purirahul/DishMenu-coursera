import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes.js';
import { Comments } from './comments.js';
import { Promotions } from './promotions.js';
import { Leaders } from './leaders.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms.js';
import { createForms } from 'react-redux-form';

export const ConfigureStore = () => {
    const store = createStore( combineReducers({
          dishes: Dishes,
          comments: Comments,
          promotions: Promotions,
          leaders: Leaders,
          ...createForms({
                feedback: InitialFeedback
            })
    }),
    applyMiddleware(thunk, logger)
   );

    return store;
}
