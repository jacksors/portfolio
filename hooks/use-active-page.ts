import { usePathname } from "next/navigation";
import { Page, pages } from "@/lib/pages";

export const useActivePage = () => {
  const pathname = usePathname();
  const activeSection = pathname.split("/").at(1)?.split(".")[0];
  if (!pages.includes(activeSection as never)) return undefined;
  return activeSection as Page;
};
