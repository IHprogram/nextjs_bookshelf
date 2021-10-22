import Layout from "../components/Layout";
import Header from "../components/Header";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookie from "universal-cookie";
import StateContextProvider from "../context/StateContext";
import BookRegisterButton from "../components/BookRegisterButton";

const cookie = new Cookie();
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-book/`;

const BookDetail = () => {
  const router = useRouter();

  return (
    <StateContextProvider>
      <Header />
      <Layout title="書籍詳細">
        <div>
          <div><img src={router.query.image} /></div>
          <p>{router.query.title}</p>
          <p>{router.query.author}</p>
          <p>{router.query.caption}</p>
          <Link href={`${router.query.itemUrl}`}><a className="text-yellow-500" target="_blank">商品を見に行く</a></Link>

          <BookRegisterButton books />
        </div>
      </Layout>
    </StateContextProvider>
  )
}

export default BookDetail;
