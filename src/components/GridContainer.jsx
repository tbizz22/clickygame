import React, { Component } from 'react';
import Card from './Card';
import GameScore from './Score';
import Teams from '../team.json';



class GridContainer extends Component {
    state = {
        teams: Teams,
        score: {
            currentScore: 0,
            maxScore: 0,
        }
    };

    // component mount

    // randomize team array


    // register a team as clicked
    clickItem = (id) => {
        // get team
        const teamClicked = this.state.teams.filter(team => {
            return team.id === id;
        })[0]

        const teamLocationinIndex = this.state.teams.findIndex(team => {
            return team.id === id;
        }
        )



        console.log('teamclicked' + teamClicked)
        console.log('teamindex' + teamLocationinIndex)
        // is the item already clicked 
        if (teamClicked.clicked === true) {
            // game over
            alert("you already clicked this.")
        } else {
            //  increase score


            //  modify state 
            const teamStateCopy = this.state.teams
            
            teamStateCopy[teamLocationinIndex].clicked = true
            this.setState({
                teams:teamStateCopy
            })
        }





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