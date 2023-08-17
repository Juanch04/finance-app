import { useMemo } from 'react'

function getRoundedClass(rounded: string) {
  type ObjectType = { medium: string; full: string }
  const sizes: ObjectType = { medium: 'rounded', full: 'rounded-full' }
  return sizes[rounded as keyof ObjectType] || 'rounded-none'
}

function getSizeClasses(size: string) {
  type ObjectType = { small: string; large: string }
  const sizes: ObjectType = { small: 'px-4 py-2.5', large: 'px-6 py-3' }
  const defaultSize = 'px-5 py-2.5'
  return sizes[size as keyof ObjectType] || defaultSize
}

function getModeClasses(isPrimary: boolean) {
  return isPrimary
    ? 'text-white bg-sky-950 border-sky-950'
    : 'text-slate-700 bg-transparent border-slate-700'
}

const BASE_BUTTON_CLASSES =
  'cursor-pointer border-2 font-bold leading-none inline-block'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary: boolean
  label: string
  size: 'small' | 'medium' | 'large'
  rounded: 'medium' | 'full' | 'none'
}
const Button: React.FC<Props> = ({
  primary = false,
  size = 'medium',
  rounded = 'full',
  label,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary)
    const sizeClass = getSizeClasses(size)
    const roundedClass = getRoundedClass(rounded)

    return [modeClass, sizeClass, roundedClass].join(' ')
  }, [primary, size, rounded])

  return (
    <button className={`${BASE_BUTTON_CLASSES} ${computedClasses}`} {...props}>
      {label}
    </button>
  )
}

export default Button
