let librairie = []

function add(book) {
  librairie.push(book)
}

function getAvailableBooks()     {
    for (let i=0; i<librairie.length; i++) {
        const book = librairie[i]
        if (book.borrowed === false) {
            console.log(book)
        }
    }
}
librairie.forEach(book => {
    if (book.borrowed === false) {
        console.log(book)
    }
})

function searchByTitle(title)
{
for (let i=0; i<librairie.length; i++) {
    const book = librairie [i]
        if (book.title.toLowerCase().trim() == title.toLowerCase().trim()){
            return book;
        }
    }
}

function borrowedBook(title) {
  const book = searchByTitle(title);
  if (book && book.borrowed === false) {
      book.borrowed = true;
      console.log(`${book.title} peut être emprunté, tu disposes de 14 jours pour le rendre`);
  } else if (book) {
      console.log(`${book.title} est déjà emprunté`);
  } else {
      console.log(`Ce livre n'existe pas`)
  }
  }

function returnbooks(title) {
  const book = searchByTitle(title)
  if (book && book.borrowed === true) {
      book.borrowed = false;
    console.log(`Votre retour est pris en compte pour ${book.title}`);
  }else if (book) {
    console.log(`${book.title} ne peut pas être rendu car il n'a pas été emprunté`);
  }else {
    console.log(`Nous ne possédons pas ce livre`)
  }
}



add({
    title: 'Le Hobbit',
    author: 'JRR Tolkien',
    publicationYear: 1937,
    borrowed: false
    })
add({
    title: 'Neuromancier',
    author: 'William Gibson',
    publicationYear: 1984,
    borrowed: true
    })
add({
    title: 'Les furtifs',
    author: 'William Gibson',
    publicationYear: 1984,
    borrowed: false
    })
  console.log("add")

console.log ('Nos livres disponibles sont :')
getAvailableBooks()

console.log('Le livre que vous recherchez est ')

console.log(searchByTitle('Le hobbit'))

console.table(librairie);

borrowedBook("Neuromancier")
returnbooks ("KIY")

console.table(librairie);

