import {permanentRedirect} from "next/navigation";

export const GET = () => {
  return permanentRedirect("/about");
}