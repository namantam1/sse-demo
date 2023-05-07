const app = require("express")();

app.get("/", (_, res) => {
    // res.send("Hi! server is up 👋");
    res.sendFile(`${__dirname}/index.html`);
})

app.get("/sse", (_, res) => {
    res.header("Content-type", "text/event-stream");
    let i = 0;
    setInterval(() => {
        res.write(`data: packet-${++i}\n\n`);
    }, 1000);
    res.on("close", () => {
        console.info("sse connection closed!!");
    })
})

const port = 3000;

app.listen(port, () => {
    console.info(`Hi app is listening at http://localhost:${port}`);
})
