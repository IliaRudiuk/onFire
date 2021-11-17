import { LayoutBackground } from './components/LayoutBackground'
import { LayoutContainer } from './components/LayoutContainer'
import { Header } from '../components/Header'

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <LayoutContainer>
    <Header />
    <LayoutBackground />
    {children}
  </LayoutContainer>
)
