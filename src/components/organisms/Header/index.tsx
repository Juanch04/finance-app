import { useEffect, useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'

const Header = () => {
  const { t, i18n } = useTranslation('global')
  const [selectedOption, setSelectedOption] = useState(new Set(['es']))

  const labelsMap = {
    es: t('spanish') + ' 🇪🇸',
    en: t('english') + ' 🇺🇸'
  }

  const selectedOptionValue = Array.from(selectedOption)[0]

  useEffect(() => {
    i18n.changeLanguage(selectedOptionValue)
  }, [i18n, selectedOptionValue])

  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">Finance App</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground">Features</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page">Customers</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">Integrations</Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem>
          <ButtonGroup variant="flat">
            <Button>{labelsMap[selectedOptionValue]}</Button>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button isIconOnly>🔽</Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Merge options"
                selectedKeys={selectedOption}
                selectionMode="single"
                onSelectionChange={setSelectedOption}
                className="max-w-[300px]"
              >
                <DropdownItem key="es">{labelsMap['es']}</DropdownItem>
                <DropdownItem key="en">{labelsMap['en']}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link to="/login" as={LinkRouter}>
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
