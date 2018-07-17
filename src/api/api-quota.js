import axios from 'axios';

let apiQuota = axios.create({
    baseURL: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&", //'https://andruxnet-random-famous-quotes.p.mashape.com/',
    timeout: 10000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
    }
})

export default apiQuota;