import { load } from "cheerio";
import request from "request-promise";

async function getHtml(url) {    
    const html = await request.get(url);
    const $ = load(html);
    return $;   
}

export  {
    getHtml
}