import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline"

export default function MaintenancePage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-6 max-w-md px-4">
        <WrenchScrewdriverIcon className="w-24 h-24 mx-auto text-primary" />
        <h1 className="bigtitle">Under Maintenance</h1>
        <p className="subtitle opacity-75">
          We&apos;re currently performing scheduled maintenance.
        </p>
        <p className="undertitle">
          We&apos;ll be back up and running as soon as possible. Thank you for your patience.
        </p>
      </div>
    </div>
  )
}
