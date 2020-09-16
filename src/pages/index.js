import React from 'react'
import Head from 'next/head'

import {
  CardContainer,
  Container,
  EventsContainer,
  HeaderContainer
} from '@/styles'
import Search from '@/components/Search'
import Header from '@/components/Header'
import Card from '@/components/Card'
import { events, backgroundImage } from '@/mocks/images'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Fotos de Corrida</title>
      </Head>
      <main>
        <HeaderContainer image={backgroundImage[0].image}>
          <Header />
          <Search />
        </HeaderContainer>
        <EventsContainer>
          <span>Eventos por categoria.</span>
          <CardContainer>
            {events.map((item, index) => (
              <Card key={index} title={item.title} image={item.image} />
            ))}
          </CardContainer>
        </EventsContainer>
      </main>
    </Container>
  )
}
