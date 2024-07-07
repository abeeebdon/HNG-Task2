import { useParams } from 'react-router-dom'
import { ArrRight } from '../components/Icons'
import { productData } from '../components/data'
import { useEffect, useState } from 'react'

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  useEffect(() => {
    const findProduct = productData.find((data) => data.id == id)
    setProduct(findProduct)
  }, [])
  return (
    <section className="flex justify-center">
      <article className="w-full max-w-[1440px] ">
        <div className="flex justify-between bg-[#F5F5F5]">
          <div className="flex">
            <h2>Home</h2>
            <ArrRight />
            <p>Product Detail</p>
          </div>
          <div>
            <p>Continue Shopping</p>
          </div>
        </div>
        <div className="flex">
          <div></div>
          <div>
            <img src={product.src} />
          </div>
        </div>
      </article>
    </section>
  )
}

export default ProductDetails
