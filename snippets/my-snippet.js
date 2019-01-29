import nightOwl from 'prism-react-renderer/themes/nightOwl'
import { CodeSurfer } from 'mdx-deck-code-surfer'

<CodeSurfer
  title={()=>(<h3>Code-Surferデモでできること</h3>)}
  code={require("!raw-loader!./snippets/my-snippet.js")}
  showNumbers={true}
  theme={nightOwl}
  lang="javascript"
  dark={true}
  steps={[
    { notes: ''},
    { lines: [13], notes: 'linesで行をハイライト＆ズームできます。'},
    { lines: [15], notes: 'rangeで範囲指定も可能です。' },
    { range: [5, 10], notes: 'こんな感じ😀' },
    { lines: [17], notes: 'tokensで単語文字に絞ることも可能です。' },
    { tokens: {17: [18] }, notes: 'こんな感じ😁' },
    { lines: [6], notes: '他ファイルからコードを読み込んだり ...' },
    { lines: [7], notes: '行番号を振ったり ...' },
    { lines: [8], notes: 'テーマ指定も可能です！' },
    { notes: ''},
  ]}
/>



