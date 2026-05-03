import { useEffect } from "react";

const useForwardStory = (currentStory, handleRightButton) => {
    useEffect(() => {
        if (currentStory === null) return;
        const interval = setInterval(handleRightButton, 1 * 5000); // moves to next story
        return () => {
            clearInterval(interval);
        };
    }, [currentStory,handleRightButton]);
}

export default useForwardStory
