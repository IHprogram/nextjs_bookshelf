import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { StateContext } from "../context/StateContext";
import Cookie from "universal-cookie";

const cookie = new Cookie();

export default function BookRegisterButton() {
  const { selectedBook, setSelectedBook } = useContext(StateContext);
  const router = useRouter();

  useEffect(() => {
    setSelectedBook({
      title: router.query.title,
      author: router.query.author,
      image: router.query.image,
      price: router.query.price,
      caption: router.query.caption,
      itemUrl: router.query.itemUrl
    })
  }, []);

  const registerBook = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/books/`, {
      method: "POST",
      body: JSON.stringify({
        title: selectedBook.title,
        author: selectedBook.author,
        image: selectedBook.image,
        price: selectedBook.price,
        caption: selectedBook.caption,
        itemUrl: selectedBook.itemUrl
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("エラーが発生しました")
      } else {
        return res.json();
      }
    });
    setSelectedBook({
      title: "",
      author: "",
      image: "",
      price: "",
      caption: "",
      itemUrl: ""
    });
  }

  return (
    <div>
      <form onSubmit={registerBook}>
        <button type="submit" className="text-red-500">登録</button>
      </form>
    </div>
  )
}