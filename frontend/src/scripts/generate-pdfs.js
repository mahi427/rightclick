const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

// Chapter data for Class 9th
const chapters = [
  { num: 1, name: 'Number Systems', slug: 'number-systems', pages: 15 },
  { num: 2, name: 'Polynomials', slug: 'polynomials', pages: 18 },
  { num: 3, name: 'Coordinate Geometry', slug: 'coordinate-geometry', pages: 20 },
  { num: 4, name: 'Linear Equation in Two Variables', slug: 'linear-equations', pages: 16 },
  { num: 5, name: "Introduction to Euclid's Geometry", slug: 'euclids-geometry', pages: 14 },
  { num: 6, name: 'Lines and Angles', slug: 'lines-and-angles', pages: 17 },
  { num: 7, name: 'Triangles', slug: 'triangles', pages: 22 },
  { num: 8, name: 'Quadrilaterals', slug: 'quadrilaterals', pages: 19 },
  { num: 9, name: 'Circle', slug: 'circle', pages: 18 },
  { num: 10, name: "Heron's Formula", slug: 'herons-formula', pages: 13 },
  { num: 11, name: 'Surface Areas and Volumes', slug: 'surface-area-volume', pages: 24 },
  { num: 12, name: 'Statistics', slug: 'statistics', pages: 16 }
];

async function createPDF(chapter) {
  console.log(`  Creating PDF for Chapter ${chapter.num}...`);
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  for (let i = 1; i <= chapter.pages; i++) {
    const page = pdfDoc.addPage([612, 792]); // US Letter size
    const { width, height } = page.getSize();

    // Header
    page.drawText('RIGHT CLICK INSTITUTE', {
      x: 50,
      y: height - 50,
      size: 24,
      font: timesRomanBold,
      color: rgb(0.2, 0.4, 0.8),
    });

    page.drawText('Jalandhar • Since 2007', {
      x: 50,
      y: height - 80,
      size: 12,
      font: timesRomanFont,
      color: rgb(0.4, 0.4, 0.4),
    });

    // Chapter Title
    page.drawText(`Class 9th - Chapter ${chapter.num}`, {
      x: 50,
      y: height - 120,
      size: 16,
      font: timesRomanBold,
      color: rgb(0.8, 0.2, 0.2),
    });

    page.drawText(chapter.name, {
      x: 50,
      y: height - 150,
      size: 20,
      font: timesRomanBold,
      color: rgb(0, 0, 0),
    });

    // Content
    page.drawText(`Practice Notes - Page ${i} of ${chapter.pages}`, {
      x: 50,
      y: height - 200,
      size: 14,
      font: timesRomanFont,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Sample content (you can replace this with your actual content)
    const content = [
      'Key Concepts:',
      '• Important definitions and theorems',
      '• Solved examples with step-by-step solutions',
      '• Practice problems with answers',
      '• Exam tips and tricks',
      '',
      `This is a sample PDF for ${chapter.name}.`,
      'Replace with your actual notes content.',
      '',
      'www.rightclickinstitute.com'
    ];

    let y = height - 240;
    content.forEach(line => {
      page.drawText(line, {
        x: 50,
        y: y,
        size: 12,
        font: timesRomanFont,
        color: rgb(0.1, 0.1, 0.1),
      });
      y -= 20;
    });

    // Page number
    page.drawText(`Page ${i}`, {
      x: width - 100,
      y: 30,
      size: 10,
      font: timesRomanFont,
      color: rgb(0.5, 0.5, 0.5),
    });
  }

  return await pdfDoc.save();
}

async function generateAllPDFs() {
  console.log('📁 Starting PDF generation for Class 9th...\n');

  // Go up one level from backend to project root, then to public
  const baseDir = path.join(__dirname, '../../public/pdfs/9th');
  console.log(`📁 Target directory: ${baseDir}`);

  // Create base directory if it doesn't exist
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    console.log(`✅ Created directory: ${baseDir}`);
  }

  let successCount = 0;
  let errorCount = 0;

  for (const chapter of chapters) {
    const chapterDir = path.join(baseDir, `chapter-${chapter.num}-${chapter.slug}`);
    
    try {
      // Create chapter directory
      if (!fs.existsSync(chapterDir)) {
        fs.mkdirSync(chapterDir, { recursive: true });
      }

      console.log(`\n📄 Generating PDF for Chapter ${chapter.num}: ${chapter.name}`);

      // Generate PDF
      const pdfBytes = await createPDF(chapter);
      const pdfPath = path.join(chapterDir, 'notes.pdf');
      fs.writeFileSync(pdfPath, pdfBytes);
      
      console.log(`  ✅ notes.pdf created (${chapter.pages} pages)`);
      console.log(`  📍 Location: ${pdfPath}`);
      successCount++;
    } catch (error) {
      console.error(`  ❌ Error creating PDF for Chapter ${chapter.num}:`, error.message);
      errorCount++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('✨ PDF Generation Complete!');
  console.log('='.repeat(50));
  console.log(`✅ Successfully generated: ${successCount} PDFs`);
  if (errorCount > 0) {
    console.log(`❌ Failed: ${errorCount} PDFs`);
  }
  console.log(`📁 All PDFs saved in: ${baseDir}`);
  console.log('='.repeat(50));
}

// Run the generator
console.log('🚀 Starting PDF Generator...\n');
generateAllPDFs().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});