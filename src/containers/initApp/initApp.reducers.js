import {DEPENDENCY_DONE} from './initApp.constants';

const INITIAL_STATE = {
    done: false,
    success: null,
};

const initApp = (state = INITIAL_STATE, action) => {
    const {payload, type} = action;

    switch (type) {
        case DEPENDENCY_DONE:
            return Object.assign({}, state, {
                done: true,
                success: true,
            });
        default: 
            return state;
    }
};

export default initApp;