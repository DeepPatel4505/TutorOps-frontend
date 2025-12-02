# 📁 TutorOps Frontend - Complete Folder Structure Documentation

## 🎯 Project Overview

**TutorOps Frontend** is a modern React application built with Vite, featuring state management with Redux Toolkit, routing with React Router, and a beautiful UI styled with Tailwind CSS. The application is designed for tutors, students, and parents to interact through an AI-assisted education platform.

---

## 🏗️ Complete Folder Structure

```
frontend/
├── 📄 Root Configuration Files
│   ├── components.json              # ShadCN UI component configuration
│   ├── index.html                   # HTML entry point
│   ├── jsconfig.json                # JavaScript path aliases configuration
│   ├── package.json                 # Dependencies and scripts
│   ├── README.md                    # Project documentation
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   └── vite.config.js               # Vite bundler configuration
│
├── 📁 public/                       # Static assets served directly
│   └── vite.svg                     # Vite logo (favicon)
│
└── 📁 src/                          # Source code directory
    ├── App.jsx                      # Main application component
    ├── main.jsx                     # React entry point & providers setup
    │
    ├── 📁 app/                      # Redux store configuration
    │   └── store.js                 # Redux store with reducers
    │
    ├── 📁 assets/                   # Images, fonts, media files
    │   └── [Empty - Ready for assets]
    │
    ├── 📁 components/               # Reusable UI components
    │   ├── TestAPI.jsx              # API testing component
    │   ├── ThemeToggle.jsx          # Dark/light mode toggle button
    │   │
    │   ├── 📁 Auth/                 # Authentication components
    │   │   ├── Login.jsx            # Login form component
    │   │   └── SignUp.jsx           # Registration form component
    │   │
    │   ├── 📁 icons/                # Custom icon components
    │   │   └── GoogleIcon.jsx       # Google OAuth icon
    │   │
    │   ├── 📁 Navbar/               # Navigation components
    │   │   └── Navbar.jsx           # Main navigation bar
    │   │
    │   └── 📁 ui/                   # ShadCN UI components
    │       └── button.jsx           # Reusable button component
    │
    ├── 📁 context/                  # React Context providers
    │   └── 📁 ThemeContext/         # Theme management context
    │       ├── ThemeContext.jsx     # Theme context definition
    │       └── ThemeProvider.jsx    # Theme provider with localStorage
    │
    ├── 📁 features/                 # Redux feature slices
    │   ├── 📁 auth/                 # Authentication feature
    │   │   ├── authService.js       # Auth API service functions
    │   │   ├── authSlice.js         # Auth Redux slice
    │   │   └── authThunk.js         # Auth async thunks
    │   │
    │   └── 📁 user/                 # User feature (planned)
    │       └── [Empty - Ready for user management]
    │
    ├── 📁 hooks/                    # Custom React hooks
    │   └── useShowPassword.jsx      # Password visibility toggle hook
    │
    ├── 📁 layouts/                  # Page layout components
    │   └── HomePageLayout.jsx       # Landing page layout wrapper
    │
    ├── 📁 lib/                      # Utility libraries
    │   └── utils.js                 # Tailwind class merge utility (cn)
    │
    ├── 📁 pages/                    # Page-level components
    │   ├── 📁 Auth/                 # Authentication pages
    │   │   ├── LoginPage.jsx        # Login page
    │   │   └── SignUpPage.jsx       # Registration page
    │   │
    │   └── 📁 Landing/              # Landing pages
    │       └── HomePage.jsx         # Main landing page
    │
    ├── 📁 routes/                   # Route configuration
    │   └── [Empty - Ready for route definitions]
    │
    ├── 📁 services/                 # External service integrations
    │   └── 📁 API/                  # API service layer
    │       ├── apiInfo.js           # API base configuration
    │       ├── axiosConfig.js       # Axios instance & interceptors
    │       ├── deleteApi.js         # DELETE request wrapper
    │       ├── getApi.js            # GET request wrapper
    │       ├── postApi.js           # POST request wrapper
    │       └── putApi.js            # PUT request wrapper
    │
    ├── 📁 styles/                   # Global styles
    │   ├── globals.css              # Global CSS with Tailwind theme
    │   ├── index.css                # Main CSS entry point
    │   └── variables.css            # CSS custom properties (colors, themes)
    │
    └── 📁 utils/                    # Utility functions
        └── [Empty - Ready for helper functions]
```

---

## 📋 Detailed File & Folder Descriptions

### 🔧 Root Configuration Files

#### `components.json`

**Purpose:** Configuration file for ShadCN UI component library  
**What it does:**

- Defines component style preset (`new-york`)
- Configures Tailwind integration
- Sets up path aliases for component imports
- Specifies icon library (Lucide React)
- **Key Settings:**
    - `style: "new-york"` - Component design variant
    - `tsx: false` - Uses JSX instead of TypeScript
    - `cssVariables: true` - Enables CSS variable-based theming
    - Path aliases for `@components`, `@/lib/utils`, etc.

#### `index.html`

**Purpose:** HTML entry point for the application  
**What it does:**

- Defines the root `<div id="root">` where React mounts
- Links to `/src/main.jsx` as the JavaScript entry point
- Sets viewport and meta tags
- **Structure:**
    ```html
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
    </body>
    ```

#### `jsconfig.json`

**Purpose:** JavaScript project configuration for VS Code IntelliSense  
**What it does:**

- Configures path aliases for cleaner imports
- Enables autocomplete for aliased paths
- **Path Aliases:**
    - `@/*` → `src/*`
    - `@components/*` → `src/components/*`
    - `@pages/*` → `src/pages/*`
    - `@hooks/*` → `src/hooks/*`
    - `@services/*` → `src/services/*`
    - `@utils/*` → `src/utils/*`
    - `@context/*` → `src/context/*`
    - `@layouts/*` → `src/layouts/*`
    - `@styles/*` → `src/styles/*`
- **Example Usage:** `import Button from '@components/ui/button'`

#### `package.json`

**Purpose:** Project metadata, dependencies, and scripts  
**What it does:**

- Defines project dependencies and devDependencies
- Contains npm scripts for development, build, and deployment
- **Key Dependencies:**
    - **React 19.1.0** - UI library
    - **Redux Toolkit 2.9.0** - State management
    - **React Router DOM 7.9.3** - Routing
    - **Axios 1.12.2** - HTTP client
    - **Tailwind CSS 4.1.10** - Utility-first CSS
    - **Lucide React** - Icon library
    - **Sonner** - Toast notifications
    - **Motion** - Animation library
    - **ShadCN UI components** (@radix-ui/react-slot, class-variance-authority)
- **Scripts:**
    - `npm run dev` - Start development server (Vite)
    - `npm run build` - Build for production
    - `npm run preview` - Preview production build
    - `npm run lint` - Run ESLint
    - `npm run format` - Format code with Prettier

#### `README.md`

**Purpose:** Project documentation and setup guide  
**What it does:**

- Provides project overview
- Lists features (React + Vite, Tailwind, Auth Context)
- Shows folder structure
- Contains setup instructions

#### `tailwind.config.js`

**Purpose:** Tailwind CSS framework configuration  
**What it does:**

- Enables dark mode via `class="dark"`
- Specifies content files to scan for classes
- Extends theme with custom colors using CSS variables
- Defines custom border radius values
- **Custom Colors:**
    - `background`, `foreground` - Base colors
    - `primary`, `secondary` - Brand colors
    - `muted`, `accent` - Utility colors
    - `border`, `input`, `ring` - Form colors
- **Dark Mode:** Activated by adding `dark` class to HTML element

#### `vite.config.js`

**Purpose:** Vite bundler configuration  
**What it does:**

- Configures React plugin for JSX/Fast Refresh
- Sets up Tailwind CSS Vite plugin
- Defines path aliases matching `jsconfig.json`
- **Plugins:**
    - `@vitejs/plugin-react` - React support
    - `@tailwindcss/vite` - Tailwind integration
- **Aliases:** Maps `@components`, `@pages`, etc. to actual directories

---

### 📦 `public/` Directory

**Purpose:** Static assets served directly without processing  
**What it does:**

- Files here are copied to build output as-is
- Accessible via root URL (e.g., `/vite.svg`)
- **Current Contents:**
    - `vite.svg` - Vite logo used as favicon

---

### 🎨 `src/` Directory

#### `main.jsx`

**Purpose:** Application entry point and root setup  
**What it does:**

- Renders React app into DOM
- Wraps app with providers (Router, Theme, Redux)
- **Provider Hierarchy:**
    ```jsx
    StrictMode
      → BrowserRouter (routing)
        → ThemeProvider (theme management)
          → Provider (Redux store)
            → App
    ```
- Imports global styles from `@styles/index.css`
- Uses `createRoot` from React 19 for concurrent features

#### `App.jsx`

**Purpose:** Main application component with routing  
**What it does:**

- Defines application routes using React Router
- Sets up Axios interceptors for API calls
- **Routes:**
    - `/` - Home page (with `HomePageLayout`)
    - `/login` - Login page
    - `/register` - Sign up page
    - `*` - 404 Not Found
- Calls `setupAxiosInterceptors(navigate)` to handle auth redirects

---

### 🗃️ `src/app/` - Redux Store

#### `store.js`

**Purpose:** Redux store configuration  
**What it does:**

- Creates Redux store using `configureStore`
- Combines reducers for different features
- **Current Reducers:**
    - `auth` - Authentication state (from `authSlice`)
- **Planned:** User reducer for profile management
- **Usage:** Imported in `main.jsx` and provided to app

---

### 🖼️ `src/assets/` - Static Assets

**Purpose:** Images, fonts, videos, and other media files  
**Current Status:** Empty - ready for asset files  
**Usage Example:** `import logo from '@/assets/logo.png'`

---

### 🧩 `src/components/` - Reusable Components

#### `TestAPI.jsx`

**Purpose:** Component for testing API endpoints  
**What it does:**

- Provides UI for testing backend connectivity
- Useful for development and debugging

#### `ThemeToggle.jsx`

**Purpose:** Toggle button for light/dark mode  
**What it does:**

- Displays sun/moon icon based on current theme
- Calls `toggleTheme()` from ThemeContext
- Uses ShadCN Button component with ghost variant
- **Implementation:**
    ```jsx
    const { theme, toggleTheme } = useTheme();
    // Shows Moon in light mode, Sun in dark mode
    ```

#### `src/components/Auth/`

##### `Login.jsx`

**Purpose:** Login form component  
**What it does:**

- Email and password input fields
- Password visibility toggle (using `useShowPassword` hook)
- "Remember me" checkbox
- Google sign-in button
- Animated background effects
- Link to sign-up page
- Integrates with Redux auth actions
- **Features:**
    - Eye icon to show/hide password
    - Responsive design
    - Theme-aware styling
    - Form validation ready

##### `SignUp.jsx`

**Purpose:** User registration form component  
**What it does:**

- Similar structure to Login component
- Additional fields (name, confirm password, etc.)
- Terms & conditions acceptance
- Google sign-up option

#### `src/components/icons/`

##### `GoogleIcon.jsx`

**Purpose:** Custom Google logo icon component  
**What it does:**

- SVG implementation of Google's logo
- Used in OAuth login/signup buttons
- Maintains brand guidelines

#### `src/components/Navbar/`

##### `Navbar.jsx`

**Purpose:** Main navigation bar  
**What it does:**

- Fixed position at top of page
- Brand logo/name (TutorOps)
- Navigation links (Features, Roadmap)
- Theme toggle button
- Glass morphism effect (`glass` class)
- Smooth scroll to page sections
- **Features:**
    - `scrollToFeatures()` - Smooth scroll to features section
    - `scrollToPhases()` - Smooth scroll to roadmap section
    - Hover effects with scale animations

#### `src/components/ui/`

##### `button.jsx`

**Purpose:** Reusable button component (ShadCN UI)  
**What it does:**

- Implements multiple button variants and sizes
- Uses `class-variance-authority` for variant management
- Supports "asChild" pattern for polymorphic rendering
- **Variants:**
    - `default` - Primary blue button
    - `destructive` - Red danger button
    - `outline` - Border button
    - `secondary` - Secondary style
    - `ghost` - Transparent hover effect
    - `link` - Underlined link style
- **Sizes:** `default`, `sm`, `lg`, `icon`
- **Usage:** `<Button variant="outline" size="lg">Click</Button>`

---

### 🎭 `src/context/` - React Context

#### `src/context/ThemeContext/`

##### `ThemeContext.jsx`

**Purpose:** Theme context definition  
**What it does:**

- Creates context for theme state
- Exports `useTheme` hook for consuming theme
- **Context Value:**
    - `theme` - Current theme ('light' or 'dark')
    - `toggleTheme()` - Function to switch themes
    - `brand` - Brand variant ('default', 'brandA', 'brandB')
    - `setBrand()` - Function to change brand theme

##### `ThemeProvider.jsx`

**Purpose:** Theme provider component with state management  
**What it does:**

- Manages theme state with useState
- Persists theme to localStorage
- Applies theme class to HTML element
- Applies brand data attribute to HTML
- Initializes from localStorage on mount
- **Theme Persistence:** Reads/writes to `localStorage.getItem('theme')`
- **Brand Theming:** Sets `data-theme` attribute on document root
- **Example:** Wrapping app enables `useTheme()` hook everywhere

---

### 🔄 `src/features/` - Redux Features

#### `src/features/auth/` - Authentication Feature

##### `authService.js`

**Purpose:** Authentication API service layer  
**What it does:**

- Contains API calls for authentication endpoints
- Returns raw response data
- **Functions:**
    - `register(userData)` - POST `/api/users/register`
    - `login(userData)` - POST `/api/users/login`
    - `logout()` - POST `/api/users/logout`
- **Note:** Uses axios directly (could be refactored to use API wrappers)

##### `authSlice.js`

**Purpose:** Redux slice for authentication state  
**What it does:**

- Defines auth state shape and reducers
- **Initial State:**
    ```javascript
    {
      isAuthenticated: false,
      user: null,
      accesstoken: null,
      loading: false,
      error: null
    }
    ```
- **Extra Reducers:** Handles async thunk actions
    - Login: `auth/login/pending|fulfilled|rejected`
    - Register: `auth/register/pending|fulfilled|rejected`
    - Logout: `auth/logout/pending|fulfilled|rejected`
- Updates loading states and stores user/token on success

##### `authThunk.js`

**Purpose:** Async thunk actions for authentication  
**What it does:**

- Creates async actions using `createAsyncThunk`
- **Thunks:**
    - `loginUser(credentials)` - Handles login flow
    - `registerUser(userData)` - Handles registration
    - `logoutUser()` - Handles logout
- Catches errors and returns user-friendly messages
- Integrates with `authService` for API calls

#### `src/features/user/`

**Purpose:** User profile and management feature  
**Current Status:** Empty - ready for user-related reducers/services

---

### 🪝 `src/hooks/` - Custom React Hooks

#### `useShowPassword.jsx`

**Purpose:** Custom hook for password visibility toggle  
**What it does:**

- Manages boolean state for showing/hiding password
- **Returns:**
    - `showPassword` - Boolean state
    - `toggleShowPassword()` - Toggle function
- **Usage in forms:**
    ```jsx
    const { showPassword, toggleShowPassword } = useShowPassword();
    <input type={showPassword ? 'text' : 'password'} />
    <button onClick={toggleShowPassword}>
      {showPassword ? <EyeOff /> : <Eye />}
    </button>
    ```

---

### 📐 `src/layouts/` - Page Layouts

#### `HomePageLayout.jsx`

**Purpose:** Layout wrapper for home page  
**What it does:**

- Provides consistent layout structure
- Uses React Router's `<Outlet />` to render child routes
- Can include shared headers, footers, sidebars
- **Current Implementation:** Simple wrapper with Outlet
- **Planned:** Add navbar, footer, sidebar as needed

---

### 📚 `src/lib/` - Utility Libraries

#### `utils.js`

**Purpose:** Shared utility functions  
**What it does:**

- Exports `cn()` function for Tailwind class merging
- **Implementation:**
    ```javascript
    export function cn(...inputs) {
        return twMerge(clsx(inputs));
    }
    ```
- **Usage:** Merge conditional classes safely
    ```jsx
    <div className={cn('base-class', isActive && 'active-class', className)} />
    ```
- Prevents Tailwind class conflicts using `tailwind-merge`

---

### 📄 `src/pages/` - Page Components

#### `src/pages/Auth/`

##### `LoginPage.jsx`

**Purpose:** Login page container  
**What it does:**

- Renders `<Login />` component
- Handles login form submission
- Dispatches Redux actions for authentication
- Redirects on successful login

##### `SignUpPage.jsx`

**Purpose:** Registration page container  
**What it does:**

- Renders `<SignUp />` component
- Handles registration form submission
- Creates new user accounts
- Redirects to login or dashboard after signup

#### `src/pages/Landing/`

##### `HomePage.jsx`

**Purpose:** Main landing page  
**What it does:**

- Hero section with call-to-action
- Features section
- Roadmap/phases section
- Animated sections with scroll effects
- Parallax scrolling effects
- **Components:**
    - `AnimatedSection` - Custom component for scroll animations
    - Uses Intersection Observer for visibility detection
    - Parallax speed control for dynamic effects
- Includes Navbar component
- **Features:**
    - Smooth scroll to sections
    - Animated text and gradients
    - Responsive design
    - Theme-aware styling

---

### 🛣️ `src/routes/` - Route Configuration

**Purpose:** Centralized route definitions  
**Current Status:** Empty - routes currently defined in `App.jsx`  
**Planned Usage:**

- Extract route configuration from App.jsx
- Create route objects with lazy loading
- Implement protected routes
- Add route guards for authentication

---

### 🌐 `src/services/` - External Services

#### `src/services/API/`

##### `apiInfo.js`

**Purpose:** API configuration constants  
**What it does:**

- Defines base API URL from environment variables
- Sets default timeout and headers
- **Configuration:**
    ```javascript
    {
      baseURL: `${VITE_API_URL}:${VITE_API_PORT}/api`,
      timeout: VITE_API_TIMEOUT || 5000,
      headers: { "Content-Type": "application/json" }
    }
    ```
- **Environment Variables:**
    - `VITE_API_URL` - Backend server URL
    - `VITE_API_PORT` - Backend server port
    - `VITE_API_TIMEOUT` - Request timeout in ms

##### `axiosConfig.js`

**Purpose:** Axios instance and interceptor configuration  
**What it does:**

- Creates pre-configured axios instance
- Sets up request/response interceptors
- **Request Interceptor:**
    - Adds Authorization header from localStorage
    - Handles FormData content-type correctly
- **Response Interceptor:**
    - Handles 401 (Unauthorized) - redirects to login
    - Handles 403 (Forbidden) - shows error toast
    - Handles 500 (Server Error) - shows error toast
    - Handles network errors
- **Toast Notifications:** Uses Sonner for error messages
- **Navigation:** Uses React Router's navigate for redirects
- **Setup:** Called in App.jsx with `setupAxiosInterceptors(navigate)`

##### `getApi.js`

**Purpose:** Wrapper for GET requests  
**What it does:**

- Simplifies GET request syntax
- **Function:** `getApi(path, parameters)`
- Supports custom parameters (query params, headers)
- Allows `responseType` override (e.g., 'blob' for files)
- Error handling with console logging
- Returns response or error object

##### `postApi.js`

**Purpose:** Wrapper for POST requests  
**What it does:**

- Simplifies POST request syntax
- **Function:** `postApi(path, body, parameters)`
- Shows error toast on failure
- Handles request body serialization
- Returns response or error object

##### `putApi.js`

**Purpose:** Wrapper for PUT requests  
**What it does:**

- Simplifies PUT request syntax
- **Function:** `putApi(path, data, parameters)`
- Used for updating resources
- Shows error toast on failure
- Returns response or error object

##### `deleteApi.js`

**Purpose:** Wrapper for DELETE requests  
**What it does:**

- Simplifies DELETE request syntax
- **Function:** `deleteApi(path, parameters)`
- Shows error toast on failure
- Returns response or error object

---

### 🎨 `src/styles/` - Global Styles

#### `index.css`

**Purpose:** Main stylesheet entry point  
**What it does:**

- Imports Tailwind CSS directives
- Imports custom variables
- Imports global styles
- **Import Order:**
    1. `@import "tailwindcss"` - Tailwind base/utilities
    2. `@import "./variables.css"` - CSS custom properties
    3. `@import "./globals.css"` - Global styles

#### `globals.css`

**Purpose:** Global CSS styles and Tailwind configuration  
**What it does:**

- Registers `tailwindcss-animate` plugin
- Defines custom dark mode variant
- Creates Tailwind theme tokens from CSS variables
- **Custom Variant:** `@custom-variant dark (&:is(.dark *))`
- **@theme inline:** Maps CSS vars to Tailwind
    - Colors: `--color-background`, `--color-primary`, etc.
    - Radius: `--radius-sm/md/lg/xl`
- **Base Layer:**
    - Sets default border and outline colors
    - Smooth scrolling
    - Font family
    - Antialiasing
- **Custom CSS Classes:**
    - `.glass` - Glass morphism effect
    - `.animated-gradient` - Animated background gradient
    - `.gradient-text` - Gradient text effect
    - Custom animations and transitions

#### `variables.css`

**Purpose:** CSS custom properties (CSS variables)  
**What it does:**

- Defines color palette for light and dark themes
- Uses OKLCH color space for better perceptual uniformity
- **Light Theme (:root):**
    - Background: Soft white (oklch 0.985)
    - Primary: Bright blue (oklch 0.62)
    - Secondary: Soft gray-blue
    - Muted, Accent, Border colors
- **Dark Theme (.dark):**
    - Background: Deep near-black (oklch 0.15)
    - Primary: Electric blue (oklch 0.73)
    - Adjusted colors for dark background
- **Brand Themes:**
    - `[data-theme='brandA']` - Vibrant pink brand
    - `[data-theme='brandB']` - Modern green brand
- **Radius:** `--radius: 0.5rem` (8px) for rounded corners
- **OKLCH Benefits:**
    - Consistent perceived brightness
    - Better color interpolation
    - More predictable color adjustments

---

### 🛠️ `src/utils/` - Utility Functions

**Purpose:** Helper functions and utilities  
**Current Status:** Empty - ready for utility functions  
**Planned Usage:**

- Date formatting functions
- String manipulation
- Validation helpers
- Data transformation utilities
- Constants and enums

---

## 🔗 Key Integrations & Technologies

### State Management - Redux Toolkit

- **Store:** `src/app/store.js`
- **Slices:** Feature-based organization in `src/features/`
- **Thunks:** Async actions for API calls
- **Usage:** `useSelector`, `useDispatch` hooks

### Routing - React Router DOM v7

- **Setup:** `BrowserRouter` in `main.jsx`
- **Routes:** Defined in `App.jsx`
- **Navigation:** `useNavigate` hook
- **Layouts:** Nested routes with `<Outlet />`

### Styling - Tailwind CSS v4

- **Config:** `tailwind.config.js`
- **Dark Mode:** Class-based (`class="dark"`)
- **Custom Theme:** CSS variables in `variables.css`
- **Plugins:** `tailwindcss-animate`

### UI Components - ShadCN UI

- **Config:** `components.json`
- **Location:** `src/components/ui/`
- **Styling:** Tailwind + CSS variables
- **Customization:** Fully customizable source code

### HTTP Client - Axios

- **Instance:** `axiosConfig.js`
- **Interceptors:** Request/response handling
- **Wrappers:** GET, POST, PUT, DELETE functions
- **Error Handling:** Toast notifications

### Notifications - Sonner

- **Usage:** `toast.error()`, `toast.success()`
- **Position:** Configured in provider
- **Dismissable:** Auto-dismiss or manual

### Icons - Lucide React

- **Usage:** `import { Icon } from 'lucide-react'`
- **Examples:** `Moon`, `Sun`, `Eye`, `EyeOff`
- **Customizable:** Size, color, strokeWidth

### Animations - Motion (Framer Motion)

- **Usage:** Declarative animations
- **Components:** `<motion.div>`, etc.
- **Features:** Variants, gestures, scroll animations

---

## 🚀 Development Workflow

### Starting Development

```bash
npm run dev
```

- Starts Vite dev server
- Hot Module Replacement (HMR)
- Opens at `http://localhost:5173` (default)

### Building for Production

```bash
npm run build
```

- Creates optimized build in `dist/`
- Minifies CSS/JS
- Code splitting
- Tree shaking

### Previewing Production Build

```bash
npm run preview
```

- Serves production build locally
- Test before deployment

### Code Quality

```bash
npm run lint          # Check for linting errors
npm run lint:fix      # Auto-fix linting errors
npm run format        # Format code with Prettier
npm run format:check  # Check formatting
```

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=http://localhost
VITE_API_PORT=3000
VITE_API_TIMEOUT=5000
```

**Usage in Code:**

```javascript
import.meta.env.VITE_API_URL;
```

---

## 📦 Import Aliases

The project uses path aliases for cleaner imports:

```javascript
// Instead of: import Button from '../../../components/ui/button'
import Button from '@components/ui/button';

// Available aliases:
import Component from '@components/...';
import Page from '@pages/...';
import Hook from '@hooks/...';
import Service from '@services/...';
import Util from '@utils/...';
import Context from '@context/...';
import Layout from '@layouts/...';
import Style from '@styles/...';
import Anything from '@/...';
```

**Configuration:**

- `jsconfig.json` - VS Code IntelliSense
- `vite.config.js` - Build-time resolution

---

## 🎨 Theme System

### How It Works

1. **ThemeProvider** wraps the app in `main.jsx`
2. Stores theme preference in localStorage
3. Applies `light` or `dark` class to `<html>`
4. CSS variables change based on class
5. Components inherit theme colors

### Using Theme

```jsx
import { useTheme } from '@context/ThemeContext/ThemeContext';

function MyComponent() {
    const { theme, toggleTheme, brand, setBrand } = useTheme();

    return <button onClick={toggleTheme}>Current: {theme}</button>;
}
```

### Brand Themes

Change brand by setting `data-theme` attribute:

```javascript
setBrand('brandA'); // Pink theme
setBrand('brandB'); // Green theme
setBrand('default'); // Blue theme
```

---

## 🔄 Redux State Management

### Accessing State

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '@features/auth/authThunk';

function LoginComponent() {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.auth);

    const handleLogin = (credentials) => {
        dispatch(loginUser(credentials));
    };

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
}
```

### Current State Structure

```javascript
{
  auth: {
    isAuthenticated: false,
    user: null,
    accesstoken: null,
    loading: false,
    error: null
  }
}
```

---

## 🌐 API Integration

### Making API Calls

```javascript
import getApi from '@services/API/getApi';
import postApi from '@services/API/postApi';

// GET request
const response = await getApi('/users/profile');

// POST request
const response = await postApi('/users/register', {
    email: 'user@example.com',
    password: 'password123',
});
```

### API Configuration

- **Base URL:** Set in `.env` file
- **Timeout:** 5 seconds default
- **Auth Token:** Auto-added from localStorage
- **Error Handling:** Automatic toast notifications

---

## 🎯 Best Practices

### Component Organization

- **Small, focused components** - Single responsibility
- **Reusable UI in `components/ui/`** - Shared components
- **Feature components in `components/[Feature]/`** - Grouped by feature
- **Page components in `pages/`** - Route-level components

### State Management

- **Local state** - `useState` for component-specific state
- **Context** - `ThemeContext` for global UI state
- **Redux** - `auth`, `user` for shared application state

### Styling

- **Tailwind utilities** - Preferred for most styling
- **CSS variables** - For theme colors
- **Custom classes** - For complex reusable styles
- **Responsive** - Mobile-first approach

### File Naming

- **Components:** PascalCase (`LoginPage.jsx`)
- **Hooks:** camelCase with `use` prefix (`useShowPassword.jsx`)
- **Utils:** camelCase (`utils.js`)
- **Styles:** kebab-case (`globals.css`)

---

## 🚧 Future Enhancements

### Empty Folders Ready for Development

1. **`src/routes/`**
    - Centralized route configuration
    - Protected route components
    - Route guards

2. **`src/utils/`**
    - Date/time formatters
    - Validation functions
    - String manipulators
    - Constants

3. **`src/features/user/`**
    - User profile management
    - Settings slice
    - Preferences

4. **`src/assets/`**
    - Logo images
    - Brand assets
    - Illustrations
    - Fonts

---

## 📊 Project Statistics

- **Total Folders:** 20+
- **Configuration Files:** 7
- **React Components:** 15+
- **Redux Slices:** 1 (auth)
- **Custom Hooks:** 1
- **API Services:** 5
- **Style Files:** 3
- **Dependencies:** 15+ production
- **Dev Dependencies:** 13+

---

## 🤝 Contributing Guidelines

### Adding a New Feature

1. Create feature slice in `src/features/[feature]/`
2. Add service functions if needed
3. Create components in `src/components/[Feature]/`
4. Add page in `src/pages/[Feature]/`
5. Define route in `App.jsx`
6. Update this documentation

### Adding a New Component

1. Determine if it's reusable (UI) or feature-specific
2. Place in appropriate folder
3. Use TypeScript-style JSDoc for props
4. Export named or default export
5. Update parent component imports

---

## 📞 Support & Resources

- **Vite Docs:** https://vitejs.dev/
- **React Docs:** https://react.dev/
- **Redux Toolkit:** https://redux-toolkit.js.org/
- **React Router:** https://reactrouter.com/
- **Tailwind CSS:** https://tailwindcss.com/
- **ShadCN UI:** https://ui.shadcn.com/
- **Lucide Icons:** https://lucide.dev/

---

**Last Updated:** November 30, 2025  
**Version:** 0.0.0  
**Maintained by:** TutorOps Development Team
