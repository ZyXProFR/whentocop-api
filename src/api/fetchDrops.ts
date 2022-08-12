import https from "https";
import type { Drop } from "../types/Drop.js";

/**
 * Fetch drops for a specific date.
 *
 * @param date Date of the drops.
 * @returns Array of drops.
 */
export default function fetchDrops(date: Date): Promise<Drop[] | undefined> {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        method: "GET",
        port: 443,
        hostname: "back.whentocop.fr",
        path: `/drops?_sort=drop_date:ASC&[drop_date_gte]=${date.toISOString()}&_start=0&_limit=10&_where[archive]=false`,
      };

      const req = https.get(options, res => {
        if (res.statusCode !== 200) reject(new Error(`Error during request: ${res.statusCode}`));
        else {
          let data = "";

          res.on("data", chunk => {
            data += chunk.toString();
          });

          res.on("end", () => {
            let drops: Drop[] = JSON.parse(data);
            drops = drops.filter(drop => new Date(drop.drop_date).getDate() === date.getDate());

            resolve(drops);
          });
        }
      });
      req.on("error", err => reject(err));
      req.end();
    } catch (err) {
      reject(err);
    }
  });
}
