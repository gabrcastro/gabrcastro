import { FooterComponent } from "./footer.component";
import { Social } from "./social.component";

export function FooterSocial() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Social />
      <FooterComponent />
    </div>
  );
}
