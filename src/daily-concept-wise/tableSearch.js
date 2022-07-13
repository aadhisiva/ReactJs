import React from "react";

const arrayData = [
    {
        name: "siva",
        category: "student"
    },
    {
        name: "aadhi",
        category: "student"
    },
    {
        name: "panjagala",
        category: "student"
    },
    {
        name: "naveen",
        category: "teacher"
    },
    {
        name: "mosesh",
        category: "student"
    },
    {
        name: "bala",
        category: "student"
    },
    {
        name: "subbu",
        category: "student"
    },
    {
        name: "narayana",
        category: "student"
    },
]
export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchvalue : ""
        }
    }
    componentDidMount() {
        this.setState((prev) => ({
            ...prev,
            data: arrayData
        }))
    };
    render() {
        // console.log("this ::", this.state.searchvalue);
        const handleChange = (e) =>{
            this.setState((prev) => ({
                ...prev,
                searchvalue: e.target.value
            }))
        }
        return (
            <div>
                Search : <input type={"search"} onChange={handleChange} />
                <table className="table" style={{padding: "10px"}}>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                    {(this.state.data || []).filter((element) => {
                       if(this.state.searchvalue === ""){
                        return this.state.data;
                       } else if(element['name'].toLowerCase().includes(this.state.searchvalue.toLowerCase())){
                        return element;
                       } else if(element['category'].toLowerCase().includes(this.state.searchvalue.toLowerCase())){
                        return element;
                       }
                    }).map((obj, i) => {
                        return (
                            <tr>
                                <td>{obj.name}</td>
                                <td>{obj.category}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}