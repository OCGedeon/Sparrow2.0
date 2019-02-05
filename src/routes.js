import Dashboard from "./views/Dashboard.jsx";
import Map from "./views/Map.jsx";
import Notifications from "./views/Notifications.jsx";
import UserProfile from "./views/UserProfile.jsx";
import NewTask from "./views/NewTask.jsx"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/newtask",
    name: "New Task",
    rtlName: "",
    icon: "tim-icons icon-book-bookmark",
    component: NewTask,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
 
];
export default routes;
