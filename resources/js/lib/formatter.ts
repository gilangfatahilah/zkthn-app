import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

export const formatDate = (date: any) => {
  const parsedISO = parseISO(date);
  return format(parsedISO, "dd MMMM yyyy", { locale: id });
};