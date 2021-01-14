import React from 'react';
import '../CSS/Header.css';
import { Nav} from 'reactstrap';
export default function Header() {
  return (
    <div className="header__title">
     <Nav style={{alignItems:"center",textAlign:"center",paddingLeft:"700px",
    paddingBottom:'50px'}}>
       HOME
     </Nav>
    </div>
  );
}
