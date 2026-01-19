

const NotificationStrip = ({words}) => {
  return (
    <div
      className={`w-full bg-transparent text-white-100`}
    >
      <div className="overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          {
            words.map((word, index) => (
                <span key={index} className='mr-10 rounded-xl px-2'>{word}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default NotificationStrip;
