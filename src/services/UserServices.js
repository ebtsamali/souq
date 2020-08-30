
function UserServices() {
   return({
      login: (email, password) => {
         let user = {
            email,
            password
         }
         localStorage.setItem('user', JSON.stringify(user));
      },
      logout: () => {
         localStorage.removeItem('user');
      }
   })
}

export default UserServices();