import { useNavigate, Link } from "react-router-dom";
import styles from "./index.module.scss";

export function SignUp() {
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		navigate("/dashboard");
	};

	return (
		<div className={styles.container}>
			<h1>Sign Up</h1>
			<form onSubmit={(event) => handleSubmit(event)}>
				<input type="text" placeholder="Name" />
				<input type="text" placeholder="Email" />
				<input type="text" placeholder="Password" />
				<button type="submit">Submit</button>
				<Link to="/">Já tem cadastro? Clique aqui</Link>
			</form>
		</div>
	);
}
