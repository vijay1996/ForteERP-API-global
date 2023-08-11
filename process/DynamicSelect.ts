
import { DYNAMIC_SELECT } from "../database/processOperation.js";
import { removeDuplicatesDocuments } from "../util/commonLogic.js";

export default function ProcessOperation (req:any, res:any) {
    const application = req.params.application
    const screen = req.params.screen;
    DYNAMIC_SELECT(`${application.toLowerCase()}_${screen.toLowerCase()}`, req.body)
      .then(data => res.json(removeDuplicatesDocuments(data, Object.keys(req.body)[0])))
      .catch(error => res.json(error));
}