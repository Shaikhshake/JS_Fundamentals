// Static methods belong to the class as a whole,
// not to each specific object/instance of that class
// The value of "this" in a static method is the 
// nameOfTheClass(i.e an instance of the class itself)

class Article{
    constructor(name, date){
        this.name = name
        this.date = date
    }
    static articleCompare(articleA, articleB){
        return articleA.date-articleB.date
    }

}

let Articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 2, 3)),
    new Article("JS", new Date(2018, 1, 1))
]

console.log("Articles before sorting: ", Articles)
console.log("Articles after sorting: ", Articles.sort(Article.articleCompare))


// also lets use create a factory method for a class
// say you wanted to create an instance of a class 
// based on either, title and date,  or empty article with todays date,
// or so on

class ExtendedArticle extends Article{
    static createToday(){
        // remember that in static, this = Article
        return new this("something spicy", new Date())
    }
}

let todaysArticle = ExtendedArticle.createToday()
console.log("Name :", todaysArticle.name, ", date: ", todaysArticle.date)

// note that static methods aren't available for single objects
// so article.createToday(); will be an Error

//Static properties are similar to static methods, 
// available for a class as a whole, example below

class Paper{
    static publisher = "penguin.india"
}

console.log("Publisher to demonstrate static fields:" , Paper.publisher)