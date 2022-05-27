import { SiteHeader } from '../components/SiteHeader'
import { AppShell } from '@mantine/core'
import { Background } from './Background'

export const Layout = (props: { children: any; }) => {
  return (
    <AppShell
      padding="md"
      header={<SiteHeader />}
      fixed
      styles={(theme) => ({
        main: {
          backgroundSize: 'cover',
          opacity: '70%',
        },
      })}
    >
      <Background />
      {props.children}
    </AppShell>
  )
}
