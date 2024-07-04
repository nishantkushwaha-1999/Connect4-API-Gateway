const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;
const viewsFile = 'views.json';

app.use(cors());

app.get('/views', (req, res) => {
    fs.readFile(viewsFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }

        const views = JSON.parse(data);
        views.count += 1;

        fs.writeFile(viewsFile, JSON.stringify(views), (err) => {
            if (err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.json({ count: views.count });
        });
    });
});

app.listen(PORT, () => {
    if (!fs.existsSync(viewsFile)) {
        fs.writeFileSync(viewsFile, JSON.stringify({ count: 0 }));
    }
    console.log(`Server running on port ${PORT}`);
});