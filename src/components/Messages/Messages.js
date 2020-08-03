import React from 'react';
import firebase from '../../firebase';
import MessagesHeader from './MessagesHeader';
import MessagesForm from './MessagesForm';
import { Segment, Comment } from 'semantic-ui-react';

class Messages extends React.Component {
    state = {
        messagesRef: firebase.database().ref('messages'),
        currentChannel: this.props.currentChannel,
        currentUser: this.props.currentUser
    }
    
    render() {
        const { messagesRef, currentChannel, currentUser } = this.state;
        return (
            <>
                <MessagesHeader />
                
                <Segment style={{ overflow: 'auto' }}>
                    <Comment.Group className="messages">
                        {/* MESSAGES */}
                    </Comment.Group>
                </Segment>
                
                <MessagesForm 
                    messagesRef={messagesRef}
                    currentChannel={currentChannel}
                    currentUser={currentUser}
                />
            </>
        );
    }
}

export default Messages;