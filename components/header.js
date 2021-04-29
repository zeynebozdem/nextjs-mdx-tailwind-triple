import Link from 'next/link'

function Header() {
  return (
    <header className="site-container pt-32 pb-32">
      <nav className="flex justify-between text-xl text-gray-700 font-normal">
        <div>
          <Link href="/">
            <a className="font-bold hover:bg-gray-300 hover:text-gray-700">
              Home
            </a>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/watercolor">
            <a className="hover:bg-green-100 hover:text-green-700">WaterColor</a>
          </Link>
          <Link href="/journey">
            <a className="hover:bg-blue-100 hover:text-blue-700">Journey</a>
          </Link>
          <Link href="/about">
            <a className="hover:bg-purple-100 hover:text-purple-700">About</a>
          </Link>
          <Link href="/blog">
            <a className="hover:bg-pink-100 hover:text-pink-700">Blog</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Header
