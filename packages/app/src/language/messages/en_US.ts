import en_US_about from './about/en_US.json';
import en_US_contactCard from './contact-card/en_US.json';
import en_US_experience from './experiences/en_US.json';
import en_US_footer from './footer/en_US.json';
import en_US_home from './home/en_US.json';
import en_US_nav from './nav/en_US.json';

const en_US = {
  ...en_US_about,
  ...en_US_contactCard,
  ...en_US_experience,
  ...en_US_footer,
  ...en_US_home,
  ...en_US_nav,
} as const;
export default en_US;
