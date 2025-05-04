import './reset.css.ts'; 
import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  margin: 0,
  fontFamily: 'sans-serif',
  background: '#fff',
  color: '#222',
});
