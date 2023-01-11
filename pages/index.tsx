import Head from "next/head";
import Image from "next/image";

import Blog from "../components/home-page/Blog";
import Contact from "../components/home-page/Contact";
import Hero from "../components/home-page/Hero";
import HomeKitchen from "../components/home-page/HomeKitchen";

import Layout from "../components/ui/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <HomeKitchen />
        <Blog />
        <Contact />
      </Layout>
    </>
  );
}
