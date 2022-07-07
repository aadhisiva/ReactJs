import { Component } from "react"
import "./styles.css";


class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Mosesh",
            student: "B.tech"
        }
    }
    // inline/, internal, external
    render() {
        const stleFormate = {
            color: "red",
        }
        return (
            <div>
                <h1 style={stleFormate} >{this.state.name}</h1>
                <h1 class="app">{this.state.isStudent ? "Boys" : "girls"}</h1>
                <ClassChild  pass={this.state.name} passOne={122345678}/>
                <ClassChildTwo passTwo={this.state.student}/>
            </div>
        )
    }
}


class ClassChild extends ClassComponent {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        const {pass, passOne} = this.props;
        return (
            <>
            <h1>Hello: {pass + " "+ passOne}</h1>
            </>
        )
    }

}

class ClassChildTwo extends ClassComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: "hello"   
        }
    }
    render() {
        return (
            <>
            <h1>Hello: {this.props.passTwo +" "+ this.state.name}</h1>
            firstname : <input type="text" name="firstname" /><br/>
            secondname : <input type="text" name="secondname" />
            </>
        )
    }

}


export default ClassComponent; 