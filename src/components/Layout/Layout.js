import React from 'react';
import Auxiliray from '../../hoc/Auxiliary'
import classes from './Layout.css';

const layout = (props) => (
<Auxiliray>
<div>Toolbar, SideDrawer, Backdrop</div>
<main className={classes.Content}>
    {props.children}
</main>
</Auxiliray>    
)

export default layout;