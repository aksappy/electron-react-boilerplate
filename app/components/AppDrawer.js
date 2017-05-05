import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

const AppDrawer = ({toggle, toggleDrawer}) => (
    <Drawer open={toggle}>
        <MenuItem onClick={toggleDrawer}>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
)

class AppDrawers extends Component {
    constructor(props) {
        super(props);
    }
    render() {
         cosole.log("before rendering", this.props);
        return (
            <div>
                This is the drawer Component
                <input type="text" value={this.props.toggle}/>
                <button onClick={this.props.toggleDrawer}>Click me</button>
            </div>
        )
    }
}

export default AppDrawer;