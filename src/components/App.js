import React from "react";
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import "./App.css";

import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';

const App = ({ currentUser, currentChannel, isPrivateChannel, userPosts }) => {
    return (
        <Grid columns="equal" className="app" style={{ backgroundColor: "#eee" }}>
            <ColorPanel />
            <SidePanel 
                key={currentUser && currentUser.uid}
                currentUser={currentUser} 
            />
            
            <Grid.Column style={{ marginLeft: 320, paddingTop: '24px' }}>
                <Messages
                    key={currentChannel && currentChannel.id}
                    currentUser={currentUser}
                    currentChannel={currentChannel}
                    isPrivateChannel={isPrivateChannel}
                />
            </Grid.Column>
            
            <Grid.Column width={4} style={{ paddingTop: '24px' }}>
                <MetaPanel 
                    key={currentChannel && currentChannel.id}
                    userPosts={userPosts}
                    currentChannel={currentChannel}
                    isPrivateChannel={isPrivateChannel}
                />
            </Grid.Column>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    currentChannel: state.channel.currentChannel,
    isPrivateChannel: state.channel.isPrivateChannel,
    userPosts: state.channel.userPosts
});

export default connect(mapStateToProps)(App);