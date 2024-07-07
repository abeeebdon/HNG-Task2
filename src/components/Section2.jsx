import { categoriesData } from './data'

const Section2 = () => {
  return (
    <section>
      <div className="items-center flex gap-8">
        <hr className="w-full border border-[#D19A64A6]" />
        <h2 className="my-16 pt-serif-bold leading-[56px] text-[#D19A64] text-[40px] text-center">
          Categories
        </h2>
        <hr className="w-full border border-[#D19A64A6]" />
      </div>
      <article className="flex justify-center items-center">
        <div className="flex flex-wrap gap-4  ">
          {categoriesData.map((data) => {
            return (
              <div
                className="w-full max-w-[315px] mx-auto text-center xs:w-[160px]"
                key={data.id}
              >
                <img src={data.src} alt="data.id" />
                <p>{data.name}</p>
              </div>
            )
          })}
        </div>
      </article>
    </section>
  )
}

export default Section2
