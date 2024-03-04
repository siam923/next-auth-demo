"use client";
import { BeatLoader } from "react-spinners";
import { CardWrapper } from "./card-wrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

const NewVerificationForm = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [token]);

  //on development react calls useeffect twice
  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Verifying your email"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        {!success && !error && <BeatLoader color="#2563EB" />}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
