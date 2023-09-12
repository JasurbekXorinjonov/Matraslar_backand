import { Typography } from "@mui/material";
import Arry from "../data/SaidbarArry";
import { Link } from "react-router-dom";

function Saidbar() {
  return (
    <div style={{ background: "#01384D", color: "white" }}>
      <Typography variant="h4">Admin </Typography>
      {Arry.map((item, index) => {
        return (
          <div key={index} className="py-4">
            <span>{item.icon}</span>
            <Link style={{ color: "white", marginLeft: "5px" }} to={item.href}>
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Saidbar;
