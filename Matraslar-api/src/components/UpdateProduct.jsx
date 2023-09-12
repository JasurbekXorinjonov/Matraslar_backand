import { Button, Modal, Stack, Switch, Typography, styled, CardMedia, Card } from "@mui/material";
import React from "react";
const ModalContent = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  backgroundColor: "white",
  padding: 16,
  textAlign: "center",
});

function UpdateProduct({ token, item }) {
  return (
    <Modal open={true} onClose={close}>
      <ModalContent>
        <Button
          variant="contained"
          sx={{ position: "absolute", top: 0, right: 0, background: "#01384D" }}>
          X
        </Button>
        <Stack spacing={2}>
          <Typography variant="h4" sx={{ textAlign: "left" }}>
            {item?.id ? "Tahrirlash" : "Qo'shish"}
          </Typography>
          <Stack direction={"row"} spacing={4}>
            {/* {form.current.category} */}
            <Card sx={{ maxWidth: 345, height: "230px" }}>
              <CardMedia
                title="asdasd"
                component="img"
                image=""
                alt="img"
                height="230"
                sx={{ width: "230px" }}
              />
            </Card>
            <Stack spacing={1}>
              <label htmlFor="category" style={{ textAlign: "left" }}>
                Toifalar
              </label>
              <select id="tiofalar" name="category" form="toifaform">
                <option value="Modal A">Modal A</option>
                <option value="Modal B">Modal B</option>
                <option value="Modal D">Modal D</option>
                <option value="Modal C">Modal C</option>
              </select>
              <label htmlFor="tovarnomi" style={{ textAlign: "left" }}>
                Tovar nomi
              </label>
              <input type="text" placeholder="masalan: Lux Soft Memory" />
              <label htmlFor="narxi" style={{ textAlign: "left" }}>
                Narxi
              </label>
              <input type="text" placeholder="masalan: 20 000" />
              <label htmlFor="yuklama" style={{ textAlign: "left" }}>
                Yuklama
              </label>
              <input type="text" placeholder="masalan: 200 kg" />
            </Stack>
            <Stack spacing={1}>
              <label htmlFor="razmeri" style={{ textAlign: "left" }}>
                Razmeri
              </label>
              <input type="text" placeholder="masalan: 200 x 140 x 40" />
              <label htmlFor="kafolat" style={{ textAlign: "left" }}>
                Kafolat
              </label>
              <input type="text" placeholder="masalan: 1: yil" />
              <label htmlFor="narxi" style={{ textAlign: "left" }}>
                Sig'm
              </label>
              <input type="text" placeholder="masalan: 2" />
              <label htmlFor="yuklama" style={{ textAlign: "left" }}>
                Aksiya Narxi
              </label>
              <input type="text" placeholder="masalan: 1 200 000" />
            </Stack>
            <Stack spacing={1}>
              <label htmlFor="razmeri" style={{ textAlign: "left" }}>
                Ma'lumot
              </label>
              <textarea name="" id="" cols="30" rows="5" placeholder="info..."></textarea>
              <Stack direction={"row"} spacing={15} sx={{ my: "15px" }}>
                <Typography variant="subtitle1">Navinla</Typography>
                <Switch />
              </Stack>
              <Stack direction={"row"} spacing={16}>
                <Typography variant="subtitle1">Active</Typography>
                <Switch />
              </Stack>
              <Button variant="contained" sx={{ background: "#01384D" }}>
                Qo'shish
              </Button>
            </Stack>
            {/* <input
              style={{ padding: "15px" }}
              name="category"
              type="text"
              ref={form.category}
              placeholder="masalan: Model B"
            /> */}
          </Stack>
        </Stack>
      </ModalContent>
    </Modal>
  );
}

export default UpdateProduct;
