const Footer = () => {
  return (
    <footer className='bg-sky-950 mt-auto'>
      <div className='container mx-auto max-w-screen-lg'>
        <p className='text-white'>{new Date().getFullYear()} &copy;</p>
      </div>
    </footer>
  )
}

export default Footer
