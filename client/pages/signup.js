import Link from 'next/link';
import Signup from '../components/Signup';

export default () => (
  <div>
    Signup Page
    <Signup />
    <Link href="/">
      <a> Return to First Page</a>
    </Link>
  </div>
);
