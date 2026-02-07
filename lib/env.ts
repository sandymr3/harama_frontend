/**
 * Centralized environment variable validation.
 * Import this wherever env vars are needed to get type-safe,
 * validated values with clear error messages on misconfiguration.
 */

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
        `Please add it to your .env.local file. See .env.example for reference.`
    )
  }
  return value
}

export const env = {
  /** Supabase project URL (e.g. https://xxx.supabase.co) */
  get NEXT_PUBLIC_SUPABASE_URL() {
    return requireEnv('NEXT_PUBLIC_SUPABASE_URL')
  },
  /** Supabase anonymous/public key */
  get NEXT_PUBLIC_SUPABASE_ANON_KEY() {
    return requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY')
  },
  /** Backend API base URL */
  get NEXT_PUBLIC_API_URL() {
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
  },
} as const
