import Footer from './components/Footer'
import Headers from './components/Headers'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section21 from './components/Section21'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

const App = () => {
  return (
    <main className="flex justify-center items-center bg-[white]">
      <div className="w-auto max-w-[1440px] ">
        <Headers />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section21 />
        <Section4 />
        <Footer />
      </div>
    </main>
  )
}
export default App
