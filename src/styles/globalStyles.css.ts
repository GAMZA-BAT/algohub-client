import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  fontFamily: `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`,
  fontSize: '62.5%',
  margin: '0',
  padding: 0
});

globalStyle('input, textarea', {
  outline: 'none',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
});

globalStyle('button', {
  border: 'none',
  background: 'none',
  font: 'inherit',
  cursor: 'pointer',
});

globalStyle('textarea', {
  resize: 'none',
});