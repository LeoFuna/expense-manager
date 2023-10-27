export function useCreateAccountNewMonth({ email }: { email?: string | null }) {
  if (!email) {
    return null;
  }
  return async () => {
    const response = await fetch(`/api/accounts/${email}`, {
      method: "POST",
    });

    return response;
  };
}