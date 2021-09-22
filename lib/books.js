import fetch from 'node-fetch';
import axios from 'axios';

export const searchBooks = async (searchWord) => {
  const params = {
    applicationId: process.env.NEXT_PUBLIC_RAKUTEN_ID,
    title: searchWord
  };
  const query_params = new URLSearchParams(params);

  const res = await fetch(
    new URL(`https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?${query_params}/`),
  )
  const books = await res.json();
  return books;
}