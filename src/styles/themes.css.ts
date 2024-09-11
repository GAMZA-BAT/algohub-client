import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const theme = createThemeContract({
  color: {
    background: '',
    foreground: '',
    purple: '',
    purple2: '',
    purple3: '',
    mint: '',
    yellow: '',
    red: '',
    blue: '',
    orange: '',
    white: '',
    wg: '',
    wg2: '',
    lg1: '',
    lg2: '',
    mg1: '',
    mg2: '',
    mg3: '',
    mg4: '',
    mg5: '',
    mg6: '',
    dg: '',
    bg: '',
    black: '',
    transparent_purple2_50: '',
    transparent_black_50: '',
    gradi_card: '',
    gradi_BG: ''
  },
  font: {
    'head1-b-20': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    'head1-sb-20': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    'head1-m-20': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    'head2-b-18': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    'head2-sb-18': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    'head2-m-18': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    'body1-r-16': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    'body1-m-16': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    'body2-r-14': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    'body2-m-14': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    'caption-r-12': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    'caption-m-12': {
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
  }
})

export const themeClass = createTheme(theme, {
  color: {
    background: 'background',
    foreground: 'foreground',
    purple: '#6659ff',
    purple2: '#a39cff',
    purple3: '#e0deff',
    mint: '#35bcb3',
    yellow: '#d2f35c',
    red: '#ff005c',
    blue: '#3b73fa',
    orange: '#ff5722',
    white: '#ffffff',
    wg: '#f9fafb',
    wg2: '#d7d7d7',
    lg1: '#f3f4f6',
    lg2: '#e7eaf2',
    mg1: '#b6b6b6',
    mg2: '#9ba1b4',
    mg3: '#a2a7b0',
    mg4: '#797979',
    mg5: '#222734',
    mg6: '#161c24',
    dg: '#2a2a2a',
    bg: '#101217',
    black: '#000000',
    transparent_purple2_50: 'rgba(163, 156, 255, 0.50)',
    transparent_black_50: 'rgba(14, 16, 20, 0.90)',
    gradi_card: 'linear-gradient(271deg, rgba(14, 16, 20, 0.90) -12.2%, rgba(33, 37, 46, 0.00) 99.36%)',
    gradi_BG: 'radial-gradient(96.85% 96.85% at 50% 3.15%, rgba(163, 156, 255, 0.80) 0%, rgba(16, 18, 23, 0.00) 100%)',
  },
  font: {
    'head1-b-20': {
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '28px',
      letterSpacing: '-0.2px',
    },
    'head1-sb-20': {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '28px',
      letterSpacing: '-0.3px',
    },
    'head1-m-20': {
      fontSize: '20px',
      fontWeight: '500',
      lineHeight: '28px',
      letterSpacing: '-0.2px',
    },
    'head2-b-18': {
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '26px',
      letterSpacing: '-0.1px',
    },
    'head2-sb-18': {
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '26px',
      letterSpacing: '-0.1px',
    },
    'head2-m-18': {
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '26px',
      letterSpacing: '-0.1px',
    },
    'body1-r-16': {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '24px',
      letterSpacing: '-0.2px',
    },
    'body1-m-16': {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      letterSpacing: '-0.2px',
    },
    'body2-r-14': {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '22px',
      letterSpacing: '-0.2px',
    },
    'body2-m-14': {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '22px',
      letterSpacing: '-0.2px',
    },
    'caption-r-12': {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '18px',
      letterSpacing: '-0.1px',
    },
    'caption-m-12': {
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '18px',
      letterSpacing: '-0.1px',
    },
  },
});
