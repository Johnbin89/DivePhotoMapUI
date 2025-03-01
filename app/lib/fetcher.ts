import wretch, { Wretch, WretchError } from "wretch";
import { AuthActions } from "@/app/lib/auth";
import { useRouter } from 'next/navigation';

// Extract necessary functions from the AuthActions utility.
const { handleJWTRefresh, storeToken, getToken } = AuthActions();

const api = () => {
  const router = useRouter()
  return (
    wretch("/dj")
      // Initialize authentication with the access token.
      .auth(`Bearer ${getToken("access")}`)
      // Catch 401 errors to refresh the token and retry the request.
      .catcher(401, async (error: WretchError, request: Wretch) => {
        try {
          // Attempt to refresh the JWT token.
          const { access } = (await handleJWTRefresh().json()) as {
            access: string;
          };

          // Store the new access token.
          storeToken(access, "access");

          // Replay the original request with the new access token.
          return request
            .auth(`Bearer ${access}`)
            .fetch()
            .unauthorized(() => {
              router.replace('/')
            })
            .json();
        } catch (err) {
          router.replace('/');
        }
      })
  );
};

export const fetcher = (url: string): Promise<any> => {
  return api().get(url).json();
};
