export default function SignIn({ signIn }) {
  const handleSignIn = () => {
    signIn();
  }

  return (
    <div className="sign-in-page">
      {/* TODO */}
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  )
}