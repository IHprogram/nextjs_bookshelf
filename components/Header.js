import Cookie from "universal-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

const cookie = new Cookie();

const Header = () => {
  const router = useRouter();

  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  }

  return (
    <nav className="bg-gray-600">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="main-page">
                <h2 className="text-white cursor-pointer font-medium text-xl">Bookshelf App</h2>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Header;