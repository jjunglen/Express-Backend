// Sample users data
let users = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "admin",
        createdAt: new Date("2024-01-10").toISOString(),
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        role: "author",
        createdAt: new Date("2024-01-12").toISOString(),
    },
    {
        id: 3,
        name: "Carol Davis",
        email: "carol@example.com",
        role: "author",
        createdAt: new Date("2024-01-14").toISOString(),
    },
];

const getAllUser = (req, res) => {
    const userNames = users.map((user) => user.name);

    res.json({
        users: userNames,
        count: users.length,
    })
};

const getUsersById = (req, res) => {
    const { id } = req.params;
    const userId = users.find((user) => {
        return user.id === parseInt(id);
    });

    if (!userId) {
        return res.status(400).json({
            error: "400: User not found"
        })
    }

    res.json(userId)
}

const createUser = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(404).json({
            error: "404: Name and email are required"
        })
    }

    const newUser = {
        id: users.length + 1,
        name, 
        email
    };

    users.push(newUser);

    res.status(201).json(newUser)
}

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const index = users.findIndex((user) => {
        return user.id === parseInt(id);
    })

    if (index === -1) {
        return res.status(404).json({
            error: "404: User not found",
        });
    };

    users[index] = {
        ...users[index],
        name: name || users[index].name,
        email: email || users[index].email,
    }

    res.json(users[index]);
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    const index = users.findIndex((user) => {
        return user.id === parseInt(id)
    });

    if (index === -1) {
        return res.status(404).json({
            error: "404: User not found"
        });
    };

    const deletedUser = users.splice(index, 1)[0];
    res.json({
        message: "User deleted",
        user: deletedUser
    });
};

module.exports = {
    getAllUser,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
}
