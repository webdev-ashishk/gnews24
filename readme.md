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
> 2. 
