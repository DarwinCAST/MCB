import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListOfCourses from "@/components/ListOfCourses";
import React from "react";

export default function Courses() {
  return (
    <div className="min-h-screen">
      <Header />
      <ListOfCourses />
      <Footer />
    </div>
  );
}
