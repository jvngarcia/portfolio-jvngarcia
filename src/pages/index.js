import Card from '@/components/card'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainOutstanding from '@/components/MainOutstanding'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
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
          <Link href="/" className='text-jvn border-b-2 border-jvn pb-4'>Side Projects</Link>
          <Link href="#" className='hover:text-jvn hover:border-jvn hover:border-b-2 pb-4 transition-all'>Business Apps</Link>
          <Link href="#" className='hover:text-jvn hover:border-jvn hover:border-b-2 pb-4 transition-all'>API's</Link>
        </div>



        <div className='grid md:grid-cols-5 px-10'>
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
        </div>
      </main>
      <Footer />
    </>
  )
}
