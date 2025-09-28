import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ListOfConsultancy from '@/components/ListOfConsultancy'
import ListOfCourses from '@/components/ListOfCourses'


export default function Consultancy() {
  return (
    <div className="min-h-screen">
      <Header />
      <ListOfConsultancy />
      <Footer />
    </div>
  )
}
