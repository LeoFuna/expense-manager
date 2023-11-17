import { useState } from "react";

const useSubmitting = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async (fn: Promise<void>) => {
    setIsSubmitting(true);
    await fn;
    setIsSubmitting(false);
  };
  return { isSubmitting, submit };
}

export {
  useSubmitting
}