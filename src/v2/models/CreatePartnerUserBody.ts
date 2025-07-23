import { userType } from './Const';

export type CreatePartnerUserBody = {
  /**
   * The type of user.
   */
  type: userType;
  /**
   * The email of the user.
   */
  email: string;
  /**
   * The external user id of the user.
   */
  externalUserId: string;
  /**
   * An optional alias or display name for the user.
   */
  alias?: string;
};
