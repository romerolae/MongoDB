function countAllStars(galaxies){
    let totalStars = galaxies.reduce(function(acc, stars){
        return acc + stars;
    })
    return totalStars;
}

const galaxies = [ 10, 3, 2, 1, 6, 1, 9, 2];

let result = countAllStars(galaxies)


document.querySelector('#count').textContent = result
