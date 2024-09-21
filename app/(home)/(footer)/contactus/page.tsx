"use client";
import GridContainer from "@/app/components/defaults/GridContainer";
import Head1 from "@/app/components/defaults/Head1";
import MaxWidthWrapper from "@/app/components/defaults/MaxWidthWrapper";
import Paragraph from "@/app/components/defaults/Paragraph";
import CustomForm from "@/app/components/forms/CustomForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formArray = [
  { name: "name", label: "الاسم", type: "text" },
  { name: "email", label: "البريد الالكتروني", type: "email" },
  { name: "message", label: "الرسالة", area: true },
  { name: "phone", label: "رقم الهاتف", phone: true },
];
const schema = z.object({
  name: z.string().min(1, "الاسم مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  message: z.string().min(1, "الرسالة مطلوبة"),
  phone: z.string().min(1, "رقم الهاتف مطلوب"),
});
const page = () => {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };
  return (
    <div className=" pt-32">
      {" "}
      <MaxWidthWrapper>
        <GridContainer className=" place-items-start" cols={2}>
          <div>
            <Head1 size=" text-base md:text-lg" color=" text-main" title=" دائما هنا لمساعدتك" />
            <Paragraph description="سوف نقوم بالرد عليك في اقرب وقت ممكن" />
            <div className=" flex items-center gap-3">
              <div className=" p-2 bg-blue-300 rounded-full">
                <PhoneIcon className=" w-6 h-6  text-main" />
              </div>
              <div className=" flex flex-col gap-2">
                <h3>ارقام التواصل</h3>
                <p className=" text-main">5838187+20114</p>
                <p className=" text-main">5838187+20114</p>
              </div>
            </div>
          </div>
          <div className=" bg-white w-full border border-input shadow-sm px-4 py-2">
            {" "}
            <CustomForm btnStyles=" w-full" btnText="ارسال" form={form} onSubmit={onSubmit} inputs={formArray} />
          </div>
        </GridContainer>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
