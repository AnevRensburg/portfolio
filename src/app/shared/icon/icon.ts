import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'phone'
  | 'bolt'
  | 'chat'
  | 'search'
  | 'globe'
  | 'tools'
  | 'mail'
  | 'pin'
  | 'arrow'
  | 'external'
  | 'check'
  | 'desktop'
  | 'mobile'
  | 'github'
  | 'whatsapp';

/** Line icons drawn with currentColor (24×24, 1.6px stroke). Decorative: hidden from screen readers. */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  template: `
    <svg viewBox="0 0 24 24">
      @switch (name()) {
        @case ('phone') {
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
          <path d="M10.5 18.5h3" />
        }
        @case ('bolt') {
          <path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z" />
        }
        @case ('chat') {
          <path d="M4 5.5h16v10H9l-5 4z" />
          <path d="M8 9.5h8M8 12.5h5" />
        }
        @case ('search') {
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m15.5 15.5 5 5" />
        }
        @case ('globe') {
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z" />
        }
        @case ('tools') {
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.4-3.4a6 6 0 0 1-7.9 7.9l-6.5 6.5a2.1 2.1 0 0 1-3-3l6.5-6.5a6 6 0 0 1 7.9-7.9z"
          />
        }
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 6.5 8.5 7 8.5-7" />
        }
        @case ('pin') {
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        }
        @case ('arrow') {
          <path d="M4 12h16M14 6l6 6-6 6" />
        }
        @case ('external') {
          <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
        }
        @case ('check') {
          <path d="m4.5 12.5 4.5 4.5 10.5-10.5" />
        }
        @case ('desktop') {
          <rect x="2.5" y="4" width="19" height="12.5" rx="1.5" />
          <path d="M8.5 20.5h7M12 16.5v4" />
        }
        @case ('mobile') {
          <rect x="7" y="2.5" width="10" height="19" rx="2" />
          <path d="M11 18.5h2" />
        }
        @case ('github') {
          <path
            d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
          />
        }
        @case ('whatsapp') {
          <path d="M4 20.5 5.3 16A8.5 8.5 0 1 1 8.3 19z" />
          <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 1c-1.2-.5-2.5-1.8-3-3l1-1-1-2z" />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      inline-size: 1.5em;
      block-size: 1.5em;
      flex: none;
    }
    svg {
      inline-size: 100%;
      block-size: 100%;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.6;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
}
