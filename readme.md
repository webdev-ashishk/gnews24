# news api uses

### top headline news in US

https://newsapi.org/v2/top-headlines?country=us&apiKey=2f7fbc902de14f53a875f1f00621b9f7

> # Above api show total 38 items , but initial page showin only 20 items and remaining items are present in second page how to add second page in url

#### we can add "&page=2 in end of the api URL

- https://newsapi.org/v2/top-headlines?country=us&apiKey=2f7fbc902de14f53a875f1f00621b9f7&page=1

- https://newsapi.org/v2/top-headlines?country=us&apiKey=2f7fbc902de14f53a875f1f00621b9f7&page=2

# We can pass multiple request parameter in URL

## List of request parameter send in URL

> 1. language
> 2. catergory
> 3. country

> https://newsapi.org/v2/top-headlines/sources?language=ar&apiKey=2f7fbc902de14f53a875f1f00621b9f7

> https://newsapi.org/v2/top-headlines/sources?catergory=sports&apiKey=2f7fbc902de14f53a875f1f00621b9f7

> https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=2f7fbc902de14f53a875f1f00621b9f7

# BUILD A SEARCH FUNCTIONALITY WITH THIS END POINT

> https://newsapi.org/v2/everything/?q=jobs&apiKey=2f7fbc902de14f53a875f1f00621b9f7

# Task

> 1. add summer ui@ Body
> 2. Using context api for search functionality;
>    https://www.freecodecamp.org/news/context-api-in-react/

## solution of search box

> 1. place input box inside your body.jsx
> 2. fetched all data inside the body.jsx

## 9 july fixes List of issues

> 1. fixing the height of image in NewsCard.
> 2. Cutting the overflow text of title .
> 3. converting the "2024-06-10" to "10-06-2024" in js
>    // Original date string

const originalDate = "2024-06-10";

// Split the original date string by '-'
const parts = originalDate.split('-');

// Rearrange the parts array to change the order
const rearrangedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

// Output the rearranged date
console.log(rearrangedDate); // Outputs: "10-06-2024"
