import React, { useState } from 'react';
import Toolbar from './Components/Navbar/Toolbar';
import SideDrawer from './Components/Navbar/SideDrawer';
import BackDrop from './Components/Navbar/Backdrop';


function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerBtnClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  }
  const closeDrawer = () => {
    setDrawerOpen(false);
  }


  let backdrop;
  if (drawerOpen) {
    backdrop = <BackDrop onClick={closeDrawer} />;
  }

  
  return (
    <div style={{ height: '100%' }}>
      <Toolbar drawerBtnClickHandler={drawerBtnClickHandler} />
      <SideDrawer show={drawerOpen} />
      {backdrop}

      <main style={{marginTop:70 ,marginRight:15,marginLeft:15}}>
        <p style={{color:'#511845'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non velit ac mauris vestibulum semper. Nulla a lectus ultrices, congue ipsum nec, convallis est. Aliquam auctor augue arcu, at tincidunt tortor auctor suscipit. Nullam aliquam urna vel erat scelerisque bibendum. Nam semper hendrerit metus, at euismod sapien feugiat sed. Vivamus odio lectus, porta nec nibh eget, fringilla viverra sapien. Nulla molestie nisl sed facilisis vehicula.</p>
      </main>
    </div>
  );
}

export default App;
