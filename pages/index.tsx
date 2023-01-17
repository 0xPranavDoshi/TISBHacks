/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useState } from 'react'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const enum FAQ {
  NONE = '',
  Q1 = 'How do I sign up?',
  Q2 = 'Is there a fee for the event?',
  Q3 = 'What is the team size?',
  Q4 = 'Is the hackathon offline or online?',
}

export default function Home() {
  const [faq, setFaq] = useState<FAQ>(FAQ.NONE)

  return (
    <>
      <Head>
        <title>TISBHacks</title>
        <meta name='description' content='TisbHacks' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <div className='w-screen h-full bg-primary'>
        <Navbar />

        <div className='flex items-start justify-center w-full h-full'>
          <div className='flex flex-col items-center justify-start w-full h-[87vh] mt-[13vh] mx-8'>
            <div
              style={{ backgroundImage: 'url("/images/main_bg.png")' }}
              className='w-full h-[59%] mb-[1%] flex flex-col justify-center items-center rounded-[2rem] grayscale-[50%] bg-cover'
            >
              <h1 className='font-bold text-7xl'>TISB Hacks 3.0</h1>
              <h3 className='flex items-center justify-center my-4 text-2xl font-semibold'>
                January 28th
                <span>
                  <img
                    src='/images/arrow_right.png'
                    alt=''
                    className='w-8 mx-3'
                  />
                </span>
                February 4th
              </h3>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://5h574blbwuh.typeform.com/to/eJppZjWY'
                className='flex items-center justify-center px-10 py-2 mt-2 text-xl font-semibold text-black bg-white rounded-full cursor-pointer '
              >
                Register
              </a>
            </div>

            {/* Themes */}
            <div className='flex items-center justify-center w-full h-[38%] mb-[2%] gap-4'>
              <div
                className='flex items-center justify-center w-1/4 h-full bg-cover rounded-[2rem] flex-col grayscale-[60%]'
                style={{ backgroundImage: 'url("/images/healthcare.png")' }}
              >
                <h2 className='text-4xl font-bold'>Healthcare</h2>
                <p className='text-tertiary'>theme</p>
              </div>
              <div
                className='flex flex-col items-center justify-center w-1/4 h-full bg-cover rounded-[2rem] grayscale-[60%]'
                style={{ backgroundImage: 'url("/images/education.png")' }}
              >
                <h2 className='text-4xl font-bold'>Education</h2>
                <p className='text-tertiary'>theme</p>
              </div>
              <div
                className='flex flex-col items-center justify-center w-1/4 h-full bg-cover rounded-[2rem] grayscale-[60%]'
                style={{ backgroundImage: 'url("/images/transport.png")' }}
              >
                <h2 className='text-4xl font-bold'>Transport</h2>
                <p className='text-tertiary'>theme</p>
              </div>
              <div
                className='flex flex-col items-center justify-center w-1/4 h-full bg-cover rounded-[2rem] grayscale-[60%]'
                style={{ backgroundImage: 'url("/images/social_good.png")' }}
              >
                <h2 className='text-4xl font-bold'>Social Good</h2>
                <p className='text-tertiary'>theme</p>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute left-0 top-[90vh]' id='faqs'></div>
        <div className='flex items-start justify-between w-screen h-auto bg-primary'>
          <div className='flex flex-col items-start justify-start p-8'>
            <h1 className='mb-8 text-6xl font-semibold'>FAQs</h1>
            <div className='pl-4 pr-4 rounded-md w-[45rem] py-4 flex flex-col justify-start items-start bg-gray'>
              <div
                className='flex items-center justify-between w-full cursor-pointer'
                onClick={() =>
                  faq === FAQ.Q1 ? setFaq(FAQ.NONE) : setFaq(FAQ.Q1)
                }
              >
                <p className='text-xl font-medium text-white'>
                  How do I sign up?
                </p>
                {faq === FAQ.Q1 ? (
                  <IoIosArrowUp size='20' className='text-tertiary' />
                ) : (
                  <IoIosArrowDown size='20' className='text-tertiary' />
                )}
              </div>

              {faq === FAQ.Q1 && (
                <p className='mt-4 text-tertiary'>
                  You can register for the event using this{' '}
                  <a
                    className='text-blue-400 underline cursor-pointer'
                    target='_blank'
                    rel='noreferrer'
                    href='https://5h574blbwuh.typeform.com/to/eJppZjWY'
                  >
                    link
                  </a>
                  .
                </p>
              )}
            </div>

            <div className='mt-4 pl-4 pr-4 rounded-md w-[45rem] py-4 flex flex-col justify-start items-start bg-gray'>
              <div
                className='flex items-center justify-between w-full cursor-pointer'
                onClick={() =>
                  faq === FAQ.Q2 ? setFaq(FAQ.NONE) : setFaq(FAQ.Q2)
                }
              >
                <p className='text-xl font-medium text-white'>
                  Is there a fee for the event?
                </p>
                {faq === FAQ.Q2 ? (
                  <IoIosArrowUp size='20' className='text-tertiary' />
                ) : (
                  <IoIosArrowDown size='20' className='text-tertiary' />
                )}
              </div>

              {faq === FAQ.Q2 && (
                <p className='mt-4 text-tertiary'>
                  No, there is no registration fee for the event.
                </p>
              )}
            </div>

            <div className='mt-4 pl-4 pr-4 rounded-md w-[45rem] py-4 flex flex-col justify-start items-start bg-gray'>
              <div
                className='flex items-center justify-between w-full cursor-pointer'
                onClick={() =>
                  faq === FAQ.Q3 ? setFaq(FAQ.NONE) : setFaq(FAQ.Q3)
                }
              >
                <p className='text-xl font-medium text-white'>
                  What is the team size?
                </p>
                {faq === FAQ.Q3 ? (
                  <IoIosArrowUp size='20' className='text-tertiary' />
                ) : (
                  <IoIosArrowDown size='20' className='text-tertiary' />
                )}
              </div>

              {faq === FAQ.Q3 && (
                <p className='mt-4 text-tertiary'>
                  Teams can be composed of <b>1-6 members (inclusive)</b>. If
                  you are having struggle finding team members, you can email us
                  and we will try and connect you with other students.
                </p>
              )}
            </div>

            <div className='mt-4 pl-4 pr-4 rounded-md w-[45rem] py-4 flex flex-col justify-start items-start bg-gray'>
              <div
                className='flex items-center justify-between w-full cursor-pointer'
                onClick={() =>
                  faq === FAQ.Q4 ? setFaq(FAQ.NONE) : setFaq(FAQ.Q4)
                }
              >
                <p className='text-xl font-medium text-white'>
                  Is the hackathon offline or online?
                </p>
                {faq === FAQ.Q4 ? (
                  <IoIosArrowUp size='20' className='text-tertiary' />
                ) : (
                  <IoIosArrowDown size='20' className='text-tertiary' />
                )}
              </div>

              {faq === FAQ.Q4 && (
                <div className='mt-4 text-tertiary'>
                  <p>
                    The first week of the hackathon will be held online, from{' '}
                    <b>January 28th - Feb 3rd</b>. During this time, you can
                    work on your project and engage with other participants on
                    the discord server. Several webinars and workshops will also
                    be held online.
                  </p>
                  <br />
                  <p>
                    <b>February 4th</b>, the final day of the hackathon, will be
                    held in hybrid mode; this means you have the option to come
                    to TISB physically if you want, although this is not a
                    requirement and will not disadvantage you.
                  </p>
                  <br />
                  <p>
                    If you do choose to come to school physically, you will have
                    the opportunity to participate in additional mini-events,
                    such as a crisis event, competitive coding and gaming. You
                    will also have the option to present your project to the
                    judges in-person.
                  </p>
                </div>
              )}
            </div>

            <h3 className='mt-16 mb-8 text-4xl font-semibold' id='sponsors'>
              Sponsors
            </h3>
            <div className='flex flex-col items-start justify-start gap-8 ml-4'>
              <div className='flex items-start justify-start w-full gap-8'>
                <img src='/sponsors/cobalt.png' alt='' className='w-40' />
                <img
                  src='/sponsors/corporate gurukul.jpeg'
                  alt=''
                  className='w-40'
                />
                <img src='/sponsors/jetlearn.png' alt='' className='w-28' />
                <img src='/sponsors/looria.svg' alt='' className='w-40' />
              </div>
              <div className='flex items-start justify-start w-full gap-8'>
                <img src='/sponsors/rotary.png' alt='' className='w-40' />
                <img
                  src='/sponsors/tribesForGood.jpeg'
                  alt=''
                  className='w-40'
                />
                <img src='/sponsors/vimochana.png' alt='' className='w-40' />
              </div>
            </div>
          </div>

          <img
            src='/images/secondary_bg.png'
            className='h-full select-none'
            alt=''
          />
        </div>

        <Footer />
      </div>
    </>
  )
}
