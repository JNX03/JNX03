/**
 * Validates an email address
 * @param email The email address to validate
 * @returns True if the email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  // Regular expression for validating an Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!email || !emailRegex.test(email)) {
    return false
  }

  // Additional checks
  const parts = email.split("@")
  if (parts.length !== 2) {
    return false
  }

  const [local, domain] = parts

  // Check local part
  if (local.length === 0 || local.length > 64) {
    return false
  }

  // Check domain part
  if (domain.length === 0 || domain.length > 255) {
    return false
  }

  // Check if domain has at least one dot
  if (!domain.includes(".")) {
    return false
  }

  return true
}

/**
 * Validates a URL
 * @param url The URL to validate
 * @returns True if the URL is valid, false otherwise
 */
export function validateUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch (e) {
    return false
  }
}
