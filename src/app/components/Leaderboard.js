import React from "react";

export class Leaderboard extends React.Component  {
    constructor(props) {
        super(props);
    }

render() {
    let users = "";
    if (Array.isArray(this.props.campers)) {
        users = this.props.campers.map( (val, i) => {
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
                        <th onClick={this.props.changeToRecent.bind(this)}>
                            <a href="#">Recent</a>
                        </th>
                        <th onClick={this.props.changeToAllTime.bind(this)}>
                            <a href="#">All Time</a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
        </table>
        )
    }
}
