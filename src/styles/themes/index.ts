import { breakpoints, screenSize, IMediaQueries } from 'styles/mediaQueries';
import mixins, { IMixins } from 'styles/mixins';
import base from './base';

export interface ITheme extends IMixins, IMediaQueries {
  color: {
    primary: string;
    secondary: string;
    action: string;
    icon: string;
    inactive: string;
  };
  font: {
    primary: {
      url: string;
      family: string;
      size: string | number;
    };
  };
}

interface IThemes {
  base: ITheme;
}

const themes: IThemes = {
  base: { breakpoints, screenSize, ...base, mixins },
};

export default themes;
