/* sophisticated-code.js */

// This code is a complex simulation of a social network
// It includes features such as user registration, friend requests, messaging, and profile management

// User class representing a user on the social network
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.friends = [];
    this.pendingRequests = [];
    this.messages = [];
  }
  
  // Method to send a friend request to another user
  sendFriendRequest(user) {
    if (!this.pendingRequests.includes(user)) {
      user.pendingRequests.push(this);
      console.log(`${this.name} sent a friend request to ${user.name}`);
    } else {
      console.log(`${this.name} already sent a friend request to ${user.name}`);
    }
  }
  
  // Method to accept a friend request from another user
  acceptFriendRequest(user) {
    if (this.pendingRequests.includes(user)) {
      this.pendingRequests = this.pendingRequests.filter(u => u !== user);
      this.friends.push(user);
      user.friends.push(this);
      console.log(`${this.name} accepted the friend request from ${user.name}`);
    } else {
      console.log(`${this.name} has no pending friend requests from ${user.name}`);
    }
  }
  
  // Method to send a message to another user
  sendMessage(user, message) {
    if (this.friends.includes(user)) {
      user.messages.push({ sender: this, message });
      console.log(`${this.name} sent a message to ${user.name}: ${message}`);
    } else {
      console.log(`${this.name} can't send a message to ${user.name} as they are not friends`);
    }
  }
  
  // Method to display the user's profile information
  displayProfile() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
    console.log(`Friends: ${this.friends.map(friend => friend.name).join(', ')}`);
    console.log(`Pending Requests: ${this.pendingRequests.map(requester => requester.name).join(', ')}`);
    console.log(`Messages: ${this.messages.length}`);
  }
}

// Creating users
const user1 = new User("John", 25, "john@example.com");
const user2 = new User("Alice", 30, "alice@example.com");
const user3 = new User("Bob", 28, "bob@example.com");

// Sending friend requests
user1.sendFriendRequest(user2);
user2.sendFriendRequest(user1);
user3.sendFriendRequest(user1);
user1.sendFriendRequest(user3);

// Accepting friend requests
user1.acceptFriendRequest(user2);
user2.acceptFriendRequest(user3);
user3.acceptFriendRequest(user1);
user3.acceptFriendRequest(user2);

// Sending messages
user1.sendMessage(user2, "Hey Alice!");
user2.sendMessage(user1, "Hi John, how are you?");
user3.sendMessage(user1, "Hello John!");

// Displaying profiles
user1.displayProfile();
user2.displayProfile();
user3.displayProfile();