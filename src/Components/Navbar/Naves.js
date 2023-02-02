import { Nav, Navbar} from "react-bootstrap";
import "./Navbares.css";
import React from "react";

function Naves() {
  return (









    
    <header className="fa">
      <div className="row">
        <div id="EE" className="col-md-6 col-9">
         
          <h3 className="mon">INTERIOR</h3>
        </div>

        <div className="col-md-6 col-3 ">
          <Navbar expand="lg mt-2 ">
            
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="FAZ">
                
  
                    <a href="#HOME">HOME</a>
    
               
               
                    <a href="#BEDROOM">BEDROOM</a>
               
              
         
                    <a href="#LIVING">LIVING</a>
                  
           
             
                    <a href="#DINING">DINING</a>
               
             
              
                    <a href="#COUTYARD">COUTYARD</a>
                 
             
                    <a href="#KITCHEN">KITCHEN</a>
                 
                </Nav>
              </Navbar.Collapse>
        
          </Navbar>
        </div>
      </div>
    </header>
  );
}

export default Naves;
