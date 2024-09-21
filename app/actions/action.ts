import { z } from "zod";
import { loginSchema, registerPatientSchema, registerDoctorSchema, userSchema } from "../schemas";
import { BASE_URL } from "../constants";
import { catchError } from "@/lib/utils";

export const login = async (data: z.infer<typeof loginSchema>) => {
  console.log(data);
  const safeData = loginSchema.parse(data);

  return catchError(async () => {
    const res = await fetch(`${BASE_URL}Authentication/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(safeData),
    });

    if (!res.ok) {
      throw new Error("Login failed");
    }

    const result = await res.json();
    console.log(result);
    return result;
  });
};
export const register = async (
  data: z.infer<typeof registerPatientSchema | typeof registerDoctorSchema>,
  role: "patient" | "doctor"
) => {
  console.log(data);
  const safeData = loginSchema.parse(data);

  return catchError(async () => {
    const res = await fetch(`${BASE_URL}Authentication/${role === "patient" ? "RegisterPatient" : "RegisterDoctor"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(safeData),
    });
    if (!res.ok) {
      throw new Error("Register failed");
    }
    const result = await res.json();
    console.log(result);
    return result;
  });
};
export const updateUser = async (data: z.infer<typeof userSchema>) => {
  return catchError(async () => {
    const res = await fetch(`${BASE_URL}Authentication/UpdateUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Update failed");
    }
    const result = await res.json();
    console.log(result);
    return result;
  });
};

export const getEntities = async (entityName: "Specialization" | "Patient" | "Doctor", id?: string) => {
  return catchError(async () => {
    const res = id ? await fetch(`${BASE_URL}/${entityName}/${id}`) : await fetch(`${BASE_URL}/${entityName}`);
    if (!res.ok) {
      throw new Error("Get Entities failed");
    }
    const result = await res.json();
    console.log(result);
    return result;
  });
};
export const search = async (
  name: string,
  filters: { SpecializationId?: string; GovernorateId?: string; Gender?: string }
) => {
  return catchError(async () => {
    const res = await fetch(
      `${BASE_URL}/Doctor/search?Name=${name}&SpecializationId=${filters.SpecializationId}&GovernorateId=${filters.GovernorateId}
      &Gender=${filters.Gender}`
    );
    if (!res.ok) {
      throw new Error("Search failed");
    }
    const result = await res.json();
    console.log(result);
    return result;
  });
};
export const adminData = async (data: "dashboard" | "doctors" | "doctor") => {
  return catchError(async () => {
    const res = await fetch(`${BASE_URL}Admin`);
    if (!res.ok) {
      throw new Error("Get Entities failed");
    }
    const result = await res.json();
    console.log(result);
    return result;
  });
};
