export default function SignIn({ signIn }) {
  const handleSignIn = () => {
    signIn();
  }

  return (
    <div className="sign-in-page">
      {/* TODO: Sing in page UI*/}
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  )
}