import HomeButton from '../components/HomeButton';
import PleaseSignIn from '../components/PleaseSignIn';
import Profile from '../components/Profile';

export default () => (
  <PleaseSignIn>
    Your profile!
    <Profile />
    <HomeButton />
  </PleaseSignIn>
);
