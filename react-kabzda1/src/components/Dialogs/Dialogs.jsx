import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';

import './Dialogs.css';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map(dialog => {
    return <Dialog name={dialog.name} key={dialog.id} id={dialog.id} />
  });

  let messagesElements = state.messagesData.map(m => {
    return <Message message={m.message} key={m.id} />
  });

  let newMessageText = state.newMessageText;

  let sendMessage = () => {
    props.sendMess();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageText(body);
  }

  if (!props.isAuth) {
    return <Navigate to={'/login'} />
  }

  return (
    <div className='dialogs'>
      <div className='dialogs__items'>
        { dialogsElements }
      </div>
      <div className="messages">
          <div>{ messagesElements }</div>
          <div>
            <div>
              <textarea value={newMessageText} onChange={onNewMessageChange} placeholder='Enter your message' ></textarea>
            </div>
            <div>
              <button onClick={ sendMessage }>Send a message</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Dialogs;
