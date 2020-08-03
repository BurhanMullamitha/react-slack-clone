import React from "react";
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import "./App.css";

import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';

const App = ({ currentUser }) => {
    return (
        <Grid columns="equal" className="app" style={{ backgroundColor: "#eee" }}>
            <ColorPanel />
            <SidePanel currentUser={currentUser} />
            
            <Grid.Column style={{ marginLeft: 320, paddingTop: '24px' }}>
                <Messages />
            </Grid.Column>
            
            <Grid.Column width={4} style={{ paddingTop: '24px' }}>
                <MetaPanel />
            </Grid.Column>
        </Grid>  
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(App);