import Link from 'next/link';

const Book = ({ book }) => {
  return (
    <div>
      <li key={book.title}>
        <img src={book.image} />
        <p>
          {book.author}
        </p>
        <Link href={`/books/${book.title}`}>
          <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">{book.title}</span>
        </Link>
      </li>
    </div>
  )
}

export default Book;