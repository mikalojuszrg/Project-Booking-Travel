import ContactsPage from "../pages/ContactsPage/ContactsPage";
import HomePage from "../pages/HomePage/HomePage";
import TravelPage from "../pages/TravelPage/TravelPage";

const HOME_PATH = "/";
const TRAVEL_PATH = "/:destination";
const CONTACTS_PATH = "/contacts";

export const routes = [
  {
    path: HOME_PATH,
    Component: HomePage,
  },
  {
    path: TRAVEL_PATH,
    Component: TravelPage,
  },
  {
    path: CONTACTS_PATH,
    Component: ContactsPage,
  },
];
