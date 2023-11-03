import Component from '@glimmer/component';
import { scrollToElement } from 'docs/utils/scroll-to';
import { action } from '@ember/object';

interface PageHeadingsArgs {} //eslint-disable-line

export default class PageHeadings extends Component<PageHeadingsArgs> {
  @action onClick(evt: MouseEvent): void {
    const href = (evt.target as HTMLElement).getAttribute('href');
    if (href) {
      const toElement = document.querySelector(href) as HTMLElement;

      scrollToElement(toElement);
    }
  }
}