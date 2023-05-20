const getTimer = (setTimer: () => void): NodeJS.Timeout => {
  const timeoutId: NodeJS.Timeout = setTimeout(() => {
    getTimer(setTimer);
    setTimer();
  }, 5000);
  return timeoutId;
};
export default getTimer;
