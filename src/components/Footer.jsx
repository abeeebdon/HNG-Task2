import { useEffect, useState } from 'react'
import '../fonts/font.css'
const Footer = () => {
  const [year, setYear] = useState(2024)
  useEffect(() => {
    const getYear = new Date()
    const years = getYear.getFullYear()
    setYear(years)
  }, [])
  return (
    <section className="bg-[#D19A64] flex justify-center items-center h-[555px] text-white mt-16">
      <div className="flex flex-col  w-full max-w-[1314px] ">
        <div className="flex justify-between gap-[10%] w-full max-w-[1314px] h-[259px]">
          <article className="w-full max-w-[392px] h-[259px] flex flex-col justify-between">
            <h2 className="text-[#F48C06] rubik text-[40px] leading-[47.4px]">
              Lasom
            </h2>
            <p className="font-bold text-[20px] leading-[28px]">
              A jewelry ecommerce platform offering a wide range of products,
              aims to enhance its user experience to increase customer
              satisfaction and drive business growth.
            </p>
            <div className="flex justify-around w-[100px] gap-[4%]">
              <div className="bg-white p-2 rounded-full">
                <img src="/assets/facebook.png" alt="facebook" />
              </div>
              <div className="bg-white p-2 rounded-full">
                <img src="/assets/instagram.png" alt="inst" />
              </div>
              <div className="bg-white p-2 rounded-full">
                <img src="/assets/xx.png" alt="x " />
              </div>
            </div>
          </article>
          <div className="flex justify-between basis-[60%]">
            <article className="w-full max-w-[392px] flex flex-col h-[259px] gap-5">
              <h2 className="font-bold text-[24px] leading-[33.6px] text-[rgba(0,0,0,0.8)] pt-4">
                Company
              </h2>
              <div>
                <p>About us</p>
                <p>Our story</p>
                <p>Blog</p>
                <p>Journal</p>
              </div>
            </article>
            <article className="w-full flex flex-col h-[259px] gap-5">
              <h2 className="font-bold text-[24px] leading-[33.6px] text-[rgba(0,0,0,0.8)] pt-4">
                Help
              </h2>
              <div>
                <p>Customer support</p>
                <p>Delivery details</p>
                <p>Terms and conditions</p>
                <p>Privacy policy</p>
              </div>
            </article>
            <article className="w-full  flex flex-col h-[259px] gap-5">
              <h2 className="font-bold text-[24px] leading-[33.6px] text-[rgba(0,0,0,0.8)] pt-4">
                Contact
              </h2>
              <div>
                <div>
                  <p>Lagos Nigeria</p>
                </div>
                <div>
                  <p>+234123456788</p>
                </div>
                <div>
                  <p>lasom@xyz.com</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="mt-16">
          <hr className="w-full" />
          <p className="text-center mt-8 pt-serif-bold text-[24px] text-[#000000CC]">
            Copyright &copy; {year} lasom.com. All rights reserved
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
