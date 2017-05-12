import React from "react";
import { render } from "react-dom";
import axios from "axios";

import { Leaderboard } from "./components/Leaderboard"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            recent: [],
            allTime: [],
            currentState: "test"
        }
    };

    getRecent() {
        return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
    }

    getAllTime() {
        return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
    }

    componentWillMount() {
    axios.all([this.getRecent(), this.getAllTime()])
        .then(axios.spread( (recent, allTime) => {
            this.setState({
                recent: recent.data,
                allTime: allTime.data,
                currentState: recent.data
            })
        }))
    }

    render() {
        return (
            <div>
                <div className="navbar navbar-default">
                    <a
                        className="navbar-brand"href="http://www.freecodecamp.com"
                        target="_blank">FreeCodeCamp</a>
                </div>
                <button
                    onClick={ () => this.setState({currentState: this.state.recent})}
                    className="btn btn-primary">Recent
                </button>
                <button
                    onClick={ () => this.setState({ currentState: this.state.allTime})}
                    className="btn btn-primary">All Time
                </button>
                <div className="container">
                    <Leaderboard campers={this.state.currentState}

                    />
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("app"));
