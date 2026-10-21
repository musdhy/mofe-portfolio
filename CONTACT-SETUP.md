# Portfolio contact form

- Service: Formspree. No Resend account, API key, or sending domain is required.
- Form: Mofe Portfolio Contact
- Endpoint: https://formspree.io/f/myekrleq
- Verified recipient: mmusdhaliph@gmail.com
- Dashboard: https://formspree.io/forms/myekrleq/integration

The local website posts Name, Email, and Message to Formspree. The email field supplies the visitor's reply address. The page reports success after Formspree accepts a submission and preserves entered details on failure. The endpoint is public by design; it is not a secret key.

## Before launch

Local test completed on 21 October 2026: Formspree accepted the website submission, it appeared in the form's Inbox, and the notification arrived in the verified Gmail Inbox. The notification's Reply-To matched the email entered in the form. The same Gmail address was used for the sender field in this setup test; a different visitor email can be tested after deployment.

1. Local acceptance, Gmail receipt, and Reply-To checks have passed.
2. Keep spam protection enabled. If a CAPTCHA appears, the visitor must complete it; do not disable protection just to pass a test.
3. After publication is authorized, test the deployed form again.
4. Monitor the free submission allowance: currently 50 submissions per month. No paid subscription was selected.

Nothing has been published. The final résumé is staged locally as resume.pdf, opening in a new tab with an inline response header on Vercel. Visitors can still save a viewable PDF.

References:
- https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax/
- https://formspree.io/plans
