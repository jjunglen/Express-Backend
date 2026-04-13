// Sample blog posts data
let posts = [
  {
    id: 1,
    title: "Getting Started with Express.js",
    content:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    author: "Alice Johnson",
    createdAt: new Date("2024-01-15").toISOString(),
    published: true,
  },
  {
    id: 2,
    title: "Understanding RESTful APIs",
    content:
      "REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations.",
    author: "Bob Smith",
    createdAt: new Date("2024-01-20").toISOString(),
    published: true,
  },
  {
    id: 3,
    title: "JavaScript Best Practices",
    content:
      "Writing clean, maintainable JavaScript code is essential for building robust applications. Here are some best practices to follow.",
    author: "Carol Davis",
    createdAt: new Date("2024-01-25").toISOString(),
    published: false,
  },
];

const getAllPosts = (req, res) => {
    // get all user posts and count
    res.json({
        posts: posts,
        count: posts.length,
    });
};

const getPostsById = (req, res) => {
    const { id } = req.params;
    const getPost = posts.find((post) => {
        return post.id === parseInt(id);
    }) 

    // make sure its a valid post
    if (!getPost) {
        res.status(404).json({
        error: "Post not found"
        })
    }

    res.json(getPost);
}

const createPost = (req, res) => {

    const { title, content, author, published } = req.params

    // Generate new post
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        author,
        published: published || false,
        createAt: new Date().toISOString
    }

    // add post to the posts array
    posts.push(newPost);
    // get a status
    res.status(201).json(newPost);

}

module.exports = {
    getAllPosts,
    getPostsById,
    createPost,
}