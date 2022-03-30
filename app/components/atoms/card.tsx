import cx from 'classnames'

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const Card = ({ children, className, ...rest }: Props) => {
  return (
    <div className={cx('shadow-md', className)} {...rest}>
      {children}
    </div>
  )
}

export default Card
