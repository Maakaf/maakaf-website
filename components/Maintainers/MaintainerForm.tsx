import Button from '../Common/Button';

const MaintainerForm = () => {
  return (
    <div className="px-4 mx-auto text-center text-[#020616] dark:text-[#F8FAFC]">
      <h1 className="mb-3 font-black text-4xl mx-auto md:text-5xl">
        MAINTAINERS
      </h1>
      <div className="w-[316px] md:w-[720px] flex flex-col gap-5 text-xl mb-5">
        <p className="font-bold text-xl md:text-2xl leading-7">
          בעל פרויקט ורוצה להצטרף למעקף?
        </p>
        <p className="font-medium text-xl md:text-2xl leading-7">
          טקסט אקראי שמסביר כמה דברים על צירוף פרוייקטים למעקף,
          <br />
          מה צריך לעשות כדי להצטרף , איך התהליך עובד בצורה מאוד כללית ומזמינה כי
          תכף יהיה הסבר יותר מפורט ואין צורך להרחיב כאן.
        </p>
      </div>

      <Button className="mx-auto font-inter my-11" />
    </div>
  );
};

export default MaintainerForm;
