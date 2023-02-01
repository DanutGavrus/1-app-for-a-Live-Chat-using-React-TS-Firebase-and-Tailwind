import { signIn } from "../scripts/firebase.js";

export default function SignIn() {
  const handleSignIn = () => {
    signIn();
  }

  return (
    <>
      {/* TODO: Sing in page UI*/}
      <button onClick={handleSignIn} className="w-full m-auto">Sign in</button>
    </>
  )
}