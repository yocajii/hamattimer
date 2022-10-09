import { useSession, signIn } from 'next-auth/react'
import ButtonGist from '../molecules/ButtonGist'
import ButtonCopy from '../molecules/ButtonCopy'

export default function PreviewHead() {

  const { status } = useSession()

  return (
    <>
      {status === 'unauthenticated' &&
        <div className={'is-size-7 has-text-right mb-2'}>
          <a onClick={() => signIn('github')}>GitHubと連携</a>するとGistに保存する機能をご利用になれます
        </div>
      }
      <div className={'columns is-variable is-1'}>
        <div className={'column is-6'}>
        </div>
        <div className={'column is-3'}>
          <ButtonCopy/>
        </div>
        <div className={'column is-3'}>
          <ButtonGist/>
        </div>
      </div>
    </>
  )
}
