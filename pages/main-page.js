import { useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Book from "../components/Book";
import { useForm } from "react-hook-form";
import axios from 'axios';

const Mainpage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.word === '') {
      setSearchResult([]);
    } else {
      axios.get("https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?", {
        params: {
          applicationId: process.env.NEXT_PUBLIC_RAKUTEN_ID,
          title: data.word,
        },
      }).then(res => {
        console.log(res)
        const newArray = [];
        res.data.Items.forEach(element => {
          newArray.push({
            title: element.Item.title,
            author: element.Item.author,
            image: element.Item.largeImageUrl,
            price: element.Item.itemPrice,
            caption: element.Item.itemCaption,
            itemUrl: element.Item.itemUrl
          })
        })
        console.log(newArray);
        setSearchResult(newArray);
      });
    }
  };

  return (
    <>
      <Header />
      <Layout title="Main Page">
        <form onSubmit={handleSubmit(onSubmit)} className="flex item-center justify-content">
          <input className="text-black appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" {...register("word")} />
          <button type="submit" className="text-black ml-3 bg-white px-3 py-2 rounded-md">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </form>

        {searchResult && searchResult.map((book) => <Book key={book.title} book={book} />)}
      </Layout>
    </>
  )
}

export default Mainpage;