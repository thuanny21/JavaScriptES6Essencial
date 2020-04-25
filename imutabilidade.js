const user = {
    name: 'Thuanny',
    lastName: 'Marcilia'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const getUserWithFullName = getUserWithFullName(user);

console.log(getUserWithFullName);
