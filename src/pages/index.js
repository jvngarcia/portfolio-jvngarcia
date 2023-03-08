import Card from '@/components/card'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainOutstanding from '@/components/MainOutstanding'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {

  const [ item, setItem ] = useState( 'SideProjects' )

  const active = 'text-jvn border-b-2 border-jvn pb-4 transition-all'
  const inactive = 'hover:text-jvn hover:border-jvn hover:border-b-2 pb-4 transition-all'

  return (
    <>
      <Head>
        <title>JVN García</title>
        <meta name="description" content="FullStack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className="container mx-auto md:px-12">
        <Header />
        <MainOutstanding
          image="images/profile.png"
          title="I'm Angel Garcia, web 💻 and mobile 📱 developer."
          content="As a developer 💻📱 I have built projects for companies and I have developed side projects that have had +10k downloads in the Play Store. I'll tell you more through my social networks 🤙."
          url="mailto:angelgarciaweb@gmail.com" />

        <div className='flex justify-center gap-6 text-gray-500 dark:text-gray-400 '>
          <button onClick={ () => setItem( 'SideProjects' ) } href="/" className={ `${ item == 'SideProjects' ? active : inactive }` }>Side Projects</button>
          <button onClick={ () => setItem( 'BusinessApps' ) } href="#" className={ `${ item == 'BusinessApps' ? active : inactive }` }>Business Apps</button>
          <button onClick={ () => setItem( 'Apis' ) } href="#" className={ `${ item == 'Apis' ? active : inactive }` }>API's</button>
        </div>



        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 px-10'>
          {
            item === 'SideProjects' &&
            <>
              <Card image="/images/tailwind_flow.png"
                title="TailwindFlow"
                content='Custom Tailwind component library for ease of project development.'
                url="https://tailwindflow.vercel.app/"
                tags={['nextjs', 'tailwind']} />

              <Card image="/images/trueordare.png"
                title="VOR: Verdad o reto"
                content='Mobile application with +10k downloads in the PlayStore of the famous game "truth or dare".'
                url="https://play.google.com/store/apps/details?id=com.jvngarcia.vor"
                tags={['mobileApp', 'flutter']} />
            </>
          }



          {
            item === 'BusinessApps' &&
            <>
              

              <Card image="/images/portal-pagos.png"
                title="Payment Gateway"
                content='Web application that allows: manage credit card payments, request payments and secure payments. Developed for Bancamiga Banco Universal C.A.'
                url="https://play.google.com/store/apps/details?id=com.jvngarcia.vor"
                tags={['reactJS', 'apiConnection']} />

              <Card image="/images/trueordare.png"
                title="Document Center"
                content='Web application that allows you to manage all administrative process documents, being visible to specific user groups. Developed for Bancamiga Banco Universal C.A.'
                url="https://play.google.com/store/apps/details?id=com.jvngarcia.vor"
                tags={['laravel', 'postgreSQL', 'livewire']} />

              <Card image="/images/trueordare.png"
                title="SAIR"
                content='System to manage and analyze statistics of the Bancamiga banking scale. Developed for Bancamiga Banco Universal C.A.'
                url="https://play.google.com/store/apps/details?id=com.jvngarcia.vor"
                tags={['laravel', 'postgreSQL', 'livewire']} />

              <Card image="/images/trueordare.png"
                title="Registration of Candidates"
                content='Web application for the registration of all candidates to work at Bancamiga. Developed for Bancamiga Banco Universal C.A.'
                url="https://play.google.com/store/apps/details?id=com.jvngarcia.vor"
                tags={['laravel', 'postgreSQL', 'livewire']} />

              <Card image="/images/trueordare.png"
                title="Training Registration System"
                content='Web application for the registration of all courses carried out by Bancamiga staff. Developed for Bancamiga Banco Universal C.A.'
                url="https://play.google.com/store/apps/details?id=com.jvngarcia.vor"
                tags={['laravel', 'postgreSQL', 'livewire']} />

              <Card image="/images/trueordare.png"
                title="Use Your Drive Extensión"
                content='Plugin for WordPress that allows you to select, comment and register the photos managed by the Use Your Drive Plugin.'
                url="https://github.com/jvngarcia/use-your-drive-extension"
                tags={['php', 'mySQL', 'WordPress']} />

              <Card image="/images/trueordare.png"
                title="Merkared MX"
                content='Web and mobile application that allows the purchase and sale of products and services in Mexico. Developed for Iikno.'
                url="https://merkared.com.mx"
                tags={['laravel', 'apiConnection', 'flutter' ]} />

              <Card image="/images/trueordare.png"
                title="BSConnect"
                content='Web application that allows the purchase of various products in Mexico. Developed for Iikno.'
                url="https://merkared.com.mx"
                tags={['laravel', 'mySQL']} />
            </>
          }




          {
            item === 'Apis' &&
            <>
              <Card image="/images/trueordare.png"
                title="Bank Intervention"
                content='API for banking intervention reports proposed by the Central Bank of Venezuela. Developed for Bancamiga Banco Universal C.A.'
                url="https://documenter.getpostman.com/view/18337636/2s93JqTQpX"
                tags={['fastAPI', 'python']} />
            </>
          }
          
        </div>
      </main>
      <Footer />
    </>
  )
}
