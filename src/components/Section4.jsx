import { reviews } from './data'

const Section4 = () => {
  return (
    <section>
      <div>
        <div className="items-center flex mt-16 ">
          <hr className="w-full border border-[#D19A64A6] basis-[45%]" />
          <h2 className=" basis-[50%] w-full  pt-serif-bold leading-[56px] text-[#D19A64] text-[40px]  text-center">
            Reviews
          </h2>
          <hr className="w-full border border-[#D19A64A6] basis-[45%]" />
        </div>
        <div className="flex items-center gap-[12%] my-4">
          <img src="/assets/reviewStar.png" alt="imp" />
          <p className="pt-serif-bold text-[32px] leading-[44.8px]">
            Here’s what our esteemed customer has to say about us.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => {
          return (
            <div
              key={index}
              className="border w-full max-w-[427px] h-[609px] mx-auto flex justify-center items-center"
            >
              <div className="w-full max-w-[361px] h-[547px]">
                <img src={review.src} alt={index} />
                <div className="mt-3 text-[rgba(0,0,0,0.8)]">
                  <h2 className="text-[2rem] font-bold  leading-[44.8px]">
                    {review.name}
                  </h2>
                  <img src="/assets/rating.png" className="my-4" alt="rating" />
                  <p className="text-[24px] font-normal leading-[33.6px]">
                    {review.text}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="w-full flex justify-end my-8">
        <img src="/assets/reviewStar.png" alt="imp" className="" />
      </div>
    </section>
  )
}

export default Section4
