import Layout from "../components/Layout";
import Link from "next/link";
import Header from "../components/Header";
import { searchBooks } from "../lib/books";

const Mainpage = ({ searchResult }) => {

  return (
    <>
      <Header />
      <Layout title="Main Page">
        <button type="button" onClick={() => console.log(searchResult)}>確認</button>
      </Layout>
    </>
  )
}

export default Mainpage;

export const getStaticProps = async () => {
  const searchResult = await searchBooks('卓球');
  console.log('searchResultの中身', searchResult);

  return {
    props: { searchResult },
    revalidate: 3,
  }
}