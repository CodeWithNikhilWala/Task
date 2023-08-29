import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const Search = () => {
  const searchContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF0B2',
    padding: '10px',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const searchInputStyle = {
    marginRight: '10px',
    borderRadius: '20px',
    border: 'none',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '8px 15px',
    minWidth: '200px',
  };

  const buttonStyle = {
    borderRadius: '20px',
    marginTop: '10px', 
  };

  return (
    <div style={searchContainerStyle}>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          style={searchInputStyle}
        />
        <Button variant="outline-success" style={buttonStyle}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Search;
