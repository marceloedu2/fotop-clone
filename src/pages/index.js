import Head from 'next/head'

import Header from '@/components/Header'

import { HomeContainer } from '@/styles'

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Fotos de Corrida</title>
      </Head>

      <main>
        <Header />
        <div>teste</div>
      </main>

      <footer>footer</footer>
    </HomeContainer>
  )
}
