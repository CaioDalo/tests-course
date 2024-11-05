import { FormEvent } from "react";
import styles from "./index.module.scss";
import { useNavigate, Link } from "react-router-dom";

export function Login() {
	const navigate = useNavigate();

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		navigate("/dashboard");
	};

	return (
		<div className={styles.container}>
			<h1>Sign In</h1>

			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Insira seu e-mail" />
				<input type="text" placeholder="Insira sua senha" />
				<button type="submit">Login</button>
				<Link to="/sign-up">Não tem cadastro? Clique aqui</Link>
			</form>
		</div>
	);
}
