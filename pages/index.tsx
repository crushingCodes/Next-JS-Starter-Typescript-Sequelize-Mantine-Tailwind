import { useMantineTheme, Container } from '@mantine/core'
import { Layout } from '../components/Layout'

const Home: (props: {
  origin: string
  assets: any[]
}) => JSX.Element = (props: { origin: string; assets: any[] }) => {
  const theme = useMantineTheme()

  return (
    <Layout>
      <Container size={200} px={0}>
        Content goes here
      </Container>
    </Layout>
  )
}

export default Home
