// Chapter data matching YOUR ACTUAL FILE NAMES
export const chapterData = {
  '9th': [
    { number: 1, name: 'Number Systems', fileName: 'chapter-1-number-systems.pdf' },
    { number: 2, name: 'Polynomials', fileName: 'chapter-2-polynomials.pdf' },
    { number: 3, name: 'Coordinate Geometry', fileName: 'chapter-3-coordinate-geometry.pdf' },
    { number: 4, name: 'Linear Equation in Two Variables', fileName: 'chapter-4-linear-equations.pdf' },
    { number: 5, name: 'Introduction to Euclids Geometry', fileName: 'chapter-5-euclids-geometry.pdf' },
    { number: 6, name: 'Lines and Angles', fileName: 'chapter-6-lines-and-angles.pdf' },
    { number: 7, name: 'Triangles', fileName: 'chapter-7-triangles.pdf' },
    { number: 8, name: 'Quadrilaterals', fileName: 'chapter-8-quadrilaterals.pdf' },
    { number: 9, name: 'Circle', fileName: 'chapter-9-circle.pdf' },
    { number: 10, name: "Heron's Formula", fileName: 'chapter-10-herons-formula.pdf' },
    { number: 11, name: 'Surface Areas and Volumes', fileName: 'chapter-11-surface-area-volume.pdf' }, // FIXED: matches your file
    { number: 12, name: 'Statistics', fileName: 'chapter-12-stats.pdf' } // FIXED: matches your file
  ],
  
  '10th': [
    { number: 1, name: 'Real Numbers', fileName: 'Chapter - 1 Real_Numbers.pdf' },
    { number: 2, name: 'Polynomials', fileName: 'Chapter - 2 Polynomials.pdf' },
    { number: 3, name: 'Pair of Linear Equations', fileName: 'Chapter - 3 Pair_of_Linear_Equations_in_2_Variables.pdf' },
    { number: 4, name: 'Quadratic Equations', fileName: 'Chapter - 4 Quadratic_Equations.pdf' },
    { number: 5, name: 'Arithmetic Progressions', fileName: 'Chapter - 5 Arithmetic_Progression.pdf' },
    { number: 6, name: 'Triangles', fileName: 'Chapter - 6 Triangles.pdf' },
    { number: 7, name: 'Coordinate Geometry', fileName: 'Chapter - 7 Coordinate_Geometry.pdf' },
    { number: 8, name: 'Introduction to Trigonometry', fileName: 'Chapter - 8 Introduction_to_Trigonometry.pdf' },
    { number: 9, name: 'Applications of Trigonometry', fileName: 'Chapter - 9 Some_Applications_of_Trigonometry.pdf' },
    { number: 10, name: 'Circles', fileName: 'Chapter - 10 Circles.pdf' },
    { number: 11, name: 'Constructions', fileName: 'Chapter - 11 Constructions.pdf' },
    { number: 12, name: 'Areas Related to Circles', fileName: 'Chapter - 12 Areas_Related_to_Circles.pdf' },
    { number: 13, name: 'Statistics', fileName: 'Chapter - 13 Statistics.pdf' },
    { number: 14, name: 'Probability', fileName: 'Chapter - 14 Probability.pdf' }
  ],
  
  '11th': [
    { number: 1, name: 'Sets', fileName: 'Chapter 1 Sets.pdf' },
    { number: 2, name: 'Relations and Functions', fileName: 'Chapter 2 Relations and Functions.pdf' },
    { number: 3, name: 'Trigonometric Functions', fileName: 'Chapter 3 Trigonometric Functions.pdf' },
    { number: 4, name: 'Complex Numbers', fileName: 'Chapter 4 Complex Numbers and Quadratic Equations.pdf' },
    { number: 5, name: 'Linear Inequalities', fileName: 'Chapter 5 Linear Inequalities.pdf' },
    { number: 6, name: 'Permutations and Combinations', fileName: 'Chapter 6 Permutations and Combinations.pdf' },
    { number: 7, name: 'Binomial Theorem', fileName: 'Chapter 7 Binomial Theorem.pdf' },
    { number: 8, name: 'Sequences and Series', fileName: 'Chapter 8 Sequences and Series.pdf' },
    { number: 9, name: 'Straight Lines', fileName: 'Chapter 9 Straight lines.pdf' },
    { number: 10, name: 'Conic Sections', fileName: 'Chapter 10 Conic Sections.pdf' },
    { number: 11, name: '3D Geometry', fileName: 'Chapter 11 Introduction to Three Dimensional Geometry.pdf' },
    { number: 12, name: 'Limits and Derivatives', fileName: 'Chapter 12 Limits and Derivatives.pdf' },
    { number: 13, name: 'Statistics', fileName: 'Chapter 13 Statistics.pdf' },
    { number: 14, name: 'Probability', fileName: 'Chapter 14 Probability.pdf' }
  ],
  
  '12th': [
    { number: 1, name: 'Relations and Functions', fileName: '1. Relations and Function.pdf' },
    { number: 2, name: 'Inverse Trigonometric Functions', fileName: '2. Inverse Trigonometric Functions.pdf' },
    { number: 3, name: 'Matrices', fileName: '3. Matrices.pdf' },
    { number: 4, name: 'Determinants', fileName: '4. Determinants.pdf' },
    { number: 5, name: 'Continuity and Differentiability', fileName: '5. Continuity And Differentiability.pdf' },
    { number: 6, name: 'Applications of Derivatives', fileName: '6. Application Of Derivatives.pdf' },
    { number: 7, name: 'Integrals', fileName: '7. Integrals.pdf' },
    { number: 8, name: 'Applications of Integrals', fileName: '8. Application of Integrals.pdf' },
    { number: 9, name: 'Differential Equations', fileName: '9. Differential Equations.pdf' },
    { number: 10, name: 'Vector Algebra', fileName: '10. Vector Algebra.pdf' },
    { number: 11, name: '3D Geometry', fileName: '11. Three Dimensional Geometry.pdf' },
    { number: 12, name: 'Linear Programming', fileName: '12. Linear Programming.pdf' },
    { number: 13, name: 'Probability', fileName: '13. Probability.pdf' }
  ]
};

export const getChaptersForClass = (className) => {
  return chapterData[className] || chapterData['9th'];
};