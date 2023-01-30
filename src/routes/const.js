import ContactsPage from "../pages/ContactsPage/ContactsPage";
import HomePage from "../pages/HomePage/HomePage";
import DestinationPage from "../pages/DestinationPage/DestinationPage";

export const HOME_PATH = "/";
export const DESTINATION_PATH = "/:destination";
export const CONTACTS_PATH = "/contacts";

export const routes = [
  {
    path: HOME_PATH,
    Component: HomePage,
  },
  {
    path: DESTINATION_PATH,
    Component: DestinationPage,
  },
  {
    path: CONTACTS_PATH,
    Component: ContactsPage,
  },
];
