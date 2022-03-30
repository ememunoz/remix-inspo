import cx from 'classnames'

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const Banner = ({ className, children, ...rest }: Props) => {
  return (
    <div
      className={cx(
        'grid grid-cols-1 grid-banner-row items-center py-2 pr-2 pl-4 w-full',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Banner
