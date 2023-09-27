import style from "@/styles/footer/footer.module.css"

import { PropsWithDictionary } from '@/interfaces'
import Image from 'next/image';
import Link from 'next/link';
import { IconWrapper } from '../icons/IconWrapper';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';

export const Footer = ({dict}: PropsWithDictionary) => {
    const learnMoreLinks = dict?.footer?.learnMore.links || [];
    const contactLinks = dict?.footer?.contact.links || [];
  return (
    <footer className='bg-[#E8F0E6] relative'>
        <div className={ style.wrapper }>
            <IconWrapper />
        </div>
        <div className='flex flex-col px-4 py-6 md:px-24 md:py-12 z-50 relative'>
            <section className='flex flex-col lg:flex-row gap-8'>
                <article className="flex flex-1 items-start mb-8 md:mb-0">
                    <Image
                        src="/assets/getnelly-logo.svg"
                        alt="Nelly"
                        width={130}
                        height={130}
                        />
                </article>
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
                    <article className="w-6/12">
                        <h3 className='font-extrabold mb-2'>{ dict?.footer?.learnMore.title || "" }</h3>
                        <ul>
                            {
                                learnMoreLinks.map((item, index) => (
                                    <li key={index}>
                                        {
                                            item.navLink
                                            ? <Link aria-label={item.text} href={ item.href } className='font-medium text-sm block mb-1 md:mb-2'>{ item.text }</Link>
                                            : <a aria-label={item.text} href={ item.href } className='font-medium text-sm block mb-1 md:mb-2'>{ item.text }</a>
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </article>
                    <article className="w-6/12">
                        <h3 className='font-extrabold mb-2'>{ dict?.footer?.contact.title || "" }</h3>
                        <ul>
                            {
                                contactLinks.map((item, index) => (
                                    <li key={index}>
                                        {
                                            item.navLink
                                            ? <Link aria-label={item.text} href={ item.href } className='font-medium text-sm block mb-1 md:mb-2'>{ item.text }</Link>
                                            : <a aria-label={item.text} href={ item.href } className='font-medium text-sm block mb-1 md:mb-2'>{ item.text }</a>
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className={ style.contactLinks }>
                            <li>
                                <a aria-label="Linkedin" target="_blank" rel="noopener noreferer" href="https://www.linkedin.com/company/nelly-solutions/"><AiOutlineLinkedin /></a>
                            </li>
                            <li>
                                <a aria-label="WhatsApp" target="_blank" rel="noopener noreferer" href="https://api.whatsapp.com/message/XHM5NMVQRBWMO1?autoload=1&app_absent=0"><AiOutlineWhatsApp /></a>
                            </li>
                            <li>
                                <a aria-label="Instagram" target="_blank" rel="noopener noreferer" href="https://www.instagram.com/nellysolutions/"><AiOutlineInstagram /></a>
                            </li>
                            <li>
                                <a aria-label="Facebook" target="_blank" rel="noopener noreferer" href="https://www.facebook.com/profile.php?id=100071800812353"><CiFacebook /></a>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
            <p className='font-medium text-sm mt-8 md:mt-0'>{ dict?.footer?.copyright || "" }</p>
        </div>
    </footer>
  )
}
