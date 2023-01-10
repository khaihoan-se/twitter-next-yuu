import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/index";

describe("LoginPage", () => {
   it("renders a heading", () => {
      render(<LoginPage />);

      const heading = screen.getByRole("home", {
         name: "xin choaaf",
      });

      expect(heading).toBeInTheDocument();
   });
});
