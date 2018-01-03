import React, { Component } from 'react';

import Flag from 'react-native-flags';

//import Flag from 'react-native-round-flags';

class Team extends Component {
  render() {

    let name = this.props.team.name;
    let reducedName = this.props.team.name;
    let isoFlagName = this.props.team.iso2.toUpperCase();
    let flag = null;
    let size = '2x';
    let team = null;



 
    flag = <Flag code={isoFlagName} />;

    
    return flag;

  };
}

// Team.propTypes = {

// isoFlagName: PropTypes.string.isRequired


// }
export default Team;




