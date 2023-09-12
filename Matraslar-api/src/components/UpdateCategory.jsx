import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";

const ModalContent = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  backgroundColor: "white",
  padding: 16,
  textAlign: "center",
});

function UpdateCategory({ token, item, ...props }) {
  let sx = useRef("");

  const saveEdit = () => {
    fetch("http://localhost:1212/admin/categories/1", {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: sx.current.value,
        isActive: true,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        props.saveEdit();
      });
  };

  const closeEdit = () => {
    props.onClose();
  };

  return (
    <Modal open={true} onClose={close}>
      <ModalContent>
        <Stack spacing={2}>
          <Typography variant="h4">Qo'shish</Typography>
          {item}
          <div>
            <label htmlFor="category">Kategoria nomi</label>
            <input
              style={{ padding: "15px" }}
              name="category"
              type="text"
              ref={sx}
              placeholder="masalan: Model B"
            />
          </div>

          <Button variant="contained" onClick={saveEdit}>
            Saqlash
          </Button>
          <Button variant="contained" onClick={closeEdit}>
            Bekor qilish
          </Button>
        </Stack>
      </ModalContent>
    </Modal>
  );
}

export default UpdateCategory;
