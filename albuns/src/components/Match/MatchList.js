
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Match from './Match';
//

class MatchList extends Component {

   
    state = { matches: [] }

    componentWillMount() {
         // eslint-disable-next-line
        fetch('http://localhost:3000/matches')
            .then((response) => response.json())
            .then((responseData) => this.setState({ matches: responseData }));
    }

    renderMatches() {
        
        return this.state.matches.map(match => 
         <Match key={match.id} match={match} />
        );
    }
    render() {
        console.log(this.state);
        return (
         <ScrollView>
              {this.renderMatches()}
          </ScrollView>
                     
            
        );
    }
}

export default MatchList;
