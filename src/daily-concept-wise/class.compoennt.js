import { Component } from "react"
import "./styles.css";

class ClassComponent extends Component {
    constructor(props){
        super(props)
         this.state = {
            name: "Hello",
            isStudent: true
         }
    }
    // inline/, internal, external
    render(){
        const stleFormate = {
            color: "red",
        }
        return (
            <div>
                <h1 style={stleFormate} >{this.state.name}</h1>
                <h1 class="app">{this.state.isStudent? "Boys" : "girls" }</h1>
                <h1 id="id">{this.state.isStudent? "Boys" : "girls" }</h1>
            </div>
        )
    }

}

export default ClassComponent; 