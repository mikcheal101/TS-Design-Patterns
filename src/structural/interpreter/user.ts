class User {
    private _username: string;
    private _permissions: Array<string>;

    constructor(username: string, permissions: string[]) {
        this._username = username;
        this._permissions = permissions.map((permission: string) => permission.toLowerCase().trim());
    }

    public getPermissions(): Array<string> {
        return this._permissions;
    }

    public getUsername(): string {
        return this._username;
    }
};

export default User;