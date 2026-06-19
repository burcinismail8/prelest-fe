export interface IService {
  id: string;
  created_at: string;
  salon_id: string;
  name: string;
  duration_minutes: number;
  price: number | string;
  category: string;
}

export interface IAppointment {
  id: string;
  created_at: string;
  salon_id: string;
  service_id: string;
  customer_name: string;
  customer_phone: string;
  start_time: string;
  end_time: string;
  status: "pending" | "confirmed" | "cancelled";
}

export interface ISalon {
  id: string;
  created_at: string;
  name: string;
  city: string;
  address: string;
  phone: string | null;
  instagram_username: string | null;
  avatar_url: string | null;
  services?: IService[];
  gallery_images?: string[];
}
