import { useContext, useState } from 'react'
import { IsStartedContext } from '../providers/IsStartedProvider'
import SolvedModal from '../elements/SolvedModal'

export default function EditorFooter(props) {

  const { isStarted } = useContext(IsStartedContext)
  const [isOpen, setIsOpen] = useState(false)

  if (!isStarted) return

  const handleClickSolved = () => {
    props.pause()
    setIsOpen(true)
  }

  const handleClickEnd = () => {
    props.pause()
    alert(`おつかれさまでした🍵\n作成した記録を保存しておきたい時は、Gistへのエクスポート機能をご活用ください）`)
  }

  return (
    <>
      <div className={'columns'}>
        <div className={'column'}>
          <button className={'button is-dark is-fullwidth'} onClick={handleClickSolved}>解決した！</button>
        </div>
        <div className={'column'}>
          <button className={'button is-light is-fullwidth'} onClick={handleClickEnd}>終了する</button>
        </div>
      </div>
      <SolvedModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}
