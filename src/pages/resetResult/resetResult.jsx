import { useParams } from "react-router";
import { firestore } from "../../firebase/firebase.config";
import { useState } from "react";
import { useHistory } from "react-router";
export default function ResetResult() {
  const history = useHistory();
  const { userId } = useParams();
  const [newPassword, setNewPassword] = useState("");

  const updatePassword = async () => {
    await firestore
      .collection("Users")
      .doc(userId)
      .update({
        password: newPassword,
      })
      .then(() => {
        history.push(`/login`);
      });
  };

  return (
    <div className="reset-info">
      <h1>პაროლის აღდგენა</h1>
      <p>ჩაწერეთ ახალი პაროლი</p>
      <input
        onChange={(e) => setNewPassword(e.target.value)}
        type="email"
        placeholder="new password"
      />
      <input
        type="submit"
        onClick={() => updatePassword()}
        className="button"
        value="reset password"
      />
    </div>
  );
}
