import Footer from '@/components/Footer'
import Header from '@/components/Header'
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
      <main className="container mx-auto">
        <Header />
      </main>
      <Footer />
    </>
  )
}
