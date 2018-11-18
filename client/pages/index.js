import Link from 'next/link';

export default () => (
  <div>
    Index Page
    <Link href="/secondPage">
      <a> Go To Second Page</a>
    </Link>
    <Link href="/signup">
      <a> Go To SIGNUP Page</a>
    </Link>
    <Link href="/profile">
      <a> Go To PROFILE Page</a>
    </Link>
  </div>
);
