import React, { Component } from 'react';

//import Flag from 'react-native-flags';

import Flag from 'react-native-round-flags';

const Team = ({ team }) => (
  
  
  <Flag code={team.iso2} />

  );


export default Team;

