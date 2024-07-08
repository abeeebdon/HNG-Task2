import React from 'react'
import { ArrLeft, ArrRight } from './Icons'

const MenuHeading = ({ location }) => {
  return (
    <section className="h-[97px] flex items-center">
      <article className="flex justify-between w-full max-w-[1440px] bg-[#F5F5F5] p-4">
        <div className="flex items-center p-text pt-serif-bold ">
          <h2 className="text-black text-opacity-[80%]">Home</h2>
          <ArrRight />
          <p className="color-1">{location}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="hidden xs:block pt-serif-regular p-text color-1">
            Continue Shopping
          </p>
          <ArrLeft />
        </div>
      </article>
    </section>
  )
}

export default MenuHeading
