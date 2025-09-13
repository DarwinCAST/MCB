import { Award, Badge, BookOpen, Users } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/enhanced-card";
import Header from "@/components/Header";
import ListOfFacilitors from "@/components/ListOfFacilitors";
import Footer from "@/components/Footer";

export default function Facilitors() {
  return (
    <div className="min-h-screen">
      <Header />
      <ListOfFacilitors />
      <Footer />
    </div>
  );
}
