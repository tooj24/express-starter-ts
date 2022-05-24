import { BaseHttpController, controller, httpGet } from "inversify-express-utils";


@controller('/')
export class HomeController extends BaseHttpController {
    @httpGet('/')
    index() {
        return this.json({message: 'Home Controller'})
    }
}