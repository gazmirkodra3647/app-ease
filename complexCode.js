// Filename: complexCode.js

/**
 * This code demonstrates a complex and sophisticated implementation 
 * of a social media application, which includes user registration, 
 * login, posting messages, and finding friends.
 */

// User class to store user details
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.friends = [];
  }

  // Method to create a new post
  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    return post;
  }

  // Method to add a friend
  addFriend(user) {
    this.friends.push(user);
  }
}

// Post class to store post details
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.timestamp = new Date().toLocaleString();
  }
}

// Function to check if a given email is valid
function isValidEmail(email) {
  // Implement complex email validation logic here
  return true;
}

// Main application class
class SocialMediaApp {
  constructor() {
    this.users = [];
    this.currentUser = null;
  }

  // Method to register a new user
  register(username, email, password) {
    if (!isValidEmail(email)) {
      console.log("Invalid email");
      return;
    }

    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      console.log("Email already exists");
      return;
    }

    const user = new User(username, email, password);
    this.users.push(user);
    console.log(`User ${username} registered successfully`);
  }

  // Method to log in a user
  login(email, password) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      this.currentUser = user;
      console.log(`User ${user.username} logged in successfully`);
    } else {
      console.log("Invalid email or password");
    }
  }

  // Method to log out the current user
  logout() {
    if (this.currentUser) {
      console.log(`User ${this.currentUser.username} logged out successfully`);
      this.currentUser = null;
    } else {
      console.log("No user is currently logged in");
    }
  }

  // Method to display posts of the current user and their friends
  displayTimeline() {
    if (this.currentUser) {
      console.log(`Timeline for ${this.currentUser.username}`);
      console.log("==============================");

      for (const post of this.currentUser.posts) {
        console.log(`${post.author.username} - ${post.timestamp}`);
        console.log(post.content);
        console.log("----------------");
      }

      for (const friend of this.currentUser.friends) {
        for (const post of friend.posts) {
          console.log(`${post.author.username} - ${post.timestamp}`);
          console.log(post.content);
          console.log("----------------");
        }
      }
    } else {
      console.log("No user is currently logged in");
    }
  }
}

// Example usage:

const app = new SocialMediaApp();

app.register("JohnDoe", "john@example.com", "password123");
app.register("JaneSmith", "jane@example.com", "qwerty");

app.login("john@example.com", "password123");

const johnsPost = app.currentUser.createPost("Hello world!");
const janesPost = app.currentUser.createPost("Nice weather today!");

app.currentUser.addFriend(app.users[1]);

app.displayTimeline();

app.logout();
