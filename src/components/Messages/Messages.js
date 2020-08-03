import React from 'react';
import MessagesHeader from './MessagesHeader';
import MessagesForm from './MessagesForm';
import { Segment, Comment } from 'semantic-ui-react';

class Messages extends React.Component {
    render() {
        return (
            <>
                <MessagesHeader />
                
                <Segment style={{ overflow: 'auto' }}>
                    <Comment.Group className="messages">
                        {/* MESSAGES */}
                    </Comment.Group>
                </Segment>
                
                <MessagesForm />
            </>
        );
    }
}

export default Messages;