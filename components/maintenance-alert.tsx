import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function MaintenanceAlert() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Website Under Maintenance</AlertTitle>
      <AlertDescription>
        PATCH 3 is currently in progress. Some features may be unavailable. We apologize for any inconvenience.
      </AlertDescription>
    </Alert>
  )
}

