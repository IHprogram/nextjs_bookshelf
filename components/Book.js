import Link from 'next/link';
import { useRouter } from 'next/router';

const Book = ({ book }) => {
  const router = useRouter();

  const goToBookDetail = () => {
    console.log(book)
    router.push({
      pathname: "/book-detail",
      query: {
        title: book.title,
        author: book.author,
        caption: book.caption,
        image: book.image,
        price: book.price,
        itemUrl: book.itemUrl
      }
    });
  }

  return (
    <div>
      <li key={book.title}>
        <img src={book.image} />
        <p>
          {book.author}
        </p>
        <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600" onClick={goToBookDetail}>{book.title}</span>
      </li>
    </div>
  )
}

export default Book;