import Image from 'next/image'
import { BackgroundContainer } from './BackgroundContainer'

export const LayoutBackground = (): JSX.Element => (
  <BackgroundContainer>
    <Image 
      alt="Mountains"
      src="/../public/backgroun/bckg.jpg"
      quality={100}
      layout="fill"
    />
  </BackgroundContainer>
)