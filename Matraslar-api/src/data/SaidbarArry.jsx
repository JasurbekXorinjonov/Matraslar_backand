import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ConstructionIcon from "@mui/icons-material/Construction";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Arry = [
  {
    href: "buyurtmalar",
    icon: <HomeIcon />,
    name: "Buyurtmalar",
  },
  {
    href: "admin/customers",
    icon: <PersonIcon />,
    name: "Customers",
  },
  {
    href: "admin/toifalar",
    icon: <ViewWeekIcon />,
    name: "Toifalar",
  },
  {
    href: "admin/maxsulotlar",
    icon: <ShoppingCartIcon />,
    name: "Maxsulotlar",
  },
  {
    href: "admin/texnologiyalar",
    icon: <ConstructionIcon />,
    name: "Tehnologiyalar",
  },
  {
    href: "admin/manzil",
    icon: <LocationOnIcon />,
    name: "Manzil",
  },
];

export default Arry;
