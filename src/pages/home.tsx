"use client";
import HomeDev from "@/lib/components/appComponents/home/HomeDev";
import HomeCompany from "@/lib/components/appComponents/home/HomeCompany";
import Layout from "@/layout/layout";

function DashboardPage() {
  return <Layout childrenDev={<HomeDev />} childrenCompany={<HomeCompany />} />;
}

export default DashboardPage;
