import React from "react";

class ControlledComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: "",
            // number: 0,
            // address:"",
            // pin: 0,
            formData: {}
        }
    }
    render() {
      const handleSumbmit =(e) => {
          e.preventDefault();
          console.log(this.state.formData);
        }
       const handleChange =(e) => {
            let form = this.state.formData || {};
            const {name, value} = e.target;
            form[name] = value
            this.setState((prev)=>({
                ...prev,
                 [name]: value,
                 formData: form
            }));
        };
        return (
            <div>
                <h1>Hello controlled Component</h1>
                <form onSubmit={handleSumbmit}>
                    <input type={"text"} name="name" placeholder="name" onChange={handleChange} /><br/>
                    <input type={"number"} name="number" placeholder="number" onChange={handleChange} /><br/>
                    <input type={"text"} name="address" placeholder="address" onChange={handleChange} /><br/>
                    <input type={"number"} name="pin" placeholder="pin" onChange={handleChange} /><br/>
                    <input type={"submit"} value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledComponent;

// class UnControlledComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.name = React.createRef();
//         this.second = React.createRef();
//     }
//     handleSumbmit(e) {
//         e.preventDefault();
//         this.name.current.focus();
//         this.second.current.focus();
//         console.log("first ::",this.name.current.value)
//         alert(this.name.current.value +" "+this.second.current.value);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello controlled Component</h1>
//                 <form onSubmit={(e) => this.handleSumbmit(e)}>
//                     first: <input type={"text"} ref={this.name} /><br/>
//                     second: <input type={"text"} ref={this.second} /><br/>
//                     <input type={"submit"} value="Submit" />
//                 </form>
//             </div>
//         )
//     }
// }

// export default UnControlledComponent;