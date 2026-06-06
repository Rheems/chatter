# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: app.spec.ts >> Browse Page >> shows search input
- Location: src\tests\e2e\app.spec.ts:111:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('input[placeholder*="Search"]')
Expected: visible
Received: undefined

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[placeholder*="Search"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "● Chatter" [ref=e4] [cursor=pointer]:
        - /url: /
        - generic [ref=e5]: ●
        - text: Chatter
      - navigation [ref=e6]:
        - link "Feed" [ref=e7] [cursor=pointer]:
          - /url: /feed
        - link "Browse" [ref=e8] [cursor=pointer]:
          - /url: /browse
        - link "Discover" [ref=e9] [cursor=pointer]:
          - /url: /discover
      - generic [ref=e10]:
        - button [ref=e11]:
          - img [ref=e12]
        - link "Sign In" [ref=e14] [cursor=pointer]:
          - /url: /login
        - link "Write" [ref=e15] [cursor=pointer]:
          - /url: /posts/new
          - img [ref=e16]
          - text: Write
  - main [ref=e18]:
    - generic [ref=e19]:
      - generic [ref=e22]:
        - heading "Browse Posts" [level=1] [ref=e23]
        - paragraph [ref=e24]: Discover stories, ideas and knowledge from writers across Africa
        - generic [ref=e25]:
          - img [ref=e26]
          - textbox "Search posts, authors, topics..." [ref=e29]
      - generic [ref=e30]:
        - generic [ref=e31]:
          - button "All" [ref=e32]
          - button "Technology" [ref=e33]
          - button "Writing" [ref=e34]
          - button "Culture" [ref=e35]
          - button "Design" [ref=e36]
          - button "Africa" [ref=e37]
          - button "Productivity" [ref=e38]
          - button "Programming" [ref=e39]
          - button "Startups" [ref=e40]
          - button "Mental Health" [ref=e41]
          - button "Finance" [ref=e42]
          - button "Career" [ref=e43]
          - button "Science" [ref=e44]
        - generic [ref=e45]:
          - paragraph [ref=e46]: 10 posts found
          - generic [ref=e47]:
            - img [ref=e48]
            - combobox "Sort posts by" [ref=e50]:
              - option "Most Popular" [selected]
              - option "Most Recent"
        - generic [ref=e51]:
          - article [ref=e52] [cursor=pointer]:
            - generic [ref=e53]: Writing
            - heading "God is the Ultimate Tech Bro" [level=2] [ref=e54]
            - paragraph [ref=e55]: Imagine the greatness that coded the sun, designed the ocean and launched the galaxies — without a laptop or a MacBook.
            - generic [ref=e56]:
              - generic [ref=e57]:
                - generic [ref=e58]: K
                - generic [ref=e59]:
                  - paragraph [ref=e60]: Kareemah Ahmad
                  - paragraph [ref=e61]: 3 min read
              - generic [ref=e62]:
                - img [ref=e63]
                - text: "892"
            - link "Read more →" [ref=e65]:
              - /url: /posts/10
          - article [ref=e66] [cursor=pointer]:
            - generic [ref=e67]: Culture
            - heading "Things Fall Apart — A Modern Reading" [level=2] [ref=e68]
            - paragraph [ref=e69]: Okonkwo's story is not a footnote in someone else's history. It is the story. Never the footnote.
            - generic [ref=e70]:
              - generic [ref=e71]:
                - generic [ref=e72]: C
                - generic [ref=e73]:
                  - paragraph [ref=e74]: Chinua Achebe
                  - paragraph [ref=e75]: 15 min read
              - generic [ref=e76]:
                - img [ref=e77]
                - text: "445"
            - link "Read more →" [ref=e79]:
              - /url: /posts/3
          - article [ref=e80] [cursor=pointer]:
            - generic [ref=e81]: Design
            - heading "Refactoring UI — Design Lessons Every Developer Needs" [level=2] [ref=e82]
            - paragraph [ref=e83]: This is not about making things pretty. It is about making things work visually. There is a difference.
            - generic [ref=e84]:
              - generic [ref=e85]:
                - generic [ref=e86]: A
                - generic [ref=e87]:
                  - paragraph [ref=e88]: Adam Wathan
                  - paragraph [ref=e89]: 9 min read
              - generic [ref=e90]:
                - img [ref=e91]
                - text: "445"
            - link "Read more →" [ref=e93]:
              - /url: /posts/7
          - article [ref=e94] [cursor=pointer]:
            - generic [ref=e95]: Writing
            - heading "Purple Hibiscus — Faith, Freedom and Family" [level=2] [ref=e96]
            - paragraph [ref=e97]: Kambili had almost no voice. This is a story about finding your voice inside silence.
            - generic [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e100]: C
                - generic [ref=e101]:
                  - paragraph [ref=e102]: Chimamanda Ngozi Adichie
                  - paragraph [ref=e103]: 13 min read
              - generic [ref=e104]:
                - img [ref=e105]
                - text: "312"
            - link "Read more →" [ref=e107]:
              - /url: /posts/8
          - article [ref=e108] [cursor=pointer]:
            - generic [ref=e109]: Writing
            - heading "Stay With Me" [level=2] [ref=e110]
            - paragraph [ref=e111]: Yejide and Akin believed their marriage was different. Then three years passed without a child.
            - generic [ref=e112]:
              - generic [ref=e113]:
                - generic [ref=e114]: A
                - generic [ref=e115]:
                  - paragraph [ref=e116]: Ayobami Adeyemi
                  - paragraph [ref=e117]: 10 min read
              - generic [ref=e118]:
                - img [ref=e119]
                - text: "234"
            - link "Read more →" [ref=e121]:
              - /url: /posts/5
          - article [ref=e122] [cursor=pointer]:
            - generic [ref=e123]: Technology
            - heading "Nigeria's Tech Renaissance" [level=2] [ref=e124]
            - paragraph [ref=e125]: From Paystack to Flutterwave. A generation of Nigerian builders that stopped waiting for permission.
            - generic [ref=e126]:
              - generic [ref=e127]:
                - generic [ref=e128]: T
                - generic [ref=e129]:
                  - paragraph [ref=e130]: Tayo Oviosu
                  - paragraph [ref=e131]: 8 min read
              - generic [ref=e132]:
                - img [ref=e133]
                - text: "203"
            - link "Read more →" [ref=e135]:
              - /url: /posts/6
          - article [ref=e136] [cursor=pointer]:
            - generic [ref=e137]: Startups
            - heading "The Lagos Hustle — Building Wealth in Chaos" [level=2] [ref=e138]
            - paragraph [ref=e139]: Lagos does not wait for you to be ready. It will test you on day one and day one thousand.
            - generic [ref=e140]:
              - generic [ref=e141]:
                - generic [ref=e142]: K
                - generic [ref=e143]:
                  - paragraph [ref=e144]: Kemi Ogunkoya
                  - paragraph [ref=e145]: 7 min read
              - generic [ref=e146]:
                - img [ref=e147]
                - text: "178"
            - link "Read more →" [ref=e149]:
              - /url: /posts/9
          - article [ref=e150] [cursor=pointer]:
            - generic [ref=e151]: Culture
            - heading "The Secret Lives of Baba Segi's Wives" [level=2] [ref=e152]
            - paragraph [ref=e153]: Baba Segi's household was happy until his fourth wife arrived. A bold story about women, secrets and survival.
            - generic [ref=e154]:
              - generic [ref=e155]:
                - generic [ref=e156]: L
                - generic [ref=e157]:
                  - paragraph [ref=e158]: Lola Shoneyin
                  - paragraph [ref=e159]: 11 min read
              - generic [ref=e160]:
                - img [ref=e161]
                - text: "167"
            - link "Read more →" [ref=e163]:
              - /url: /posts/4
          - article [ref=e164] [cursor=pointer]:
            - generic [ref=e165]: Writing
            - heading "Time Changes Yesterday" [level=2] [ref=e166]
            - paragraph [ref=e167]: A young girl navigating life after the loss of her mother, caught between grief and a family moving forward without her blessing.
            - generic [ref=e168]:
              - generic [ref=e169]:
                - generic [ref=e170]: S
                - generic [ref=e171]:
                  - paragraph [ref=e172]: Sefi Atta
                  - paragraph [ref=e173]: 12 min read
              - generic [ref=e174]:
                - img [ref=e175]
                - text: "124"
            - link "Read more →" [ref=e177]:
              - /url: /posts/1
          - article [ref=e178] [cursor=pointer]:
            - generic [ref=e179]: Africa
            - heading "Nearly Everybody in Lagos is Mad" [level=2] [ref=e180]
            - paragraph [ref=e181]: A razor-sharp, darkly comic portrait of Lagos life — the chaos, the hustle, the madness and the magic.
            - generic [ref=e182]:
              - generic [ref=e183]:
                - generic [ref=e184]: D
                - generic [ref=e185]:
                  - paragraph [ref=e186]: Dami Ajayi
                  - paragraph [ref=e187]: 9 min read
              - generic [ref=e188]:
                - img [ref=e189]
                - text: "89"
            - link "Read more →" [ref=e191]:
              - /url: /posts/2
```

# Test source

```ts
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
  107 |     await page.goto('/browse')
  108 |     await expect(page.getByText('Browse Posts')).toBeVisible()
  109 |   })
  110 | 
  111 |   test('shows search input', async ({ page }) => {
  112 |     await page.goto('/browse')
> 113 |     await expect(page.locator('input[placeholder*="Search"]')).toBeVisible()
      |                                                                ^ Error: expect(locator).toBeVisible() failed
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