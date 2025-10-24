# Beacon IR - Development Workflow Plan

## Repository Structure

```
beacon-ir/
├── apps/
│   ├── marketing-site/          # Main marketing website (beaconir.com)
│   │   ├── src/
│   │   │   ├── components/      # Reusable UI components
│   │   │   ├── pages/          # Next.js pages
│   │   │   ├── styles/         # Global styles and design tokens
│   │   │   ├── lib/           # Utilities and helpers
│   │   │   └── types/         # TypeScript type definitions
│   │   ├── public/            # Static assets
│   │   ├── package.json
│   │   └── next.config.js
│   │
│   └── ir-templates/          # IR website template system
│       ├── templates/
│       │   ├── startup/       # Startup-focused template
│       │   ├── growth/        # Growth company template
│       │   └── agency/        # Agency/white-label template
│       ├── components/        # Shared template components
│       ├── styles/           # Template-specific styles
│       └── package.json
│
├── packages/
│   ├── ui/                   # Shared component library
│   │   ├── src/
│   │   │   ├── components/   # Base components (Button, Card, etc.)
│   │   │   ├── tokens/      # Design tokens (colors, typography)
│   │   │   └── utils/       # Shared utilities
│   │   └── package.json
│   │
│   ├── cms/                  # Strapi CMS configuration
│   │   ├── src/
│   │   │   ├── api/         # API routes
│   │   │   ├── components/  # Strapi components
│   │   │   └── extensions/  # Custom extensions
│   │   ├── config/          # Strapi configuration
│   │   └── package.json
│   │
│   └── integrations/         # External service integrations
│       ├── agiled/          # Agiled CRM integration
│       ├── sendfox/         # SendFox email integration
│       ├── tidycal/        # TidyCal scheduling integration
│       └── activepieces/   # Activepieces automation
│
├── docs/                    # Documentation
│   ├── api/                # API documentation
│   ├── deployment/         # Deployment guides
│   └── user-guides/       # User documentation
│
├── scripts/               # Build and deployment scripts
├── .github/              # GitHub Actions workflows
├── package.json          # Root package.json (monorepo)
├── turbo.json           # Turborepo configuration
└── README.md
```

## Development Workflow

### Phase 1: Foundation Setup (Week 1)

#### Day 1-2: Repository & Environment Setup

```bash
# Initialize monorepo with Turborepo
npx create-turbo@latest beacon-ir
cd beacon-ir

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

**Environment Variables:**

```env
# Strapi CMS
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_token_here

# Agiled Integration
AGILED_API_KEY=your_api_key
AGILED_WEBHOOK_SECRET=your_webhook_secret

# SendFox Integration
SENDFOX_API_KEY=your_api_key
SENDFOX_LIST_ID=your_list_id

# TidyCal Integration
TIDYCAL_API_KEY=your_api_key

# Vercel Deployment
VERCEL_PROJECT_ID=your_project_id
VERCEL_TOKEN=your_token
```

#### Day 3-4: Design System Implementation

```bash
# Set up design tokens
cd packages/ui
npm install @stitches/react styled-components

# Create design token system
mkdir src/tokens
touch src/tokens/colors.ts
touch src/tokens/typography.ts
touch src/tokens/spacing.ts
```

#### Day 5: Component Library Setup

```bash
# Install Storybook for component development
cd packages/ui
npx storybook@latest init

# Create base components
mkdir src/components/base
touch src/components/base/Button.tsx
touch src/components/base/Card.tsx
touch src/components/base/Input.tsx
```

### Phase 2: Marketing Site Development (Week 2-3)

#### Week 2: Core Components & Pages

```bash
cd apps/marketing-site

# Install dependencies
npm install @next/font framer-motion

# Create page components
mkdir src/pages
touch src/pages/index.tsx
touch src/pages/about.tsx
touch src/pages/contact.tsx
touch src/pages/solutions.tsx

# Create section components
mkdir src/components/sections
touch src/components/sections/Hero.tsx
touch src/components/sections/Services.tsx
touch src/components/sections/Testimonials.tsx
touch src/components/sections/Contact.tsx
```

#### Week 3: Integration & Testing

```bash
# Set up form handling
npm install react-hook-form @hookform/resolvers zod

# Create contact form integration
touch src/lib/forms.ts
touch src/lib/agiled-integration.ts

# Set up testing
npm install --save-dev @testing-library/react jest
touch jest.config.js
```

### Phase 3: IR Template System (Week 4-6)

#### Week 4: Template Architecture

```bash
cd apps/ir-templates

# Create template structure
mkdir templates/startup/src
mkdir templates/growth/src
mkdir templates/agency/src

# Set up shared components
mkdir components/shared
touch components/shared/Header.tsx
touch components/shared/Footer.tsx
touch components/shared/PressRelease.tsx
```

#### Week 5: CMS Integration

```bash
cd packages/cms

# Set up Strapi
npx create-strapi-app@latest . --quickstart

# Create content types
mkdir src/api
mkdir src/api/press-release
mkdir src/api/company-info
mkdir src/api/investor-contact
```

#### Week 6: Template Deployment

```bash
# Set up deployment pipeline
touch .github/workflows/deploy-templates.yml

# Create deployment scripts
mkdir scripts
touch scripts/deploy-template.sh
touch scripts/generate-client-site.sh
```

## CI/CD Pipeline

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy Beacon IR

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run test
      - run: npm run lint
      - run: npm run type-check

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: build-files
          path: apps/*/out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/download-artifact@v3
        with:
          name: build-files
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: apps/marketing-site
```

## Development Commands

### Root Level Commands

```json
{
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "type-check": "turbo run type-check",
    "clean": "turbo run clean"
  }
}
```

### Marketing Site Commands

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

### Component Library Commands

```json
{
  "scripts": {
    "dev": "storybook dev -p 6006",
    "build": "storybook build",
    "test": "jest",
    "lint": "eslint src --ext .ts,.tsx",
    "type-check": "tsc --noEmit"
  }
}
```

## Quality Assurance

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks
- **Lint-staged**: Run linters on staged files

### Testing Strategy

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Cypress for E2E
- **Visual Regression**: Chromatic for Storybook
- **Performance**: Lighthouse CI
- **Accessibility**: axe-core testing

### Performance Targets

- **LCP**: < 2.5 seconds
- **FID**: < 100 milliseconds
- **CLS**: < 0.1
- **Lighthouse Score**: ≥ 90 for all metrics

## Deployment Strategy

### Environments

1. **Development**: Local development with hot reload
2. **Preview**: Vercel preview deployments for PRs
3. **Staging**: Staging environment for testing
4. **Production**: Live beaconir.com

### Deployment Process

1. **Feature Branch**: Create feature branch from `develop`
2. **Development**: Work locally with hot reload
3. **Pull Request**: Create PR with preview deployment
4. **Review**: Code review + staging testing
5. **Merge**: Merge to `develop` branch
6. **Staging**: Deploy to staging environment
7. **Production**: Merge `develop` to `main` for production

### Monitoring & Analytics

- **Vercel Analytics**: Performance monitoring
- **Sentry**: Error tracking
- **Google Analytics**: User behavior
- **Hotjar**: User experience insights

## Security Considerations

### Data Protection

- **Environment Variables**: Secure storage of API keys
- **Form Validation**: Server-side validation for all forms
- **Rate Limiting**: API rate limiting to prevent abuse
- **HTTPS**: SSL certificates for all environments

### Access Control

- **Admin Access**: Restricted admin panel access
- **API Authentication**: JWT tokens for API access
- **Webhook Security**: Signature verification for webhooks
- **Database Security**: Encrypted connections and backups

## Maintenance & Updates

### Regular Tasks

- **Dependencies**: Weekly security updates
- **Performance**: Monthly performance audits
- **Content**: Regular content updates via CMS
- **Backups**: Daily automated backups

### Monitoring

- **Uptime**: 99.9% uptime monitoring
- **Performance**: Real-time performance monitoring
- **Errors**: Automated error reporting
- **Security**: Security vulnerability scanning

This development workflow ensures a scalable, maintainable, and high-quality Beacon IR platform that can grow from MVP to enterprise-scale solution.
