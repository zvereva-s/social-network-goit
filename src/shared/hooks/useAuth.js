import { useSelector } from "react-redux";
import { auth } from "../../redux/auth/auth-selectors";

export default function useAuth() {
  const authState = useSelector(auth);
  return authState;
}
