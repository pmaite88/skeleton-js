import Link from 'next/link';

export default () => (
  <div>
    Index Page
    <Link href="/secondPage">
      <a> Go To Second Page</a>
    </Link>
  </div>
);
