const fs = require('fs');
const path = './src/pages/Homepage.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Imports
content = content.replace(
  import { Link, useNavigate } from 'react-router-dom';,
  import { Link, useNavigate } from 'react-router-dom';\nimport { motion } from 'framer-motion';\n\nconst MotionLink = motion(Link);
);

// 2. Hero Section
content = content.replace(
  <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#102A43] to-[#1A3636]">,
  <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#102A43] to-[#1A3636]">
);
content = content.replace(
  </section>\n{/* Main Content Canvas */},
  </motion.section>\n{/* Main Content Canvas */}
);

// 3. Buttons in Hero
content = content.replace(
  <Link to="/shopbrowsebooks" className="bg-golden text-[#102A43] font-label-md text-label-md px-8 py-4 rounded-lg font-bold hover:bg-[#b08832] transition-colors duration-400 shadow-lg shadow-black/20 flex items-center gap-2">,
  <MotionLink whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} to="/shopbrowsebooks" className="bg-golden text-[#102A43] font-label-md text-label-md px-8 py-4 rounded-lg font-bold hover:bg-[#b08832] transition-colors duration-400 shadow-lg shadow-black/20 flex items-center gap-2">
);
content = content.replace(
  </Link>\n<Link to="/categoriesexploration" className="border border-outline text-on-primary font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-white/5 transition-colors duration-400 flex items-center gap-2">,
  </MotionLink>\n<MotionLink whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} to="/categoriesexploration" className="border border-outline text-on-primary font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-white/5 transition-colors duration-400 flex items-center gap-2">
);
content = content.replace(
  Explore Categories\n                    </Link>,
  Explore Categories\n                    </MotionLink>
);

// 4. Curated Shelves Cards
content = content.replace(
  <Link className="group block relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 bg-surface border border-surface-variant hover:-translate-y-1" to="/catalogarchive">,
  <MotionLink initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className="group block relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 bg-surface border border-surface-variant hover:-translate-y-1" to="/catalogarchive">
);
content = content.replace(
  </Link>\n{/* Novels */},
  </MotionLink>\n{/* Novels */}
);

content = content.replace(
  <Link className="group block relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 bg-surface border border-surface-variant hover:-translate-y-1" to="/catalogarchive">,
  <MotionLink initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }} className="group block relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 bg-surface border border-surface-variant hover:-translate-y-1" to="/catalogarchive">
);
content = content.replace(
  </Link>\n{/* Children */},
  </MotionLink>\n{/* Children */}
);

content = content.replace(
  <Link className="group block relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 bg-surface border border-surface-variant hover:-translate-y-1" to="/catalogarchive">,
  <MotionLink initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.3 }} className="group block relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 bg-surface border border-surface-variant hover:-translate-y-1" to="/catalogarchive">
);
content = content.replace(
  </Link>\n</div>\n</section>,
  </MotionLink>\n</div>\n</section>
);

// 5. Staff Picks Cards
content = content.replace(
  {/* Book Card 1 */}\n<div className="flex-shrink-0 w-56 snap-center group book-card">,
  {/* Book Card 1 */}\n<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className="flex-shrink-0 w-56 snap-center group book-card">
);
content = content.replace(
  {/* Book Card 2 */}\n<div className="flex-shrink-0 w-56 snap-center group book-card">,
  </motion.div>\n{/* Book Card 2 */}\n<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }} className="flex-shrink-0 w-56 snap-center group book-card">
);
content = content.replace(
  {/* Book Card 3 */}\n<div className="flex-shrink-0 w-56 snap-center group book-card">,
  </motion.div>\n{/* Book Card 3 */}\n<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.3 }} className="flex-shrink-0 w-56 snap-center group book-card">
);

content = content.replace(
  Add to Cart</button>\n</div>\n</div>\n</div>\n{/* Ambient Shadow for Shelf */},
  Add to Cart</motion.button>\n</div>\n</div>\n</motion.div>\n{/* Ambient Shadow for Shelf */}
);

// 6. Fix the other closing divs for book cards and buttons
content = content.replaceAll(
  <button className="bg-primary-container,
  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary-container
);
content = content.replaceAll(
  Add to Cart</button>,
  Add to Cart</motion.button>
);

// Carousel buttons
content = content.replace(
  <button className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>,
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">chevron_left</span></motion.button>
);
content = content.replace(
  <button className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>,
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">chevron_right</span></motion.button>
);

fs.writeFileSync(path, content);
console.log('Framer Motion modifications applied to Homepage.jsx');
