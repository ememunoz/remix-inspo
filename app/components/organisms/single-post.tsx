import { Menu, MenuButton, MenuLink, MenuList } from '@reach/menu-button'
import cx from 'classnames'

import Icon from '../atoms/icon'
import PlaceholderImage from '../atoms/placeholder-image'

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string
}

const SinglePost = ({ className }: Props) => {
  return (
    <div className={cx('flex flex-col', className)}>
      <div className="flex flex-row items-center mb-2">
        <div className="h-8 w-8 mr-2 rounded-full bg-gray-600" />
        <p>Profile name</p>
        <Menu>
          <MenuButton className="h-10 aspect-square ml-auto text-emerald-600 hover:text-emerald-700">
            <Icon id="ellipsis" className="w-5 h-full mx-auto aspect-square" />
          </MenuButton>
          <MenuList>
            <MenuLink>Go to original</MenuLink>
            <MenuLink>Copy URL</MenuLink>
          </MenuList>
        </Menu>
      </div>
      <PlaceholderImage className="p-8" />
      <div className="flex flex-row items-center h-11">
        <Icon id="heart" className="w-5 h-full aspect-square mr-2" /> likes
      </div>
      <p>
        <strong>Profile name</strong> ...post description...
      </p>
      <p className="text-sm text-gray-500 ">Posted ...days ago...</p>
    </div>
  )
}

export default SinglePost
