module.exports = {
  content: ['./src/styles/index.css'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: {
        DEFAULT: '#FFFFFF',
        10: 'rgba(255, 255, 255, 0.1)',
        40: 'rgba(255, 255, 255, 0.4)',
        70: 'rgba(255, 255, 255, 0.7)'
      },
      black: {
        DEFAULT: '#000000',
        10: 'rgba(0, 0, 0, 0.1)',
        40: 'rgba(0, 0, 0, 0.4)',
        70: 'rgba(0, 0, 0, 0.7)'
      },
      blue: {
        100: '#EEF4FB',
        200: '#CCDFF3',
        300: '#99BFE6',
        400: '#5595D6',
        500: '#134E81',
        600: '#03233F'
      },
      yellow: {
        100: '#FFFBE6',
        200: '#FEF2B4',
        300: '#FDE469',
        400: '#FCD205',
        500: '#977E03',
        600: '#594B07'
      },
      green: {
        100: '#F4F4EC',
        200: '#D5D6A2',
        300: '#B4B764',
        400: '#727B0F',
        500: '#444A09',
        600: '#2E3106'
      },
      turquoise: {
        100: '#EDF5F3',
        200: '#A9D9CD',
        300: '#71BDAB',
        400: '#1E856D',
        500: '#125041',
        600: '#06372C'
      },
      purple: {
        100: '#F7F0FF',
        200: '#E0C5FF',
        300: '#C79AFF',
        400: '#9544FF',
        500: '#592999',
        600: '#3C1B66'
      },
      pink: {
        100: '#FBEBFB',
        200: '#F0AAEF',
        300: '#E56FE3',
        400: '#CF06C8',
        500: '#7C0478',
        600: '#530250'
      },
      neutral: {
        90: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121'
      },

      get 'alert-basic'() {
        return this.blue[400];
      },
      get 'alert-basic-dark'() {
        return this.blue[600];
      },
      get 'alert-basic-medium'() {
        return this.blue[200];
      },
      get 'alert-basic-light'() {
        return this.blue[100];
      },

      get 'txt-black'() {
        return this.black['DEFAULT'];
      },
      get 'txt-grey'() {
        return this.neutral[600];
      },
      get 'txt-light-grey'() {
        return this.neutral[300];
      },
      get 'txt-white'() {
        return this.white['DEFAULT'];
      },
      get 'txt-dark'() {
        return this.blue[600];
      },
      get 'txt-medium'() {
        return this.blue[500];
      },
      get 'txt-light'() {
        return this.blue[300];
      },
      get 'txt-primary'() {
        return this.blue[400];
      },

      'txt-positive-dark': '#033608',
      'txt-positive': '#078814',
      'txt-warning-dark': '#4E0711',
      'txt-warning': '#C3112B',

      'alert-warning': '#C3112B',
      'alert-warning-dark': '#4E0711',
      'alert-warning-medium': '#F8B5B9',
      'alert-warning-light': '#FBEEF0',

      'alert-positive': '#078814',
      'alert-positive-dark': '#033608',
      'alert-positive-medium': '#9FDAA5',
      'alert-positive-light': '#EBF5EC',

      'alert-attention': '#BD730C',
      'alert-attention-dark': '#4E2A00',
      'alert-attention-medium': '#EBCFAA',
      'alert-attention-light': '#FAF4EC',

      'sk-white': '#FFFFFF',
      'sk-red': '#C3112B',
      'sk-blue': '#1E4E9D',
      'sk-grey': '#DDDEDE',

      'focus-state': '#D96E00',

      get primary() {
        return this.blue[400];
      },
      get 'primary-light'() {
        return this.blue[100];
      },
      get 'primary-medium'() {
        return this.blue[500];
      },
      get 'primary-dark'() {
        return this.blue[600];
      }
    },
    screens: {
      mb: '375px',
      tb1: '520px',
      tb2: '730px',
      dm1: '1120px',
      dm2: '1440px',
      dl: '1530px'
    },

    extend: {
      boxShadow: {
        large: '0px 24px 40px rgba(26, 26, 26, 0.16)',
        medium: '0px 12px 32px rgba(26, 26, 26, 0.24)',
        small: '0px 4px 8px rgba(26, 26, 26, 0.2)',
        dialog: '0px -8px 44px -10px rgba(0, 0, 0, 0.25)',
        divider: '0px 10px 20px -10px rgba(26, 26, 26, 0.2)',
        border: '0px 0px 0px 4px rgba(26, 26, 26, 0.2)'
      },
      lineHeight: {
        12: '3.4375rem',
        11: '2.8125rem',
        8.5: '2.1875rem',
        6.5: '1.625rem'
      },
      fontSize: {
        main: ['1.1875rem', { lineHeight: '1.75rem', letterSpacing: '0,0313rem' }]
      }
    }
  },
  safelist: [
    'bg-transparent',
    'flex-auto',
    'font-bold',
    'h-6',
    'hidden',
    'rotate-180',
    'sr-only',
    'sticky',
    'w-6',
    'w-full',
    'idsk-caption',
    'idsk-link-caption',
    'idsk-link-l',
    'idsk-link-m',
    'idsk-link-s',
    'idsk-subtitle',
    'idsk-text-body',
    'idsk-text-body-1',
    'idsk-text-button',
    'idsk-page-content',
    'idsk-page-content-public'
  ],
  plugins: []
};
