import { useEffect, useState } from "react";
import Switch from "../data/Switch";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Buyurtmalar({ token }) {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1212/admin/orders/1", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrderData(data.data));
  }, []);

  return (
    <div className="p-3">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "900px" }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#01384D" }}>
            <TableRow sx={{ color: "white" }}>
              <TableCell align="center" sx={{ color: "white" }}>
                ID
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Ismi
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Telefon Raqami
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Maxsulot Nomlari
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Miqdor
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Qayta Aloqa
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.number}</TableCell>
                  <TableCell align="center">{item.product_name}</TableCell>
                  <TableCell align="center">{item.count}</TableCell>
                  <TableCell align="center">
                    <Switch />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Buyurtmalar;
