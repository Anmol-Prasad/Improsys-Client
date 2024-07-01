import SettingsIcon from "@mui/icons-material/Settings";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { Link } from "react-router-dom";

const menuData = [
  { Icon: <SettingsIcon />, heading: "Settings", Link: "/settings" },
  {
    Icon: <ManageAccountsSharpIcon />,
    heading: "Edit Profile",
    Link: "/editprofile",
  },
  { Icon: <LocalMallSharpIcon />, heading: "My Cart", Link: "/cart" },
  { Icon: <EditNoteIcon />, heading: "Order History", Link: "/orderhistory" },
  { Icon: <LogoutSharpIcon />, heading: "Logout", Link: "/logout" },
];

function MenuBox() {
  return (
    <>
      <div className="menulist-box">
        {menuData.map((x) => (
          <Link to={x.Link} key={x.Link} style={{ textDecoration: "none" }}>
            <div className="menulist-title">
              <div className="menulist-iconbox">{x.Icon}</div>
              {x.heading}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default MenuBox;
