const updatedAddress = { ...user.address, postalCode: 75015 };
const updatedUser = { ...user, address: updatedAddress };
setUser(updatedUser);