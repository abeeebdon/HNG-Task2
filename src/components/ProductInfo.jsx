const ProductInfo = ({ num }) => {
  if (num == 1) {
    return (
      <p>
        Our Rose gold Ring with Diamond cut stone is one of the best selling
        product at Lasom. It’s unique stone crafting makes it exceptionally
        beautiful which has won the heart of many of our customers.{' '}
      </p>
    )
  } else if (num == 2) {
    return (
      <section className="mt-6 flex items-end gap-8  flex-wrap">
        <article>
          <div className="flex gap-6">
            <section>
              <div>
                <h3>4.5</h3>
                <p>out of 5</p>
              </div>
              <div>
                <img src="/assets/reviews.png" />
                <p> 2 reviews</p>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-4">
                <p>5 star</p>
                <img src="/assets/whiteR.png" alt="img" />
                <p>1</p>
              </div>
              <div className="flex items-center gap-4">
                <p>5 star</p>
                <img src="/assets/whiteR.png" alt="img" />
                <p>1</p>
              </div>
              <div className="flex items-center gap-4">
                <p>3 star</p>
                <img src="/assets/blackR.png" alt="img" />
                <p>0</p>
              </div>
              <div className="flex items-center gap-4">
                <p>2 star</p>
                <img src="/assets/blackR.png" alt="img" />
                <p>0</p>
              </div>
              <div className="flex items-center gap-4">
                <p>1 star</p>
                <img src="/assets/blackR.png" alt="img" />
                <p>0</p>
              </div>
            </section>
          </div>
          <div className="text-right">
            <button className="mr-0">See all</button>
          </div>
          <div>
            <div className="mt-6 flex items-center gap-6">
              <div className="flex bg-1 py-3 p-4 justify-center items-center rounded-full ">
                <p>P</p>
              </div>
              <div>
                <p className="p-text3 pt-serif-regular text-opacity-[80%]">
                  Patrick Chukwudifu
                </p>
                <p className="p-text3 pt-serif-regular text-opacity-[37%]">
                  October, 1 2024
                </p>
              </div>
              <div>
                <img src="/assets/starR.png" alt="img" />
                <p className="p-text3 pt-serif-regular text-opacity-[80%]">
                  Lovely, just the way it is.
                </p>
              </div>
            </div>
            <div className=" mt-6 flex items-center gap-6">
              <div className="flex bg-1 py-3 p-4 justify-center items-center rounded-full ">
                <p>F</p>
              </div>
              <div>
                <p className="p-text3 pt-serif-regular text-opacity-[80%]">
                  Faith Anazodo
                </p>
                <p className="p-text3 pt-serif-regular text-opacity-[37%]">
                  October, 1 2024
                </p>
              </div>
              <div>
                <img src="/assets/starR.png" alt="img" />
                <p className="p-text3 pt-serif-regular text-opacity-[80%]">
                  Exactly what I ordered for is what I got!!
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </article>
        <article>
          <div className="w-full">
            <h2>Write a review</h2>

            <div>
              <p>Rating</p>
              <div className="w-full">
                <select className="w-full">
                  <option value="5 star">5 star</option>
                  <option value="5 star">5 star</option>
                  <option value="5 star">5 star</option>
                </select>
              </div>
            </div>
            <div>
              <p>Review</p>
              <div>
                <textarea
                  placeholder="Leave a review here"
                  className="w-full min-w-[232px] min-h-[116px] border border-[#D19A64] outline-none rounded-lg max-w-[510px] h-full resize-none max-h-[202px]"
                ></textarea>
              </div>
            </div>
            <button className="btn-bg rounded-lg w-fit text-right mr-0 ml-[70%] mt-4 p-4">
              Post
            </button>
          </div>
        </article>
      </section>
    )
  } else {
    return <p>Comes with a 2yr Warranty.</p>
  }
}

export default ProductInfo
