import { Request, Response } from 'express';
import { httpStatusCode, errorWrapper, HttpError } from '../../utils';
import { UserService } from './service';
import { User } from './entity';

/**
 * @method GET
 * @route /user/guid/:guid
 */
export const getUserByGuid = errorWrapper(async (req: Request, res: Response) => {
  const { guid } = req.params;

  const userService = UserService();
  const user = await userService.getUserByGuid(guid as string);

  if (!user) throw new HttpError('User not found', httpStatusCode.NOT_FOUND);
  res.status(httpStatusCode.OK).json(user);
});

/**
 * @method GET
 * @route /user/all
 */
export const getAllUsers = errorWrapper(async (req: Request, res: Response) => {
  const userService = UserService();
  const users = await userService.getAllUsers();

  if (users.length === 0) return res.status(httpStatusCode.NO_CONTENT).json(users);

  res.status(httpStatusCode.OK).json(users);
});

/**
 * @method PATCH
 * @route /user/guid/:guid
 */
export const updateUser = errorWrapper(async (req: Request, res: Response) => {
  const { guid } = req.params;
  const userData = req.body;

  const userService = UserService();
  const updatedUser = await userService.updateUser(guid as string, userData as Partial<User>);

  if (!updatedUser) throw new HttpError('Malformed request. Be better', httpStatusCode.BAD_REQUEST);

  res.status(httpStatusCode.OK).json(updatedUser);
});
