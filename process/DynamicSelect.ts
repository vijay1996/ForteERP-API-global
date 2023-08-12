
import { DYNAMIC_SELECT } from "../database/processOperation.js";
import { removeDuplicatesDocuments } from "../util/commonLogic.js";

export default function ProcessOperation (req:any, res:any) {
    const screen = req.params.screen.toLowerCase();
    console.log(screen);
    DYNAMIC_SELECT(`${screen}`, req.body)
      .then(data => res.json(removeDuplicatesDocuments(data, Object.keys(req.body)[0])))
      .catch(error => res.json(error));
}