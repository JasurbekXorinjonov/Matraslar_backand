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

function upsertCategory({ token, item, ...props }) {
  const form = useRef({ category: "" });
  console.log("form", form);
  const create = () => {
    fetch("http://localhost:1212/admin/categories", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.current),
    })
      .then((res) => res.json())
      .then(() => {
        props.onSave();
      });
  };
  const update = () => {
    fetch(`http://localhost:1212/admin/categories/${item.id}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.current),
    })
      .then((res) => res.json())
      .then(() => {
        props.onSave();
      });
  };
  const close = () => {
    props.onClose();
  };

  const save = () => {
    console.log("form save", form);
    item.id ? update() : create();
  };
  return (
    <Modal open={true} onClose={close}>
      <ModalContent>
        <Stack spacing={2}>
          <Typography variant="h4">{item?.id ? "Tahrirlash" : "Qo'shish"}</Typography>
          <div>
            <label htmlFor="category">Kategoria nomi</label>
            {form.current.category}
            <input
              style={{ padding: "15px" }}
              name="category"
              type="text"
              ref={form.category}
              placeholder="masalan: Model B"
            />
          </div>

          <Button variant="contained" onClick={save}>
            Saqlash
          </Button>
          <Button variant="contained" onClick={close}>
            Bekor qilish
          </Button>
        </Stack>
      </ModalContent>
    </Modal>
  );
}

export default upsertCategory;
