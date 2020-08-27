
import * as ActionTypes from './ActionTypes.js';

export const Comments = (state= {
        errMess: null,
        comments: []
        }, action) =>{
        switch(action.type) {

          case ActionTypes.ADD_COMMENTS:
              return {...state, errMess: null, comments: action.payload }


          case ActionTypes.ADD_COMMENT:
              var comment = action.payload;
              return {...state, comments: state.comments.concat(comment)}
          default:
            return state;
        }
}
