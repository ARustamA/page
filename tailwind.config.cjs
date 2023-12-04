module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,ts,html}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {

        'white100': '#F5F5F5',
        'white200': '#EEEEEE',
        'white300': '#CCCCCC',
        'white400': '#BDBDBD',
        'white500': '#9E9E9E',

        'black600': '#757575',
        'black700': '#5D5D5D',
        'black800': '#323232',
        'black850': '#242424',
        'black900': '#1F1F1F',
        'black999': '#121212',


        'main-blue': '#CEFDFF',
        'second-blue': '#E6F2F7',
        'main_red': '#d14020',
        // 'middle_red': '#E93117',
        // 'second_red': '#f12400',

        // 'green_light': '#00BD1E',
        // 'green_main': '#009218',
        // 'green_dark': '#007A15',

        // 'main_blue': '#0188CC',
        // 'blue3': '#0696CF',
        // 'blue-light': '#0BA3D1',
        // 'blue2': '#6EC6E8',
        // 'blue4': '#8D99AE',
        // 'second-blue-light': '#D1E8FF',

        // 'main_bg_color': '#EFEFEF',

        // 'text_light': '#AAAAAA',
        // 'text_dark': '#4B4B4B',

        // 'gray_l': '#EDF2F4',

        // 'gray_light': '#F2F4F7',
        // 'gray_light2': '#C9CACE',
        // 'gray_middle': '#AFB1B6',
        // 'gray_middle2': '#7D7E81',
        // 'gray_dark': '#4B4B4B',

      },
      height: {
        "dvh": "100dvh",
        "100svh": "100svh",
        "100lvh": "100lvh"
      },
      backgroundImage: {
        // astana: "url('./src/assets/astanaHub.png')"
      },
      variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
      },
      spacing: {
        33.125: '33.125rem'
      }
    }
  },
  plugins: [],
  darkMode: "class"
};
