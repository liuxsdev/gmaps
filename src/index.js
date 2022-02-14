import { random_pick_from_array } from "@liuxsdev/utils";
import axios from "axios";

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

export default async function handler(request, response) {
    const { x, y, z } = request.query;
    try {
        let imagedata = await getGoogleMapTileImage(x, y, z);
        response.setHeader("Content-Type", "image/jpeg");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.status(200).send(imagedata);
    } catch (e) {
        response.status(500);
        response.send(e.message);
    }
}
