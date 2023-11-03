import Modifier from 'ember-modifier';
import { action } from '@ember/object';

function getHeadingIds(headings, output = []) {
  if (typeof headings === 'undefined') {
    return [];
  }
  headings.forEach((heading) => {
    output.push(heading.id);
    getHeadingIds(heading.headings, output);
  });
  return output;
}

export default class IntersectHeadingsModifier extends Modifier {
  handler = null;
  headings = [];
  observer = null;
  activeIndex = null;

  @action
  handleObserver(elements) {
    // Based on https://taylor.callsen.me/modern-navigation-menus-with-css-position-sticky-and-intersectionobservers/

    // current index must be memoized or tracked outside of function for comparison
    let localActiveIndex = this.activeIndex;

    // track which elements register above or below the document's current position
    const aboveIndeces = [];
    const belowIndeces = [];

    // loop through each intersection element
    //  due to the asychronous nature of observers, callbacks must be designed to handle 1 or many intersecting elements
    elements.forEach((element) => {
      // detect if intersecting element is above the browser viewport; include cross browser logic
      const boundingClientRectY =
        typeof element.boundingClientRect.y !== 'undefined'
          ? element.boundingClientRect.y
          : element.boundingClientRect.top;
      const rootBoundsY =
        typeof element.rootBounds.y !== 'undefined'
          ? element.rootBounds.y
          : element.rootBounds.top;
      const isAbove = boundingClientRectY < rootBoundsY;

      const id = element.target.getAttribute('id');
      const intersectingElemIdx = this.headings.findIndex((item) => item == id);

      // record index as either above or below current index
      if (isAbove) aboveIndeces.push(intersectingElemIdx);
      else belowIndeces.push(intersectingElemIdx);
    });

    // determine min and max fired indeces values (support for multiple elements firing at once)
    const minIndex = Math.min(...belowIndeces);
    const maxIndex = Math.max(...aboveIndeces);

    // determine how to adjust localActiveIndex based on scroll direction
    if (aboveIndeces.length > 0) {
      // scrolling down - set to max of fired indeces
      localActiveIndex = maxIndex;
    } else if (belowIndeces.length > 0 && minIndex <= this.activeIndex) {
      // scrolling up - set to minimum of fired indeces
      localActiveIndex = minIndex - 1 >= 0 ? minIndex - 1 : 0;
    }

    // render new index to DOM (if required)
    if (localActiveIndex != this.activeIndex) {
      this.activeIndex = localActiveIndex;

      this.handler(this.headings[this.activeIndex]);
    }
  }

  observe() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(this.handleObserver, {
        rootMargin: '-96px', // Distance from top to heading id
        threshold: 1.0,
      });

      this.headings.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          this.observer.observe(el);
        }
      });
    }
  }

  unobserve() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  didUpdateArguments() {
    this.unobserve();
  }

  didReceiveArguments() {
    const [handler] = this.args.positional;
    this.handler = handler;
    this.headings = getHeadingIds(this.args.named.headings);

    this.observe();
  }

  willRemove() {
    this.unobserve();
  }
}
