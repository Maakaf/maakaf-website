interface TermsAndConditions {
  closeModal: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditions> = ({
  closeModal,
}) => {
  return (
    <div className="flex justify-around flex-wrap mt-1">
      <div className="flex justify-center">
        <input className="mb-1 ml-4" type="checkbox" />
        <p>
          {' '}
          קראתי ואני מסכימ/ה{' '}
          <span className="underline">לתנאי השימוש והצהרת הפרטיות *</span>
        </p>
      </div>
      <div className="flex gap-4">
        <button className="mr-1" onClick={closeModal}>
          ביטול
        </button>
      </div>
    </div>
  );
};
