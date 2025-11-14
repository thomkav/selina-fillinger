# City of Asylum PDX

An artist-led, Oregon-based nonprofit that offers support and sanctuary to writers living in exile due to the political nature of their work.

## Technology Stack

- **Static Site Generator**: Eleventy (11ty)
- **CSS Framework**: Tailwind CSS v4
- **Templating**: Nunjucks
- **Deployment**: Netlify
- **JavaScript**: Alpine.js (for interactivity)

## Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

This will:
- Build Tailwind CSS
- Start Eleventy dev server with live reload
- Watch for changes in CSS and templates

### Build for Production

```bash
npm run build
```

### Clean Build Directory

```bash
npm run clean
```

## Project Structure

```
coapdx3/
├── src/
│   ├── _data/          # Data files (content.json, site.json)
│   ├── _includes/      # Layout templates
│   ├── assets/         # Static assets (images, etc.)
│   ├── css/            # Tailwind CSS source
│   └── index.njk       # Main page template
├── _site/              # Built site (generated)
├── .eleventy.js        # Eleventy configuration
├── netlify.toml        # Netlify deployment config
├── package.json        # Dependencies and scripts
└── postcss.config.js   # PostCSS configuration
```

## Customization

### Colors

Colors are defined in `src/css/tailwind.css` using Tailwind v4's `@theme` directive:

- `forest-dark`: #1a3a2e
- `forest`: #2d5f4c
- `forest-light`: #4a8b6f
- `sage`: #8fb399
- `cream`: #f5f3ed
- `earth`: #8b7355

### Content

All content is managed through JSON files in `src/_data/`:

- `site.json`: Site metadata
- `content.json`: Page content (navigation, sections, team info, etc.)

## Deployment

The site is configured for Netlify deployment:

1. Push to your git repository
2. Connect repository to Netlify
3. Netlify will automatically build using `npm run build`
4. Site will be published from the `_site` directory

## License

MIT
