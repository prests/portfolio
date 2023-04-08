import pi_RATE_about from './about/pi_RATE.json';
import pi_RATE_contactCard from './contact-card/pi_RATE.json';
import pi_RATE_experience from './experiences/pi_RATE.json';
import pi_RATE_footer from './footer/pi_RATE.json';
import pi_RATE_home from './home/pi_RATE.json';
import pi_RATE_nav from './nav/pi_RATE.json';
import locales from './locales.json';

const en_US = {
  ...pi_RATE_about,
  ...pi_RATE_contactCard,
  ...pi_RATE_experience,
  ...pi_RATE_footer,
  ...pi_RATE_home,
  ...pi_RATE_nav,
  ...locales,
} as const;
export default en_US;
