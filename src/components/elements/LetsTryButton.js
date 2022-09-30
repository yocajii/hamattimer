import Link from 'next/link'

export default function LetsTryButton() {
  return (
    <div className={'navbar-end'}>
      <div className={'navbar-item'}>
        <Link href={'timer'}>
          <button className={'button is-medium is-rounded is-primary has-text-weight-bold'}>
            使ってみる
          </button>
        </Link>
      </div>
    </div>
  )
}
