import { OidcUserStatus, useOidc, useOidcUser } from '@axa-fr/react-oidc';

export default function HomePage(): JSX.Element {
	const { login, isAuthenticated } = useOidc();
	const { oidcUser, oidcUserLoadingState } = useOidcUser();

	if (!isAuthenticated) {
		login();
	}
	return <>
		<h1>Home Page</h1>
		<h3>User</h3>
		{oidcUserLoadingState === OidcUserStatus.Loading && <>Loading...</>}
		{oidcUserLoadingState === OidcUserStatus.Loaded && (<>
			<p>{JSON.stringify(oidcUser)}</p>
		</>)}
	</>;
}
