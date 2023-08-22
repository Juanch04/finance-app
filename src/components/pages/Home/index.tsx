import DebtForm from '../../organisms/DebtForm'
import Layout from '../../templates/Layout'

function Home() {
  return (
    <Layout>
      <main className='container mx-auto max-w-screen-lg'>
        <DebtForm></DebtForm>
      </main>
    </Layout>
  )
}

export default Home
