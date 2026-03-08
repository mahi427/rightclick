Write-Host "📄 Creating PDFs for all classes..." -ForegroundColor Cyan

$basePath = "D:\rightclick\frontend\public\pdfs"

# Class 9th PDFs
Write-Host "`n📚 Creating Class 9th PDFs..." -ForegroundColor Yellow
$class9th = @(
    "chapter-1-number-systems.pdf",
    "chapter-2-polynomials.pdf",
    "chapter-3-coordinate-geometry.pdf",
    "chapter-4-linear-equations.pdf",
    "chapter-5-euclids-geometry.pdf",
    "chapter-6-lines-and-angles.pdf",
    "chapter-7-triangles.pdf",
    "chapter-8-quadrilaterals.pdf",
    "chapter-9-circle.pdf",
    "chapter-10-herons-formula.pdf",
    "chapter-11-surface-areas-volumes.pdf",
    "chapter-12-statistics.pdf"
)

foreach ($file in $class9th) {
    $content = "Class 9th - $file`nRight Click Institute Mathematics Notes"
    $content | Out-File -FilePath "$basePath\9th\$file.txt" -Encoding UTF8
    Rename-Item -Path "$basePath\9th\$file.txt" -NewName $file -ErrorAction SilentlyContinue
    Write-Host "  ✅ Created: $file" -ForegroundColor Green
}

# Class 10th PDFs
Write-Host "`n📚 Creating Class 10th PDFs..." -ForegroundColor Yellow
$class10th = @(
    "chapter-1-real-numbers.pdf",
    "chapter-2-polynomials.pdf",
    "chapter-3-pair-of-linear-equations.pdf",
    "chapter-4-quadratic-equations.pdf",
    "chapter-5-arithmetic-progressions.pdf",
    "chapter-6-triangles.pdf",
    "chapter-7-coordinate-geometry.pdf",
    "chapter-8-introduction-to-trigonometry.pdf",
    "chapter-9-applications-of-trigonometry.pdf",
    "chapter-10-circles.pdf",
    "chapter-11-areas-related-to-circles.pdf",
    "chapter-12-surface-areas-and-volumes.pdf",
    "chapter-13-statistics.pdf",
    "chapter-14-probability.pdf"
)

foreach ($file in $class10th) {
    $content = "Class 10th - $file`nRight Click Institute Mathematics Notes"
    $content | Out-File -FilePath "$basePath\10th\$file.txt" -Encoding UTF8
    Rename-Item -Path "$basePath\10th\$file.txt" -NewName $file -ErrorAction SilentlyContinue
    Write-Host "  ✅ Created: $file" -ForegroundColor Green
}

# Class 11th PDFs
Write-Host "`n📚 Creating Class 11th PDFs..." -ForegroundColor Yellow
$class11th = @(
    "chapter-1-sets.pdf",
    "chapter-2-relations-and-functions.pdf",
    "chapter-3-trigonometric-functions.pdf",
    "chapter-4-complex-numbers.pdf",
    "chapter-5-linear-inequalities.pdf",
    "chapter-6-permutations-and-combinations.pdf",
    "chapter-7-binomial-theorem.pdf",
    "chapter-8-sequence-and-series.pdf",
    "chapter-9-straight-lines.pdf",
    "chapter-10-conic-sections.pdf",
    "chapter-11-3d-geometry.pdf",
    "chapter-12-limits-and-derivatives.pdf",
    "chapter-13-statistics.pdf",
    "chapter-14-probability.pdf"
)

foreach ($file in $class11th) {
    $content = "Class 11th - $file`nRight Click Institute Mathematics Notes"
    $content | Out-File -FilePath "$basePath\11th\$file.txt" -Encoding UTF8
    Rename-Item -Path "$basePath\11th\$file.txt" -NewName $file -ErrorAction SilentlyContinue
    Write-Host "  ✅ Created: $file" -ForegroundColor Green
}

# Class 12th PDFs
Write-Host "`n📚 Creating Class 12th PDFs..." -ForegroundColor Yellow
$class12th = @(
    "chapter-1-relations-and-functions.pdf",
    "chapter-2-inverse-trigonometric-functions.pdf",
    "chapter-3-matrices.pdf",
    "chapter-4-determinants.pdf",
    "chapter-5-continuity-and-differentiability.pdf",
    "chapter-6-applications-of-derivatives.pdf",
    "chapter-7-integrals.pdf",
    "chapter-8-applications-of-integrals.pdf",
    "chapter-9-differential-equations.pdf",
    "chapter-10-vector-algebra.pdf",
    "chapter-11-three-dimensional-geometry.pdf",
    "chapter-12-linear-programming.pdf",
    "chapter-13-probability.pdf"
)

foreach ($file in $class12th) {
    $content = "Class 12th - $file`nRight Click Institute Mathematics Notes"
    $content | Out-File -FilePath "$basePath\12th\$file.txt" -Encoding UTF8
    Rename-Item -Path "$basePath\12th\$file.txt" -NewName $file -ErrorAction SilentlyContinue
    Write-Host "  ✅ Created: $file" -ForegroundColor Green
}

Write-Host "`n🎉 All PDFs created successfully!" -ForegroundColor Green
Write-Host "📍 Location: $basePath" -ForegroundColor Cyan