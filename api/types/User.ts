/**
 * @summary Type declaration for User
 * @author Dallascrichmond
 */
type User = {
    guid: string;
    username: string;
    email: string;
    user_first_name: string;
    user_last_name: string;
    roles: string[];
    created_at: Date;
}

export default User;
