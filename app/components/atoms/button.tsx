import cx from 'classnames'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ className, children, onClick, ...rest }: Props) => {
  return (
    <button
      className={cx(
        'flex items-center justify-center px-2 h-9 text-sm uppercase bg-emerald-600 text-white hover:bg-emerald-800',
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
