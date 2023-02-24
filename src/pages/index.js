import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainOutstanding from '@/components/MainOutstanding'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>JVN García</title>
        <meta name="description" content="FullStack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto md:px-12">
        <Header />
        <MainOutstanding 
          image="images/profile.png"
          title="I'm Angel Garcia, web 💻 and mobile 📱 developer."
          content="As a developer 💻📱 I have built projects for companies and I have developed side projects that have had +10k downloads in the Play Store. I'll tell you more through my social networks 🤙."
          url="mailto:angelgarciaweb@gmail.com" />
      </main>
      <Footer />
    </>
  )
}
