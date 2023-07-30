import { load } from "cheerio";
import axios from "axios";

async function getHtml(url) {    
    const response = await axios.get(url);
    const html = response.data;
    const $ = load(html);
    return $;   
}

export  {
    getHtml
}