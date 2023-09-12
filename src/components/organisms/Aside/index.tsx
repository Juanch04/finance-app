import { useState } from 'react'
import { Avatar } from '@nextui-org/react'
import { BiSolidDashboard } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { BsGearFill } from 'react-icons/bs'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { FiLogOut } from 'react-icons/fi'

import styles from './Aside.module.scss'
import NavItem from '../../atoms/NavLink'
import Button from '../../atoms/Button'

const { aside, nav, navHeader, navFooter, navAvatar, toggleButton, open, close, logOut } = styles

type Link = {
  name: string
  url: string
  icon: JSX.Element
}

const links: Link[] = [
  {
    name: 'Dashboard',
    url: '',
    icon: <BiSolidDashboard />,
  },
  {
    name: 'Prestamos',
    url: '',
    icon: <GiReceiveMoney />,
  },
  {
    name: 'Deudas',
    url: '',
    icon: <GiPayMoney />,
  },
  {
    name: 'Configuración',
    url: '',
    icon: <BsGearFill />,
  },
]

//TODO: Organizar animaciones y clases (hacerla mas soft)
const Aside = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className={`${aside} ${isOpen ? open : close}`}>
      <button onClick={() => setIsOpen(!isOpen)} className={toggleButton}>
        <IoIosArrowForward />
      </button>
      <div className={navHeader}>
        <Avatar size={isOpen ? 'lg' : 'md'} className={navAvatar} />
        <span className={!isOpen ? 'hidden' : 'block'}>hola, Julian</span>
      </div>
      <nav className={nav}>
        {links.map(({ icon, name }) => (
          <NavItem icon={icon} isHidden={isOpen}>
            {name}
          </NavItem>
        ))}
      </nav>
      <div className={navFooter}>
        <Button className={logOut}>
          <FiLogOut />
          {isOpen && <span>Cerrar sesión</span>}
        </Button>
      </div>
    </aside>
  )
}

export default Aside
