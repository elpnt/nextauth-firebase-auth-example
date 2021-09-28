import { signIn } from "next-auth/react"
import { firebaseAuth } from "@/lib/firebase"
import {
  getAuth,
  signInAnonymously,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth"
import type { AuthProvider } from "firebase/auth"
import Layout from "@/components/layout"

const githubProvider = new GithubAuthProvider()
const googleProvider = new GoogleAuthProvider()

export default function SignIn() {
  const handleAnonymousSignIn = () => {
    signInAnonymously(firebaseAuth)
      .then((credential) => credential.user.getIdToken(true))
      .then((idToken) => {
        signIn("credentials", {
          idToken,
          callbackUrl: "/",
        })
      })
      .catch((err) => console.error(err))
  }

  const handleOAuthSignIn = (provider: AuthProvider) => {
    signInWithPopup(firebaseAuth, provider)
      .then((credential) => credential.user.getIdToken(true))
      .then((idToken) => {
        signIn("credentials", {
          idToken,
          callbackUrl: "/",
        })
      })
      .catch((err) => console.error(err))
  }

  return (
    <Layout>
      <p>Choose your sign-in method:</p>
      <button onClick={() => handleAnonymousSignIn()}>anonymous</button>
      <br />
      <button onClick={() => handleOAuthSignIn(githubProvider)}>GitHub</button>
      <br />
      <button onClick={() => handleOAuthSignIn(googleProvider)}>Google</button>
    </Layout>
  )
}
