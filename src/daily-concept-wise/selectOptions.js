import React, { Component } from "react";

class SelectOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            isOpen: false,
            selectvalue: 0,
            data: []
        }
    }

    async componentDidMount() {
            // fetch("https://jsonplaceholder.typicode.com/posts")
            //     .then((res) => {
            //         res.json().then((res) => {
            //             this.setState((prev) => ({
            //                 ...prev,
            //                 data: res
            //             }));
            //             // console.log("Res",res)
            //         });
            //     }).catch((err) => {
            //         return err;
            //     });
            setTimeout(async () => {
            let resData = await fetch("https://jsonplaceholder.typicode.com/posts");
            let resJson = await resData.json();
            this.setState((prev) => ({
                ...prev,
                data: resJson
            }));
        }, 2000);


    }

    render() {
        console.log("check ::", this.state.data);
        // const handleClick = () => {
        //     this.setState((prev) => ({
        //         ...prev,
        //         selectvalue: 0
        //     }));
        // }
        // const handleChange = (e) => {
        //     this.setState((prev) => ({
        //         ...prev,
        //         selectvalue: e.target.value
        //     }));
        // }
        // console.log("e ::", this.state.selectvalue);
        return (
            <div>
                {/* <button onClick={handleClick}>Select Options</button>
                {this.state.isOpen && */}
                {/* <select onChange={handleChange} style={{width: "20%"}}>
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                    <option value="4">option 4</option>
                </select>
                <button onClick={handleClick}>Remove the value</button> 
                 */}
                 <table style={{width: "100%"}}>
                    <tr>
                        <th>user id</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                    {(this.state.data || []).map((obj)=>{
                        return (
                            <tr>
                                <td>{obj.userId}</td>
                                <td>{obj.id}</td>
                                <td>{obj.title}</td>
                                <td>{obj.body}</td>
                            </tr>
                        )
                    })};
                 </table>
            </div>
        )
    }
}

export default SelectOptions;