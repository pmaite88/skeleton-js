import HomeButton from '../components/HomeButton';
import Item from '../components/Item';
import PleaseSignIn from '../components/PleaseSignIn';

export default () => (
  <PleaseSignIn>
    Second Page - You can see this because you are logged in!
    <Item />
    <HomeButton />
  </PleaseSignIn>
);
