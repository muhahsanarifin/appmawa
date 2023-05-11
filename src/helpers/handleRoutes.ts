import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const PrivateRoute = ({ children }: any) => {
  const status = useSelector((state: RootState) => state.nilai);

  if (!status.status_access) window.location.replace("/");

  return children;
};
