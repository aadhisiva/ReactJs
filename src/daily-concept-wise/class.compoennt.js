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
        };
        return (
            <div>
                <h1 style={stleFormate} >{this.state.name}</h1>
                <h1 class="app" style={{ color: "red" }}>{this.state.isStudent ? "Boys" : "girls"}</h1>
                <ClassChild pass={this.state.name} passOne={122345678} />
                <ClassChildTwo passTwo={this.state.student} />
                <LifeCycles />
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
        // const {pass, passOne} = this.props;
        return (
            <>
                <h1>Hello: {this.props.pass + " " + this.props.passOne}</h1>
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
                <h1>Hello: {this.props.passTwo + " " + this.state.name}</h1>
                firstname : <input type="text" name="firstname" /><br />
                secondname : <input type="text" name="secondname" />
            </>
        )
    }
}

class LifeCycles extends ClassComponent {
    constructor(props) {
        super(props)
        this.state = {
            studentName: "",
            isShow: false
        }
        // this.handleChange = this.handleChange.bind(this);
    }
    // it will reset the data whenever page rerenders
    componentDidMount() {
        // code
        // this.setState((prev)=>({
        //     ...prev,
        //     name : "life cycke"
        // }))
    };
    // is invoked immediately before a component is unmounted and destroyed
    componentWillUnmount() {
        // code
    };
    // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    componentDidUpdate() {
        // code
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState((prev) => ({
            ...prev,
            isShow: true
        }))
    }
    handleChange(e) {
        // sythetic event
        // console.log("enterdaat :::",e.target.value);
        this.setState((prev) => ({
            ...prev,
            studentName: e.target.value
        }));
    }
    render() {
        // function Gree(){
        //     return new Promise((resolve, reject)=>{
        //         if(1 ==1){
        //             resolve("true")
        //         } else {
        //             reject("false")
        //         }
        //     })
        // }

        const handleClick = () => {
            this.setState((prev) => ({
                ...prev,
                isShow: true
            }))
        }
        console.log("show ::",this.state.isShow)
        return (
            <>
                {/* <h1>Hello: {this.state.name}</h1>
            name :<input type="text"  placeholder="name" value={this.state.studentName} onChange={handleChange} />
            <input type="button" value="ok" onClick={handleClick} /><br/>
            <strong>Entering value : </strong><h1>{this.state.isShow ? this.state.studentName : ""}</h1> */}
                <form onSubmit={(e) =>this.handleSubmit(e)}><br />
                    <input type="text" placeholder="name" value={this.state.studentName} onChange={(e)=>this.handleChange(e)} /><br />
                    <button type="submit">Submit</button>
                    <strong>Entering value : </strong><h1>{this.state.isShow ? this.state.studentName : ""}</h1>
                </form>
            </>
        )
    }

}


export default ClassComponent; 