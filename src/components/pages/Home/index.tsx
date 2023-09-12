import DebtForm from '../../organisms/DebtForm'
import AsideNav from '../../templates/AsideNav'
import Layout from '../../templates/Layout'

function Home() {
  return (
    <Layout>
      <AsideNav>
        <main className='container mx-auto max-w-screen-lg'>
          <DebtForm></DebtForm>
        </main>
      </AsideNav>
    </Layout>
  )
}

export default Home
