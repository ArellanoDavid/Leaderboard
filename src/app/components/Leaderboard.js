import React from "react";

export class Leaderboard extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            currentState: props
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentState: nextProps
        })
    }

render() {
    let users = "";
    if (Array.isArray(this.state.currentState.campers)) {
        users = this.state.currentState.campers.map( (val, i) => {
            return (
                <tr key={i}>
                    <th>{i + 1}</th>
                    <th>
                        <img src={val.img} alt="pic"/>
                        <a href={`http://www.freecodecamp.com/${val.username}`} target="_blank">{val.username}</a>
                    </th>
                    <th>{val.recent}</th>
                    <th>{val.alltime}</th>
                </tr>
            )
        })
    }
    return (
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Recent</th>
                        <th>All Time</th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
        </table>
        )
    }
}
