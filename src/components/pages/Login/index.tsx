import { Card, CardHeader, Image } from '@nextui-org/react'
import LoginForm from '../../organisms/LoginForm'
import Layout from '../../templates/Layout'

const Login = () => {
  return (
    <Layout>
      <main className='container mx-auto max-w-screen-lg grid grid-cols-6 items-center gap-x-8 h-screen '>
        <div className='col-span-3 gap-6 grid grid-cols-12 grid-rows-2'>
          <Card className='col-span-9 h-[300px]'>
            <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
              <p className='text-tiny text-white/60 uppercase font-bold'>
                Ten a la mano tus obligaciones
              </p>
              <h4 className='text-white font-medium text-large'>Ahorra mi rey</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt='Card background'
              className='z-0 w-full h-full object-cover'
              src='https://cdn.mos.cms.futurecdn.net/ew9YtUi5TFuBu4U5AdVEed.jpg'
            />
          </Card>
          <Card className='col-start-3 col-span-9 h-[300px]'>
            <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
              <p className='text-tiny text-white/60 uppercase font-bold'>Sigue tus movimientos</p>
              <h4 className='text-white font-medium text-large'>Llora cuando te cobran :)</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt='Card background'
              className='z-0 w-full h-full object-cover'
              src='https://cdn.financebuzz.com/images/2020/11/02/happy-woman-holding-money.jpeg'
            />
          </Card>
        </div>
        <div className='col-start-4 col-span-3'>
          <LoginForm />
        </div>
      </main>
    </Layout>
  )
}

export default Login
