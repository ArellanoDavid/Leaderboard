import React from "react";
import { render } from "react-dom";
import axios from "axios";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: []
        }
    };
    componentDidMount() {
    axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
        .then( res => {
        console.log(res.data)
            this.setState({
                username: res.data
            });
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.username.map(val => <li key={val.username}>{val.username}</li>)}
                </div>
                
                <div>
                    {this.state.username.map(val => <img key={val.username} src={val.img}/>)}
                </div>

                <div>
                    {this.state.username.map(val => <li key={val.username}>{val.alltime}</li>)}
                </div>

                <div>
                    {this.state.username.map(val => <li key={val.username}>{val.recent}</li>)}
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("app"));
