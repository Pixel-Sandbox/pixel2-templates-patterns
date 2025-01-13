## 🛠️ Development
```bash
yarn install
yarn dev
```

## 🚀 Build App
```bash
yarn build
```

Build output in `/dist` directory.

## 🚀 Build navbar, sidebar, and learning center as Web component
```bash
yarn build:web-component
```

Build output in `/dist-wc` directory.

## 🎮 Demo

### Base Layout
https://jurnal-base-layout-revamp.vercel.app/report

### Web component (Navbar, Sidebar, Learning center)
#### With CDN
https://stackblitz.com/edit/poc-jurnal-web-components?file=index.html

#### Without CDN
https://stackblitz.com/edit/poc-jurnal-web-components-kw82y1?file=index.html

### Preview Pixel 2 layout in jurnal.id

Copy and paste this code to console in [jurnal.id]

```javascript
console.log('🟢 Start')

const baseUrl = 'https://cdn.jsdelivr.net/npm/poc-jurnal-web-component'
const version = '1.0.4'
const js = `${baseUrl}@${version}/web-component.umd.min.js`;
const css = `${baseUrl}@${version}/web-component.css`;
const cssReset = 'https://cdn.jsdelivr.net/npm/poc-pixel-reset@1.0.0/reset.css';

// Adding css in the head tag
link = document.createElement("link");
link.rel = "stylesheet";
link.href = css;
document.getElementsByTagName("head")[0].appendChild(link);

// Load CSS reset
document.head.insertAdjacentHTML('beforebegin', `<link typs="text/css" rel="stylesheet" href="${cssReset}">`);

// Load custom style
const customStyle = `
<style>
    p[data-pixel-component] { margin: 0; }
</style>
`;
document.head.insertAdjacentHTML('beforeend', customStyle);

// Adding the script in the script tag
script = document.createElement("script");
script.async = 1;
script.src = js;
p = document.getElementsByTagName("script")[0];
p.parentNode.insertBefore(script, p);

// Prepend Pixel Navbar
const body = document.body
body.style.overflow = 'hidden'
const pixelNavbar = document.createElement("pixel-navbar");
body.prepend(pixelNavbar)

// Prepend Pixel Sidebar
const jurnalPageWrapper = document.getElementById('page-wrapper')
jurnalPageWrapper.style.margin = 0
jurnalPageWrapper.style.display = 'flex'
const pixelSidebar = document.createElement("pixel-sidebar");
jurnalPageWrapper.prepend(pixelSidebar)

// Apply Main content style
const mainContent = document.getElementById('main-content')
mainContent.style.width = '100%'
mainContent.style.height = 'calc(100vh - var(--jurnal-navbar-height))'
mainContent.style.overflowY = 'auto'

// Apply quickbook main content style.
const quickbookMainContent = document.getElementsByClassName('pgid-expenses-index')[0] || document.getElementsByClassName('pgid-registers-index')[0]
if (quickbookMainContent) {
  quickbookMainContent.style.borderTopWidth = '1px'
  quickbookMainContent.style.borderLeftWidth = '1px'
  quickbookMainContent.style.borderTopLeftRadius = '6px'
  quickbookMainContent.style.marginTop = '8px'
  quickbookMainContent.style.marginTop = '16px'
  mainContent.style.height = 'calc(100vh - var(--jurnal-navbar-height) - 16px)'
}

// Prepend Pixel Learning Center
const pixelLearningCenter = document.createElement("pixel-learning-center");
body.appendChild(pixelLearningCenter)

// Cleanup existing jurnal element
const existingNavbar = document.getElementsByClassName('mk-navbar')[0]
const existingSidebar = document.getElementById('sidebar-wrapper')
const existingFooter = document.getElementById('site-footer')
existingNavbar.remove()
existingSidebar.remove()
existingFooter.remove()
const iframes = document.getElementsByTagName('iframe')
console.log('iframe =>', iframes)

for (i in iframes) {
  console.log('iframe =>', iframes[i]);
  iframes[i].style.display = 'none'
}

console.log('🔴 Finish')
```
