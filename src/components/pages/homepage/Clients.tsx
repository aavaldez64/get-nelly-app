"use client";
import style from "@/styles/clients.module.css";
import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi"
import { ClientItem, ClientQuote, PropsWithDictionary } from "@/interfaces"

const defaultClient = {
    title: "",
    list: []
}
export const Clients = ({dict}: PropsWithDictionary) => {
    const clientData = dict?.clients || defaultClient;

    const [changing, setChanging] = useState(false);
    const [currentClient, setCurrentClient] = useState({index: 0, client: clientData.list[0]});
    const prevClient = () => {
        if (currentClient.index === 0) {
            setCurrentClient({
                index: clientData.list.length,
                client: clientData.list[clientData.list.length-1]
            });
        } else {
            setCurrentClient({
                index: currentClient.index-1,
                client: clientData.list[currentClient.index-1]
            });
        }
    }
    const nextClient = () => {
        if (currentClient.index+1 === clientData.list.length) {
            setCurrentClient({
                index: 0,
                client: clientData.list[0]
            });
        } else {
            setCurrentClient({
                index: currentClient.index+1,
                client: clientData.list[currentClient.index+1]
            });
        }
    }
    const navClient = (payload: "next" | "prev" | {client: ClientItem, index: number}) => {
        if (payload !== "next" && payload !== "prev" && payload.index === currentClient.index) return;
        setChanging(true);
        setTimeout(() => {
            if (payload === "next")
                nextClient();
            else if (payload === "prev")
                prevClient();
            else 
                setCurrentClient(payload);
        }, 200);
    }
    useEffect(() => {
        setChanging(false);
    }, [currentClient.index]);
    


  return (
    <section className="px-4 md:px-12 py-24 gap-0 flex flex-col">
        <div className={ `${style.quoteCard} ${changing ? style.quoteCardHidden : ""}` }>
            <article className="w-full md:w-4/12 md:pe-8 flex justify-center md:block">
                {
                    clientData.list.map((client, index) => {
                        if (client.resource.video) {
                            return (
                                <video
                                    key={index}
                                    className={`rounded-[2rem] ${currentClient.client?.name === client.name ? style.resourceActive : style.resourceHidden }`} 
                                    autoPlay 
                                    muted 
                                    loop
                                >
                                    {`A video for the quote of ${client.name}`}
                                    {
                                        client.resource.src.map(({src, type}, resIndex) => (
                                            <source key={resIndex} src={`/assets/clients/${src}`} type={type}/>
                                        ))
                                    }
                                </video>
                            )
                        } else {
                            return <Image 
                                        key={index}
                                        className={`rounded-[2rem] ${currentClient.client?.name === client.name ? style.resourceActive : style.resourceHidden }`} 
                                        src={`/assets/clients/${client.resource.src}`}
                                        alt={client.resource.src}
                                        width={600}
                                        height={800}
                                    />
                        }
                    })
                }
            </article>
            <article className="w-full md:w-8/12">
                <div className="flex flex-col text-center py-8 md:py-16">
                    <h2 className="font-extrabold text-sm uppercase mb-4 md:mb-8">{ clientData.title }</h2>
                    <blockquote className="font-medium text-lg md:text-3xl mb-4 md:mb-8">&quot;{parseQuote(currentClient.client?.quote)}&quot;</blockquote>
                    <h3 className="font-extrabold">{currentClient.client?.name}</h3>
                    <p>{currentClient.client?.position}</p>
                </div>
            </article>
        </div>
        <div className="w-full flex justify-end">
            <ul className={style.clientNav}>
                <li>
                    <button aria-label="previous" type="button" onClick={() => navClient("prev")}>
                        <HiOutlineArrowLeft />
                    </button>
                </li>
                {
                    clientData.list.map((client, index) => (
                        <li key={index}>
                            <button 
                                onClick={() => navClient({index, client})}
                                type="button" 
                                className={currentClient.client?.name === client.name ? style.current : ""}
                            >
                                <Image
                                    src={`/assets/clients/${client.image}`}
                                    alt={client.image}
                                    width={50}
                                    height={50}
                                />
                            </button>
                        </li>
                    ))
                }
                <li>
                    <button aria-label="next" type="button" onClick={() => navClient("next")}>
                        <HiOutlineArrowRight />
                    </button>
                </li>
            </ul>
        </div>
    </section>
  )
}

const parseQuote = (quote: ClientQuote[]): JSX.Element => {
    const jsx = quote.map((word, index) => {
        if (word.strong) {
            return <span key={index} className="font-semibold text-[#68986b]">{word.text}</span>
        } else {
            return <Fragment key={index}>{word.text}</Fragment>
        }
    });
    return <>{jsx}</>;
}