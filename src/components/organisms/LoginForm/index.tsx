import { useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'
import { useNavigate } from 'react-router'

// Define mutation
const LOGIN_MUTATION = gql`
  # Increments a back-end counter and gets its resulting value
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

type Inputs = {
  email: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const navigate = useNavigate()
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION)

  const onSubmit = async ({ email, password }: Inputs) => {
    const { data } = await login({ variables: { email, password } })
    localStorage.setItem('token', data.login.token)
    navigate('/')
  }

  return (
    <form
      className="grid gap-y-4 p-8 rounded-b-xl shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-y-2">
        <label htmlFor="login_email" className="text-sm">
          Email *
        </label>
        <input
          id="login_email"
          type="email"
          className="border-b px-2 py-1 text-sm text-slate-700 outline-none"
          {...register('email', { required: true })}
        />
        {errors.email && (
          <span className="text-xs text-red-800">This field is required</span>
        )}
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="login_password" className="text-sm">
          Password *
        </label>
        <input
          id="login_password"
          type="password"
          className="border-b px-2 py-1 text-sm text-slate-700 outline-none"
          {...register('password', { required: true })}
        />
        {errors.password && (
          <span className="text-xs text-red-800">This field is required</span>
        )}
      </div>

      {error && <span className="text-xs text-red-800">{error.message}</span>}

      <button
        disabled={loading}
        className="bg-sky-950 text-white rounded py-2 disabled:bg-slate-400"
        type="submit"
      >
        Ingresar
      </button>
    </form>
  )
}

export default LoginForm
