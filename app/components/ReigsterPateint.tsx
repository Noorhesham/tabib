import React, { useState, useTransition } from "react";
import Logo from "./Logo";
import Section from "./defaults/Section";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomForm from "./forms/CustomForm";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { registerPatientSchema } from "../schemas";
import { register } from "../actions/action";
import { toast } from "react-toastify";
import Head1 from "./defaults/Head1";

// Arabic form fields for patient registration
const registerPatientArray = [
  { name: "firstName", placeholder: "الاسم الأول", label: "الاسم الأول" },
  { name: "lastName", placeholder: "اسم العائلة", label: "اسم العائلة" },
  { name: "phoneNumber", placeholder: "رقم الهاتف", label: "رقم الهاتف" },
  { name: "email", placeholder: "البريد الإلكتروني", label: "البريد الإلكتروني", type: "email" },
  { name: "password", placeholder: "كلمة المرور", label: "كلمة المرور", type: "password", password: true },
  {
    name: "confirmPassword",
    placeholder: "تأكيد كلمة المرور",
    label: "تأكيد كلمة المرور",
    type: "password",
    password: true,
  },
];

const RegisterPatient = () => {
  const [serverError, setServerError] = useState();
  const form = useForm({
    resolver: zodResolver(registerPatientSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: z.infer<typeof registerPatientSchema>) => {
    startTransition(async () => {
      try {
        const res = await register(data, "patient");
        if (res.success) toast.success("تم تسجيل المريض بنجاح");
        else setServerError(res.message);
      } catch (err: any) {
        setServerError(err.message);
      }
    });
  };

  return (
    <>
      <div className="w-full gap-3 mt-5 px-5 lg:px-14 flex flex-col">
        <CustomForm
          serverError={serverError}
          btnText="تسجيل"
          isPending={isPending}
          form={form}
          inputs={registerPatientArray}
          btnStyles="w-full"
          onSubmit={onSubmit}
        />
      </div>
      <Link
        href="/"
        className=" hover:underline  flex items-center mx-auto  duration-150 my-2 text-main  font-semibold"
      >
        <ArrowRight className=" h-5 w-5 arrow1" /> العودة للموقع
      </Link>
    </>
  );
};

export default RegisterPatient;
