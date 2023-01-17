/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  return (
    <div className='w-full h-[10vh] border-b border-white/[.13] border-solid flex justify-between items-center fixed z-20 bg-primary'>
      <img src='/logo.png' alt='Logo' className='ml-4 w-14 h-14' />
      <div className='flex items-center justify-center gap-8'>
        <p className='text-white cursor-pointer'>Home</p>
        <p
          onClick={() => {
            let element = document.getElementById('faqs')
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
          className='text-white cursor-pointer'
        >
          FAQs
        </p>
        <p
          onClick={() => {
            let element = document.getElementById('sponsors')
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
          className='text-white cursor-pointer'
        >
          Sponsors
        </p>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://5h574blbwuh.typeform.com/to/eJppZjWY'
          className='px-6 py-2 mr-12 rounded-full cursor-pointer bg-gradient-to-b from-gradientTop to-gradientBottom'
        >
          Register
        </a>
      </div>
    </div>
  )
}

export default Navbar
