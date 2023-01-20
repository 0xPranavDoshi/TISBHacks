/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import Footer from '@/components/Footer'
import FAQ, { FAQEnum, FAQProps } from '@/components/FAQ'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const faqs: FAQProps[] = [
    {
      faqVal: FAQEnum.Q1,
      question: 'What are the benefits of participating?',
      answer:
        'Learn new skills, add a nation-wide event to your Resume, network with the best programmers in India, and win cash prizes worth Rs. 100,000. All while meeting great people, having great food, and having great fun!',
    },
    {
      faqVal: FAQEnum.Q2,
      question: 'Is there support available?',
      answer:
        'The environment at these events is designed specifically to encourage everyone to have fun and help each other. If you’re ever stuck on anything, speak to a volunteer or a HOD who will help you. The primary purpose of the hackathon is to learn, so don’t be afraid to ask!',
    },
    {
      faqVal: FAQEnum.Q3,
      question: 'Do you need coding experience to participate?',
      answer:
        'No! If you’re new to programming, feel free to participate in the UI Development Category.',
    },
    {
      faqVal: FAQEnum.Q4,
      question: 'Is the hackathon open to anyone?',
      answer:
        'We have two categories; one for ages 10-13 and another for ages 13-18.',
    },
    {
      faqVal: FAQEnum.Q5,
      question: 'Are there Cash Prizes?',
      answer: (
        <>
          <p>
            Yes! There are cash prizes worth Rs. 100’000 in total distributed as
            follows:
          </p>
          <br />
          <p>
            <b>Coding Category:</b> First Place = 25’000, Second Place = 15’000,
            Third Place = 10’000
          </p>
          <p>
            <b>UX Design Category:</b> First Place = 25’000, Second Place =
            15’000, Third Place = 10’000
          </p>
        </>
      ),
    },
    {
      faqVal: FAQEnum.Q6,
      question:
        'I have another question that is not answered in your FAQs, what should I do?',
      answer: 'Please contact us at hackathon@tisb.ac.in for further queries.',
    },
    {
      faqVal: FAQEnum.Q7,
      question: 'What about confidentiality of information?',
      answer:
        'If you don’t want to distribute your code base that is ok, if you don’t want to present your project, then a hackathon might not be the ideal place for you to work on that idea. We will take photos at the event and you will sign a document that allows us to use those pictures for social media. So if you don’t want to be on any pictures please tell us beforehand!',
    },
    {
      faqVal: FAQEnum.Q8,
      question: 'Do all team members need to be present in person?',
      answer:
        'Yes, every team member should be present. If a team member cannot be present during the pitch or can only come later please tell us and we will find a way to manage!',
    },
    {
      faqVal: FAQEnum.Q9,
      question: 'What is the Program/Timetable?',
      answer: (
        <>
          <p>The schedule of events on February 4th are as follows:</p>
          <br />
          <p>
            <b>2 PM</b> - Event begins.
          </p>
          <p>
            <b>2-3 PM</b> - 3 side events occurring simultaneously carnivalesque
            (Competitive coding, Gaming, Crisis event).
          </p>
          <p>
            <b>3:15-3:30 PM</b> - Opening Ceremony (Guest Speaker, Introduction
            of Event).
          </p>
          <p>
            <b>3:30-5:30 PM</b> - Presentations with short 10 minute juice break
            in the middle.
          </p>
          <p>
            <b>5:30-6 PM</b> - Internal discussion to decide winners.
          </p>
          <p>
            <b>6-6:15 PM</b> - Announcing winner and closing ceremony.
          </p>
        </>
      ),
    },
    {
      faqVal: FAQEnum.Q10,
      question: 'What should I bring?',
      answer:
        'We suggest you to bring your laptops and mobile phones. You can bring anything else as long as it complies with the code of conduct.',
    },
    {
      faqVal: FAQEnum.Q11,
      question: 'Will there be wireless internet access?',
      answer: 'Yes, there will be free internet access to all participants.',
    },
    {
      faqVal: FAQEnum.Q12,
      question: 'Will there be food available?',
      answer: 'Yes, there will be unlimited snacks available for participants!',
    },
    {
      faqVal: FAQEnum.Q13,
      question: 'How are the winners selected?',
      answer: (
        <>
          There will be an independent Jury comprised of experienced judges
          selecting the winners with a rating system:{' '}
          <b>
            (Implementability, financial benefits, presentation skills,
            creativity)
          </b>
        </>
      ),
    },
    {
      faqVal: FAQEnum.Q14,
      question: 'What is the dress code for the event?',
      answer:
        'While there is no official dress code for the event, we wish to remind participants to dress appropriately.',
    },
  ]

  const [faq, setFaq] = useState<FAQEnum>(FAQEnum.NONE)

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
          <div className='flex flex-col items-center justify-start w-full h-[87vh] mt-[13vh] mx-6 sm:mx-8'>
            <div
              style={{ backgroundImage: 'url("/images/main_bg.png")' }}
              className='w-full h-[82%] mb-[4%] sm:h-[54%] sm:mb-[1%] flex flex-col justify-center items-center rounded-[2rem] grayscale-[50%] bg-cover'
            >
              <h1 className='text-4xl font-bold text-white sm:text-7xl'>
                TISB Hacks 3.0
              </h1>
              <h3 className='flex items-center justify-center my-4 text-xl font-semibold text-white sm:text-2xl'>
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
            <div className='sm:flex items-center justify-center w-full h-[29%] mb-[1%] gap-4 hidden'>
              <div
                className='flex items-center justify-center w-1/4 h-full bg-cover rounded-[2rem] flex-col grayscale-[60%]'
                style={{ backgroundImage: 'url("/images/healthcare.png")' }}
              >
                <h2 className='text-4xl font-bold text-white'>Healthcare</h2>
                <p className='text-tertiary'>theme</p>
              </div>
              <div
                className='flex flex-col items-center justify-center w-1/4 h-full bg-cover rounded-[2rem] grayscale-[60%]'
                style={{ backgroundImage: 'url("/images/education.png")' }}
              >
                <h2 className='text-4xl font-bold text-white'>Education</h2>
                <p className='text-tertiary'>theme</p>
              </div>
              <div
                className='flex flex-col items-center justify-center w-1/4 h-full bg-cover rounded-[2rem] grayscale-[60%]'
                style={{ backgroundImage: 'url("/images/transport.png")' }}
              >
                <h2 className='text-4xl font-bold text-white'>Transport</h2>
                <p className='text-tertiary'>theme</p>
              </div>
              <div
                className='flex flex-col items-center justify-center w-1/4 h-full bg-cover rounded-[2rem] grayscale-[60%]'
                style={{ backgroundImage: 'url("/images/social_good.png")' }}
              >
                <h2 className='text-4xl font-bold text-white'>Social Good</h2>
                <p className='text-tertiary'>theme</p>
              </div>
            </div>

            {/* Prize Pool */}
            <div
              className='flex justify-center items-center w-full h-[12%] mb-[2%] bg-cover rounded-[3rem] grayscale-[50%]'
              style={{ backgroundImage: 'url("/images/prize_pool.png")' }}
            >
              <h3 className='text-3xl font-semibold text-center text-white sm:text-4xl'>
                ₹100,000 in Cash Prizes
              </h3>
            </div>
          </div>
        </div>

        <div className='absolute left-0 top-[90vh]' id='faqs'></div>
        <div className='flex items-start justify-between w-screen h-auto bg-primary'>
          <div className='flex flex-col items-start justify-start p-8'>
            <h1 className='mb-8 text-6xl font-semibold'>FAQs</h1>
            {faqs.map((faqObj: FAQProps) => {
              return (
                <FAQ
                  faq={faq}
                  setFaq={setFaq}
                  key={faqObj.question}
                  question={faqObj.question}
                  faqVal={faqObj.faqVal}
                  answer={faqObj.answer}
                />
              )
            })}

            <h3 className='mt-16 mb-8 text-4xl font-semibold' id='sponsors'>
              Sponsors
            </h3>
            <div className='flex flex-col items-start justify-start gap-8 ml-4 overflow-x-auto'>
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

          <div className='flex-col items-center justify-center hidden sm:flex'>
            <img
              src='/images/secondary_bg.png'
              className='h-full select-none'
              alt=''
            />
            <img
              src='/images/secondary_bg.png'
              className='h-full select-none scale-y-[-1]'
              alt=''
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
