import {Group, Header, Title} from '@mantine/core'
import {Toaster} from 'react-hot-toast'
import {useClipboard} from '@mantine/hooks'
import {SITE_NAME} from '../utils/constants/constants'
import {NavLinks} from "./NavLinks";

export const SiteHeader = (props: { }) => {
  const clipboard = useClipboard({ timeout: 500 })

  return (
    <Header height={120} p="md">
      <div>
        <Toaster />
      </div>
      <Group position={'apart'}>
        <div>
          <Title className={'text-blue-500'}>{SITE_NAME}</Title>
        </div>
      </Group>
        <Group className={'p-3'}>
            <NavLinks />
        </Group>
    </Header>
  )
}
