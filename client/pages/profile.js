import Link from 'next/link';
import Profile from '../components/Profile';

export default () => (
  <div>
    Profile Page
    <Profile />
    <Link href="/">
      <a> Return to First Page</a>
    </Link>
  </div>
);
