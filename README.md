# Smart Crop Advisory System for Small and Marginal Farmers

College project presentation (17 slides, 16:9, editable) with a JavaScript web overview.

## Project structure
```
Smart_Crop_Advisory_System/
├── index.html                       Web overview + slide viewer (open in any browser)
├── css/style.css                    Page styles (light and dark mode)
├── js/slides.js                     Slide content data (edit text here)
├── js/app.js                        Page logic: card grid, search, present mode
├── Smart_Crop_Advisory_System.pptx  Editable PowerPoint deck with speaker notes
├── Smart_Crop_Advisory_System.pdf   PDF version of the deck
├── PHOTO_GUIDE.md                   Photos to insert into the dashed photo frames
├── source/build.js                  Node.js (pptxgenjs) code that generates the deck
└── README.md                        This file
```

## Run the web page
Double-click `index.html`. No install or server is needed.
- **Search** box filters slides by any word.
- **Click a card** or press **Present slides** for full-screen mode.
- Keys: `←` / `→` (or Space) change slide, `Esc` closes.
- To change the text, edit the `SLIDES` array in `js/slides.js`.

## Add your photos
Right-click each dashed green frame > Change Picture, or Insert > Pictures. Use royalty-free, watermark-free photos (Unsplash, Pexels).

## Rebuild the deck from code
1. Install Node.js (v18+).
2. In the `source` folder run: `npm install pptxgenjs react react-dom react-icons sharp`
3. Run: `node build.js` (creates the .pptx and PHOTO_GUIDE.md in the same folder).
4. Optional: put `apply_theme.js` next to `build.js` to write theme colours into the file. Without it the deck still works.

## Notes
- Fill in student name, department, college, guide and academic year on slide 1.
- All modules are a proposed design. Mockups and price fields are illustrative only. No results, accuracy scores or prices are claimed.
- References are kept exactly as in the original presentation.
