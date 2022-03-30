import cx from 'classnames'
import { Link } from 'remix'

import Card from '../atoms/card'
import PlaceholderImage from '../atoms/placeholder-image'

type Props = {
  categoryName: string
  className?: string
  to: string
}

const CategoryCard = ({ className, categoryName, to }: Props) => {
  return (
    <Link to={to}>
      <Card className={cx(className, 'hover:bg-gray-200')}>
        <div className="grid grid-cols-2 grid-rows-2">
          <PlaceholderImage className="p-4" />
          <PlaceholderImage className="p-4" />
          <PlaceholderImage className="p-4" />
          <PlaceholderImage className="p-4" />
        </div>
        <p className="px-3 py-2 text-emerald-600">{categoryName}</p>
      </Card>
    </Link>
  )
}

export default CategoryCard
