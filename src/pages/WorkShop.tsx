import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListOfCourses from "@/components/ListOfCourses";
import ListOfWorkshop from "@/components/ListOfWorkShop";

export default function WorkShop () {
  return (
    <div className="min-h-screen">
      <Header />
      <ListOfWorkshop />
      <Footer />
    </div>
  );
}
