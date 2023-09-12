import { PropsWithChildren } from 'react'

import styles from './NavItem.module.scss'
import { IoIosArrowForward } from 'react-icons/io'

const { navLink, navLinkIcon, navLinkTitle, iconSm } = styles

type NavLinkProps = {
  icon: JSX.Element
  isHidden: boolean
}
const NavLink = ({ icon, children, isHidden }: PropsWithChildren<NavLinkProps>) => {
  return (
    <div className={navLink}>
      <span className={`${navLinkIcon} ${isHidden ? iconSm : ''}`}>{icon}</span>
      {isHidden && (
        <>
          <span className={navLinkTitle}>{children}</span>
          <span className={navLinkIcon}>
            <IoIosArrowForward />
          </span>
        </>
      )}
    </div>
  )
}

export default NavLink
