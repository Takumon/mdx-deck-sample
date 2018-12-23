import nightOwl from 'prism-react-renderer/themes/nightOwl'
import { CodeSurfer } from 'mdx-deck-code-surfer'

<CodeSurfer
  title="Code Surferでできること"
  code={require("!raw-loader!./my-snippet.js")}
  showNumbers={true}
  theme={nightOwl}
  lang="javascript"
  dark={true}
  steps={[
    { notes: ''},
    { lines: [13], notes: '1. linesで行をハイライト＆ズームできます。' },
    { lines: [15], notes: '2. rangeで範囲指定も可能です。' },
    { range: [5, 10], notes: 'こんな感じ😀' },
    { lines: [17], notes: '3. tokensで単語文字に絞ることも可能です。' },
    { tokens: {17: [27] }, notes: 'こんな感じ😁' },
    { lines: [6], notes: '4. row-loaderと併用して他ファイルからコードを読み込んだり ...' },
    { lines: [7], notes: '5. 行番号を振ったり ...' },
    { lines: [8], notes: '8. テーマ指定も可能です！　参考：https://code-surfer.netlify.com/theming' },
    { notes: ''},
  ]}
/>