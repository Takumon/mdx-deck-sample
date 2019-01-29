import theme from 'mdx-deck/themes'
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'


export default {
  ...theme,
  font: 'Futura, -apple-system-body,BlinkMacSystemFont,Helvetica Neue,Helvetica Sans,Hiragino Kaku Gothic ProN,"Noto Sans Japanese","游ゴシック  Medium","Yu Gothic Medium","メイリオ",meiryo,sans-serif',
  fontSmoothing: 'antialiased',
  fontKerning: 'auto',
  fontVariantLigatures: 'none',
  h1: {
    letterSpacing: '.05rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '1.5rem',
    '@media screen and (min-width:480px) and (min-height: 270px)': {
      fontSize: '2.5rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '4rem',
    }
  },
  h2: {
    fontSize: '1.3rem',
    '@media screen and (min-width:480px) and (min-height: 270px)': {
      fontSize: '2rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '3rem',
    },
    textAlign: 'left',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid white',
    marginBottom: '3rem',
  },
  h3: {
    fontSize: '1.1rem',
    '@media screen and (min-width:480px) and (min-height: 270px)': {
      fontSize: '1.5rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '2.5rem',
    }
  },
  h4: {
    fontSize: '1.1rem',
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '2.1rem',
    }
  },
  h5: {
    fontSize: '0.6rem',
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '1.4rem',
    }
  },
  h6: {
    fontSize: '0.5rem',
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '1rem',
    }
  },
  transitionDuration: 0,
  ul: {
    textAlign: 'left',
    listStyleType: 'disc',
    paddingLeft: '1.2rem',
    marginTop: '0.3rem',
    marginBottom: '1.3rem',
    display: 'inline-block',
    '@media screen and (min-width:480px) and (min-height: 270px)': {
      fontSize: '1.2rem',
      paddingLeft: '1.5rem',
      marginTop: '0.8rem',
      marginBottom: '2rem',

    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '1rem',
      paddingLeft: '2rem',
      marginTop: '1rem',
      marginBottom: '2.5rem',
    }
  },
  li: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    '@media screen and (min-width:480px) and (min-height: 270px)': {
      lineHeight: '2rem',
      fontSize: '1.2rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '2rem',
      lineHeight: '3rem',
    },
    paddingBottom: '0.5rem',
    fontFamily: '"Dank Mono", monospace',
    textAlign: 'left',
  },

  monospace: '"Dank Mono", monospace',
  prism: {
    style: atomDark
  },
  img: {
    maxWidth: '100%'
  },
  weights: 400,
  css: {
    textAlign: 'center',
    fontSize: '90%',
    '@media screen and (min-width:480px) and (min-height: 270px)': {
      fontSize: '120%',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '200%',
    }
  },


  colors: {
    text: '#fff',
    background: 'rgb(1, 22, 39)',
    link: '#f46f55',
    pre: '#f46f55',
    preBackground: '#051626',
    code: '#f46f55'
  }
}