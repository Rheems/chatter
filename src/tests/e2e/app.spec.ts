import { test, expect } from '@playwright/test'

// ── 1. Homepage Tests ────────────────────────────────────
test.describe('Homepage', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Chatter/)
  })

  test('shows hero section with tagline', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Think it.')).toBeVisible()
  })

  test('shows navbar with Chatter logo', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Chatter').first()).toBeVisible()
  })

  test('shows featured posts section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Featured Posts')).toBeVisible()
  })

  test('shows explore topics section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Explore Topics')).toBeVisible()
  })
})

// ── 2. Navigation Tests ──────────────────────────────────
test.describe('Navigation', () => {
  test('navigates to login page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Sign In')
    await expect(page).toHaveURL('/login')
  })

  test('navigates to signup page from login', async ({ page }) => {
    await page.goto('/login')
    await page.click('text=Sign up')
    await expect(page).toHaveURL('/signup')
  })

  test('navigates to browse page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Browse')
    await expect(page).toHaveURL('/browse')
  })
})

// ── 3. Login Page Tests ──────────────────────────────────
test.describe('Login Page', () => {
  test('loads login page', async ({ page }) => {
    await page.goto('/login')
    await expect(page.getByText('Welcome back')).toBeVisible()
  })

  test('shows email and password fields', async ({ page }) => {
    await page.goto('/login')
    await expect(page.locator('#email')).toBeVisible()
    await expect(page.locator('#password')).toBeVisible()
  })

  test('shows error for invalid credentials', async ({ page }) => {
    await page.goto('/login')
    await page.fill('#email', 'wrong@email.com')
    await page.fill('#password', 'wrongpassword')
    await page.click('text=Sign In')
    await expect(page.locator('.text-red-600, .text-red-400')).toBeVisible({ timeout: 5000 })
  })

  test('shows GitHub OAuth button', async ({ page }) => {
    await page.goto('/login')
    await expect(page.getByText('Continue with GitHub')).toBeVisible()
  })
})

// ── 4. Signup Page Tests ─────────────────────────────────
test.describe('Signup Page', () => {
  test('loads signup page', async ({ page }) => {
    await page.goto('/signup')
    await expect(page.getByText('Create your account')).toBeVisible()
  })

  test('shows password strength indicator when typing', async ({ page }) => {
    await page.goto('/signup')
    await page.fill('#password', 'StrongPass1!')
    await expect(page.getByText('Strong')).toBeVisible()
  })

  test('shows all password requirements', async ({ page }) => {
    await page.goto('/signup')
    await page.fill('#password', 'weak')
    await expect(page.getByText('At least 8 characters')).toBeVisible()
  })

  test('shows GitHub OAuth button', async ({ page }) => {
    await page.goto('/signup')
    await expect(page.getByText('Continue with GitHub')).toBeVisible()
  })
})

// ── 5. Browse Page Tests ─────────────────────────────────
test.describe('Browse Page', () => {
  test('loads browse page', async ({ page }) => {
    await page.goto('/browse')
    await expect(page.getByText('Browse Posts')).toBeVisible()
  })

  test('shows search input', async ({ page }) => {
    await page.goto('/browse')
    await expect(page.locator('input[placeholder*="Search"]')).toBeVisible()
  })

  test('filters posts by tag', async ({ page }) => {
    await page.goto('/browse')
    await page.click('text=Writing')
    await expect(page.getByText('posts found')).toBeVisible()
  })

  test('search filters posts', async ({ page }) => {
    await page.goto('/browse')
    await page.fill('input[placeholder*="Search"]', 'Lagos')
    await expect(page.getByText('posts found')).toBeVisible()
  })
})

// ── 6. Feed Page Tests ───────────────────────────────────
test.describe('Feed Page', () => {
  test('loads feed page', async ({ page }) => {
    await page.goto('/feed')
    await expect(page.getByText('For You')).toBeVisible()
  })

  test('shows search bar', async ({ page }) => {
    await page.goto('/feed')
    await expect(page.locator('input[placeholder*="Search"]')).toBeVisible()
  })

  test('shows post cards', async ({ page }) => {
    await page.goto('/feed')
    await expect(page.locator('article').first()).toBeVisible()
  })
})

// ── 7. Post Detail Tests ─────────────────────────────────
test.describe('Post Detail Page', () => {
  test('loads post detail page', async ({ page }) => {
    await page.goto('/posts/1')
    await expect(page.getByText('Back to Feed')).toBeVisible()
  })

  test('shows post title', async ({ page }) => {
    await page.goto('/posts/1')
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('shows comments section', async ({ page }) => {
    await page.goto('/posts/1')
    await expect(page.getByText('Comments')).toBeVisible()
  })
})

// ── 8. Auth Protected Route Tests ────────────────────────
test.describe('Protected Routes', () => {
  test('write page loads for all users', async ({ page }) => {
    await page.goto('/posts/new')
    await expect(page).toHaveURL('/posts/new')
  })

  test('dashboard page loads', async ({ page }) => {
    await page.goto('/dashboard')
    await expect(page.getByText('Analytics Dashboard')).toBeVisible()
  })
})