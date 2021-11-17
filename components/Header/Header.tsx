import { HeaderWrapper } from './components/HeaderWrapper'
import { HeaderContainer } from './components/HeaderContainer'
import { LeftContainer } from './components/LeftContainer'
import { RightContainer } from './components/RightContainer'

export const Header = (): JSX.Element => (
  <HeaderWrapper>
    <HeaderContainer>
      <LeftContainer>
        LeftContainer
      </LeftContainer>
      <RightContainer>
        RightContainer
      </RightContainer>
    </HeaderContainer>
  </HeaderWrapper>
)
