import React from 'react';


class HeaderLocation extends React.Component {

  render() {
    return (
      <div>
            <header className="text-center"></header>
            <h1 className="titleheaderh">{this.props.currentLocation}</h1>
        </div>

    );
  }
}

export default HeaderLocation