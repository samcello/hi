import Router from 'koa-router'
import Tbi from '../controller/tbi'
const router = new Router()

router.get('/api/tbis', Tbi.list)

export default router