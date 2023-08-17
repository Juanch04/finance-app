import { useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'
import { useNavigate } from 'react-router'
import { Button, Input } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'

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

  const { t } = useTranslation('global')

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
      <h3 className="font-bold">{t('welcome')}</h3>
      <div className="flex flex-col gap-y-2">
        <Input
          type="email"
          label={t('email')}
          validationState={errors.email ? 'invalid' : 'valid'}
          errorMessage={errors.email ? t('error.email') : ''}
          {...register('email', { required: true })}
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <Input
          type="password"
          label={t('password')}
          validationState={errors.password ? 'invalid' : 'valid'}
          errorMessage={errors.password ? t('error.required') : ''}
          {...register('password', { required: true })}
        />
      </div>

      {error && <span className="text-xs text-danger">{error.message}</span>}

      <Button type="submit" isLoading={loading} color="primary">
        {t('login')}
      </Button>
    </form>
  )
}

export default LoginForm
