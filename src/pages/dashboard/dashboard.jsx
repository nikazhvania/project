import { userLogOut } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
export default function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(userLogOut(), history.push("/"))}>
        გამოსვლა
      </button>
    </div>
  );
}
