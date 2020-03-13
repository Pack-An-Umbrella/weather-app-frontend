import React from 'react';
class TypeaheadForm extends React.Component {

  render() {
    return (

   <>
        <form>
        <div className="form-group row">
            <input type="text" className="search" placeholder="Place or area">
              <ul className="suggestions">
                <li>Filter for a place</li>
                <li>or an area</li>
              </ul>
          </div>
    </form>

  </>

        )
    
    }
}
    
export default TypeaheadForm;