import { Link } from 'remix'

const TopBar = () => {
  return (
    <div className="p-4 h-14 w-full bg-emerald-600 text-white">
      <Link to="/inspo">Inspogram</Link>
    </div>
  )
}

export default TopBar
