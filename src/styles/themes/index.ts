import { breakpoints, screenSize } from 'styles/mediaQueries';
import mixins from 'styles/mixins';
import base from './base';

const themes = {
  base: { breakpoints, screenSize, ...base, mixins },
};

export default themes;
