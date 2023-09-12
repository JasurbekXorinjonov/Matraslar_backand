import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import Switch from "../data/Switch";
import DeleteIcon from "@mui/icons-material/Delete";

function Customers({ token }) {
  const [comtactData, setContactData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1212/admin/contact/1", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setContactData(data.data));
  }, []);

  const hadleDelete = (id) => {
    setContactData(comtactData.filter((item) => item.id !== id));
  };
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
                Sana
              </TableCell>

              <TableCell align="center" sx={{ color: "white" }}>
                Telefon Raqami
              </TableCell>

              <TableCell align="center" sx={{ color: "white" }}>
                Qayta Aloqa
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comtactData.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.time}</TableCell>

                  <TableCell align="center">{item.number}</TableCell>
                  <TableCell>
                    <Switch />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => hadleDelete(item.id)}>
                      <DeleteIcon />
                    </Button>
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

export default Customers;
