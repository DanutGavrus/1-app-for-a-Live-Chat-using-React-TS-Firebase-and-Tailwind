export default function SignIn({ signIn }) {
  const handleSignIn = () => {
    signIn();
  }

  return (
    <div className="sign-in-page">
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  )
}