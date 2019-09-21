// You are a biologist working on the amino acid composition of proteins. Every protein consists of a long chain of 20 different amino acids with different properties. Currently, you are collecting data on the percentage, various amino acids make up a protein you are working on. As manually counting the occurances of amino acids takes too long (especially when counting more than one amino acid), you decide to write a program for this task:

// Write a function that takes two arguments,

// A (snippet of a) protein sequence
// A list of amino acid residue codes
// and returns the rounded percentage of the protein that the given amino acids make up. If no amino acid list is given, return the percentage of hydrophobic amino acid residues ["A", "I", "L", "M", "F", "W", "Y", "V"].

const aaPercentage = (protein, amino = ["A", "I", "L", "M", "F", "W", "Y", "V"]) => {
    return Math.round(amino.reduce( (r, e) => r += 100 * (protein.split('').filter( el => el === e).length)/protein.length, 0))
}

// best answer

const aaPercentage=(a,x=["A","I","L","M","F","W","Y","V"])=>
  [...a].filter(e=>x.includes(e)).length/a.length*100+.5|0