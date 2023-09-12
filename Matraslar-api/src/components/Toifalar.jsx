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
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UpsertCategory from "./UpsertCategory";
import ConfirmDialog from "./ConfirmDialog";

function Toifalar({ token }) {
  const [toifalar, setToifalar] = useState([]);
  const [qatorId, setqatorId] = useState(null);
  const [deleteModal, setdeleteModal] = useState(false);
  const [upsert_dialog, setUpsert_dialog] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch("http://localhost:1212/admin/categories", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setToifalar(data));
  };

  const handleRowClick = (id) => {
    setqatorId(id);
    setdeleteModal(true);
  };

  const deleteCategory = () => {
    fetch(`http://localhost:1212/admin/categories/${qatorId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setToifalar(toifalar.filter((item) => item.id !== qatorId));
        setdeleteModal(false);
      });
  };

  const onSave = () => {
    getList();
    setUpsert_dialog(false);
  };

  const addItem = () => {
    setUpsert_dialog(true);
    setSelected({});
  };
  const editItem = (item) => {
    setSelected(item);
    setUpsert_dialog(true);
  };

  return (
    <Stack sx={{ padding: "15px" }} direction={"column"} alignItems={"end"} spacing={14}>
      <TableContainer component={Paper}>
        <Table sx={{ Width: "100%" }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#01384D" }}>
            <TableRow sx={{ color: "white" }}>
              <TableCell align="left" sx={{ color: "white", width: "100%" }}>
                Toifalar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {toifalar?.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell align="left">{item?.category}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => editItem(item)}>
                      <EditIcon />
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => handleRowClick(item.id)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {deleteModal && (
        <ConfirmDialog onCancel={() => setdeleteModal(false)} onConfirm={deleteCategory} />
      )}

      {upsert_dialog && (
        <UpsertCategory
          item={selected}
          token={token}
          onClose={() => setUpsert_dialog(false)}
          onSave={onSave}
        />
      )}

      {/* {editIndex && (
        <UpdateCategory token={token} onClose={() => setEditIndex(false)} saveEdit={saveEdit} />
      )} */}

      <Button sx={{ width: "150px" }} variant="contained" color="primary" onClick={() => addItem()}>
        Qo'shish
      </Button>
    </Stack>
  );
}

export default Toifalar;
