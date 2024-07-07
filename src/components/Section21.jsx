import { useNavigate } from 'react-router-dom'
import { productData } from './data'
import { ArrowRight } from './Icons'
import { useEffect, useState } from 'react'

const Section21 = () => {
  const [productsData, setProductsData] = useState([])
  const [num, setNum] = useState(8)
  const navigate = useNavigate()
  const handleNum = () => {
    if (num > 8) {
      setNum(8)
    } else {
      setNum(productData.length)
    }
  }
  useEffect(() => {
    const filterData = productData.filter((data, index) => index < num)
    setProductsData(filterData)
  }, [num])
  return (
    <section>
      <div className="items-center flex ">
        <hr className="w-full border border-[#D19A64A6] basis-[45%]" />
        <h2 className=" basis-[50%] w-full my-16 pt-serif-bold leading-[56px] text-[#D19A64] text-[40px]  text-center">
          Our products
        </h2>
        <hr className="w-full border border-[#D19A64A6] basis-[45%]" />
      </div>
      <article className="flex justify-center items-center">
        <div className="flex flex-wrap gap-[1.5rem] relative ">
          {productsData.map((data, index) => {
            const id = index + 1

            return (
              <div
                className="relative w-full max-w-[287px] h-[377px] mx-auto text-center "
                key={id}
              >
                <img src={data.src} alt="id" className="w-full h-full" />
                <div className="absolute border-none rounded-lg bottom-2 w-full max-w-[250px] left-0 right-0 bg-white mx-auto p-2 ">
                  <div className="flex w-full justify-between ">
                    <h3 className="text-[20px] font-bold text-[rgba(0,0,0,0.6)]">
                      {data.name}
                    </h3>
                    <button
                      onClick={() => navigate(`/product/${id}`)}
                      className="p-2 border border-[#D19A64] rounded-full"
                    >
                      <ArrowRight />
                    </button>
                  </div>
                  <div className="flex justify-between mt-4">
                    <h3 className="font-bold text-[20px]">{`$${data.price}`}</h3>
                    <button className="p-2 w-[104px] rounded-md bg-[#D19A64]">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </article>
      <div className="text-right mx-8">
        <button
          onClick={handleNum}
          className="my-8 w-[197px] border-[#D19A64] rounded-lg font-bold text-[24px] p-4 border"
        >
          {num > 8 ? 'See Less' : 'Explore more'}
        </button>
      </div>
    </section>
  )
}

export default Section21
