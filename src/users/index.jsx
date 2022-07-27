import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, IconButton, Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material"
import { Component, useState } from "react";
import DraggableDialog from "./form";

let array = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      } 
];
class Users extends Component {
    state = {
        formData: {},
        data: array || [],
        editForm: false,
        editId: 0,
        addForm: false,
        formOpen: false,
        indexValue: 0
    }

    handleClick = async (id) => {
        // console.log("id :::", id);
        delete this.state.data[Number(id) - 1];
        console.log(this.state.data)
        this.setState((prev) => ({
            ...prev,
            data: this.state.data
        }))

    }

    handleEditClick = (id, i) => {
        this.setState((prev) => ({
            ...prev,
            editForm: true,
            editId: id,
            indexValue : i
        }))
    }
    handleClickOpen = () => {
        this.setState((prev) => ({
            ...prev,
            formOpen: true
        }))
    };

    handleClose = () => {
        this.setState((prev) => ({
            ...prev,
            editForm: false,
            formOpen: false,
            addForm: false
        }))
    };

    handleInputChange = (e) => {
        let formData = this.state.formData || {};
        const { name, value } = e.target;

        formData[name] = value;
        this.setState({
            formData
        });
    };

    handleSubmit = () => {
        let obj = array.push(this.state.formData);
        // console.log("obj" ,this.state.formData);
        this.setState((prev) => ({
            ...prev,
            data: array,
            addForm: false
        }));
    }

    handleADD = () => {
        this.setState((prev) => ({
            ...prev,
            addForm: true
        }))
    }
    handleEdit = () => {
        let data = (array || []).find(element => element.id == this.state.editId);
        array[this.state.indexValue] = this.state.formData
        // console.log("edit ::", replaceData)
        this.setState((prev) => ({
            ...prev,
            data: array,
            editForm: false
        }))
    }

    getFormContent = () => {
        if (this.state.editForm) {
            return (
                <DraggableDialog
                    formData={(array || []).find(element => element.id == this.state.editId)}
                    handleClickOpen={this.handleClickOpen}
                    handleClose={this.handleClose}
                    handleChange={this.handleInputChange}
                    handleSubmit={this.handleEdit}
                    open={this.state.formOpen}
                />
            )
        } else {
            if(this.state.addForm){
                return (
                    <DraggableDialog
                        formData={this.state.formData}
                        handleClickOpen={this.handleClickOpen}
                        handleClose={this.handleClose}
                        handleChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                        open={this.state.formOpen}
                    />
                )

            }
        }
    }
    render() {
        // console.log("Sdvcjsdvhsd", this.state.data)
        return (
            <div>
                {(this.state.editForm || this.state.addForm) ? this.getFormContent() : ("")}
                <Button autoFocus style={{ marginLeft: '90%' }} color={'primary'} variant={'outlined'} onClick={this.handleADD}>
                    Add
                </Button>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>UserId</TableCell>
                                <TableCell>Id</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Body</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                (this.state.data || []).map((obj, i) => {
                                    return (
                                        <TableRow key={obj.i} >
                                            <TableCell>{obj.userId}</TableCell>
                                            <TableCell>{obj.id}</TableCell>
                                            <TableCell>{obj.title}</TableCell>
                                            <TableCell>{obj.body}</TableCell>
                                            <TableCell><IconButton style={{ color: "red" }} aria-label="delete" onClick={(e) => this.handleClick(obj.id)}>
                                                <Delete />
                                            </IconButton>
                                                <IconButton style={{ color: "blue" }} aria-label="edit" onClick={(e) => this.handleEditClick(obj.id, i)}>
                                                    <Edit />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default Users;