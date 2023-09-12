import Buyurtmalar from "../../components/Buyurtmalar";
import Customers from "../../components/Customers";
import Saidbar from "../../components/Saidbar";
import { Routes, Route } from "react-router-dom";
import Toifalar from "../../components/Toifalar";
import Maxsulotlar from "../../components/Maxsulotlar";
import Texnologiyalar from "../../components/Texnologiyalar";
import Manzil from "../../components/Manzil";
import { Box, Container, InputBase, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Admin({ token }) {
  return (
    <Box>
      <Stack direction={"row"}>
        <Saidbar />
        <Stack sx={{ width: "1366px" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ background: "#01384D", color: "white", padding: "10px" }}>
            <Stack
              direction={"row"}
              spacing={20}
              alignItems={"center"}
              sx={{
                width: "400px",
                background: "white",
                paddingLeft: "10px",
                borderRadius: "5px",
              }}>
              <InputBase placeholder="User" />
              <SearchIcon sx={{ color: "black" }} />
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <AccountCircleIcon sx={{ fontSize: "40px" }} />
              <Typography variant="h6">Admin Name</Typography>
            </Stack>
          </Stack>
          <Routes>
            <Route exact path="buyurtmalar" element={<Buyurtmalar token={token} />} />
            <Route exact path="admin/customers" element={<Customers token={token} />} />
            <Route exact path="admin/toifalar" element={<Toifalar token={token} />} />
            <Route exact path="admin/maxsulotlar" element={<Maxsulotlar token={token} />} />
            <Route exact path="admin/texnologiyalar" element={<Texnologiyalar token={token} />} />
            <Route exact path="admin/manzil" element={<Manzil />} />
          </Routes>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Admin;
