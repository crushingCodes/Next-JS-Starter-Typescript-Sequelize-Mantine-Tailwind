import {Button, Group, Text} from '@mantine/core'
import {Home} from 'tabler-icons-react'
import Link from 'next/link'
import {useRouter} from 'next/router'

interface MainLinkProps {
    icon: React.ReactNode
    color: string
    label: string
    to: string
    active: boolean
}

function MainLink({icon, color, label, to, active}: MainLinkProps) {
    return (
        <Link href={to}>
            <Button
                variant="subtle"
                color={color}
                className={active ? 'font-extrabold text-blue-400' : ''}
            >
                <Group>
                    {icon}
                    <Text size="sm">{label}</Text>
                </Group>
            </Button>
        </Link>
    )
}

export const NavLinks = (props: {  }) => {
    const router = useRouter()
    return (
        <>
            <MainLink
                label={'Home'}
                icon={<Home/>}
                to={'/'}
                color={'blue'}
                active={router.pathname === '/'}
            />
        </>
    )
}
