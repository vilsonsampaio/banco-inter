export default {
  title: 'light',
  colors: {
    primary: '#FF8700',
    secondary: '#FF500F',

    grey: '#8C92A5', 
    lightGrey: '#F5F6FA',
    darkGrey: '#6C757D',

    success: '#20C05C',
    error: '#FD4F48',
    
    background: '#FFF',
  },
  fontSizes: {
    default: '1.4rem',
    large: '1.6rem',
    small: '1.2rem',
    tiny: '1rem',
  },
  spacing: {
    default: '1.6rem',
    vertical: '1.6rem 0',
    horizontal: '0 1.6rem',
    large: '2.4rem',
  },
  transition: {
    default: '180ms ease-in-out',
  },
  radius: {
    default: '0.8rem',
    small: '0.4rem',
    tiny: '0.2rem',
  },
  shadows: {
    default: '0 0.5rem 2rem rgba(0, 0, 0, 0.08)',
  },
} as const;