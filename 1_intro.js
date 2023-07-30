// basic example of web scraping with node.js

import request from "request-promise";
import { load } from "cheerio";
import axios from "axios";


// async function main() {
//     const html = await request.get("https://endernakamoto.github.io/dummy/");
//     const $ = load(html);
//     const text = $("h1").text();
//     console.log(text);
// }

// main();


async function main() {
    const response = await axios.get("https://endernakamoto.github.io/dummy/");
    const html = response.data;
    const $ = load(html);

    const h1_text = $("h1").text();
    console.log(h1_text);


    const h2_text = $("h2").text();
    console.log(h2_text);

    const id_text = $("#worldChange").text();
    console.log(id_text);

    console.log("--------------------");

    $("#worldChange > p").each((index, element) => {
        console.log(`${index} - ${$(element).text()}`);
    });

    console.log("--------------------");

    $(".joke").each((index, element) => {
        console.log(`${index} - ${$(element).text()}`);
    });
}

main();