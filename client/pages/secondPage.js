import Link from 'next/link';

export default () => (
  <div>
    Second Page
    <Link href="/">
      <a> Return to First Page</a>
    </Link>
  </div>
);
