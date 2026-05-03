const StoryCard = ({ story, onClick }) => {
  const { id, src, alt } = story;
  return (
    <div onClick={() => onClick(id)} className="w-1/4 shrink-0 ">
      <img src={src} alt={alt} className="rounded-lg w-full" />
    </div>
  );
};

export default StoryCard;
