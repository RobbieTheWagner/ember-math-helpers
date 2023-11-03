// http://goo.gl/5HLl8
const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
  t /= d / 2;
  if (t < 1) {
    return (c / 2) * t * t + b;
  }
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

function scrollTo(
  toPosition: number,
  callback?: () => void,
  duration = 500
): void {
  const scrollingElement = document.scrollingElement
    ? document.scrollingElement
    : document.body;
  const startPosition = scrollingElement.scrollTop;
  const change = toPosition - startPosition;
  let currentTime = 0;
  const increment = 20;

  const animateScroll = (): void => {
    currentTime += increment;
    scrollingElement.scrollTop = easeInOutQuad(
      currentTime,
      startPosition,
      change,
      duration
    );

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      if (callback && typeof callback === 'function') {
        callback();
      }
    }
  };
  animateScroll();
}

function scrollToElement(
  element: HTMLElement,
  callback?: () => void,
  duration = 500
): void {
  const toPosition = element.offsetTop;
  scrollTo(toPosition, callback, duration);
}

export { scrollToElement };
export default scrollTo;
