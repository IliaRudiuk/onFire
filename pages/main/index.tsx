import type { NextPage } from 'next'
import { MainContainer } from '../../components/main/MainContainer'
import { MainTitle } from '../../components/main/MainTitle';

const HomePage: NextPage = () => {
  return (
    <MainContainer>
      <MainTitle>
        Фриланс платформа с точным подсчетом рейтинга
      </MainTitle>
    </MainContainer>
  )
}

export default HomePage
