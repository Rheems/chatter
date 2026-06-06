# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: app.spec.ts >> Browse Page >> loads browse page
- Location: src\tests\e2e\app.spec.ts:106:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "http://localhost:3000/browse", waiting until "load"

```

# Test source

```ts
  7   |     await expect(page).toHaveTitle(/Chatter/)
  8   |   })
  9   | 
  10  |   test('shows hero section with tagline', async ({ page }) => {
  11  |     await page.goto('/')
  12  |     await expect(page.getByText('Think it.')).toBeVisible()
  13  |   })
  14  | 
  15  |   test('shows navbar with Chatter logo', async ({ page }) => {
  16  |     await page.goto('/')
  17  |     await expect(page.getByText('Chatter').first()).toBeVisible()
  18  |   })
  19  | 
  20  |   test('shows featured posts section', async ({ page }) => {
  21  |     await page.goto('/')
  22  |     await expect(page.getByText('Featured Posts')).toBeVisible()
  23  |   })
  24  | 
  25  |   test('shows explore topics section', async ({ page }) => {
  26  |     await page.goto('/')
  27  |     await expect(page.getByText('Explore Topics')).toBeVisible()
  28  |   })
  29  | })
  30  | 
  31  | // ── 2. Navigation Tests ──────────────────────────────────
  32  | test.describe('Navigation', () => {
  33  |   test('navigates to login page', async ({ page }) => {
  34  |     await page.goto('/')
  35  |     await page.click('text=Sign In')
  36  |     await expect(page).toHaveURL('/login')
  37  |   })
  38  | 
  39  |   test('navigates to signup page from login', async ({ page }) => {
  40  |     await page.goto('/login')
  41  |     await page.click('text=Sign up')
  42  |     await expect(page).toHaveURL('/signup')
  43  |   })
  44  | 
  45  |   test('navigates to browse page', async ({ page }) => {
  46  |     await page.goto('/')
  47  |     await page.click('text=Browse')
  48  |     await expect(page).toHaveURL('/browse')
  49  |   })
  50  | })
  51  | 
  52  | // ── 3. Login Page Tests ──────────────────────────────────
  53  | test.describe('Login Page', () => {
  54  |   test('loads login page', async ({ page }) => {
  55  |     await page.goto('/login')
  56  |     await expect(page.getByText('Welcome back')).toBeVisible()
  57  |   })
  58  | 
  59  |   test('shows email and password fields', async ({ page }) => {
  60  |     await page.goto('/login')
  61  |     await expect(page.locator('#email')).toBeVisible()
  62  |     await expect(page.locator('#password')).toBeVisible()
  63  |   })
  64  | 
  65  |   test('shows error for invalid credentials', async ({ page }) => {
  66  |     await page.goto('/login')
  67  |     await page.fill('#email', 'wrong@email.com')
  68  |     await page.fill('#password', 'wrongpassword')
  69  |     await page.click('text=Sign In')
  70  |     await expect(page.locator('.text-red-600, .text-red-400')).toBeVisible({ timeout: 5000 })
  71  |   })
  72  | 
  73  |   test('shows GitHub OAuth button', async ({ page }) => {
  74  |     await page.goto('/login')
  75  |     await expect(page.getByText('Continue with GitHub')).toBeVisible()
  76  |   })
  77  | })
  78  | 
  79  | // ── 4. Signup Page Tests ─────────────────────────────────
  80  | test.describe('Signup Page', () => {
  81  |   test('loads signup page', async ({ page }) => {
  82  |     await page.goto('/signup')
  83  |     await expect(page.getByText('Create your account')).toBeVisible()
  84  |   })
  85  | 
  86  |   test('shows password strength indicator when typing', async ({ page }) => {
  87  |     await page.goto('/signup')
  88  |     await page.fill('#password', 'StrongPass1!')
  89  |     await expect(page.getByText('Strong')).toBeVisible()
  90  |   })
  91  | 
  92  |   test('shows all password requirements', async ({ page }) => {
  93  |     await page.goto('/signup')
  94  |     await page.fill('#password', 'weak')
  95  |     await expect(page.getByText('At least 8 characters')).toBeVisible()
  96  |   })
  97  | 
  98  |   test('shows GitHub OAuth button', async ({ page }) => {
  99  |     await page.goto('/signup')
  100 |     await expect(page.getByText('Continue with GitHub')).toBeVisible()
  101 |   })
  102 | })
  103 | 
  104 | // ── 5. Browse Page Tests ─────────────────────────────────
  105 | test.describe('Browse Page', () => {
  106 |   test('loads browse page', async ({ page }) => {
> 107 |     await page.goto('/browse')
      |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  108 |     await expect(page.getByText('Browse Posts')).toBeVisible()
  109 |   })
  110 | 
  111 |   test('shows search input', async ({ page }) => {
  112 |     await page.goto('/browse')
  113 |     await expect(page.locator('input[placeholder*="Search"]')).toBeVisible()
  114 |   })
  115 | 
  116 |   test('filters posts by tag', async ({ page }) => {
  117 |     await page.goto('/browse')
  118 |     await page.click('text=Writing')
  119 |     await expect(page.getByText('posts found')).toBeVisible()
  120 |   })
  121 | 
  122 |   test('search filters posts', async ({ page }) => {
  123 |     await page.goto('/browse')
  124 |     await page.fill('input[placeholder*="Search"]', 'Lagos')
  125 |     await expect(page.getByText('posts found')).toBeVisible()
  126 |   })
  127 | })
  128 | 
  129 | // ── 6. Feed Page Tests ───────────────────────────────────
  130 | test.describe('Feed Page', () => {
  131 |   test('loads feed page', async ({ page }) => {
  132 |     await page.goto('/feed')
  133 |     await expect(page.getByText('For You')).toBeVisible()
  134 |   })
  135 | 
  136 |   test('shows search bar', async ({ page }) => {
  137 |     await page.goto('/feed')
  138 |     await expect(page.locator('input[placeholder*="Search"]')).toBeVisible()
  139 |   })
  140 | 
  141 |   test('shows post cards', async ({ page }) => {
  142 |     await page.goto('/feed')
  143 |     await expect(page.locator('article').first()).toBeVisible()
  144 |   })
  145 | })
  146 | 
  147 | // ── 7. Post Detail Tests ─────────────────────────────────
  148 | test.describe('Post Detail Page', () => {
  149 |   test('loads post detail page', async ({ page }) => {
  150 |     await page.goto('/posts/1')
  151 |     await expect(page.getByText('Back to Feed')).toBeVisible()
  152 |   })
  153 | 
  154 |   test('shows post title', async ({ page }) => {
  155 |     await page.goto('/posts/1')
  156 |     await expect(page.locator('h1').first()).toBeVisible()
  157 |   })
  158 | 
  159 |   test('shows comments section', async ({ page }) => {
  160 |     await page.goto('/posts/1')
  161 |     await expect(page.getByText('Comments')).toBeVisible()
  162 |   })
  163 | })
  164 | 
  165 | // ── 8. Auth Protected Route Tests ────────────────────────
  166 | test.describe('Protected Routes', () => {
  167 |   test('write page loads for all users', async ({ page }) => {
  168 |     await page.goto('/posts/new')
  169 |     await expect(page).toHaveURL('/posts/new')
  170 |   })
  171 | 
  172 |   test('dashboard page loads', async ({ page }) => {
  173 |     await page.goto('/dashboard')
  174 |     await expect(page.getByText('Analytics Dashboard')).toBeVisible()
  175 |   })
  176 | })
```