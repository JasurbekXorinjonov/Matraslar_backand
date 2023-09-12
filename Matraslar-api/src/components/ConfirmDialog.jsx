import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";

function ConfirmDialog(props) {
  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Haqiatdan ham o'chirmoqchimisiz?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            props.onConfirm();
          }}>
          Ha
        </Button>
        <Button
          onClick={() => {
            props.onCancel();
          }}
          autoFocus>
          Yo'q
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
