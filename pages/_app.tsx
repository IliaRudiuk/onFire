import type { AppProps } from 'next/app'
import { Normalize } from 'styled-normalize'
import { Layout } from '../Layout'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Normalize />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default MyApp
