import express from 'express';
const router = express.Router();

import { getUserByGuid, getAllUsers, updateUser } from './controller';

/**
 * @method GET
 * @route /user/
 */
router.get('/all', getAllUsers);

/**
 * @method GET
 * @method PATCH
 * @route /user/guid/:guid
 */
router.route('/guid/:guid').get(getUserByGuid).patch(updateUser);

export default router;
