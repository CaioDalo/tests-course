import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from ".";

const navigateMock = vi.fn();

describe("Login component tests", () => {
	vi.mock("react-router-dom", () => ({
		useNavigate() {
			return navigateMock;
		},
		Link: vi.fn().mockImplementation(({ children }) => children),
	}));

	beforeEach(() => {
		render(<Login />);
	});

	it("should have a title 'sign in'", async () => {
		const title = await screen.findByRole("heading", {
			name: "Sign In",
		});

		expect(title).toBeInTheDocument();
	});

	it("should have a form with two inputs", async () => {
		const inputs = await screen.findAllByRole("textbox");

		expect(inputs).toHaveLength(2);
	});

	it("Should have an input for e-mail", async () => {
		const emailInput = await screen.findByPlaceholderText("Insira seu e-mail");

		expect(emailInput).toBeInTheDocument();
	});

	it("Should have an input for password", async () => {
		const passwordInput = await screen.findByPlaceholderText(
			"Insira sua senha"
		);

		expect(passwordInput).toBeInTheDocument();
	});

	it("should have a form with a button", async () => {
		const button = await screen.findByRole("button");

		expect(button.textContent).toBe("Login");
	});

	it("should have a form with a button", async () => {
		const button = await screen.findByRole("button");
		fireEvent.click(button);

		expect(navigateMock).toBeCalledTimes(1);
	});

	it("Should have a link to login page", () => {
		const link = screen.getByText("Não tem cadastro? Clique aqui");

		expect(link).toBeInTheDocument();
	});
});
