import { supabase } from "../../lib/supabaseClient";

export const fetchSalonDetails = async (salonId: string) => {
  const { data, error } = await supabase
    .from("salons")
    .select(
      `
      *,
      services (*) 
    `,
    )
    .eq("id", salonId)
    .maybeSingle();

  if (error) {
    console.error("Error fetching salon details:", error.message);
    return null;
  }

  return data;
};
