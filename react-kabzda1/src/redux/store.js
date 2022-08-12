import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: 'Hi, how are you?', likesCount: 12},
                {id: 2, post: 'It\'s my first post', likesCount: 13},
                {id: 3, post: 'Happy birthday!!!', likesCount: 34},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Irina'},
                {id: 2, name: 'Aina'},
                {id: 3, name: 'Maksim'},
                {id: 4, name: 'Pavel'},
                {id: 5, name: 'Anton'},
                {id: 6, name: 'Denis'},
                {id: 7, name: 'Dasha'},
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'What are you doing tonight?'},
                {id: 3, message: 'Lets go to have some coffee'},
                {id: 4, message: 'I want to do it'},
            ],
            newMessageText: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}

window.store = store;

export default store;
