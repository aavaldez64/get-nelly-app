import { PropsWithDictionary } from "@/interfaces";

export const Benefits = ({dict}: PropsWithDictionary) => {

  const benefitsData = dict?.benefits?.list || [];
  return (
    <section className="flex flex-col justify-center items-center py-16 bg-[#ffff9e] gap-16">
        <article>
          <h2 className="font-extrabold text-sm uppercase text-center">{dict?.benefits?.title || ""}</h2>
        </article>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 lg:gap-4 w-full">
          {
            benefitsData.map((text, index) => (
              <div key={index} className="w-full">
                <h3 className="font-extrabold text-2xl text-center lg:max-w-[17rem]">{ parseText(text) }</h3>
              </div>
            ))
          }
        </article>
    </section>
  )
}


const parseText = (text: string): JSX.Element => {
  const splitText = text.split(" ");
  if (splitText.length > 1) {
    return <>{splitText[0]}<br/>{[...splitText.slice(1)].join(" ")}</>;
  }
  return <>{text}</>;
}