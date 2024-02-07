import Header from './Header'
import Form from './Form'
import Footer from './Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      <Form />
      <Footer />
    </main>
  )
}
