import { useNavigate } from 'react-router-dom'
import { productData } from '../components/data'
import ProductCard from '../components/ProductCard'
import MenuHeading from '../components/MenuHeading'

const Products = () => {
  return (
    <section className="flex justify-center">
      <article className="w-full max-w-[1440px]  ">
        <MenuHeading status={false} />
        <h2 className="my-8 p-text2 pt-serif-bold">
          Choose from our varieties of products...
        </h2>
        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.5rem] relative p-2 ">
          {productData.map((data) => {
            return (
              <div key={data.id}>
                <ProductCard data={data} />
              </div>
            )
          })}
        </div>
      </article>
    </section>
  )
}

export default Products
