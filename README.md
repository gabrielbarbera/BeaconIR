# Beacon IR - Modern Investor Relations Platform

Beacon IR is the modern investor relations platform for startups and growth companies. From IR websites to earnings distribution and global press, we help you build trust and communicate with clarity.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BeaconIR
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your API keys
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:4000](http://localhost:4000)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **CRM**: Agiled (all-in-one business management)
- **Email**: SendFox (email marketing)
- **Scheduling**: TidyCal (appointment booking)
- **Automation**: Activepieces (workflow automation)
- **SEO**: Screpy (monitoring)
- **AI Content**: Greta + IKI.AI
- **Development**: DivMagic

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services section
│   ├── WhyBeacon.tsx      # Why choose Beacon
│   ├── WhoWeServe.tsx     # Target segments
│   ├── Testimonials.tsx   # Client testimonials
│   ├── CTAStrip.tsx       # Call-to-action strip
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
└── lib/                   # Utilities and helpers
```

## 🎨 Design System

### Colors
- **Primary Navy**: `#1a1d29` - Main background
- **Charcoal**: `#2d3142` - Secondary background
- **Gold**: `#f4a261` - Primary accent
- **Light Blue**: `#a8dadc` - Secondary accent
- **White Glow**: `#f1faee` - Light accent

### Typography
- **Serif**: Cormorant Garamond (headings)
- **Sans**: Inter (body text)

### Components
- **Buttons**: Primary (gold) and Secondary (outlined)
- **Cards**: Rounded corners with hover effects
- **Forms**: Clean inputs with focus states
- **Animations**: Subtle fade-ins and hover effects

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔗 Integrations

### Agiled CRM
- Lead management
- Project tracking
- Invoicing
- Client portal

### SendFox Email
- Newsletter campaigns
- Automated sequences
- Lead nurturing

### TidyCal Scheduling
- Client consultations
- Demo bookings
- Meeting coordination

### Activepieces Automation
- Workflow automation
- Lead routing
- Data synchronization

## 📊 Performance Targets

- **LCP**: < 2.5 seconds
- **FID**: < 100 milliseconds
- **CLS**: < 0.1
- **Lighthouse Score**: ≥ 90 for all metrics

## 🔒 Security

- Environment variables for sensitive data
- Form validation and sanitization
- HTTPS enforcement
- Rate limiting on API routes

## 📈 Analytics

- Google Analytics 4
- Vercel Analytics
- Performance monitoring
- Error tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Beacon IR.

## 🆘 Support

For support, email hello@beaconir.com or book a call at [calendly.com/beacon-ir](https://calendly.com/beacon-ir)

---

**Beacon IR** - Guiding your investor story. 🕯️
