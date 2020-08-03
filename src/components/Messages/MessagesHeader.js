import React from 'react'
import { Header, Segment, Input, Icon } from 'semantic-ui-react';

class MessagesHeader extends React.Component {
    render() {
        return (
            <Segment clearing>
                {/* CHANNEL TITLE */}
                <Header fluid as="h3" floated="left" style={{ marginBottom: 0 }}>
                    <span>
                        Channel
                        <Icon name="star outline" color="black" />
                    </span>
                    <Header.Subheader >2 Users</Header.Subheader>
                </Header>
                
                {/* CHANNEL SEARCH MESSAGES */}
                <Header floated="right">
                    <Input
                        size="mini"
                        icon="search"
                        name="searchTerm"
                        placeholder="Search Messages"
                    />
                </Header>
            </Segment>
        );
    }
}

export default MessagesHeader;