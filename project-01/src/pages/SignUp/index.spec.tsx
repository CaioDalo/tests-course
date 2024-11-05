import { fireEvent, render, screen } from "@testing-library/react";
import { SignUp } from ".";

const navigateMock = vi.fn();

describe("Tests for SignUp component", () => {
	vi.mock("react-router-dom", () => ({
		useNavigate() {
			return navigateMock;
		},
		Link: vi.fn().mockImplementation(({ children }) => children),
	}));

	beforeEach(() => {
		render(<SignUp />);
	});

	it("Should have 3 inputs in the screen", async () => {
		const inputs = await screen.findAllByRole("textbox");

		expect(inputs).toHaveLength(3);
	});

	it("Should have inputs for name, email, and password", async () => {
		const nameInput = await screen.findByPlaceholderText("Name");
		const emailInput = await screen.findByPlaceholderText("Email");
		const passwordInput = await screen.findByPlaceholderText("Password");

		expect(nameInput).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
	});

	it("Should sign up button in the screen", async () => {
		const signUpButton = await screen.findByRole("button");

		expect(signUpButton).toHaveTextContent("Submit");
	});

	it("Should have a title in the screen", async () => {
		const title = await screen.findByRole("heading");

		expect(title).toHaveTextContent("Sign Up");
	});

	it("Should navigate to dashboard after sign up", async () => {
		const signUpButton = await screen.findByRole("button");

		fireEvent.click(signUpButton);

		expect(navigateMock).toBeCalledTimes(1);
	});

	it("Should have a link to login page", () => {
		const link = screen.getByText("Já tem cadastro? Clique aqui");

		expect(link).toBeInTheDocument();
	});
});
