import FormLogin from "../components/Form/FormLogin";
import AuthLayouts from "../layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts header="Login" desc="Enter Your information">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
