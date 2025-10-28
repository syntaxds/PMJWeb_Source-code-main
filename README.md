# PT Padas Mustapa Jaya Website

A professional, responsive website for PT Padas Mustapa Jaya - a company specializing in logistics & shipping, woodchip production, and biomass solutions.

Built with Next.js 14, Tailwind CSS, and featuring modern animations and interactions.

## 🌟 Features

- **5 Pages**: Home, About, Services, Clients, Contact
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern Animations**: 
  - Infinite auto-scrolling client logos with drag interaction
  - Independent testimonial rotation with red blink effects (3s, 5s, 7s intervals)
  - Smooth fade transitions
- **Professional UI**: Black, Red, and White color scheme
- **SEO Ready**: Optimized meta tags and structure

## 📋 Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

## 🚀 Local Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory (if not exists):

```bash
MONGO_URL=mongodb://localhost:27017/your-database
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> **Note**: For production, update `NEXT_PUBLIC_BASE_URL` to your actual domain.

### 4. Run Development Server

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🌐 Deployment Guide

### Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Step-by-Step Instructions:

1. **Push Your Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

3. **Import Your Project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

4. **Configure Environment Variables**
   - Click "Environment Variables"
   - Add the following:
     ```
     MONGO_URL=<your-mongodb-connection-string>
     NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - Your site will be live at `https://your-project.vercel.app`

6. **Auto-Deploy on Push**
   - Every push to `main` branch will auto-deploy
   - Preview deployments for other branches

#### Vercel Custom Domain Setup:

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `padasmustapa.com`)
4. Follow the DNS configuration instructions

---

### Option 2: Connect with Hostinger Domain

If you have an existing WordPress site on Hostinger and want to connect this Next.js site:

#### Scenario A: Replace WordPress Completely

**Steps:**

1. **Deploy to Vercel First** (follow Option 1 above)
   - Your site will be at `https://your-project.vercel.app`

2. **Update Hostinger DNS Settings**
   - Login to [Hostinger](https://www.hostinger.com)
   - Go to **Domains** → Select your domain
   - Click **DNS / Name Servers**

3. **Update DNS Records**
   
   Delete existing WordPress records and add:
   
   | Type  | Name | Value                  | TTL  |
   |-------|------|------------------------|------|
   | A     | @    | 76.76.21.21           | 3600 |
   | CNAME | www  | cname.vercel-dns.com  | 3600 |

   > **Note**: IP address `76.76.21.21` is Vercel's. Check [Vercel's docs](https://vercel.com/docs/concepts/projects/domains) for latest IPs.

4. **Add Domain in Vercel**
   - In Vercel dashboard → Settings → Domains
   - Add: `padasmustapa.com` and `www.padasmustapa.com`
   - Wait for DNS propagation (5 mins - 48 hours)

5. **Backup WordPress First!**
   - Export WordPress content via **Tools → Export**
   - Download files via FTP/File Manager
   - Export database via phpMyAdmin

---

#### Scenario B: Keep WordPress on Subdomain

If you want to keep WordPress accessible (e.g., at `blog.padasmustapa.com`):

**Steps:**

1. **Move WordPress to Subdomain**
   
   In Hostinger:
   - Go to **Websites** → **Subdomains**
   - Create subdomain: `blog.padasmustapa.com`
   - Move WordPress files to new subdomain folder
   - Update WordPress site URL in database:
     ```sql
     UPDATE wp_options 
     SET option_value = 'https://blog.padasmustapa.com' 
     WHERE option_name = 'siteurl' OR option_name = 'home';
     ```

2. **Update Main Domain DNS** (follow Scenario A, Step 3)

3. **Result**:
   - Main site: `padasmustapa.com` (Next.js from Vercel)
   - WordPress: `blog.padasmustapa.com` (on Hostinger)

---

#### Scenario C: Use Subdomain for Next.js

Keep WordPress on main domain, use subdomain for Next.js:

**Steps:**

1. **Deploy to Vercel** (follow Option 1)

2. **Create Subdomain in Hostinger**
   - Go to **Domains** → **DNS / Name Servers**
   - Add CNAME record:
     
     | Type  | Name  | Value                  | TTL  |
     |-------|-------|------------------------|------|
     | CNAME | app   | cname.vercel-dns.com  | 3600 |

3. **Add Domain in Vercel**
   - In Vercel: Settings → Domains
   - Add: `app.padasmustapa.com`

4. **Result**:
   - WordPress: `padasmustapa.com` (on Hostinger)
   - Next.js: `app.padasmustapa.com` (on Vercel)

---

## 🗂️ Project Structure

```
/app
├── app/
│   ├── page.js              # Home page
│   ├── about/page.js        # About page
│   ├── services/page.js     # Services page
│   ├── clients/page.js      # Clients page (with animations)
│   ├── contact/page.js      # Contact page
│   ├── layout.js            # Root layout
│   ├── globals.css          # Global styles + animations
│   └── api/[[...path]]/route.js  # API routes
├── components/
│   ├── Header.js            # Navigation header
│   └── Footer.js            # Footer component
├── public/                  # Static assets
├── .env                     # Environment variables
└── package.json             # Dependencies
```

## 🎨 Customization Guide

### Update Company Information

**Contact Details** (`components/Footer.js` and `app/contact/page.js`):
```javascript
// Update address
<p>Jakarta, Indonesia</p>
<p>Jl. Your Street No. 123</p>

// Update phone
<p>+62 21 1234 5678</p>

// Update email
<p>info@padasmustapa.co.id</p>
```

### Update Content

- **Services**: Edit `/app/app/services/page.js`
- **About**: Edit `/app/app/about/page.js`
- **Team Members**: Edit `/app/app/about/page.js` (Our Team section)
- **Clients**: Edit `/app/app/clients/page.js`
- **Testimonials**: Edit `/app/app/clients/page.js` (testimonials array)

### Add Real Images

Replace placeholder gradients with real images:

```javascript
// Before (placeholder)
<div className="h-96 bg-gradient-to-br from-red-900 to-red-700" />

// After (with image)
<img 
  src="/images/logistics.jpg" 
  alt="Logistics" 
  className="h-96 w-full object-cover"
/>
```

Place images in `/public/images/` folder.

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017/db` |
| `NEXT_PUBLIC_BASE_URL` | Your website URL | `https://padasmustapa.com` |

## 📱 Testing

### Local Testing
```bash
yarn dev
```

### Production Build Test
```bash
yarn build
yarn start
```

## 🆘 Troubleshooting

### DNS Not Propagating
- Clear browser cache
- Use [DNS Checker](https://dnschecker.org)
- Wait up to 48 hours

### Vercel Build Fails
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check build logs in Vercel dashboard

### Images Not Loading
- Ensure images are in `/public` folder
- Use correct paths (e.g., `/images/logo.png`)

## 📞 Support

For technical issues or questions:
- Email: info@padasmustapa.co.id
- Documentation: [Next.js Docs](https://nextjs.org/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

## 📄 License

© 2025 PT Padas Mustapa Jaya. All rights reserved.

---

**Built with ❤️ using Next.js**
