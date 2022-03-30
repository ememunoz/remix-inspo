import cx from 'classnames'

import sprite from './sprite.svg'

type IconId =
  | 'angle-left'
  | 'circle-plus'
  | 'ellipsis'
  | 'filter'
  | 'heart'
  | 'image'
  | 'plus'

interface Props extends React.SVGAttributes<SVGElement> {
  id: IconId
  className?: string
}

const Icon = ({ id, className, ...rest }: Props) => {
  return (
    <svg {...rest} className={cx('fill-current', className)}>
      <use href={`${sprite}#${id}`} />
    </svg>
  )
}

export default Icon
