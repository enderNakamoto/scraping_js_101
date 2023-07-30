/*
[{
    "name": "Iron Man", 
    "stength": "8",
    "orgin": "Earth", 
    "sex": 
},{
    "name": "Thor", 
    "stength": "10",
    "orgin": "Asgard", 
    "sex": 
}]
*/

async function scrapeTableData($,table){
    const data = [];

    const hasTBody = table.find("tbody").length > 0;
    const selector = hasTBody ? 'tbody tr' : 'tr';

    table.find(selector).each((index, element) => {
        const tds = $(element).find('td');
        if (tds.length === 0) return;
        const name = $(tds[0]).text().trim();
        const strength = $(tds[1]).text().trim();
        const origin = $(tds[2]).text().trim();
        const sex = $(tds[3]).text().trim();
    
        data.push({
          name: name,
          strength: strength,
          origin: origin,
          sex: sex
        });
      });
    
      return data;
}

export {
    scrapeTableData
}