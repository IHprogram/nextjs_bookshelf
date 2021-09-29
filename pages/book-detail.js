import Link from 'next/link';
import { useRouter } from 'next/router';

const BookDetail = () => {
  const router = useRouter();

  return (
    <div>
      <div><img src={router.query.image} /></div>
      <p>{router.query.title}</p>
      <p>{router.query.author}</p>
      <p>{router.query.caption}</p>
      <div><a>{router.query.itemUrl}</a></div>
    </div>
  )
}

export default BookDetail;