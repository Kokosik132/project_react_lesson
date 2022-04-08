const User = ({user, getUsersId, getUser}) => {
    const {id, name, username} = user;


    return (
        <div>
            {id} -- {name} -- {username}
            <button onClick={() => {
                getUsersId(id)
                getUser(user)
            }}>Click</button>
        </div>
    );
};

export {User};