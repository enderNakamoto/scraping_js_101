import  {getHtml} from "./helpers/get_html_axios.js";
// import { getHtml } from "./helpers/get_html_request.js";
import { scrapeTableData } from "./helpers/scrape_table.js";

async function main() {
    //const url = "https://endernakamoto.github.io/dummy/table.html";
    const url = "https://endernakamoto.github.io/dummy/table_with_head.html";
    const $ = await getHtml(url);
    const table = $("table");
    const result = scrapeTableData($, table);
    console.log(result);
}

main();