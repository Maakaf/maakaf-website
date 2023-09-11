import Button from '../Common/Button';

const MaintainerForm = () => {
  return (
    <div className="w-[660px] px-4 max-w-full mx-auto text-center mb-20 relative">
      <h1 className="mb-3 font-black text-5xl">MAINTAINERS</h1>
      <div className="flex flex-col gap-5 text-xl mb-5">
        <p className="font-bold text-2xl">בעל פרויקט ורוצה להצטרף למעקף?</p>
        <p>
          טקסט אקראי שמסביר כמה דברים על צירוף פרוייקטים למעקף, מה צריך לעשות
          כדי להצטרף , איך התהליך עובד בצורה מאוד כללית ומזמינה כי תכף יהיה הסבר
          יותר מפורט ואין צורך להרחיב כאן.
        </p>
      </div>

      <Button className="mx-auto font-inter" />
    </div>
  );
};

export default MaintainerForm;
