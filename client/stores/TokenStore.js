import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _token = [];
let _isLoading = null;
let _loadingError = null;




const TasksStore = Object.assign({}, EventEmitter.prototype, {
    getToken() {
        return _token;
    },

    getError(){
        return _loadingError;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

let TokenStore = AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_TOKEN_REQUEST: {

            _isLoading = true;

            TasksStore.emitChange();
            break;
        }
        case AppConstants.LOAD_TOKEN_SUCCESS: {
            _token = action.token;
            _loadingError = null;
            TasksStore.emitChange();

            break;
        }

        case AppConstants.LOAD_TOKEN_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

    }
});


export default TasksStore;
