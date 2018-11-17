import Link from 'next/link';
import Item from '../components/Item';

export default () => (
  <div>
    Second Page
    <Item />
    <Link href="/">
      <a> Return to First Page</a>
    </Link>
  </div>
);
