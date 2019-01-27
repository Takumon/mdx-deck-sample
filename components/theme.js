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
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:64em)': {
      fontSize: '32px',
    }
  },


  li: {
    paddingBottom: '20px',
    fontFamily: '"Dank Mono", monospace',
    fontSize: '16px',
    textAlign: 'left',
    '@media screen and (min-width:64em)': {
      fontSize: '36px',
    }
  },
  ul: {


    listStyleType: 'disc',
    paddingLeft: '20px',
    display: 'inline-block'
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