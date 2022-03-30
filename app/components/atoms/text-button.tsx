import cx from 'classnames'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  onClick: () => void
}

const TextButton = ({ className, children, onClick, ...rest }: Props) => {
  return (
    <button
      className={cx(
        'flex items-center px-2 h-9 text-sm uppercase text-emerald-600 hover:text-emerald-700',
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default TextButton
