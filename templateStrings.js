function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}
function html(template, ...args) {
    let result = template[0];
    for (let i = 0; i < args.length; ++i) {
        result += escape(args[i]) + template[i + 1];
    }

    return result;
}
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);