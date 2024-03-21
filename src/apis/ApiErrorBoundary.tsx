import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { PropsWithChildren } from "react";
import { toast } from "react-toastify";
import RoutePath from "src/routes/routePath";

type ErrorResponseType = {
  statusCode: number;
  error: string;
  message: string;
};

export default function ApiErrorBoundary({ children }: PropsWithChildren) {
  const queryClient = useQueryClient();

  queryClient.getQueryCache().config = {
    onError: (error) => handleError(error as AxiosError),
  };

  queryClient.getMutationCache().config = {
    onError: (error) => handleError(error as AxiosError),
  };

  function handleError(axiosError: AxiosError) {
    const errorResponse = axiosError.response?.data as ErrorResponseType;

    const messages = errorResponse?.message;

    switch (errorResponse?.statusCode) {
      case 401:
      case 403:
        toast.error(messages);
        setTimeout(() => {
          window.location.href = RoutePath.Signout;
        }, 2000);
        break;
      case 404:
        window.location.href = RoutePath.NotFoundError;
        break;
      case 500:
        toast.error(messages);
        window.location.href = RoutePath.ServerError;
        break;
      default:
        if (messages) {
          toast.error(messages);
        } else {
          console.error(errorResponse);
        }
        break;
    }
  }

  return children;
}
