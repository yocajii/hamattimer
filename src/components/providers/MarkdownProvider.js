import { createContext, useState } from 'react'

export const MarkdownContext = createContext({})

export const MarkdownProvider = (props) => {
  const { children } = props
  const [markdown, setMarkdown] = useState('')

  const updateMarkdown = () => {
    console.log(localStorage.getItem('issue'))
    const issue = JSON.parse(localStorage.getItem('issue'))
    const issueMd = `## 解決したいこと
 
### 期待する結果
${issue.tobe}

### 実際の結果
${issue.asis}

### エラーメッセージやログなど
${issue.problem}`

    const trials = JSON.parse(localStorage.getItem('trials'))
    const createTrialsMd = () => {
      if (trials) {
        return trials
          .map((trial) => {
            return `

## 試したこと
    
### 考えたことや調べたこと
${trial.guess}

### やったこと
${trial.operation}

### やった結果
${trial.result}`
          })
          .join('')
      } else {
        return ''
      }
    }
    const trialsMd = createTrialsMd()
    setMarkdown(issueMd + trialsMd)
  }
  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown, updateMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  )
}
