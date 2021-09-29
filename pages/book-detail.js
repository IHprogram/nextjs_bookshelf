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
      <Link href={router.query.itemUrl}><a className="text-yellow-500" target="_blank">商品を見に行く</a></Link>
    </div>
  )
}

export default BookDetail;