import { useNavigate } from 'react-router-dom'
import { DeleteIcon } from '../components/Icons'
import MenuHeading from '../components/MenuHeading'

const Cart = () => {
  const navigate = useNavigate()
  return (
    <section>
      <MenuHeading location="Cart" route="/products" />
      <article className="flex justify-between flex-col md:flex-row gap-[7%]">
        <div>
          <div className="p-text pt-serif-bold grid grid-cols-4 w-full max-w-[700px] gap-6">
            <h3 className="col-span-2">Product</h3>
            <h3 className="col-span-1">Price</h3>
            <h3 className="col-span-1">Quantity</h3>
          </div>
          <hr />
          <div className="grid grid-cols-4 w-full max-w-[700px] gap-6 items-center mt-8">
            <div className="col-span-2 flex items-center gap-2">
              <img src="/assets/p6.png" className="w-[120px] h-[120px]" />
              <h3 className="price pt-serif-regular">Diamond cut Ring</h3>
            </div>
            <div>
              <p className="price pt-serif-bold text-opacity-60 ">$2,500</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="border flex w-fit h-fit p-2 gap-2 rounded-lg cursor-pointer">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <DeleteIcon />
            </div>
          </div>
          <div className="grid grid-cols-4 w-full max-w-[700px] gap-6 items-center mt-8">
            <div className="col-span-2 flex items-center gap-2">
              <img src="/assets/p6.png" className="w-[120px] h-[120px]" />
              <h3 className="price pt-serif-regular">Diamond cut Ring</h3>
            </div>
            <div>
              <p className="price pt-serif-bold text-opacity-60 ">$2,500</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="border flex w-fit h-fit p-2 gap-2 rounded-lg cursor-pointer">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <DeleteIcon />
            </div>
          </div>
        </div>

        <div className="w-full p-6 max-w-[400px] basis-[45%] border mx-auto  rounded-lg">
          <section className="p-text4 pt-serif-bold text-opacity-[80%]  ">
            <article className="flex justify-between items-center my-5 ">
              <p>Subtotal</p>
              <p>$2,500</p>
            </article>
            <article className="flex justify-between items-center my-5">
              <p>Delivery fee</p>
              <p>$10.00</p>
            </article>
            <article className="flex justify-between items-center my-5">
              <p>Discount</p>
              <p>-$5.00</p>
            </article>
            <article className="flex justify-between items-center my-5">
              <p>Promo Offer</p>
              <p>-$5.00</p>
            </article>
            <hr />
            <article className="flex justify-between items-center my-5">
              <p>Grand Total</p>
              <p>-$5.00</p>
            </article>
            <hr />
            <div
              className="btn-bg w-full mx-auto text-center my-5 rounded-lg cursor-pointer"
              onClick={() => navigate('/checkout')}
            >
              <button>Proceed to checkout</button>
            </div>
          </section>
        </div>
      </article>
    </section>
  )
}

export default Cart
