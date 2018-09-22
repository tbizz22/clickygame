import React, { Component } from 'react';
import Card from './Card';
import GameScore from './Score';
import teams from '../team.json';



class GridContainer extends Component {
    state = {
        teams,
        score: {
            currentScore: 0,
            maxScore: 0,
        }
    };

    // component mount

    // randomize team array


    // register a team as clicked
    clickItem = (id) => {
        console.log("made it here")
        // get team
        const teamClicked = this.state.teams.filter(team => {
            return team.id === id;
        })[0]
        console.log(teamClicked)
    
        // is the item already clicked 

        
        // {
            // game over
        // } else 
        //  increase score
    
    }
    // check if current score is greater than max score

    // increase score

    // reset game


    // win screen

    render() {
        return (
            <div>
                {/* <GameScore /> */}
                <div className="container">
                    <div className='row'>
                        {this.state.teams.map(team => (
                            <Card
                                id={team.id}
                                key={team.id}
                                name={team.name}
                                city={team.city}
                                clicked={team.clicked}
                                image={team.image}
                                clickItem={this.clickItem}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}





export default GridContainer;