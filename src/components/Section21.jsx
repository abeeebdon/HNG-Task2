import { useNavigate } from 'react-router-dom'
import { productData } from './data'
import { ArrowRight } from './Icons'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Section21 = () => {
  const [productsData, setProductsData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const filterData = productData.filter((data, index) => index < 8)
    setProductsData(filterData)
  }, [])
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
        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.5rem] relative ">
          {productsData.map((data, index) => {
            const id = data.id
            return (
              <div key={id}>
                <ProductCard data={data} />
              </div>
            )
          })}
        </div>
      </article>

      <div className="text-right mx-8 hover">
        <button
          className="my-8 w-[197px] border-[#D19A64] rounded-lg font-bold text-[24px] p-4 border"
          onClick={() => navigate('/products')}
        >
          Explore more
        </button>
      </div>
    </section>
  )
}

export default Section21
