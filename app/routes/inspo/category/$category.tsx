import Icon from '~/components/atoms/icon'
import Banner from '~/components/molecules/banner'
import SinglePost from '~/components/organisms/single-post'
import { Link, LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = ({ params }) => {
  return params.category
}

export default function CategoryIdRoute() {
  const category = useLoaderData()
  return (
    <div>
      <Banner className="sticky top-0 bg-white">
        <Link to="/inspo" className="h-full">
          <div className="flex items-center h-full pr-4 text-emerald-600 hover:text-emerald-700">
            <Icon id="angle-left" className="mr-2 w-2 h-full" />
            <p>Home</p>
          </div>
        </Link>
        <div className="flex flex-row items-center h-full">
          <p className="text-lg mr-auto">{category}</p>
          <div className="flex flex-row h-full">
            <button className="h-full aspect-square text-emerald-600 hover:text-emerald-700">
              <Icon id="plus" className="w-4 h-full mx-auto aspect-square" />
            </button>
            <button className="h-full aspect-square text-emerald-600 hover:text-emerald-700">
              <Icon id="filter" className="w-4 h-full mx-auto aspect-square" />
            </button>
          </div>
        </div>
      </Banner>
      <div className="px-4 pb-4">
        <SinglePost className="mb-6" />
        <SinglePost />
      </div>
    </div>
  )
}
