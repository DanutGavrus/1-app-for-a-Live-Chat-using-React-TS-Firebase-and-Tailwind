import { signIn } from "../scripts/firebase.js";

export default function SignIn() {

  return (
    <div className="sign-in-page">
      {/* TODO: Sing in page UI*/}
      <button onClick={signIn()}>Sign in</button>
    </div>
  )
}