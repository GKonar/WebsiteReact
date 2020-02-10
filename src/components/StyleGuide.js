const COMPACT = '8px';

const theme = {
  padding: {
    compact: COMPACT,
    default: '16px',
    related: '32px',
    between: '48px',
    section: '64px',
  },

  margin: {
    compact: COMPACT,
    sibling: '16px',
    related: '32px',
    between: '48px',
    section: '64px',
  },

  borderRadius: '2px',
  indentation: 50,

  color: {
    primary: '#2f3542',
    secondary: '#0081AD',
    delete: '#FF4242',
    offDelete: '#FF7575',
    warning: '#FFCA44',
    success: '#00D591',
    textOnly: 'transparent',
    section: '#F1F1F1',
    white: '#FFFFFF',
    black: '#1f1f1f',
  },

  textColor: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    delete: '#020202',
    warning: '#003444',
    success: '#003444',
    pressable: '#0081AD',
    black: '#1f1f1f',
    white: '#FFFFFF',
  },

  textSize: {
    xxxlarge: '3.5rem',
    xxlarge: '3rem',
    xlarge: '2.5rem',
    large: '2rem',
    medium: '1.5rem',
    regular: '1.25rem',
    small: '1rem'
  },

  input: {
    border: '1px solid #dedede',
    borderRadius: '4px',
  },
};

export default theme;