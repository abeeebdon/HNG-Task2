import { productData } from '../components/data'
import ProductCard from '../components/ProductCard'
import MenuHeading from '../components/MenuHeading'
import Section1 from '../components/Section1'

const Products = () => {
  return (
    <section>
      <MenuHeading status={false} location="Products" />
      <Section1 />
      <h2 className="my-8 p-text2 px-4 pt-serif-bold">
        Choose from our varieties of products...
      </h2>
      <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.5rem] relative ">
        {productData.map((data) => {
          return (
            <div key={data.id}>
              <ProductCard data={data} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Products
