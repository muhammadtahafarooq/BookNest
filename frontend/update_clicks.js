const fs = require('fs');

const files = [
  './src/pages/Homepage.jsx',
  './src/pages/ShopBrowseBooks.jsx',
  './src/pages/CatalogArchive.jsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replaceAll(
      onClick={() => navigate('/shoppingcartyourbookcollection')},
      onClick={() => { window.dispatchEvent(new CustomEvent('cart-updated')); }}
    );
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  }
});
