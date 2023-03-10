import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { routes } from "./const";

const Routes = () => {
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />}></Route>
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
