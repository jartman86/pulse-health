Subject: Post-checkout integration — return redirect / webhook support

Hi team,

We're linking out to the Altro white-labeled portal from pulse.health.clinic for
treatment selection, consult booking, and checkout. Before we finish wiring
up our side, we need to understand what Altro supports for getting patients
(and data) back to us after they complete something on your end.

Three questions:

1. Return redirect
   Can the client-facing link — or the checkout/intake flow itself — accept
   a return_url (or redirect_uri) parameter, so the patient lands back on a
   URL we specify once they finish registration or checkout?

2. Webhook / API callback
   Does Altro's partner API support event callbacks (e.g.
   patient.intake_completed, patient.checkout_completed) that we could
   subscribe to on our end? This is the one we care about most — it works
   even if the patient closes the tab and never returns to our site, and
   it's the only way for us to reliably know a conversion happened for
   billing reconciliation and post-purchase follow-up.

3. Reference/metadata passthrough
   If either of the above exists, can we pass a custom reference or
   metadata field through to Altro when we send a patient over, and have
   that same value come back in the redirect or webhook payload? Without
   this we can't tell which product or lab panel a given conversion was
   for.

If none of the above exist today, that's useful to know too — we'd plan
around it rather than wait on it.

Thanks,
Jim
