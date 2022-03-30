import { LoaderFunction, useLoaderData } from 'remix'
import { redirect } from 'remix'

export const loader: LoaderFunction = () => {
  return redirect('/inspo')
}

export default function CategoryRoute() {
  useLoaderData()
  return <div />
}
