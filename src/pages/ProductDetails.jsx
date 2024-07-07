import { useParams } from 'react-router-dom'
import { ArrRight, Heart, Plus } from '../components/Icons'
import { productData } from '../components/data'
import { useEffect, useState } from 'react'

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const [result, setResult] = useState(1)
  const [filterProduct, setFilterProduct] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const findProduct = productData.find((data) => data.id == id)
    setProduct(findProduct)
    const filter = productData.filter((data) => data.id >= id)
    const filtered = productData.filter((data, index) => index < 2)
    setFilterProduct(filtered)
    console.log(filtered)
  }, [])
  return (
    <section className="flex justify-center">
      <article className="w-full max-w-[1440px]  ">
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
        <div className="flex mt-8 p-4 gap-6 items-center">
          <div className="h-full max-h-471px flex flex-col justify-between gap-5">
            <div className="w-[140px] h-[140px]">
              <img src={`/${product.src}`} className="w-full h-full" />
            </div>
            {filterProduct.map((data) => {
              return (
                <div className="w-[140px] h-[140px]">
                  <img src={`/${data.src}`} className="w-full h-full" />
                </div>
              )
            })}
          </div>
          <div className="w-full h-full max-h-[471px] max-w-[436px]">
            <img
              src={`/${product.src}`}
              alt={product.src}
              className="w-full h-full"
            />
          </div>
          <div>
            <h2 className="pt-serif-bold text-[24px] leading-[33.6px]">
              {product.name}
            </h2>
            <p className="pt-serif-bold text-[24px] leading-[33.6px]">{`$${product.price}`}</p>
            <div className="flex gap-4 items-center">
              <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#D19A64] rounded-full">
                <p className="text-[24px]">
                  <Plus />
                </p>
              </div>
              <p className="w-[40px] h-[40px] bg-[#F8F8F8] rounded-full">
                {result}
              </p>
              <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#D19A64] rounded-full">
                <p className="w-[40px] h-[40px] bg-[#D19A64] rounded-full text-center">
                  <img src="/assets/minus.svg" />
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center mt-4 bg-[#D19A64] w-[116px] h-[37px]">
                <button className="pt-serif-regular text-[20px] leading-[28px]">
                  Add to cart
                </button>
              </div>
              <div className="p-3 bg-[#F8F8F8] rounded-full flex justify-center items-center">
                <Heart />
              </div>
            </div>
            <div className="flex">
              <p>Category</p>
              <ArrRight />
              <p>Rings</p>
            </div>
            <div className="flex items-center gap-6">
              <p>Size</p>
              <div className="flex items-center gap-4">
                <p>S</p>
                <p>M</p>
                <p>L</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4">
          <div className="flex gap-4">
            <button>Description</button>
            <button>Customer Review</button>
            <button>Warranty</button>
          </div>
          <div>
            <p>
              Our Rose gold Ring with Diamond cut stone is one of the best
              selling product at Lasom. It’s unique stone crafting makes it
              exceptionally beautiful which has won the heart of many of our
              customers.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ProductDetails
