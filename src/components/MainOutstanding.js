


export default function MainOutstanding({ image, title, content, url }) {
  return (
    <div className='grid md:grid-cols-2 my-12 px-10'>
        <div className='flex justify-center items-center'>
            <img src={ image } alt="Imagen de JVN García" />
        </div>
        <div className='flex items-center'>
            <div className='text-gray-500 dark:text-gray-400 text-lg'>
                <p className='mb-3'>{ title }</p>
                <p className='mb-3'>{ content }</p>
                
                { url &&
                    <a href={ url } className='text-jvn flex gap-1 items-center group hover:opacity-70 transition-all'>
                        Hire me
                        <svg className='w-[15px] group-hover:ml-1 transition-all' fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                }
                
            </div>
        </div>
    </div>
  )
}