import { useState } from 'react'
import ModalPlain from '../atoms/ModalPlain'

export default function Terms() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <a onClick={() => setIsOpen(true)}>利用規約</a>
      {isOpen &&
        <ModalPlain onCancel={() => setIsOpen(false)}>
          <div className={'content'}>
            <h1 className={'title is-5 has-border-subtle-bottom pb-2'}>利用規約</h1>
            <p>この利用規約（以下、「本規約」といいます。）は、このウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。</p>
            <h2 className={'title is-6 pt-4'}>第1条（適用）</h2>
            <ol>
              <li>本規約は、ユーザーと本サービスの利用に関わる一切の関係に適用されるものとします。</li>
              <li>本サービスは本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。</li>
              <li>本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。</li>
            </ol>
            <h2 className={'title is-6 pt-4'}>第2条（禁止事項）</h2>
            <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ol>
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
              <li>本サービス、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>本サービスによって得られた情報を商業的に利用する行為</li>
              <li>本サービスの運営を妨害するおそれのある行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>不正な目的を持って本サービスを利用する行為</li>
              <li>本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
              <li>本サービスが許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
              <li>その他、本サービスが不適切と判断する行為</li>
            </ol>
            <h2 className={'title is-6 pt-4'}>第3条（本サービスの提供の停止等）</h2>
            <ol>
              <li>本サービスは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                <ol>
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、本サービスが本サービスの提供が困難と判断した場合</li>
                </ol>
              </li>
              <li>本サービスは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
            </ol>
            <h2 className={'title is-6 pt-4'}>第4条（保証の否認および免責事項）</h2>
            <ol>
              <li>本サービスは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
              <li>本サービスは、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。</li>
              <li>本サービスは、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</li>
            </ol>
            <h2 className={'title is-6 pt-4'}>第5条（サービス内容の変更等）</h2>
            <p>本サービスは、ユーザーへ事前に通知することなく、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</p>
            <h2 className={'title is-6 pt-4'}>第6条（利用規約の変更）</h2>
            <ol>
              <li>本サービスは、本サービスが必要と判断した場合には、ユーザーへ通知することなく、本規約を変更することができるものとします。</li>
              <li>ユーザーが本規約の変更後に、本サービスの利用を開始した場合には、変更後の規約に同意したものとみなします。</li>
            </ol>
            <h2 className={'title is-6 pt-4'}>第7条（準拠法・裁判管轄）</h2>
            <ol>
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>本サービスに関して紛争が生じた場合には、本サービスの本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
            </ol>
          </div>
        </ModalPlain>
      }
    </>
  )
}
