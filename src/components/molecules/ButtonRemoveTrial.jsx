import { useContext, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import Button from '../atoms/Button';
import Modal from '../atoms/Modal';
import { MarkdownContext } from '../providers/MarkdownProvider';

export default function ButtonRemoveTrial({ id, index, trials, setTrials }) {
  const { updateMarkdown } = useContext(MarkdownContext);
  const [isOpen, setIsOpen] = useState(false);

  const removeTrial = (id) => {
    const newTrials = trials.filter((trial) => {
      return trial.id !== id;
    });
    setTrials(newTrials);
    localStorage.setItem('trials', JSON.stringify(newTrials));
    updateMarkdown();
  };

  return (
    <>
      <div className={'has-text-right'}>
        <Button
          onClick={() => setIsOpen(true)}
          classNames={'is-small is-shadowless'}
        >
          <MdDelete />
          削除
        </Button>
      </div>
      {isOpen && (
        <Modal
          title={`試したこと その${index + 1}`}
          confirmLabel={'削除する'}
          cancelLabel={'やめる'}
          onCancel={() => setIsOpen(false)}
          onConfirm={() => removeTrial(id)}
        >
          削除してもよろしいですか？
        </Modal>
      )}
    </>
  );
}
