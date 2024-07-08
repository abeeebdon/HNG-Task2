import { useEffect, useState } from 'react'
import {
  Address,
  ArrRight,
  HomeAddress,
  Phone,
  UserProfile,
} from '../components/Icons'
import { productData } from '../components/data'
import Success from './Success'
import MenuHeading from '../components/MenuHeading'

const Checkout = () => {
  const [num, setNum] = useState(1)
  const [checkout, setCheckout] = useState(false)
  const [checkoutProducts, setCheckoutProducts] = useState({})
  useEffect(() => {
    const checkoutProduct = productData.find((data) => data.id == 1)
    setCheckoutProducts(checkoutProduct)
    console.log(checkoutProducts)
  }, [])

  return (
    <section className="flex justify-center">
      <article className="w-full max-w-[1440px]  ">
        <MenuHeading location="checkout" />

        {checkout ? (
          <Success checkoutProducts={checkoutProducts} />
        ) : (
          <div className="flex flex-col md:flex-row px-2 gap-10 items-start mt-8">
            <section className="flex-shrink-[2]">
              <form>
                <h2 className="form-heading pt-serif-bold text-center sm:text-left">
                  Contact Information
                </h2>
                <div className="form">
                  <article className="flex gap-6 ">
                    <div className="input-container ">
                      <UserProfile />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="outline-none border-none bg-transparent"
                      />
                    </div>
                    <div className="input-container">
                      <Phone />
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </article>
                </div>
                <h2 className="form-heading pt-serif-bold mt-8 text-center sm:text-left">
                  Shipping Address
                </h2>
                <div className="form-input">
                  <div className="input-container">
                    <HomeAddress />
                    <input type="text" placeholder="Enter your home Address" />
                  </div>
                  <article className="flex gap-6  mt-4">
                    <div className="input-container">
                      <Address />

                      <input type="text" placeholder="Enter your State" />
                    </div>
                    <div className="input-container">
                      <Address />

                      <input type="text" placeholder="Enter your city" />
                    </div>
                  </article>
                </div>
                <article>
                  <div>
                    <input type="checkbox" />
                    <span>Ship to another address</span>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <span>Ship to another address</span>
                  </div>
                </article>
                <article className=" flex gap-6 flex-wrap mt-4">
                  <div>
                    <input type="radio" /> <span>Pay with card</span>
                  </div>
                  <div>
                    <input type="radio" /> <span>Pay on delivery</span>
                  </div>
                </article>
                <div
                  className="mt-8 cursor-pointer btn-bg rounded-lg h-[53px] flex justify-center items-center w-full max-w-[386px]"
                  onClick={() => setCheckout(true)}
                >
                  <button>Proceed</button>
                </div>
              </form>
            </section>
            <div className=" hidden md:block min-w-1 h-[450px] text-black border-2">
              <span className="text-black"></span>
            </div>
            <section className="flex-shrink-0 ">
              <div>
                <h2 className="pt-serif-bold form-heading">Your Order</h2>
                <div className="flex gap-6 p-4 px-0">
                  <img
                    src={`/${checkoutProducts.src}`}
                    alt={checkoutProducts.id}
                    className="w-[120px] h-[140px]"
                  />
                  <div>
                    <h3 className="pt-serif-bold text-[20px] leading-[26.5px]">
                      {checkoutProducts.name}
                    </h3>
                    <p className="pt-serif-bold text-[24px] leading-[31.8px]">{`$${checkoutProducts.price}`}</p>
                  </div>
                </div>
                <hr />
                <section>
                  <article className="flex justify-between items-center my-2">
                    <p>Subtotal</p>
                    <p>{`$${checkoutProducts.price}.00`}</p>
                  </article>
                  <article className="flex justify-between items-center my-2">
                    <p>Delivery fee</p>
                    <p>$10.00</p>
                  </article>
                  <article className="flex justify-between items-center my-2">
                    <p>Discount</p>
                    <p>-$5.00</p>
                  </article>
                </section>
                <hr />
                <div className="flex justify-between items-center my-2">
                  <h3>Total</h3>
                  <p>$2505.00</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </article>
    </section>
  )
}

export default Checkout
