# Brady Hawkins Dev - Svelte Rewrite

This is a complete rewrite of the original Angular project in SvelteKit.

## Features

- **SvelteKit** - Modern, fast framework with file-based routing
- **Theme Toggle** - Dark/light mode with persistent storage
- **WebGL Water Animation** - Interactive 3D water effect with day/night cycle
- **Blog Integration** - Fetches posts from BlueSky/AT Protocol
- **Responsive Design** - Works on all screen sizes
- **Contact Form** - Integrated with Formspree
- **Projects Showcase** - Dynamic project listing

## Project Structure

```
bradyhawkins.dev/
├── src/
│   ├── routes/           # File-based routing
│   │   ├── +page.svelte        # Home page
│   │   ├── +layout.svelte      # Root layout (header, footer, water)
│   │   ├── blog/
│   │   │   ├── +page.svelte      # Blog listing
│   │   │   └── [id]/+page.svelte  # Blog post detail
│   │   ├── contact/+page.svelte
│   │   └── projects/+page.svelte
│   ├── lib/
│   │   ├── components/     # Reusable components
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   └── Water.svelte
│   │   └── stores/        # State management
│   │       ├── theme.js
│   │       └── projects.js
│   └── app.html          # HTML template
├── static/                # Static assets
├── svelte.config.js
├── vite.config.js
└── package.json
```

## Getting Started

1. **Install dependencies:**
   ```bash
   cd bradyhawkins.dev
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Differences from Angular Version

| Feature | Angular | SvelteKit |
|---------|--------|----------|
| Framework | Angular 17+ | SvelteKit 1.x + Svelte 4 |
| State Management | Services + RxJS | Svelte stores |
| Routing | app.routes.ts | File-based routing |
| Theme | ThemeService | theme.js store |
| Blog | BlogService | Fetch in page components |
| Build System | Angular CLI | Vite |

## Key Components Converted

- ✅ Header with theme toggle
- ✅ Footer with social links
- ✅ Water/WebGL animation (converted lifecycle hooks)
- ✅ Home page
- ✅ Blog listing page
- ✅ Blog post detail page
- ✅ Contact page with Formspree
- ✅ Projects page
- ✅ Theme store (replaces Angular service)
- ✅ Project data store

## Technologies Used

- **Svelte 4** - UI framework
- **SvelteKit 1.x** - Full-stack framework with routing
- **Vite** - Build tool
- **WebGL** - 3D water animation
- **Font Awesome 6** - Icons
- **Formspree** - Contact form handling

## Notes

- The blog fetches posts from the AT Protocol (BlueSky)
- Theme preference is saved in localStorage
- The WebGL water animation supports click interactions (ripples)
- All routes from the Angular app are preserved

## License

Same as original project.
