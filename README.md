# GUHANIA RESTAURANTGROUP LLC Website

A professional, modern full-stack website built with Next.js for GUHANIA RESTAURANTGROUP LLC - a company that manages restaurant groups and develops cutting-edge software solutions for the restaurant industry.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and interactions
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Interactive Components**: 
  - Smooth scrolling navigation
  - Contact form with validation
  - Animated hero section
  - Product showcase cards
  - Career listings with detailed job descriptions

## 📋 Sections

1. **Home/Hero**: Compelling introduction with company overview and call-to-action
2. **About Us**: Detailed explanation of the company's dual focus on restaurant management and software development
3. **Our Products**: Comprehensive showcase of software solutions including:
   - SmartPOS Pro (Point-of-Sale system)
   - InventoryMax (Inventory management)
   - RushMyFood (Delivery platform)
   - DataDish Analytics (Data analytics dashboard)
   - AI Marketing Suite (AI-driven marketing automation)
   - RestaurantOS (All-in-one restaurant operating system)
4. **Careers**: Job listings focusing on STEM graduates, especially Data Analytics and Software Engineering
5. **Contact Us**: Functional contact form and company contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

## 🏗️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd guhania-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
guhania-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Products.tsx
│       ├── Careers.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
├── package.json
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**:
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Deploy with one click

2. **Manual Deployment**:
   ```bash
   npm run build
   npm start
   ```

### Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder**:
   - Configure Next.js for static export (if needed)
   - Upload the build output to Netlify

### Other Hosting Platforms

The website is compatible with any hosting platform that supports Node.js applications or static sites.

## 🎨 Customization

### Colors
The website uses a blue-based color scheme. To customize colors, update the Tailwind CSS classes throughout the components:
- Primary: `blue-600`, `blue-700`
- Secondary: `indigo-600`, `indigo-700`
- Accent: `gray-50`, `gray-100`

### Content
Update the content in each component file:
- Company information in `Hero.tsx`
- Product details in `Products.tsx`
- Job listings in `Careers.tsx`
- Contact information in `Contact.tsx` and `Footer.tsx`

### Styling
Modify the Tailwind classes in component files or add custom CSS to `globals.css`.

## 📞 Contact Form Integration

The contact form is currently set up with frontend validation. To make it functional:

1. **Add a backend API endpoint** (e.g., `/api/contact`)
2. **Update the form submission** in `Contact.tsx`
3. **Integrate with email services** (SendGrid, Mailgun, etc.)

Example API integration:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setIsSubmitted(true);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
```

## 🔧 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 📄 License

© 2024 GUHANIA RESTAURANTGROUP LLC. All rights reserved.

## 🤝 Support

For questions or support regarding the website, please contact:
- Email: info@guhaniarestaurantgroup.com
- Phone: +1 (617) 555-0123

---

Built with ❤️ using Next.js and Tailwind CSS
