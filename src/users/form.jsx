import * as React from 'react';
import { Button, Input } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
// import Draggable from 'react-draggable';

// function PaperComponent(props) {
//   return (
//     <Draggable
//       handle="#draggable-dialog-title"
//       cancel={'[class*="MuiDialogContent-root"]'}
//     >
//       <Paper {...props} />
//     </Draggable>
//   );
// }

export default function DraggableDialog(props) {

    const {
        formData,
        handleClickOpen,
        handleClose,
        open
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
                    <Input name="name" placeholder='name' />
                    <Input name="name" placeholder='name' /><br />
                    <Input name="name" placeholder='name' />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}