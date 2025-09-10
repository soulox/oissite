# Code Style Guidelines for oissite

## Project Overview

**OISSite** is a comprehensive web hosting and domain services platform that empowers businesses and individuals to achieve online success through reliable, scalable, and user-friendly hosting solutions.

### Technical Stack
- **Platform**: Web
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui component library
- **State Management**: React Context API and Zustand
- **Authentication**: NextAuth.js with JWT tokens
- **Form Handling**: React Hook Form with Zod validation
- **API**: Next.js API routes with tRPC for type-safe APIs
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis for session management and caching

---

## 1. File Organization

### Directory Structure

```
oissite/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Route groups
│   │   ├── (dashboard)/       # Protected routes
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── forms/             # Form components
│   │   ├── layout/            # Layout components
│   │   └── features/          # Feature-specific components
│   ├── lib/                   # Utility functions and configurations
│   │   ├── auth.ts            # Authentication utilities
│   │   ├── db.ts              # Database configuration
│   │   ├── utils.ts           # General utilities
│   │   └── validations.ts     # Zod schemas
│   ├── hooks/                 # Custom React hooks
│   ├── stores/                # Zustand stores
│   ├── types/                 # TypeScript type definitions
│   └── styles/                # Additional styles
├── public/                    # Static assets
├── docs/                      # Documentation
├── tests/                     # Test files
└── config files              # Configuration files
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `UserDashboard.tsx`)
- **Pages**: kebab-case (e.g., `user-settings/page.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase with `.types.ts` suffix (e.g., `User.types.ts`)
- **Hooks**: camelCase with `use` prefix (e.g., `useUserData.ts`)
- **Stores**: camelCase with `Store` suffix (e.g., `userStore.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

### Module Organization

- **Single Responsibility**: Each file should have one primary purpose
- **Co-location**: Related files should be grouped together
- **Barrel Exports**: Use `index.ts` files for clean imports
- **Feature-based**: Organize by feature rather than file type

### Import/Export Patterns

```typescript
// Preferred import order:
// 1. React and Next.js imports
import React from 'react'
import { NextPage } from 'next'

// 2. Third-party libraries
import { z } from 'zod'
import { Button } from '@/components/ui/button'

// 3. Internal imports (absolute paths)
import { UserService } from '@/lib/services/user'
import { UserType } from '@/types/user'

// 4. Relative imports
import './styles.css'

// Named exports preferred over default exports
export const UserDashboard = () => { /* ... */ }
export { UserDashboard }

// Barrel exports in index.ts
export { UserDashboard } from './UserDashboard'
export { UserSettings } from './UserSettings'
```

---

## 2. Code Formatting

### Indentation and Spacing
- **Indentation**: 2 spaces (no tabs)
- **Line Length**: Maximum 100 characters
- **Trailing Commas**: Always use trailing commas in objects and arrays
- **Semicolons**: Always use semicolons

### Line Breaks and Spacing
```typescript
// Good: Proper spacing around operators
const result = (a + b) * (c - d)

// Good: Spacing around function parameters
function calculateTotal(price: number, tax: number): number {
  return price + (price * tax)
}

// Good: Spacing in object literals
const user = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
}

// Good: Spacing in arrays
const items = [
  'item1',
  'item2',
  'item3',
]
```

### Bracket Placement
```typescript
// Good: Opening brace on same line
if (condition) {
  // code
}

// Good: Function declarations
function myFunction() {
  // code
}

// Good: Arrow functions
const myFunction = () => {
  // code
}
```

### Quotes
- **Strings**: Use single quotes for strings
- **JSX**: Use double quotes for JSX attributes
- **Template Literals**: Use backticks for template literals

```typescript
// Good
const message = 'Hello world'
const element = <div className="container">Content</div>
const template = `Hello ${name}`
```

---

## 3. Naming Conventions

### Variables and Functions
- **camelCase** for variables and functions
- **Descriptive names** that clearly indicate purpose
- **Boolean variables** should start with `is`, `has`, `can`, or `should`

```typescript
// Good
const userName = 'john_doe'
const isLoggedIn = true
const hasPermission = false
const canEdit = true
const shouldUpdate = false

// Good function names
function calculateTotalPrice() { /* ... */ }
function validateUserInput() { /* ... */ }
function handleSubmit() { /* ... */ }
```

### Classes and Interfaces
- **PascalCase** for classes and interfaces
- **Descriptive names** that indicate purpose
- **Interface names** should not start with 'I' prefix

```typescript
// Good
class UserService { /* ... */ }
interface UserData { /* ... */ }
type UserStatus = 'active' | 'inactive' | 'pending'
```

### Constants and Enums
- **UPPER_SNAKE_CASE** for constants
- **PascalCase** for enums

```typescript
// Good
const API_BASE_URL = 'https://api.oissite.com'
const MAX_RETRY_ATTEMPTS = 3

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}
```

### Component Naming
- **PascalCase** for component names
- **Descriptive names** that indicate component purpose
- **Suffix with component type** when needed (e.g., `UserCard`, `LoginForm`)

```typescript
// Good
const UserDashboard = () => { /* ... */ }
const LoginForm = () => { /* ... */ }
const NavigationMenu = () => { /* ... */ }
```

### File Naming
- **kebab-case** for file and directory names
- **Descriptive names** that match their content
- **Consistent suffixes** for similar file types

```
// Good
user-dashboard.tsx
login-form.tsx
api-endpoints.ts
user.types.ts
```

---

## 4. TypeScript/JavaScript Guidelines

### Type Annotations
- **Explicit types** for function parameters and return values
- **Interface over type** for object shapes
- **Union types** for multiple possible values
- **Generic types** for reusable components

```typescript
// Good: Explicit function types
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0)
}

// Good: Interface for object shapes
interface User {
  id: number
  name: string
  email: string
  role: UserRole
}

// Good: Union types
type Status = 'loading' | 'success' | 'error'

// Good: Generic types
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}
```

### Interface vs Type Aliases
- **Use interfaces** for object shapes that might be extended
- **Use type aliases** for unions, primitives, and computed types

```typescript
// Good: Interface for extensible objects
interface BaseUser {
  id: number
  name: string
}

interface AdminUser extends BaseUser {
  permissions: string[]
}

// Good: Type alias for unions
type Theme = 'light' | 'dark' | 'auto'
type EventHandler = (event: Event) => void
```

### Null/Undefined Handling
- **Explicit null checks** before accessing properties
- **Optional chaining** for safe property access
- **Nullish coalescing** for default values

```typescript
// Good: Explicit null checks
if (user && user.profile) {
  console.log(user.profile.name)
}

// Good: Optional chaining
const userName = user?.profile?.name ?? 'Unknown'

// Good: Nullish coalescing
const theme = userPreferences?.theme ?? 'light'
```

### Error Handling
- **Try-catch blocks** for async operations
- **Custom error classes** for specific error types
- **Proper error logging** and user feedback

```typescript
// Good: Error handling
async function fetchUserData(userId: number): Promise<User> {
  try {
    const response = await api.get(`/users/${userId}`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch user data:', error)
    throw new UserNotFoundError(`User ${userId} not found`)
  }
}

// Good: Custom error class
class UserNotFoundError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UserNotFoundError'
  }
}
```

### Async/Await Patterns
- **Prefer async/await** over Promise chains
- **Handle errors** appropriately
- **Use Promise.all** for parallel operations

```typescript
// Good: Async/await
async function loadUserData() {
  try {
    const [user, preferences, settings] = await Promise.all([
      fetchUser(),
      fetchUserPreferences(),
      fetchUserSettings(),
    ])
    
    return { user, preferences, settings }
  } catch (error) {
    console.error('Failed to load user data:', error)
    throw error
  }
}
```

---

## 5. Component Guidelines

### Component Composition
- **Single Responsibility**: Each component should have one clear purpose
- **Composition over Inheritance**: Use composition patterns
- **Props Interface**: Define clear prop interfaces

```typescript
// Good: Clear prop interface
interface UserCardProps {
  user: User
  showActions?: boolean
  onEdit?: (user: User) => void
  onDelete?: (userId: number) => void
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  showActions = false,
  onEdit,
  onDelete,
}) => {
  // Component implementation
}
```

### State Management
- **Local state** for component-specific data
- **Context** for shared state across components
- **Zustand** for complex global state
- **Server state** with React Query for API data

```typescript
// Good: Local state
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState<string | null>(null)

// Good: Context for shared state
const UserContext = createContext<UserContextType | null>(null)

// Good: Zustand store
interface UserStore {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}))
```

### Event Handling
- **Descriptive handler names** starting with 'handle'
- **Proper event typing** for TypeScript
- **Debouncing** for expensive operations

```typescript
// Good: Event handlers
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  // Handle form submission
}

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

// Good: Debounced handler
const debouncedSearch = useMemo(
  () => debounce((query: string) => {
    performSearch(query)
  }, 300),
  []
)
```

### Custom Hooks
- **Prefix with 'use'** for custom hooks
- **Single responsibility** for each hook
- **Return objects** for multiple values

```typescript
// Good: Custom hook
function useUserData(userId: number) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchUserData(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [userId])

  return { user, isLoading, error }
}
```

### Render Optimization
- **React.memo** for expensive components
- **useMemo** for expensive calculations
- **useCallback** for stable function references

```typescript
// Good: Memoized component
const ExpensiveComponent = React.memo<Props>(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => processItem(item))
  }, [data])

  const handleUpdate = useCallback((id: number) => {
    onUpdate(id)
  }, [onUpdate])

  return (
    <div>
      {processedData.map(item => (
        <ItemComponent key={item.id} item={item} onUpdate={handleUpdate} />
      ))}
    </div>
  )
})
```

---

## 6. Documentation Standards

### JSDoc Requirements
- **All public functions** must have JSDoc comments
- **Complex logic** should be documented
- **API endpoints** must be documented

```typescript
/**
 * Calculates the total price including tax and discounts
 * @param items - Array of items to calculate total for
 * @param taxRate - Tax rate as decimal (e.g., 0.08 for 8%)
 * @param discountCode - Optional discount code to apply
 * @returns Total price with tax and discounts applied
 * @throws {ValidationError} When items array is empty
 * @example
 * ```typescript
 * const total = calculateTotalPrice(items, 0.08, 'SAVE10')
 * console.log(`Total: $${total.toFixed(2)}`)
 * ```
 */
function calculateTotalPrice(
  items: Item[],
  taxRate: number,
  discountCode?: string
): number {
  // Implementation
}
```

### README Structure
```markdown
# Component/Feature Name

Brief description of what this component/feature does.

## Usage

```typescript
import { ComponentName } from '@/components/ComponentName'

<ComponentName prop1="value" prop2={123} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| prop1 | string | - | Description of prop1 |
| prop2 | number | 0 | Description of prop2 |

## Examples

### Basic Usage
[Code example]

### Advanced Usage
[Code example]

## API Reference

[Link to detailed API documentation]
```

### Code Comments
- **Explain why**, not what
- **Use TODO comments** for temporary code
- **Remove commented code** before committing

```typescript
// Good: Explains why
// We need to debounce this to prevent excessive API calls
const debouncedSearch = debounce(performSearch, 300)

// Good: TODO comment
// TODO: Implement caching to improve performance
const fetchData = async () => {
  // Implementation
}

// Bad: Explains what (obvious from code)
// Set the user state to the new user
setUser(newUser)
```

---

## 7. Testing Standards

### Test File Organization
```
tests/
├── __mocks__/                 # Mock files
├── components/                # Component tests
├── hooks/                     # Hook tests
├── lib/                       # Utility tests
├── pages/                     # Page tests
└── setup.ts                   # Test setup
```

### Naming Conventions
- **Test files**: `*.test.ts` or `*.test.tsx`
- **Test descriptions**: Use descriptive test names
- **Test suites**: Group related tests

```typescript
// Good: Test file naming
UserCard.test.tsx
useUserData.test.ts
calculateTotal.test.ts

// Good: Test descriptions
describe('UserCard Component', () => {
  it('should display user name and email', () => {
    // Test implementation
  })

  it('should call onEdit when edit button is clicked', () => {
    // Test implementation
  })

  it('should show loading state when user data is being fetched', () => {
    // Test implementation
  })
})
```

### Test Structure (Arrange-Act-Assert)
```typescript
// Good: AAA pattern
describe('calculateTotalPrice', () => {
  it('should calculate total with tax and discount', () => {
    // Arrange
    const items = [
      { id: 1, price: 100 },
      { id: 2, price: 200 },
    ]
    const taxRate = 0.08
    const discountCode = 'SAVE10'

    // Act
    const result = calculateTotalPrice(items, taxRate, discountCode)

    // Assert
    expect(result).toBe(267.2)
  })
})
```

### Mock Data Handling
```typescript
// Good: Mock data
const mockUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user',
}

// Good: Mock functions
const mockOnEdit = jest.fn()
const mockOnDelete = jest.fn()

// Good: Mock API responses
jest.mock('@/lib/api', () => ({
  fetchUser: jest.fn().mockResolvedValue(mockUser),
}))
```

### Test Coverage Requirements
- **Minimum 80%** code coverage
- **100% coverage** for critical business logic
- **Integration tests** for API endpoints
- **E2E tests** for critical user flows

---

## 8. Performance Guidelines

### Bundle Optimization
- **Code splitting** with dynamic imports
- **Tree shaking** to remove unused code
- **Bundle analysis** to identify large dependencies

```typescript
// Good: Dynamic imports for code splitting
const UserDashboard = lazy(() => import('@/components/UserDashboard'))
const AdminPanel = lazy(() => import('@/components/AdminPanel'))

// Good: Conditional loading
const AdminPanel = lazy(() => 
  import('@/components/AdminPanel').then(module => ({
    default: module.AdminPanel
  }))
)
```

### Lazy Loading
- **Route-based** lazy loading for pages
- **Component-based** lazy loading for heavy components
- **Image lazy loading** for better performance

```typescript
// Good: Route-based lazy loading
const UserSettings = lazy(() => import('@/app/(dashboard)/settings/page'))

// Good: Component lazy loading
const HeavyChart = lazy(() => import('@/components/HeavyChart'))

// Good: Image lazy loading
<Image
  src="/large-image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
/>
```

### Memory Management
- **Cleanup effects** in useEffect
- **Remove event listeners** when components unmount
- **Avoid memory leaks** in event handlers

```typescript
// Good: Cleanup in useEffect
useEffect(() => {
  const handleResize = () => {
    // Handle resize
  }

  window.addEventListener('resize', handleResize)
  
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])
```

### State Management Optimization
- **Minimize re-renders** with proper state structure
- **Use selectors** for derived state
- **Batch updates** when possible

```typescript
// Good: Optimized state structure
interface AppState {
  users: Record<number, User>
  selectedUserIds: number[]
  filters: UserFilters
}

// Good: Selector for derived state
const selectFilteredUsers = (state: AppState) => {
  return state.selectedUserIds
    .map(id => state.users[id])
    .filter(user => matchesFilters(user, state.filters))
}
```

---

## 9. Security Guidelines

### Authentication Handling
- **Secure token storage** (httpOnly cookies)
- **Token refresh** mechanism
- **Proper logout** cleanup

```typescript
// Good: Secure authentication
const login = async (credentials: LoginCredentials) => {
  try {
    const response = await api.post('/auth/login', credentials)
    const { token, refreshToken } = response.data
    
    // Store tokens securely
    setCookie('auth-token', token, { httpOnly: true, secure: true })
    setCookie('refresh-token', refreshToken, { httpOnly: true, secure: true })
    
    return response.data.user
  } catch (error) {
    throw new AuthenticationError('Invalid credentials')
  }
}
```

### Data Validation
- **Server-side validation** for all inputs
- **Zod schemas** for type-safe validation
- **Sanitization** of user inputs

```typescript
// Good: Input validation
const userSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().min(18).max(120),
})

const validateUserInput = (data: unknown) => {
  try {
    return userSchema.parse(data)
  } catch (error) {
    throw new ValidationError('Invalid user data')
  }
}
```

### API Security
- **Rate limiting** on API endpoints
- **Input sanitization** for all requests
- **CORS configuration** for cross-origin requests

```typescript
// Good: API security middleware
export const apiSecurityMiddleware = (req: NextRequest) => {
  // Rate limiting
  const rateLimitResult = rateLimit.check(req)
  if (!rateLimitResult.success) {
    return new Response('Too Many Requests', { status: 429 })
  }

  // Input sanitization
  const sanitizedBody = sanitizeInput(req.body)
  req.body = sanitizedBody

  return NextResponse.next()
}
```

### Environment Variables
- **Never commit** sensitive data
- **Use .env.local** for local development
- **Validate environment** variables at startup

```typescript
// Good: Environment validation
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  API_KEY: z.string().min(1),
})

const env = envSchema.parse(process.env)
```

---

## 10. Development Workflow

### Git Workflow
- **Feature branches** for new features
- **Pull requests** for code review
- **Squash commits** before merging

```bash
# Good: Feature branch workflow
git checkout -b feature/user-dashboard
git add .
git commit -m "feat: add user dashboard component"
git push origin feature/user-dashboard
# Create pull request
```

### Branch Naming
- **feature/**: New features (e.g., `feature/user-authentication`)
- **bugfix/**: Bug fixes (e.g., `bugfix/login-validation`)
- **hotfix/**: Critical fixes (e.g., `hotfix/security-patch`)
- **refactor/**: Code refactoring (e.g., `refactor/api-structure`)

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions/changes
- `chore`: Build process or auxiliary tool changes

**Examples:**
```
feat(auth): add two-factor authentication
fix(dashboard): resolve user data loading issue
docs(api): update authentication endpoints
refactor(components): extract reusable form components
```

### PR Requirements
- **Descriptive title** and description
- **Link to issues** when applicable
- **Screenshots** for UI changes
- **Test coverage** for new features
- **Breaking changes** documented

### Code Review Process
- **At least one approval** required
- **Automated checks** must pass
- **Security review** for sensitive changes
- **Performance review** for critical paths

---

## Enforcement and Tools

### ESLint Configuration
```json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "prefer-const": "error",
    "no-var": "error"
  }
}
```

### Prettier Setup
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### Git Hooks
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```

### VS Code Configuration
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

---

## Best Practices

### Code Quality
- **Keep functions small** and focused (max 20 lines)
- **Follow DRY principles** but don't over-abstract
- **Maintain separation of concerns**
- **Use meaningful names** that explain intent
- **Write self-documenting code**
- **Handle errors appropriately**

### Performance
- **Optimize bundle size** with code splitting
- **Implement proper caching** strategies
- **Use lazy loading** for non-critical components
- **Optimize images** and assets
- **Monitor Core Web Vitals**

### Maintainability
- **Write clear documentation**
- **Use consistent patterns** throughout codebase
- **Implement proper error handling**
- **Follow SOLID principles**
- **Keep dependencies updated**

### Collaboration
- **Write clear commit messages**
- **Document breaking changes**
- **Maintain changelog**
- **Review code thoroughly**
- **Share knowledge** through documentation

---

## Conclusion

These code style guidelines ensure consistency, maintainability, and quality across the oissite codebase. All team members should follow these standards to create a cohesive and professional development environment.

Regular reviews and updates of these guidelines will ensure they remain relevant and effective as the project evolves.

For questions or suggestions about these guidelines, please create an issue in the project repository or discuss with the development team.
