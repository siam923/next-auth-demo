"use server";

import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10); //10 is salt rounds

  // check if email is not taken
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already taken" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Send verification token mail
  const verificationToken = await generateVerificationToken(email);

  // Send email
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Verification link sent to email" };
};
