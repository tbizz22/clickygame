import React, { Component } from 'react';
import Card from './Card';
import GameScore from './Score';
import Teams from '../team.json';



class GridContainer extends Component {
    state = {
        teams: Teams,
        currentScore: 0,
        maxScore: 0,
        randomTeams: []
    };

    // component mount
    componentDidMount() {
        const randomTeams = this.shuffleArray(this.state.teams);
        this.setState({ randomTeams: randomTeams });
    };

    // randomize team array
    // direct copy from stack overflow. I feel no shame :D
    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
        }
        return array;
    };


    // register a team as clicked
    clickItem = (id) => {
        // get team
        const teamClicked = this.state.teams.filter(team => {
            return team.id === id;
        })[0];

        const teamLocationinIndex = this.state.teams.findIndex(team => {
            return team.id === id;
        });

        console.log(teamClicked)
  
        // is the item already clicked 
        if (teamClicked.clicked === true) {
            // game over
            alert("you already clicked this.")
            this.resetGame()
        } else {
            //  increase score   
            // check if current score is greater than max score 
            const currentScore = this.state.currentScore + 1;
            this.setState({
                currentScore: currentScore,
                maxScore: (currentScore >= this.state.maxScore) ? currentScore : this.state.maxScore
            });
        
            //  modify state 
            const teamStateCopy = this.state.teams;
            teamStateCopy[teamLocationinIndex].clicked = true;

            this.setState({
                teams: teamStateCopy
            });
        }
        // Shuffle up and deal       
        this.shuffleArray(this.state.teams)
    };
    

    // reset game
    resetGame = () => {
        this.setState({
            currentScore: 0
        });

        const tempArray = this.state.teams;
        tempArray.forEach(team => {
            team.clicked = false
        });
        this.setState({ teams: tempArray });
    };



    // win screen

    render() {
        return (
            <div>
                <GameScore
                    currentScore={this.state.currentScore}
                    maxScore={this.state.maxScore}
                />
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
    };
};





export default GridContainer;