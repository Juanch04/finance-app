import type { PropsWithChildren } from 'react'

import Aside from '../../organisms/Aside'

import styles from './AsideNav.module.scss'

const { container, body } = styles

const AsideNav = ({ children }: PropsWithChildren) => {
  console.log(styles)

  return (
    <div className={container}>
      <Aside />
      <section className={body}>{children}</section>
    </div>
  )
}

export default AsideNav
