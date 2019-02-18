import * as markdownPDF from "markdown-pdf";
import globby from "globby";

(async function () {
    let res = await globby([
        '**/*.md',
        '!node_modules/**/*'
    ]);
    console.log(res);
})();
