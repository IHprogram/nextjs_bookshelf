import Layout from "../components/Layout";
import Link from "next/link";
import Header from "../components/Header";

const Mainpage = () => {
  return (
    <>
      <Header />
      <Layout title="Main Page">
        <h2>メインページ</h2>
      </Layout>
    </>
  )
}

export default Mainpage;