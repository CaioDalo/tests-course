import { MemoryRouter } from "react-router-dom";
import { MainRoutes } from "../routes";
import { render, screen } from "@testing-library/react";

describe("MainRoutes component tests", () => {
	it("Should render login page", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<MainRoutes />
			</MemoryRouter>
		);

		const title = screen.getByText("Sign In");

		expect(title).toBeInTheDocument();
	});

	it("Should render sign up page", async () => {
		render(
			<MemoryRouter initialEntries={["/sign-up"]}>
				<MainRoutes />
			</MemoryRouter>
		);

		const title = screen.getByText("Sign Up");

		expect(title).toBeInTheDocument();
	});

	it("Should render dashboard page", async () => {
		render(
			<MemoryRouter initialEntries={["/dashboard"]}>
				<MainRoutes />
			</MemoryRouter>
		);

		const title = screen.getByText("Dashboard");

		expect(title).toBeInTheDocument();
	});

	it("Should render 404 page", async () => {
		render(
			<MemoryRouter initialEntries={["/nao-existe"]}>
				<MainRoutes />
			</MemoryRouter>
		);

		const title = screen.getByText("404 page not found");

		expect(title).toBeInTheDocument();
	});
});
