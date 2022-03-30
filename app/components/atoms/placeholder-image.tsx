import cx from 'classnames'

import Icon from './icon'

type Props = {
  className?: string
}

const PlaceholderImage = ({ className }: Props) => {
  return (
    <div
      className={cx('flex items-center justify-center bg-gray-300', className)}
    >
      <Icon id="image" className="text-white aspect-square" />
    </div>
  )
}

export default PlaceholderImage
