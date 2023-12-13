import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Collapse, Row, Col, Card } from 'react-bootstrap';
import './Sidebar.css';


function Sidebar({ handleExperienceChange, handleLocationChange, locations }) {

  return (
  
    <div className='Sidebar'>
          <p>Filter By</p>
          <Button
        data-bs-toggle="collapse"
        data-bs-target="#collapseyoe"
        aria-expanded="false"
        aria-controls="collapseyoe"
        className="collapsible-button"
      >
        Year of experience
      </Button>
      <Collapse id="collapseyoe">
        <Card className="card">
          <label>
            <input type="checkbox" value="entry-level" />
            Entry Level
          </label>
          <label>
            <input type="checkbox" value="Junior-level" />
            Junior Level
          </label>
          <label>
            <input type="checkbox" value="mid-level" />
            Mid Level
          </label>
          <label>
            <input type="checkbox" value="senior-level" />
            Senior Level
          </label>
        </Card>
      </Collapse>
      <Button
        data-bs-toggle="collapse"
        data-bs-target="#collapselocation"
        aria-expanded="false"
        aria-controls="collapselocation"
        className="collapsible-button"
      >
        Company{''}
      </Button>
      <Collapse id="collapselocation">
        <div></div>
      </Collapse>
    </div>
   
  );
}

export default Sidebar;



