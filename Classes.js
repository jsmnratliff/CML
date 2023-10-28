class User {
    constructor(email, username, password) {
      this.email = email;
      this.username = username;
      this.password = password;
    }
  }
  
  const user1 = new User('MarioPlumber@example.com', 'itsaMario', 'PeachesPeachesPeaches');
  const user2 = new User('PeachPrincess@example.com', 'PrincessP', 'forthesakeofMushrooms');
  const user3 = new User('LuigiPlumber@example.com', 'WAHLuigi', 'DearestDaisy');
  
  console.log(user1);
  console.log(user2);
  console.log(user3);