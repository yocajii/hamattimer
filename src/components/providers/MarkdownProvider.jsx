import { createContext, useState } from 'react';

export const MarkdownContext = createContext({});

export const MarkdownProvider = (props) => {
  const { children } = props;
  const [markdown, setMarkdown] = useState('');

  const updateMarkdown = () => {
    const { tobe, asis, problem } = JSON.parse(localStorage.getItem('issue'));
    const tobeMd = () => {
      if (tobe === '') return '';
      return `\n### 期待する結果\n${tobe}\n`;
    };
    const asisMd = () => {
      if (asis === '') return '';
      return `\n### 実際の結果\n${asis}\n`;
    };
    const problemMd = () => {
      if (problem === '') return '';
      return `\n### 詳しい状況\n${problem}\n`;
    };
    const issueMd = `# 解決したいこと\n${tobeMd()}${asisMd()}${problemMd()}`;

    const trials = JSON.parse(localStorage.getItem('trials'));
    if (!trials) return;
    const createTrialsMd = () => {
      const trialsBody = trials
        .map((trial, i) => {
          const { guess, operation, result } = trial;
          const guessMd = () => {
            if (guess === '') return '';
            return `\n### 考えたことや調べたこと\n${guess}\n`;
          };
          const operationMd = () => {
            if (operation === '') return '';
            return `\n### やったこと\n${operation}\n`;
          };
          const resultMd = () => {
            if (result === '') return '';
            return `\n### やった結果\n${result}\n`;
          };
          return `\n## その${i + 1}\n${guessMd()}${operationMd()}${resultMd()}`;
        })
        .join('');
      return `\n# 試したこと${trialsBody}`;
    };
    const trialsMd = createTrialsMd();
    setMarkdown(issueMd + trialsMd);
  };
  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown, updateMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
};
