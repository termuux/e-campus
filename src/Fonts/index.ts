import { Poppins } from "next/font/google";

export const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
    display: "swap",
    subsets: ["latin"]
})