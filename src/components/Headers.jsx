import { useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { CartIcon, MenuIcon, SearchIcon, UserIcon } from './Icons'

const Headers = () => {
  const { width } = useWindowSize()
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1440px]">
        <header className="flex justify-between p-4 items-center ">
          <h2 className="rubik text-[40px] text-[#F48C06] leading-[47.4px] pr-4">
            LASOM
          </h2>
          <article className="flex justify-between gap-4 items-center">
            {width > 768 && (
              <div className="flex justify-between gap-8 md:text-[20px] lg:text-[28px] leading-[37.4px] pt-serif-regular">
                <a>Home</a>
                <a>Category</a>
                <a>Trending now</a>
                <a>About us</a>
              </div>
            )}

            <div className="flex gap-4 text-[5rem] items-center justify-end">
              <UserIcon />
              <SearchIcon />
              <CartIcon />
              {width > 476 && (
                <button className="border h-[51px] border-[#D19A64] py-2 w-[183px] text-[28px] leading-[37.1px] pt-serif-regular">
                  Contact us
                </button>
              )}
              {width < 768 && (
                <div onClick={() => setShowNav(!showNav)}>
                  <MenuIcon />
                </div>
              )}
            </div>
          </article>
        </header>
        {showNav && width < 768 && (
          <div className="fixed right-0 w-[20vh]">
            <div className="flex flex-col justify-between">
              <a>Home</a>
              <a>Category</a>
              <a>Trending now</a>
              <a>About us</a>
              <a>Contact us</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Headers
