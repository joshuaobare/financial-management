import { config } from "../config";

// class allows fetching of user details
class UserService {
  constructor() {}

  fetchUser = async (userId: string) => {
    try {
      const request = await fetch(
        config.BASE_URL + `userFetch.php?user_id=${userId}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const response = await request.json();

      if (response.user) {
        return response.user;
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export { UserService };
