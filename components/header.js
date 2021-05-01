import Link from 'next/link'

function Header() {
  return (
    <header className="site-container py-20">
      <nav className="flex flex-col space-y-2 overflow-y-auto sm:overflow-y-hidden sm:flex-row sm:space-y-0 p-2 sm:p-0 justify-between text-xl text-gray-700 font-normal">
        <div className="rounded hover:bg-gray-100 hover:text-gray-700">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="rounded hover:bg-blue-100 hover:text-blue-700">
          <Link href="/journey">
            <a>Journey</a>
          </Link>
        </div>
        <div className="rounded hover:bg-purple-100 hover:text-purple-700">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="rounded hover:bg-pink-100 hover:text-pink-700">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
        <div className="rounded hover:bg-green-100 hover:text-green-700">
          <Link href="/watercolor">
            <a>Water Color</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Header
