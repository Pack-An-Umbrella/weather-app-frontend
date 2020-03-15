import React from 'react';

import './App.css';

// Met Office site list, hosted on a static page
const endpoint = 'https://gist.githubusercontent.com/notwaving/fbccd9e3c668d2da884a0231a44a1bfa/raw/d4544793a8f9d3c377df8916823aa674e5528896/all-locations.json';
// Create an empty array
const locations = [];

fetch(endpoint)
// Grab JSON data
  .then(blob => blob.json())
  // Clean up data: if object is missing 'name' or 'unitaryAuthArea', don't break out of code
  .then(data => data.map(item => {
    item.name = item.name || ''
    item.unitaryAuthArea = item.unitaryAuthArea || ''
    return item
  }))
  // Get this data into locations array by spreading into a push method
  .then(data => locations.push(...data))

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