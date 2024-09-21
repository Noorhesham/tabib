import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "البريد الالكتروني مطلوب" }).email({ message: "البريد الالكتروني غير صالح" }),
  password: z.string().min(1, { message: "كلمة المرور مطلوبة" }),
});
export const registerPatientSchema = z
  .object({
    firstName: z.string().min(1, "الاسم الأول مطلوب"),
    lastName: z.string().min(1, "اسم العائلة مطلوب"),
    phoneNumber: z.string().min(10, "رقم الهاتف يجب أن يكون 10 أرقام على الأقل"),
    email: z.string().email("البريد الإلكتروني غير صالح"),
    password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
    confirmPassword: z.string().min(6, "تأكيد كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمة المرور وتأكيد كلمة المرور غير متطابقتين",
    path: ["confirmPassword"],
  });
export const registerDoctorSchema = z
  .object({
    firstName: z.string().min(1, "الاسم الأول مطلوب"),
    lastName: z.string().min(1, "اسم العائلة مطلوب"),
    phoneNumber: z.string().min(10, "رقم الهاتف يجب أن يكون 10 أرقام على الأقل"),
    email: z.string().email("البريد الإلكتروني غير صالح"),
    password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
    confirmPassword: z.string().min(6, "تأكيد كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
    bio: z.string().optional(),
    profilePicture: z.any().optional(), // File
    workCertificate: z.any().optional(), // File
    specializationId: z.number().optional(),
    governorateId: z.number().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمة المرور وتأكيد كلمة المرور غير متطابقتين",
    path: ["confirmPassword"],
  });
export const userSchema = z.object({
  firstName: z.string().min(1, "الاسم الأول مطلوب"),
  lastName: z.string().min(1, "اسم العائلة مطلوب"),
  phoneNumber: z.string().min(10, "رقم الهاتف يجب أن يكون 10 أرقام على الأقل"),
  gender: z.string().optional(),
  age: z.number().optional(),
});
