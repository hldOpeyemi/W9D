let tweets = [
{
    tweet: "Next I'm buying Coca-Cola to put the cocaine back",
    username: "@elonmusk",
    created_at:"04-22-2022",
    age: 50
}
,

{
    tweet: "It's a new day in America",
    username: "@JoeBiden",
    created_at:"01-20-2021",
    age: 89,
},

{
    tweet: "I hope that even my worst critics remain on Twitter, because that is what free speech means",
    username: "@elonmusk",
    created_at:"04-25-2022",
    age: 18,
},

{
    tweet: "Hey guys, wanna feel old? I'm 40. You're welcome.",
    username: "@IncredibleCulk",
    created_at:"26-08-2020",
    age: 40,
},

{
    tweet: "Congratulations to the Astronauts that left Earth today. Good choice",
    username: "@andymilonakis",
    created_at:"30-05-2020",
    age: 47,
},

{
    tweet: "We did it, @JoeBiden",
    username: "@KamalaHarris",
    created_at:"11-07-2020",
    age: 16,
},

{
    tweet: "this is what happens when you don’t recycle your pizza boxes",
    username: "@GretaThunberg",
    created_at:"11-07-2020",
    age: 17,
},

{
    tweet: "hello literally everyone",
    username: "@X",
    created_at:"10-04-2021",
    age: 36,
},

{
    tweet: "No one is born hating another person because of the color of his skin or his background or his religion",
    username: "@BarackObama",
    created_at:"12-08-2017",
    age: 15,
},

{
    tweet: "I have been texting Islas mom for 3 years. When is a good time to ask her her name",
    username: "@IHideFromMyKids",
    created_at:"09-18-2023",
    age: 45,
},

]

let counter = 0;
    while(counter < tweets.length)
    { 
        let tweet = tweets[counter]

        if(tweet['age'] >= 18 ) {
            console.log(tweet['tweet'], tweet['username'], tweet['created_at'])
        }
        counter = counter + 1;
    }