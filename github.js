class Github {
   constructor() {
      this.client_id = '2e5caaa672f0185a6405'; 
      this.client_secret = '7772344412a31e18dbd331e1db484fb7319c4aeb';
   }

   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json(); 

      return {
         profile
      }
   }
}