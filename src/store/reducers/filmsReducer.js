import { SET_FILMS } from '../actions';

export default function filmsReducer(state = null, action) {
    switch (action.type) {
        case SET_FILMS:
            return action.films;
        default:
            return state;
    }
}