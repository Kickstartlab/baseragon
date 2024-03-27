import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import feature_1 from '../assets/feature_1.png';
import feature_2 from '../assets/feature_2.png';
import feature_3 from '../assets/feature_3.png';
import feature_4 from '../assets/feature_4.png';
import chart from '../assets/chart.png';
import about from '../assets/about.png';
import top from '../assets/top.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import join from '../assets/join.png';
import vector from '../assets/Vector.png';

import Accordion from './Accordion';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
        });
        Aos.refresh();
    }, [])

    const accordionData = [
        {
            title: 'What is BaseRagon?',
            content: `The project is all about swaping tokens effortlessly and managing liquidity seamlessly with our user-friendly dEX platform. Secure, transparent transactions redefine DeFi.`
        },
        {
            title: 'Which Team is Behind BaseRagon?',
            content: `We are a team of experienced developers and marketers, having various successful projects under our hood.`
        }
    ];

    return (
        <div className="bg-gradient overflow-hidden font-montserat text-white-100">

            {/* top section */}

            <div className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex block justify-between items-center gap-x-12 py-12 lg:space-y-0 space-y-10">
                        <div data-aos="fade-right" className="lg:w-1/2 w-full space-y-10">
                            <h1 className='md:text-8xl text-4xl text-gradient font-vinque font-bold'>
                                BaseRagon
                            </h1>

                            <div className='space-y-4'>
                                <p className='lg:text-3xl text-lg text-white-200 font-inter'>
                                    BaseRagon is a cool<br></br>
                                    DEX platform
                                </p>

                                <p className='text-white-50 font-inter'>
                                    where you can swap tokens hassle-free and manage liquidity like a breeze! No more headaches when exchanging tokens - our user-friendly interface makes it a piece of cake.
                                </p>
                            </div>

                            <div className="flex items-center gap-8 font-opensans text-white-100">
                                <a href="/">
                                    <button className=" bg-blue-100 py-3 md:px-8 px-3 font-medium border-2 border-blue-100 rounded-xl lg:w-44">
                                        Launch App
                                    </button>
                                </a>

                                <a href="https://docs.baseragon.com/">
                                    <button className="rounded-xl font-medium border-2 border-blue-100 hover:bg-blue-100 py-3 md:px-8 px-3 lg:w-44">
                                        Whitepaper
                                    </button>
                                </a>
                            </div>

                            <div className="flex items-center md:gap-x-12 gap-x-5">
                                <a href='/'><img src={twitter} alt='twitter' className='w-12'></img></a>
                                <a href='/'><img src={telegram} alt='telegram' className='w-12'></img></a>
                                <a href='/'><img src={discord} alt='discord' className='w-12'></img></a>
                            </div>

                        </div>

                        <div data-aos="fade-up" className="animate-float">
                            <img src={top} alt="Logo" className='lg:float-right w-10/12 lg:block flex mx-auto' />
                        </div>
                    </div>

                </div>
            </div>

            {/* feature */}

            <div id='feature' className="lg:px-20 px-5 lg:py-20 py-6">
                <div className='container mx-auto'>
                    <div className='grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 grid-rows-1 items-center justify-center gap-8'>
                        <div data-aos="flip-left" className='flex flex-col items-center justify-center text-center gap-y-8 p-8 bg-white-100 rounded-xl'>
                            <img src={feature_1} alt='icon'></img>
                            <p className='text-2xl font-semibold text-black-50'>Reliable network</p>
                            <p className='text-white-200'>Use decentralization, trusted nodes,  and premium data.</p>
                        </div>

                        <div data-aos="flip-left" className='flex flex-col items-center justify-center text-center gap-y-8 p-8 bg-white-100 rounded-xl'>
                            <img src={feature_2} alt='icon'></img>
                            <p className='text-2xl font-semibold text-black-50'>off-chain computation</p>
                            <p className='text-white-200'>Use a decentralized network to automate contracts, mitigating risk</p>
                        </div>

                        <div data-aos="fade-left" className='space-y-8'>
                            <p className='tracking-widest lg:text-2xl font-semibold uppercase text-blue-100'>Features</p>
                            <h3 className='md:text-8xl text-4xl text-gradient font-vinque font-bold'>
                                Meet our
                                Solutions
                            </h3>
                        </div>

                        <div data-aos="fade-right" className=''>
                            <p className='lg:text-3xl text-xl font-medium text-center'>
                                Explore sensational features to prepare your best investment in cryptocurrency
                            </p>
                        </div>

                        <div data-aos="flip-left" className='flex flex-col items-center justify-center text-center gap-y-8 p-8 bg-white-100 rounded-xl'>
                            <img src={feature_3} alt='icon'></img>
                            <p className='text-2xl font-semibold text-black-50'>Proven solutions</p>
                            <p className='text-white-200'>Integrate pre-built, time-tested oracle solutions </p>
                        </div>

                        <div data-aos="flip-left" className='flex flex-col items-center justify-center text-center gap-y-8 p-8 bg-white-100 rounded-xl'>
                            <img src={feature_4} alt='icon'></img>
                            <p className='text-2xl font-semibold text-black-50'>Seamless connection to API</p>
                            <p className='text-white-200'>Build on a flexible framework that can retrieve data from any API</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-12 lg:py-16 py-8 lg:space-y-0 space-y-8">

                        <div data-aos="fade-left" className="lg:w-1/2 lg:space-y-0 space-y-8">
                            <h2 className='md:text-6xl text-4xl text-gradient font-vinque font-bold'>
                                About BaseRagon
                            </h2>

                            <p className='py-8 lg:w-8/12 font-semibold'>
                                Experience the interaction with BaseRagon like never before. Our diverse team comprises seasoned developers, blockchain experts, and visionary leaders dedicated to driving innovation and delivering excellence in the decentralized finance space. With a wealth of experience and a shared passion for revolutionizing finance, we're committed to realizing the full potential of Base Dragon.
                            </p>

                            <a href="/">
                                <button className=" bg-blue-50 py-3 md:px-8 px-3 font-semibold border-2 border-blue-50 rounded-xl">
                                    Connect to BASE
                                </button>
                            </a>
                        </div>

                        <div className="lg:w-1/2">
                            <img data-aos="zoom-in" data-aos-delay='350' src={about} alt="Logo" className='absolute sm:w-48 w-24 right-0 mr-12 sm:mt-96 mt-56 rotate' />
                            <img src={top} alt="Logo" className='lg:float-right w-10/12 lg:block flex mx-auto' />
                        </div>

                    </div>

                </div>
            </div>

            {/* tokenomiccs */}

            <div id='tokenomics' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <p className='md:text-6xl text-4xl text-gradient font-vinque font-bold text-center lg:mb-16 mb-8'>
                        TOKENOMICS
                    </p>

                    <div className="lg:flex flex-row-reverse block justify-center mx-auto items-center gap-x-36 lg:py-12 py-4 lg:space-y-0 space-y-8">

                        <div data-aos="fade-left" className="lg:w-1/2 space-y-4 lg:text-left text-center">

                            <p className='md:text-3xl text-2xl font-semibold'>
                                Name: BaseRagon
                            </p>
                            <p className='md:text-3xl text-2xl font-semibold'>
                                Ticker: BaseRagon
                            </p>
                            <p className='md:text-3xl text-2xl font-semibold'>
                                Supply: 100 Billion
                            </p>

                            <a href="/">
                                <button className=" bg-blue-50 py-3 md:px-8 px-3 font-semibold border-2 border-blue-50 rounded-xl mt-8">
                                    Connect to BASE
                                </button>
                            </a>
                        </div>

                        <div data-aos="zoom-in" className="lg:w-1/2">
                            <img src={chart} alt="Logo" className='' />
                        </div>

                    </div>

                </div>
            </div>

            {/* roadmap */}

            <div id='roadmap' className="lg:px-20 px-5 lg:pt-20 py-6">
                <div className='container mx-auto'>

                    <p className='md:text-6xl text-4xl text-gradient font-vinque font-bold text-center lg:mb-16 mb-8 uppercase'>
                        roadmap
                    </p>

                    <div className="lg:mt-12 mt-6 rounded-2xl bg-blue-200 lg:p-12 p-6">

                        <div className="lg:flex hidden items-baseline justify-start gap-80 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">
                            <h5 className="text-2xl py-4 font-semibold">PHASE 1</h5>
                            <h5 className="text-2xl py-4 font-semibold">PHASE 2</h5>
                            <h5 className="text-2xl py-4 font-semibold">PHASE 3</h5>
                        </div>

                        <div className="h-1 w-full bg-white-50">

                        </div>

                        <div className='h-1 w-full line -translate-y-1'>

                        </div>

                        <div className="lg:flex items-baseline justify-between gap-6 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">

                            <div className='flex gap-x-5'>

                                <div className="flex flex-col items-center">
                                    <div
                                        data-aos="zoom-in"
                                        className="absolute -mt-3.5 lg:block hidden"
                                    >
                                        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#fff" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#fff" />
                                        </svg>

                                    </div>

                                    <div className="border-l border-red-100 opacity-40 lg:mt-5 mt-0 mb-3 h-44"></div>
                                </div>

                                <div
                                    data-aos="flip-right"
                                    className="ounded-2xl text-white-100 lg:w-72 mt-6"
                                >

                                    <ul className="list-disc p-4">
                                        <li>Social Media set up: Twitter,  Medium and Telegram </li>
                                        <li>Website</li>
                                        <li>Community building</li>
                                        <li>Stealth Launch</li>
                                        <li>Multi token staking platform live</li>
                                        <li>White Paper Release</li>
                                        <li>Strategic Partnerships</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex gap-x-5'>

                                <div className="flex flex-col items-center">
                                    <div
                                        data-aos="zoom-in"
                                        className="absolute -mt-3.5 lg:block hidden"
                                    >
                                        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#fff" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#fff" />
                                        </svg>

                                    </div>

                                    <div className="border-l border-red-100 opacity-40 lg:mt-5 mt-0 mb-3 h-44"></div>
                                </div>

                                <div
                                    data-aos="flip-right"
                                    className="ounded-2xl text-white-100 lg:w-72 mt-6">

                                    <ul className="list-disc p-4">
                                        <li>CMC Listing</li>
                                        <li>CG Listing </li>
                                        <li>Listing on tier 3-2 exchange</li>
                                        <li>Large Marketing Campaigns </li>
                                        <li>Strategic Partnerships</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex gap-x-5'>

                                <div className="flex flex-col items-center">
                                    <div
                                        data-aos="zoom-in"
                                        className="absolute -mt-3.5 lg:block hidden"
                                    >
                                        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#fff" />
                                            <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#fff" />
                                        </svg>

                                    </div>

                                    <div className="border-l border-red-100 opacity-40 lg:mt-5 mt-0 mb-3 h-44"></div>
                                </div>

                                <div
                                    data-aos="flip-right"
                                    className="ounded-2xl text-white-100 lg:w-72 mt-6"
                                >

                                    <ul className="space-y-4 list-disc p-4">
                                        <li>New Exchanges Listing CEX </li>
                                        <li>Further community growth </li>
                                        <li>Strategic Partnerships</li>
                                        <li>Large Marketing Campaigns</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* faq section */}

            <div id='faq' className="">

                <div className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div data-aos="fade-up" className='lg:w-11/12 flex flex-col mx-auto'>
                        <p className='md:text-6xl text-4xl text-gradient font-vinque uppercase font-bold text-center lg:mb-16 mb-8'>
                            faq
                        </p>

                        <p className='lg:w-1/2 flex mx-auto lg:text-lg text-center'>
                            Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus
                        </p>

                        <div data-aos="zoom-in" className="accordion space-y-5 pt-20">
                            {accordionData.map(({ title, content }) => (
                                <Accordion title={title} content={content} />
                            ))}
                        </div>

                    </div>

                </div>

            </div>

            <div className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto">

                <div className='lg:w-11/12 flex flex-wrap mx-auto bg-white-100 rounded-3xl relative z-20 duration-300 hover:scale-105'>
                    <div className='space-y-8 md:p-12 p-6'>
                        <p className='md:text-6xl text-4xl text-blue-100 font-vinque uppercase font-bold'>
                            Join Us
                        </p>
                        <p className='text-black-50 lg:w-1/2 font-medium'>
                            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                        <div className="flex items-center md:gap-x-10 gap-x-5">
                            <a href="/">
                                <button className=" bg-blue-100 py-3 md:px-6 px-4 font-semibold border-2 border-blue-100 rounded-full lg:w-40">
                                    Join Us
                                </button>
                            </a>
                            <a href='/'><img src={twitter} alt='twitter' className='w-12'></img></a>
                            <a href='/'><img src={telegram} alt='telegram' className='w-12'></img></a>
                            <a href='/'><img src={discord} alt='discord' className='w-12'></img></a>
                        </div>
                    </div>

                    <div className='lg:block hidden'>
                        <img src={join} alt='join' className='absolute right-0 top-32 translate-y-1.5 rounded-br-3xl'></img>
                        <img src={vector} alt='join' className='absolute right-0 top-28'></img>
                    </div>
                </div>

                <div />
            </div>

            <Footer />
        </div>
    )
}
