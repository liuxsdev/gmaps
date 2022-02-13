import axios from 'axios';

function random(minNum, maxNum) {
    let by_min = Math.random() * minNum + 1;
    if (maxNum) {
        let by_min_and_max = Math.random() * (maxNum - minNum + 1) + minNum;
        return parseInt(by_min_and_max.toString(), 10);
    }
    else {
        return parseInt(by_min.toString(), 10);
    }
}
function random_pick_from_array(arr) {
    let len = arr.length;
    let random_number = random(0, len - 1);
    return arr[random_number];
}

function selectSubdomain(urlwithsubdomains, subdomains) {
    let subdomain = random_pick_from_array(subdomains);
    urlwithsubdomains = urlwithsubdomains.replace("{s}", subdomain);
    return urlwithsubdomains;
}

async function getGoogleMapTileImage(x, y, z) {
    let url = "http://{s}.google.com/vt/lyrs=s&x=" + x + "&y=" + y + "&z=" + z;
    let surl = selectSubdomain(url, ["mt0", "mt1", "mt2", "mt3"]);

    let data = await axios({
        method: "get",
        url: surl,
        responseType: "arraybuffer",
    });
    return data.data;
}

async function handler(request, response) {
    const { x, y, z } = request.query;
    try {
        let imagedata = await getGoogleMapTileImage(x, y, z);
        response.setHeader("Content-Type", "image/jpeg");
        response.status(200).send(imagedata);
    } catch (e) {
        response.status(500);
        response.send(e.message);
    }
}

export default handler;
