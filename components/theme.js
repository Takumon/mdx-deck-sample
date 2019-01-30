import theme from 'mdx-deck/themes'
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'


export default {
  ...theme,
  font: 'Futura, -apple-system-body,BlinkMacSystemFont,Helvetica Neue,Helvetica Sans,Hiragino Kaku Gothic ProN,"Noto Sans Japanese","游ゴシック  Medium","Yu Gothic Medium","メイリオ",meiryo,sans-serif',
  fontSmoothing: 'antialiased',
  fontKerning: 'auto',
  fontVariantLigatures: 'none',
  h1: {
    textTransform: 'uppercase',
    fontWeight: 600,

    fontSize: '1rem',
    letterSpacing: '.02rem',
    '@media screen and (min-width:480px) and (min-height: 400px)': {
      fontSize: '1.5rem',
      letterSpacing: '.03rem',
    },
    '@media screen and (min-width:640px) and (min-height: 500px)': {
      fontSize: '2.5rem',
      letterSpacing: '.04rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '4rem',
      letterSpacing: '.05rem',
    }



  },
  h2: {
    textAlign: 'left',
    borderBottom: '2px solid white',

    fontSize: '0.9rem',
    paddingBottom: '0.2rem',
    marginBottom: '0.4rem',
    marginTop: '0.4rem',
    '@media screen and (min-width:480px) and (min-height: 400px)': {
      fontSize: '1.3rem',
      paddingBottom: '0.3rem',
      marginBottom: '0.7rem',
      marginTop: '0.7rem',
    },
    '@media screen and (min-width:640px) and (min-height: 500px)': {
      fontSize: '2rem',
      paddingBottom: '0.4rem',
      marginBottom: '1rem',
      marginTop: '1rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '3rem',
      paddingBottom: '0.5rem',
      marginBottom: '2rem',
      marginTop: '2rem',
    }


  },
  h3: {
    fontSize: '0.7rem',
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
  '@media screen and (min-width:480px) and (min-height: 400px)': {
      fontSize: '1rem',
      marginBottom: '0.8rem',
      marginTop: '0.8rem',
    },
    '@media screen and (min-width:640px) and (min-height: 500px)': {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      marginTop: '1rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '2.5rem',
      marginBottom: '1.3rem',
      marginTop: '1.3rem',
    }
  },
  h4: {
    fontSize: '0.4rem',
    '@media screen and (min-width:480px) and (min-height: 400px)': {
      fontSize: '0.8rem',
    },
    '@media screen and (min-width:640px) and (min-height: 500px)': {
      fontSize: '1.1rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '2.1rem',
    }
  },
  h5: {
    fontSize: '0.2rem',
    '@media screen and (min-width:480px) and (min-height: 400px)': {
      fontSize: '0.5rem',
    },
    '@media screen and (min-width:640px) and (min-height: 500px)': {
      fontSize: '0.7rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '1.4rem',
    }
  },
  h6: {
    fontSize: '0.1rem',
    '@media screen and (min-width:480px) and (min-height: 400px)': {
      fontSize: '0.5rem',
    },
    '@media screen and (min-width:640px) and (min-height: 500px)': {
      fontSize: '0.7rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      fontSize: '1rem',
    }
  },
  transitionDuration: 0,
  ul: {
    textAlign: 'left',
    listStyleType: 'disc',
    paddingLeft: '0.7rem',
    marginTop: '0.1rem',
    marginBottom: '1rem',
    display: 'inline-block',
    '@media screen and (min-width:480px) and (min-height: 400px)': {
      paddingLeft: '1rem',
      marginTop: '0.3rem',
      marginBottom: '1.3rem',
    },
    '@media screen and (min-width:640px) and (min-height: 500px)': {
      paddingLeft: '1.5rem',
      marginTop: '0.8rem',
      marginBottom: '2rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      paddingLeft: '2rem',
      marginTop: '1rem',
      marginBottom: '2.5rem',
    }
  },
  ol: {
    textAlign: 'left',
    listStyleType: 'disc',
    paddingLeft: '0.7rem',
    marginTop: '0.1rem',
    marginBottom: '1rem',
    display: 'inline-block',
    '@media screen and (min-width:480px) and (min-height: 400px)': {
      paddingLeft: '1rem',
      marginTop: '0.3rem',
      marginBottom: '1.3rem',
    },
    '@media screen and (min-width:640px) and (min-height: 500px)': {
      paddingLeft: '1.5rem',
      marginTop: '0.8rem',
      marginBottom: '2rem',
    },
    '@media screen and (min-width:1020px) and (min-height: 830px)': {
      paddingLeft: '2rem',
      marginTop: '1rem',
      marginBottom: '2.5rem',
    }
  },
  li: {
    fontSize: '0.6rem',
    lineHeight: '0.7rem',
    '@media screen and (min-width:480px) and (min-height: 400px)': {
      fontSize: '1rem',
      lineHeight: '1.2rem',
    },
    '@media screen and (min-width:640px) and (min-height: 500px)': {
      fontSize: '1.5rem',
      lineHeight: '1.8rem',
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
    fontSize: '50%',
    '@media screen and (min-width:480px) and (min-height:400px)': {
      fontSize: '80%',
    },
    '@media screen and (min-width:640px) and (min-height: 500px)': {
      fontSize: '120%',
    },
    '@media screen and (min-width:1020px) and (min-height:830px)': {
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