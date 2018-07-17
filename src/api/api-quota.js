import axios from 'axios';

let apiQuota = axios.create({
    baseURL: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    timeout: 10000,
    headers: {
        'X-Mashape-Key': 'V3CrnZTQbxmshIpB64jT2DExTGQSp1nudQ7jsnVoZJids15unC',
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
    }
})

export default apiQuota;