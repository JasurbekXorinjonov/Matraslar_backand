import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Maxsulotlar = ({ token }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch("http://localhost:1212/admin/products", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  console.log(products);

  return (
    <Stack
      direction={"column"}
      sx={{ padding: "15px" }}
      direction={"column"}
      alignItems={"end"}
      spacing={14}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#01384D" }}>
            <TableRow>
              <TableCell align="center" sx={{ color: "white" }}>
                Mahsulot nomlari
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Toifalar
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Narxi
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Yuklama
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Razmeri
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Status
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.category}</TableCell>
                <TableCell align="center">{item.cost} so'm</TableCell>
                <TableCell align="center">{item.weight} kg</TableCell>
                <TableCell align="center">{item.size}</TableCell>
                <TableCell align="center">{item.status}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="inherit" sx={{ marginRight: "10px" }}>
                    <EditIcon />
                  </Button>
                  <Button variant="contained" color="inherit">
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary">
        Qo'shish
      </Button>
    </Stack>
  );
};

export default Maxsulotlar;
