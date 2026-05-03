import { useState } from "react";
import StoryCard from "./components/StoryCard";
import useStoriesList from "./hooks/useStoriesList";
import useForwardStory from "./hooks/useForwardStory";

const App = () => {
  const storiesList = useStoriesList();
  const [selectedStoryId, setSelectedStoryId] = useState(null);
  const [currentStory, setCurrentStory] = useState(null);

  function handleLeftButton() {
    const prev = storiesList.find((story) => story.id === selectedStoryId - 1);
    if (!prev) return;
    setSelectedStoryId(prev.id);
    setCurrentStory(prev);
  }

  function handleRightButton() {
    const next = storiesList.find((story) => story.id === selectedStoryId + 1);
    if (!next) {

      setCurrentStory(null)
      setSelectedStoryId(null)
      // leaves the open story mode 
      return 

    }
    setSelectedStoryId(next.id);
    setCurrentStory(next);
  }

  useForwardStory(currentStory, handleRightButton);
  // forwards story per 5 sec automatically

  if (selectedStoryId !== null) {
    return (
      <div
        className="fixed inset-0  h-1/2 w-screen backdrop-blur-xs flex items-center justify-center"
      >
        <button
          onClick={handleLeftButton}
          className="bg-black text-white font-bold p-2 rounded-lg
          absolute left-2 top-1/2 -translate-y-1/2
        "
        >
          {"<"}{" "}
        </button>{" "}
        <img
          src={currentStory.src}
          alt={currentStory.alt}
          className="rounded-lg w-full"
        />
        <button
          onClick={handleRightButton}
          className="bg-black text-white font-bold p-2 rounded-lg
          absolute right-2 top-1/2 -translate-y-1/2
        "
        >
          {">"}{" "}
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 pr-0 ">
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto  w-full pr-6">
          {storiesList.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onClick={(id) => {
                setSelectedStoryId(id);
                setCurrentStory(storiesList.find((story) => story.id === id));
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
