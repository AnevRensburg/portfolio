import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRICES, SITE } from '../../core/site';
import { PROJECTS } from '../../data/projects';
import { ContactForm } from '../../shared/contact-form/contact-form';
import { Icon, IconName } from '../../shared/icon/icon';
import { Picture } from '../../shared/picture/picture';

type View = 'desktop' | 'mobile';

interface Feature {
  readonly icon: IconName;
  readonly title: string;
  readonly text: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, Picture, Icon, ContactForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly site = SITE;
  protected readonly prices = PRICES;
  protected readonly projects = PROJECTS;
  /** Hero stack: last project at the back, first project in front. */
  protected readonly stackOrder = [...PROJECTS].reverse();
  protected readonly year = new Date().getFullYear();

  protected readonly selectedIndex = signal(0);
  protected readonly selected = computed(() => PROJECTS[this.selectedIndex()]);
  protected readonly view = signal<View>('desktop');
  protected readonly menuOpen = signal(false);

  protected select(index: number): void {
    this.selectedIndex.set((index + PROJECTS.length) % PROJECTS.length);
  }

  /** Arrow keys move between the project tabs (WAI-ARIA tabs pattern). */
  protected onTabKey(event: KeyboardEvent): void {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    this.select(this.selectedIndex() + step);
    const tabs = (event.currentTarget as HTMLElement).querySelectorAll<HTMLElement>('[role=tab]');
    tabs[this.selectedIndex()]?.focus();
  }

  protected readonly stats = [
    { value: '4', label: 'Live business websites' },
    { value: '100%', label: 'Built for phones first' },
    { value: PRICES.website, label: 'Once-off for a new site' },
    { value: '1-on-1', label: 'You deal with me directly' },
  ] as const;

  protected readonly features: readonly Feature[] = [
    {
      icon: 'phone',
      title: 'Made for phones',
      text: 'Most of your customers find you on their phone. Every page is designed for a small screen first, then scaled up.',
    },
    {
      icon: 'bolt',
      title: 'Fast to load',
      text: 'Hand-built and optimised images, no heavy page builder. Pages open quickly, even on mobile data.',
    },
    {
      icon: 'chat',
      title: 'Orders on WhatsApp',
      text: 'Customers fill in a short form and the order lands on your WhatsApp, typed out and ready to confirm.',
    },
    {
      icon: 'search',
      title: 'Easy to find on Google',
      text: 'Proper titles, descriptions, link previews and business details, so Google and WhatsApp show you properly.',
    },
    {
      icon: 'globe',
      title: 'Your own domain',
      text: 'Already have a domain? I connect it for free. Don’t have one? I help you choose and register one.',
    },
    {
      icon: 'tools',
      title: 'Changes when you need them',
      text: 'New prices, products or photos? Send them through and I update the site, quoted upfront.',
    },
  ];

  protected readonly steps = [
    {
      title: 'We chat',
      text: 'Tell me about your business and what you sell. Your existing photos, logo and wording are a great start.',
    },
    {
      title: 'I build it',
      text: 'I design and build your new site and send you a private link to look at on your phone.',
    },
    {
      title: 'You review',
      text: 'Ask for changes until you’re happy with every word and photo.',
    },
    {
      title: 'We go live',
      text: 'I connect your domain and make sure everything works, from the order form to the link previews.',
    },
  ] as const;
}
