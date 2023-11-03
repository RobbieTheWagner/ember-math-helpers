import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

interface ThemeSwitcherArgs {} // eslint-disable-line

declare const FastBoot: unknown;

export default class ThemeSwitcher extends Component<ThemeSwitcherArgs> {
  @tracked prefersDark = false;

  constructor(owner: undefined, args: ThemeSwitcherArgs) {
    super(owner, args);
    if (typeof FastBoot !== 'undefined') {
      return;
    }
    const root = document.documentElement;
    this.prefersDark = root.classList.value.includes('dark');

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.onchange = ({ matches }): void => {
      if (!localStorage.getItem('prefersMode')) {
        this.prefersDark = matches;
        this.applyClasses();
      }
    };
  }

  @action toggleMode(): void {
    let newMode: string;
    if (this.prefersDark) {
      newMode = 'light';
      this.prefersDark = false;
    } else {
      newMode = 'dark';
      this.prefersDark = true;
    }
    localStorage.setItem('prefersMode', newMode);
    this.applyClasses();
  }

  applyClasses(): void {
    const body = document.body;
    body.style.transition = 'background-color 0.2s ease, color 0.2s ease';
    body.style.transitionDelay = '0s, 0s';

    if (this.prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    later(
      this,
      () => {
        body.style.transition = '';
        body.style.transitionDelay = '';
      },
      200
    );
  }
}
