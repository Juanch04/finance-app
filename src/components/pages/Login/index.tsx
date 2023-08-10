import LoginForm from '../../organisms/LoginForm'
import Layout from '../../templates/Layout'

const Login = () => {
  return (
    <Layout>
      <main className="container mx-auto max-w-screen-lg grid grid-cols-6 items-center gap-x-8">
        <div className="col-span-3 h-screen flex">
          <img
            className="m-auto w-3/5"
            src="src/assets/login.png"
            alt="Login"
          />
        </div>
        <div className="col-start-4 col-span-3">
          <LoginForm />
        </div>
      </main>
    </Layout>
  )
}

export default Login
