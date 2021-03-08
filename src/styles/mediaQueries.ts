interface IScreenSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface IMediaQueries {
  breakpoints: IScreenSize;
  screenSize: IScreenSize;
}

export const breakpoints: IScreenSize = {
  xs: '380px',
  sm: '460px',
  md: '900px',
  lg: '1280px',
  xl: '1920px',
};

export const screenSize: IScreenSize = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
};
