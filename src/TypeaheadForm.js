import React from 'react';

import './App.css';

class TypeaheadForm extends React.Component {

  render() {
    return (

      // <div>
      //   <p>Where location search bar will be</p>
      // </div>


    <form>
        <div className="search-form">
        {/* <label htmlFor="inputLocation">Enter Location</label> */}
          <input type="text" className="search" placeholder="Place or area" />
          {/* This adds a button, but with no styling, so commenting out for now
          <button type="submit" className="" onClick="">Add</button> */}
        </div>
    </form>

    );
  }
}  
    
export default TypeaheadForm;