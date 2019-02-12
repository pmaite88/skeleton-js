import Link from 'next/link';

import styled from 'styled-components';

const Button = styled.button`
  background-color: darkblue;
  color: white;
  padding: 15px;
  font-size: 16px;
`;

export default () => (
  <Link href="/">
    <Button>HOME</Button>
  </Link>
);
