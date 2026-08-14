export const metadata = {
  title: "Delete Your SoloPadi Account",
  description:
    "Instructions for requesting deletion of your SoloPadi account and associated personal data.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
            🗑️
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Delete Your SoloPadi Account
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            SoloPadi account and data deletion information
          </p>
        </div>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="mb-3 text-xl font-extrabold text-slate-900">
              Request account deletion
            </h2>

            <p className="text-[15px] leading-7 text-slate-600">
              SoloPadi provides logged-in users with the ability to delete
              their account from within the SoloPadi application. Account
              deletion is intended for users who no longer want to use their
              SoloPadi account.
            </p>
          </section>

          {/* Steps */}
          <section className="mb-8">
            <h2 className="mb-4 text-xl font-extrabold text-slate-900">
              How to delete your SoloPadi account
            </h2>

            <ol className="space-y-4">
              {[
                "Open the SoloPadi application.",
                "Sign in to your SoloPadi account.",
                "Open the Settings section of the application.",
                "Select the Delete Account option.",
                "Review the information presented and confirm that you want to delete your account.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-[15px] leading-7 text-slate-600">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* What gets deleted */}
          <section className="mb-8">
            <h2 className="mb-3 text-xl font-extrabold text-slate-900">
              What happens to your data
            </h2>

            <p className="mb-4 text-[15px] leading-7 text-slate-600">
              When an account deletion request is completed, SoloPadi will
              delete or anonymize personal information associated with the
              account where reasonably possible.
            </p>

            <ul className="space-y-3 pl-5 text-[15px] leading-7 text-slate-600">
              <li className="list-disc">
                Your SoloPadi account and associated authentication information
                will be deleted or disabled.
              </li>

              <li className="list-disc">
                Personal information associated with your account will be
                deleted or anonymized where reasonably possible.
              </li>

              <li className="list-disc">
                Information that is no longer required for legitimate business
                or legal purposes may be removed from our systems.
              </li>

              <li className="list-disc">
                Deletion may permanently remove your access to your SoloPadi
                account and associated account features.
              </li>
            </ul>
          </section>

          {/* Data that may be retained */}
          <section className="mb-8">
            <h2 className="mb-3 text-xl font-extrabold text-slate-900">
              Information that may be retained
            </h2>

            <p className="mb-4 text-[15px] leading-7 text-slate-600">
              Some information may need to be retained after an account
              deletion request where reasonably necessary or required by
              applicable law.
            </p>

            <ul className="space-y-3 pl-5 text-[15px] leading-7 text-slate-600">
              <li className="list-disc">
                Business or transaction records that must be retained to
                comply with legal or regulatory obligations.
              </li>

              <li className="list-disc">
                Information reasonably necessary to resolve disputes or
                enforce agreements.
              </li>

              <li className="list-disc">
                Information reasonably necessary to detect, prevent or
                investigate fraud, abuse or security incidents.
              </li>

              <li className="list-disc">
                Information required to protect the rights, safety or
                security of SoloPadi, its users or third parties.
              </li>
            </ul>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Where information must be retained for one of these purposes,
              it will be retained only for as long as reasonably necessary
              for that purpose and will be deleted or anonymized when it is
              no longer required, subject to applicable legal requirements.
            </p>
          </section>

          {/* Public customer data */}
          <section className="mb-8">
            <h2 className="mb-3 text-xl font-extrabold text-slate-900">
              Customer and order information
            </h2>

            <p className="text-[15px] leading-7 text-slate-600">
              SoloPadi may contain customer and order information recorded by
              businesses. Deleting a vendor account does not necessarily mean
              that every historical order or business transaction record is
              immediately deleted, particularly where the information must be
              retained for legitimate business, legal, security or dispute
              resolution purposes. Where appropriate, personal information
              may be deleted or anonymized.
            </p>
          </section>

          {/* Alternative contact */}
          <section className="mb-8">
            <h2 className="mb-3 text-xl font-extrabold text-slate-900">
              Need help?
            </h2>

            <p className="text-[15px] leading-7 text-slate-600">
              If you cannot access your SoloPadi account or cannot complete
              the deletion process from within the application, contact us
              at{" "}
              <a
                href="mailto:admin.solopadi@gmail.com"
                className="font-semibold text-green-600 hover:underline"
              >
                admin.solopadi@gmail.com
              </a>
              . Please include enough information for us to identify your
              account and process your request. We may need to verify your
              identity before processing a deletion request.
            </p>
          </section>

          {/* Privacy Policy */}
          <section className="border-t border-slate-200 pt-6 text-center">
            <p className="text-sm text-slate-500">
              For additional information about how SoloPadi collects, uses,
              stores and protects information, please see our{" "}
              <a
                href="/privacy-policy"
                className="font-semibold text-green-600 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>

            <p className="mt-4 text-sm font-semibold text-slate-500">
              SoloPadi
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Business management and order management platform
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}