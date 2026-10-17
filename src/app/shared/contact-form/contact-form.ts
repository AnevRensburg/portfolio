import { ChangeDetectionStrategy, Component, DOCUMENT, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SITE } from '../../core/site';
import { Icon } from '../icon/icon';

const NEEDS = ['A new website', 'A refresh of my current website', 'Help with a domain', 'Something else'];

/**
 * Enquiry form. There is no server: submitting builds the message and opens WhatsApp with it
 * pre-filled (with an email link as a fallback), so nothing is sent until the visitor presses Send.
 */
@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private readonly document = inject(DOCUMENT);
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly needs = NEEDS;
  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    business: ['', [Validators.required, Validators.maxLength(120)]],
    website: ['', Validators.maxLength(200)],
    need: [NEEDS[0], Validators.required],
    message: ['', Validators.maxLength(1000)],
  });

  protected readonly submitted = signal(false);
  protected readonly sentUrl = signal<string | null>(null);
  protected readonly emailUrl = signal<string | null>(null);

  protected showError(name: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || this.submitted());
  }

  protected submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.document.querySelector<HTMLElement>('.contact-form .ng-invalid:not(form)')?.focus();
      return;
    }
    const message = this.buildMessage();
    const whatsapp = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
    this.sentUrl.set(whatsapp);
    this.emailUrl.set(
      `mailto:${SITE.email}?subject=${encodeURIComponent('Website enquiry')}` +
        `&body=${encodeURIComponent(message)}`,
    );
    this.document.defaultView?.open(whatsapp, '_blank', 'noopener');
  }

  protected startOver(): void {
    this.form.reset();
    this.submitted.set(false);
    this.sentUrl.set(null);
  }

  private buildMessage(): string {
    const v = this.form.getRawValue();
    const lines = [
      `Hi Ané! I'm interested in a website.`,
      ``,
      `Name: ${v.name.trim()}`,
      `Business: ${v.business.trim()}`,
    ];
    if (v.website.trim()) lines.push(`Current website: ${v.website.trim()}`);
    lines.push(`Looking for: ${v.need}`);
    if (v.message.trim()) lines.push(``, v.message.trim());
    return lines.join('\n');
  }
}
