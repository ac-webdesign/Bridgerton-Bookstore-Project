


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.book-img');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const downImages = document.querySelectorAll('.book');

    const bookDescriptions = [
        {
            title: "The Duke and I",
            author: "Julia Quinn, 2000",
            rating: " ⭐⭐⭐⭐ 4.0",
            series: "Book 1 in the Novel Series",
            description: "In Regency London, Daphne Bridgerton, known for her honesty and wit, enters a fake courtship with the aloof Duke of Hastings to navigate society's expectations. What starts as a strategic alliance soon unravels amidst the complexities of love and societal rules.",
            price: "$ 20,99"
        },
        {
            title: "The Viscount Who Loved Me",
            author: "Julia Quinn, 2000",
            rating: " ⭐⭐⭐⭐⭐ 4.5",
            series: "Book 2 in the Novel Series",
            description: "London, 1814. Anthony Bridgerton is not only the city's most eligible bachelor but also its most notorious. A seasoned rake, he has long shunned commitment, but this year, he is intent on marrying – not for love, mind you, but to fulfill his familial obligation and produce an heir.",
            price: `$ 80,99`
        }
        ,
        {
            title: "An Offer from a Gentleman",
            author: "Julia Quinn, 2001",
            rating: " ⭐⭐⭐⭐ 3.9",
            series: "Book 3 in the Novel Series",
            description: "Though the daughter of an earl, Sophie has been relegated to the role of servant by her disdainful stepmother. But now, spinning in the strong arms of the debonair and devastatingly handsome Benedict Bridgerton, she feels like royalty. Alas, she knows all enchantments must end when the clock strikes midnight.",
            price: `$ 18,99`
        },
        {
            title: "Romancing Mister Bridgerton",
            author: "Julia Quinn, 2002",
            rating: " ⭐⭐⭐⭐⭐ 4.5",
            series: "Book 4 in the Novel Series",
            description: "Penelope Featherington has secretly adored her best friend's brother for… well, it feels like forever. After half a lifetime of watching Colin Bridgerton from afar, she thinks she knows everything about him, until she stumbles across his deepest secret… and fears she doesn't know him at all.",
            price: `$ 7,99`
        },
        {
            title: "To Sir Phillip, With Love",
            author: "Julia Quinn, 2003",
            rating: " ⭐⭐⭐⭐ 3.7",
            series: "Book 5 in the Novel Series",
            description: "Eloise Bridgerton is 28 and has turned down six proposals of marriage. She is intrigued by the letters, and the man who wrote them. So why not take him up on his offer? Her brothers and sisters are marrying and it doesn't look like she is having any more offers.",
            price: `$ 7,99`
        },
        {
            title: "When He Was Wicked",
            author: "Julia Quinn, 2004",
            rating: " ⭐⭐⭐⭐ 4.1",
            series: "Book 6 in the Novel Series",
            description: "When He Was Wicked Synopsis: Michael Stirling is in love with Francesca Bridgerton. It was instant and most unfortunately happened three days before she married his cousin and best friend John Stirling, the Earl of Kilmartin.",
            price: `$ 5,99`
        },
        {
            title: "It's In His Kiss",
            author: "Julia Quinn, 2005",
            rating: " ⭐⭐⭐⭐ 4",
            series: "Book 7 in the Novel Series",
            description: "Gareth St. Clair is in a bind. His father, who detests him, is determined to beggar the St. Clair estates and ruin his inheritance. Gareth's sole bequest is an old family diary, which may or may not contain the secrets of his past… and the key to his future.",
            price: `$ 10,99`
        },
        {
            title: "On the Way to the Wedding",
            author: "Julia Quinn, 2006",
            rating: " ⭐⭐⭐⭐ 3.9",
            series: "Book 8 in the Novel Series",
            description: "The hero of the novel is Gregory Bridgerton, the youngest male and last unmarried sibling in the Bridgerton family. After catching a glimpse of the 'breathtakingly perfect curve of her neck' at a house party, Gregory falls immediately in love with the beautiful and extremely sought-after Hermione Watson.",
            price: `$ 9,99`
        }
        // Add more book descriptions as needed
    ];

    images.forEach((image, index) => {
        image.classList.add(`book${index + 1}`);
        console.log(`Added class book${index + 1} to image ${index + 1}`);
    });

    let currentIndex = 0;

    const updateClasses = () => {
        images.forEach((img, index) => {
            img.className = `book-img book${(index - currentIndex + images.length) % images.length + 1}`;
        });
        downImages.forEach((dImg, index)=>{
            dImg.className = `book book${(index - currentIndex + images.length) % images.length + 1}-down`;
        });
    };

    downImages.forEach((dImg, index) => {
        dImg.addEventListener('click', () => {
            currentIndex = index;
            updateBookDescription(currentIndex); 
            updateClasses();
        });
    });
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateBookDescription(currentIndex); 
        updateClasses();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateBookDescription(currentIndex); 
        updateClasses();
    });

    updateClasses();


    function updateBookDescription(index) {
        const bookTitleElement = document.querySelector('.book-title');
        const authorElement = document.querySelector('.author');
        const ratingElement = document.querySelector('.rating');
        const seriesElement = document.querySelector('.series');
        const descriptionElement = document.querySelector('.description');
        const priceElement = document.querySelector('.price');
    
        // Update HTML content with data from bookDescriptions
        bookTitleElement.textContent = bookDescriptions[index].title;
        authorElement.textContent = bookDescriptions[index].author;
        ratingElement.textContent = bookDescriptions[index].rating;
        seriesElement.textContent= bookDescriptions[index].series;
        descriptionElement.textContent = bookDescriptions[index].description;
        priceElement.textContent = bookDescriptions[index].price;
    }
    
 // Call this function whenever the book changes
    // Example usage:
});