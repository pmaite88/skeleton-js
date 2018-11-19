import Link from 'next/link';
import Signin from '../components/Signin';

export default () => (
  <div>
    Signin Page
    <Signin />
    <Link href="/">
      <a> Return to First Page</a>
    </Link>
  </div>
);
