import React from 'react';
import Auxiliray from '../../hoc/Auxiliary'

const layout = (props) => (
<Auxiliray>
<div>Toolbar, SideDrawer, Backdrop</div>
<main>
    {props.children}
</main>
</Auxiliray>    
)

export default layout;