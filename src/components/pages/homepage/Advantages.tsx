import { PropsWithDictionary } from "@/interfaces";

export const Advantages = ({dict}: PropsWithDictionary) => {

  const advantagesData = dict?.advantages?.list || [];
  return (
    <section className="flex flex-col justify-center items-center py-16 bg-[#ffff9e] gap-16">
        <article>
          <h2 className="font-extrabold text-sm uppercase text-center">{dict?.advantages?.title || ""}</h2>
        </article>
        <article className="flex flex-col lg:flex-row gap-16 w-8/12 justify-between">
          {
            advantagesData.map(({unit, value, text}, index) => (
              <div key={index} className="w-min min-w-[15rem] flex flex-col items-center">
                <h3 className="font-extrabold text-4xl">{value}{unit}</h3>
                <p className="text-center">{text}</p>
              </div>
            ))
          }
        </article>
    </section>
  )
}
