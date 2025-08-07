import fs from 'fs'
import path from 'path'

const URL_STORE_PATH = path.join(process.cwd(), 'data', 'urls.json')

interface UrlData {
  [shortId: string]: {
    url: string
    createdAt: string
    clicks: number
    lastAccessed?: string
  }
}

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Read URLs from file
export function getUrls(): UrlData {
  try {
    ensureDataDirectory()
    if (fs.existsSync(URL_STORE_PATH)) {
      const data = fs.readFileSync(URL_STORE_PATH, 'utf-8')
      return JSON.parse(data)
    }
    return {}
  } catch (error) {
    console.error('Error reading URL store:', error)
    return {}
  }
}

// Save URLs to file
export function saveUrls(urls: UrlData): void {
  try {
    ensureDataDirectory()
    fs.writeFileSync(URL_STORE_PATH, JSON.stringify(urls, null, 2))
  } catch (error) {
    console.error('Error saving URL store:', error)
  }
}

// Add a new short URL
export function addUrl(shortId: string, url: string): void {
  const urls = getUrls()
  urls[shortId] = {
    url,
    createdAt: new Date().toISOString(),
    clicks: 0
  }
  saveUrls(urls)
}

// Get URL by short ID
export function getUrl(shortId: string): string | null {
  const urls = getUrls()
  return urls[shortId]?.url || null
}

// Increment click count
export function incrementClicks(shortId: string): void {
  const urls = getUrls()
  if (urls[shortId]) {
    urls[shortId].clicks += 1
    urls[shortId].lastAccessed = new Date().toISOString()
    saveUrls(urls)
  }
}

// Get URL stats
export function getUrlStats(shortId: string) {
  const urls = getUrls()
  return urls[shortId] || null
}

// Get all URLs with stats
export function getAllUrls(): UrlData {
  return getUrls()
}

// Delete a short URL
export function deleteUrl(shortId: string): boolean {
  const urls = getUrls()
  if (urls[shortId]) {
    delete urls[shortId]
    saveUrls(urls)
    return true
  }
  return false
}