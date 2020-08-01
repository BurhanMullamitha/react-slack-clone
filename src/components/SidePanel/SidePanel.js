import React from 'react';
import UserPanel from './UserPanel';
import Channels from './Channels';
import { Menu } from 'semantic-ui-react';

class SidePanel extends React.Component {
    render() {
        const { currentUser } = this.props; 
        return (
            <Menu 
                size="large"
                inverted
                vertical
                fixed="left"
                style={{ backgroundColor: '#4c3c4c', fontSize: '1.2rem' }}
            >
                <UserPanel currentUser={currentUser} />
                <Channels />
            </Menu>
        );
    }
}

export default SidePanel;