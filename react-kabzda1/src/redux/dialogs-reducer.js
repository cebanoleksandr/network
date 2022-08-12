const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return { 
                ...state,
                newMessageText: action.body,
            };

        case SEND_MESSAGE:
            let body = state.newMessageText;

            return { 
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 6, message: body}],
            };

        default:
            return state;
    }    
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageTextCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body,
    }
}

export default dialogsReducer;
