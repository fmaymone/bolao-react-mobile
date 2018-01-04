import React, { Component } from 'react';
import { Text, View, Linking} from 'react-native';

import { CardSection, Card, Button } from '../common/';



import Team from '../Team';
import axios from 'axios';


class Match extends Component {

    state = {

        away: [],
        home: []
    
    }
    
    componentWillMount() {

        this.setState({ away: [] });

        const awayUrl = 'http://localhost:3000/teams/' + this.props.match.away_team;
        const homeUrl = 'http://localhost:3000/teams/' + this.props.match.home_team;
    
    
        axios.get(awayUrl)
          .then(response => {
            console.log("Dentro do away");
            console.log(response.data);
            this.setState({ away: response.data });
            console.log(this.state.away);
            console.log("Dentro do away");
          })
          .catch((error) => {
            console.log("error", error);
          });
    
        axios.get(homeUrl)
          .then(response => {
            console.log("Dentro do home");
            console.log(response.data);
            this.setState({ home: response.data });
            console.log(this.state.home);
            console.log("Dentro do home");
          });
      
    
      }
      render() {

        return (

   
    
   
        <Card>
            <CardSection>
            <View><Text>{this.props.match.id}</Text></View>
                <View style={styles.matchContainerStyle}>
                    <View><Team team={ this.state.home } /></View>
                    <View><Team team={ this.state.away }/></View>
                </View>
            </CardSection>
            <CardSection>

            <Button onPress={() => Linking.openURL('http://www.uol.com.br')}>Estatisticas </Button>
            </CardSection>
        </Card>
    );

}

}

const styles = {

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    matchContainerStyle: {
        flexDirection: 'row',
        flex: 1,
     
        justifyContent: 'space-between'
    },
    homeTeam: {


    }

};
export default Match;
