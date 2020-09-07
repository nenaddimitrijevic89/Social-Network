class User{
    constructor(user){
        this.id=user._id;
        this.avatarUrl=user.avatarUrl;
        this.about=user.about;
        this.firstName=user.firstName;
        this.lastName=user.lastName;
        this.email=user.email;
    }
}

export { User }