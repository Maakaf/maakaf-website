
interface TermsAndConditions {
  closeModal: () => void;
  handleSubmit: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditions> = ({ closeModal, handleSubmit }) => {
  return (
    <div className="flex justify-around flex-wrap mt-1">
      <div className='flex justify-center'>
        <input className='' type='checkbox' />
        <p> קראתי ואני מסכימ/ה <span className='underline'>לתנאי השימוש והצהרת הפרטיות *</span></p>
      </div>
      <div className='flex gap-4'>
        <button onClick={closeModal}>ביטול</button>
        <button
          className="w-48 h-7 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          onClick={handleSubmit}
        >
          שליחה
        </button>
      </div>
    </div>
  );
};