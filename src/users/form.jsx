import * as React from 'react';
import { Button, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function DraggableDialog(props) {

    const {
        formData,
        handleClickOpen,
        handleClose,
        handleChange,
        handleSubmit,
    } = props;

    return (
        <div>
            <Dialog
                open={handleClickOpen}
                onClose={handleClose}
            >
                <DialogTitle>
                    Subscribe
                </DialogTitle>
                <DialogContent>
                    <TextField
                        style={{ padding: '10px' }}
                        name="userId"
                        autoFocus
                        value={formData && formData.userId  }
                        margin="dense"
                        label="User ID"
                        onChange={(e) => handleChange(e)}
                        type="number"
                        fullWidth
                    />
                    <TextField
                        style={{ padding: '10px' }}
                        name="id"
                        autoFocus
                        value={formData && formData.id  }
                        margin="dense"
                        label="Id"
                        onChange={(e) => handleChange(e)}
                        type="number"
                        fullWidth
                    />
                    <TextField
                        style={{ padding: '10px' }}
                        name="title"
                        autoFocus
                        margin="dense"
                        value={formData && formData.title}
                        label="Title"
                        type="text"
                        onChange={(e) => handleChange(e)}
                        fullWidth
                    />
                    <TextField
                        style={{ padding: '10px' }}
                        name="body"
                        autoFocus
                        margin="dense"
                        value={formData && formData.body}
                        onChange={(e) => handleChange(e)}
                        label="Body"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus color={'error'} variant={'outlined'} onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button color={'primary'} variant={'outlined'} onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}